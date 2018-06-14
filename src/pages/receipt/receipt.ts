import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NavController, IonicPage, Select, LoadingController, NavParams} from 'ionic-angular';
import { MoltinCart, MoltinCartItem } from '../../providers/moltin/models/cart';
import { Moltin } from '../../providers/moltin/moltin';
import { MoltinProduct } from '../../providers/moltin/models/product';
import { MoltinOrder } from '../../providers/moltin/models/order';

@IonicPage({
    name: 'receipt',
    segment: 'receipt'
})
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html'
})
export class ReceiptPage {

    private cartData: MoltinCartItem[] = [];
    private cart: MoltinCart = { data: [], meta: null};
    private products: {[key: string]: MoltinProduct} = {};
    private order: MoltinOrder = this.navParams.get('order');


    private selectedSegment: string = "receipt";
    private promoCode: string;

    private subtotal: string;

    constructor(
        private navController: NavController,
        private navParams: NavParams,
        private moltin: Moltin,
        private changeDetector: ChangeDetectorRef,
        private loadingController: LoadingController
    ) {
        this.moltin.getCart().subscribe(
            data => {
                this.cart = data;
                this.cartData = this.cart.data.filter(x => x["type"] == "cart_item");
                let promoCodes = this.cart.data.filter(x => x["type"] == "promotion_item")
                if (promoCodes.length > 0) { this.promoCode = promoCodes[0].sku; }
                this.getSubtotal();
                this.getProducts();
                this.moltin.deleteCart().subscribe(
                    data => console.log(data),
                    error => console.error(error)
                )
            },
            error => console.error(error)
        )
    }

    getSubtotal() {
        let numberFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        let total = this.cartData.reduce((accumulator, current) => {
            return accumulator + (current.value.amount / 100)  * current.quantity;
        }, 0);

        this.subtotal = numberFormatter.format(total);
    }

    getProducts() {
        this.cartData.forEach(item => {
            this.getProductById(item.product_id);
        });
    }

    getProductById(productId) {
        this.moltin.getProductById(productId).subscribe(
            data => {
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

    goToHome() {
        this.navController.popToRoot();
    }
}
