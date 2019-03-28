import {
    Component, ChangeDetectorRef
} from "@angular/core";
import {
    IonicPage,
    ModalController,
    NavController,
    NavParams,
    LoadingController
} from "ionic-angular";
import {
    MoltinCart, MoltinCartItem
} from "../../providers/moltin/models/cart";
import { MoltinProduct } from "../../providers/moltin/models/product";
import { Moltin } from "../../providers/moltin/moltin";

declare var Stripe: any;

@IonicPage({
    name: "checkout-confirmation",
    segment: "checkout-confirmation"
})
@Component({
    selector: "page-checkout-confirmation",
    templateUrl: "checkout-confirmation.html"
})
export class CheckoutConfirmationPage {

    private cartData: MoltinCartItem[] = [];
    private cart: MoltinCart = { data: [], meta: null};
    private products: {[key: string]: MoltinProduct} = {};
    private token: any = this.navParams.get('token');
    private customer: {} = this.navParams.get('customer');

    private promoCode: string;

    constructor(
        private navController: NavController,
        private moltin: Moltin,
        private changeDetector: ChangeDetectorRef,
        private loadingController: LoadingController,
        private navParams: NavParams
    ) {
        this.moltin.getCart().subscribe(
            data => {
                this.cart = data;
                this.cartData = this.cart.data.filter(x => x["type"] == "cart_item");
                let promoCodes = this.cart.data.filter(x => x["type"] == "promotion_item")
                if (promoCodes.length > 0) { this.promoCode = promoCodes[0].sku; }
                this.getProducts();
            },
            error => console.error(error)
        )
    }

    getProducts() {
        this.cartData.forEach(item => {
            this.getProductById(item.product_id);
        });
    }

    getProductById(productId) {
        this.moltin.getProductById(productId).subscribe(
            data => {
                console.log(data);
                this.products[productId] = data;
                this.changeDetector.detectChanges();
            }
        )
    }

    getProductImage(productId) {
        let product = this.products[productId];
        if (!product) { return ""; }

        return product.main_image.link.href;
    }

    getProductCategory(productId) {
        let product = this.products[productId];
        if (!product) { return ""; }

        return product.categories[0].name;
    }

    pay() {
        let billingAddress = {
            "first_name": "",
            "last_name": "",
            "line_1": "",
            "postcode": "",
            "county": "",
            "country": ""
        };
        let shippingAddress = Object.assign(billingAddress);
        this.moltin.checkoutCart(
            this.customer,
            billingAddress,
            shippingAddress
        ).subscribe(data => this.payForOrder(data));
    }

    payForOrder(order) {
        this.moltin.payForOrder(order, this.token["id"]).subscribe(
            data => this.showReceipt(order),
            error => console.error(error)
        )
    }

    showReceipt(order) {
        this.navController.push('receipt', { order });
    }

    editCart() {
        this.navController.popTo(this.navController.getByIndex(this.navController.length()-4));
    }
}