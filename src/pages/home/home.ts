import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';

@IonicPage({
    name: 'home',
    segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    buttonColor: string = '#FFFFFF'; //Default Color

    constructor(
        private modalController: ModalController
    ) {

    }
    getProductCatalog() {
      let productCatalogPage = this.modalController.create('productCatalog');
      productCatalogPage.present();
    }
    
}
