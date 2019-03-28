import {
    Component
} from '@angular/core';
import {
    NavController,
    IonicPage,
    NavParams,
    ViewController
} from 'ionic-angular';
import { MoltinProduct } from '../../../providers/moltin/models/product';

@IonicPage({
    name: 'add-cart-success'
})
@Component({
    selector: 'page-add-cart-success',
    templateUrl: 'success.html'
})
export class AddToCartSuccessPage {

    private product: MoltinProduct = this.navParams.get('product');

    constructor(
        private navController: NavController,
        private viewController: ViewController,
        private navParams: NavParams
    ) {

    }

    keepShopping() {
        this.viewController.dismiss({'pop': true});
    }

    goToBag() {
        this.navController.push('cart');
    }
}
