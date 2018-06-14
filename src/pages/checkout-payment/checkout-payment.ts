import {
    Component
} from "@angular/core";
import {
    IonicPage,
    ModalController,
    NavController,
    NavParams
} from "ionic-angular";
import {
    MoltinCart
} from "../../providers/moltin/models/cart";
import { Moltin } from "../../providers/moltin/moltin";

declare var Stripe: any;

@IonicPage({
    name: "checkout-payment",
    segment: "checkout-payment"
})
@Component({
    selector: "page-checkout-payment",
    templateUrl: "checkout-payment.html"
})
export class CheckoutPaymentPage {

    private stripe = Stripe('pk_test_jpI6XzhcNeNPSGxicVyDJd2w');
    private paymentRequest: any;
    private card: any;
    private canMakePayment: boolean = true;
    private moltinCart: MoltinCart = this.navParams.get('cart');
    private customer: {} = this.navParams.get('customer');

    private selectedPaymentMethod: string = "apple-pay";
    private formIsValid: boolean = false;

    private promoCode: string;

    constructor(
        private navController: NavController,
        private navParams: NavParams,
        private moltin: Moltin
    ) {
        this.constructPaymentRequest();
    }

    ionViewDidLoad() {
        this.mountPaymentButton();
        this.constructPaymentForm();
    }

    constructPaymentRequest() {
        let items = this.moltinCart.data.map(item => {
            return {
                "amount": item.meta.display_price.with_tax.value.amount,
                "label": item.name
            }
        })
        this.paymentRequest = this.stripe.paymentRequest({
            country: 'US',
            currency: this.moltinCart.meta.display_price.with_tax.currency.toLowerCase(),
            total: {
                label: 'Total Payment',
                amount: this.moltinCart.meta.display_price.with_tax.amount,
            },
            requestPayerName: true,
            requestPayerEmail: true,
            displayItems: items
        });

        this.paymentRequest.on('token', (ev) => {
            ev.complete('success');
            this.moveToConfirmationPage(ev.token);
        });

        this.paymentRequest.on('error', (ev) => {
            console.log(ev);
        });

        this.paymentRequest.on('cancel', (ev) => {
            console.log(ev);
        })
    }

    mountPaymentButton() {
        const elements = this.stripe.elements();
        const prButton = elements.create('paymentRequestButton', {
            "paymentRequest": this.paymentRequest,
            style: {
                paymentRequestButton: {
                    theme: 'light-outline',
                    height: '44px',
                },
            },
        });

        (async () => {
            // Check the availability of the Payment Request API first.
            const result = await this.paymentRequest.canMakePayment();
            if (result) {
                prButton.mount('#payment-request-button');
            } else {
                this.canMakePayment = false;
                this.selectedPaymentMethod = "card";
            }
        })();
    }

    constructPaymentForm() {
        this.card = this.stripe.elements().create('card', {
            hidePostalCode: true
        });
        this.card.mount("#card-element");

        this.card.on('change', (ev) => {
            this.formIsValid = ev.complete;
        });
    }

    applyPromoCode() {
        this.moltin.applyPromoCode(this.promoCode).subscribe(
            data => console.log(data),
            error => console.error(error)
        )
    }

    confirmOrder() {
        if (this.selectedPaymentMethod == "card") {
            this.stripe.createToken(this.card).then((result) => {
                if (result.error) {
                    console.error(result.error);
                } else {
                    this.moveToConfirmationPage(result.token);
                }
            });
        }
    }

    moveToConfirmationPage(token) {
        this.navController.push('checkout-confirmation', {
            'customer': this.customer,
            'token': token
        });
    }
}