import {
    Component
} from '@angular/core';
import {
    NavController,
    IonicPage,
    ViewController
} from 'ionic-angular';
import { Moltin } from '../../providers/moltin/moltin';

@IonicPage({
    name: 'barcode-input',
    segment: 'barcode-input'
})
@Component({
    selector: 'page-barcode',
    templateUrl: 'barcode-input.html'
})
export class BarcodeInputPage {

    private code: string = "";

    constructor(
        private navController: NavController,
        private viewController: ViewController,
        private moltin: Moltin
    ) {
    }

    getProduct() {
        this.moltin.getProduct(this.code).subscribe(
            product => this.goToProduct(product),
            err => console.log(err)
        )
    }

    goToProduct(product) {
        this.navController.push('product', {'product': product})
    }

    closeModal() {
        this.viewController.dismiss();
    }
}