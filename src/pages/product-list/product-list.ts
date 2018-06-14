import { Component } from '@angular/core';import { Moltin } from '../../providers/moltin/moltin';
import { MoltinProduct, MoltinProducts } from '../../providers/moltin/models/product';

import {
    NavController,
    ModalController,
    NavParams,
    ToastController
} from 'ionic-angular';
@IonicPage({
    name: 'productList',
    segment: 'productList'
})
@Component({
  selector: 'page-list',
  templateUrl: 'product-list.html'
})

export class ProductList {
    //class variable
    private product = [];
    private categoryProductsList = [];

    private categoryName = this.navParams.get('categoryName')
    private categoryProducts = this.navParams.get('products');

    constructor(
        private modalController: ModalController,
        private navController: NavController,
        private navParams: NavParams,
        private toastController: ToastController,
        private moltin: Moltin
    )
    {
      console.log("anything", this.categoryName)
      console.log("little mote", this.categoryProducts)
      for (var i=0; i<this.categoryProducts.length; i++) {
          this.categoryProductsList.push(this.categoryProducts[i]["products"])
        }
        console.log("there we go mote", this.categoryProductsList)
    }

    // //Actions
    closeModal() {
      let productCatalogPage = this.modalController.create('productCatalog');
      productCatalogPage.present();
    }
    goToProduct(product) {
        console.log("product to pass", product);
        this.navController.push('product', {'product': product})
    }
}
