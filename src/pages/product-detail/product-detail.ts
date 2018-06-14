import {
    Component
} from '@angular/core';
import {
    NavController,
    IonicPage,
    NavParams,
    ModalController,
    ToastController
} from 'ionic-angular';
import {
    Moltin
} from '../../providers/moltin/moltin';
import {
    MoltinProduct
} from '../../providers/moltin/models/product';

@IonicPage({
    name: 'product'
})
@Component({
    selector: 'page-product',
    templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

    private product: MoltinProduct = this.navParams.get('product');


    constructor(
        private navController: NavController,
        private modalController: ModalController,
        private navParams: NavParams,
        private moltin: Moltin,
        private toastController: ToastController
    ) {

    }

    addToCart() {
        this.moltin.addToCart(this.product).subscribe(
            data => this.goToSuccess(),
            error => this.displayError()
        )
    }

    goToSuccess() {
        let controller = this.modalController.create('add-cart-success');
        controller.onDidDismiss((data) => {
            if (data) {
                let pop = data["pop"];
                if (pop === true) {
                    this.navController.pop();
                }
            }
        });
        controller.present();
    }

    goToBag() {
        this.navController.push('cart');
    }

    displayError() {
        let toast = this.toastController.create({
            message: "Could not add to bag",
            duration: 3
        });

        toast.present();
    }

    closeModal() {
      let productCatalogPage = this.modalController.create('productCatalog');
      productCatalogPage.present();
    }
}
