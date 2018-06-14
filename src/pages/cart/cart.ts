import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NavController, IonicPage, Select, LoadingController} from 'ionic-angular';
import { MoltinCart, MoltinCartItem } from '../../providers/moltin/models/cart';
import { Moltin } from '../../providers/moltin/moltin';
import { MoltinProduct } from '../../providers/moltin/models/product';
import { ButtonSelect } from './components/button-select';

@IonicPage({
    name: 'cart',
    segment: 'cart'
})
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

    private cartData: MoltinCartItem[] = [];
    private cart: MoltinCart = { data: [], meta: null};
    private products: {[key: string]: MoltinProduct} = {};

    constructor(
        private navController: NavController,
        private moltin: Moltin,
        private changeDetector: ChangeDetectorRef,
        private loadingController: LoadingController
    ) {
        this.moltin.getCart().subscribe(
            data => {
                this.cart = data;
                this.cartData = this.cart.data.filter(x => x["type"] == "cart_item");
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

    onChangeQuantity(element: ButtonSelect) {
        let loadingIndicator = this.loadingController.create({
            content: "Updating..."
        });
        loadingIndicator.present();
        this.moltin.updateCartItem(element.item.id, element.getValue()).subscribe(
            data => {
                this.cart = data;
                this.changeDetector.detectChanges();
                loadingIndicator.dismiss();
            },
            error => {
                loadingIndicator.dismiss();
            }
        )
    }

    onDeleteItem(item) {
        let loadingIndicator = this.loadingController.create({
            content: "Deleting..."
        });
        loadingIndicator.present();
        this.moltin.deleteCartItem(item.id).subscribe(
            data => {
                this.cart = data;
                this.changeDetector.detectChanges();
                loadingIndicator.dismiss();
            },
            error => {
                loadingIndicator.dismiss();
            }
        );
    }

    scanAnotherItem() {
        this.navController.push('scan');
    }

    checkout() {
        this.navController.push('checkout-detail', {'cart': this.cart});
    }
}
