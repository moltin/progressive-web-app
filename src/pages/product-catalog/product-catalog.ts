import { Component } from '@angular/core';
import { Moltin } from '../../providers/moltin/moltin';
import { MoltinProducts, MoltinProduct } from '../../providers/moltin/models/product';
import {
  IonicPage,
    NavController,
    ModalController,
    ToastController
} from 'ionic-angular';

@IonicPage({
    name: 'productCatalog',
    segment: 'productCatalog'
})
@Component({
  selector: 'page-catalog',
  templateUrl: 'product-catalog.html'
})

export class ProductCatalog {
    //class variable
    private products: MoltinProducts = { data: [], meta: null};
    private productData = [];
    private productIncluded = [];
    private product = [];
    private productList = [];
    private categoryList = [];
    private filteredCatFusionAthletic = [];
    private filteredCatMakeup = [];
    private filteredCatSkin = [];
    private filteredHair = [];
    private filteredBodyCare = [];
    
    constructor(
        //protocols
        private modalController: ModalController,
        private navController: NavController,
        private toastController: ToastController,
        private moltin: Moltin,
    )
    {
      //Instantiatation
        this.moltin.getProducts().then(data => {
        //data returned
        this.products = data;
        //product data
        this.productData = this.products.data
        this.productIncluded = data['included']
        //pull category out of the included
        this.categoryList = this.productIncluded['categories']
        //loop through the products (map) and match them to a category and add the category to the products
        this.productList = this.products.data.map(product => {
        //get the image id out of the product object
          const imageId = product['relationships'].main_image
            ? product['relationships'].main_image.data.id
            : false
            //get the cat id out of the product object
            const catId = product['relationships'].categories
              ? product['relationships'].categories.data[0]["id"]
              : false
              //now loop through and match them to the included data (categoery object in this case)
           return {
            ...product,
            //id from product id to the the id of the included then add to product
            image: imageId
              ? this.productIncluded['main_images'].find(img => img.id === imageId).link.href
              : '/static/moltin-light-hex.svg',

              categoriesName: catId
              ? this.productIncluded['categories'].find(cat => cat.id === catId).name
              : 'Category Name'
            }
          })

          console.log("lists",this.productList);
          for (var i=0; i<this.productList.length; i++) {
            if (this.productList[i]["categoriesName"]=="Facial Skincare") {
              this.filteredCatSkin.push({
                products: this.productList[i],
                catName: this.productList[i]["categoriesName"],
                image:  this.productList[i]["image"],
                productName:  this.productList[i]["name"],
                productFormattedPrice:  this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
              })
            }
            else if (this.productList[i]["categoriesName"]=="Haircare") {
              this.filteredHair.push({
                products: this.productList[i],
                catName: this.productList[i]["categoriesName"],
                image:  this.productList[i]["image"],
                productName:  this.productList[i]["name"],
                productFormattedPrice:  this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                })
            }
            else if (this.productList[i]["categoriesName"]=="Body Skincare") {
              this.filteredBodyCare.push({
                products: this.productList[i],
                catName: this.productList[i]["categoriesName"],
                image:  this.productList[i]["image"],
                productName:  this.productList[i]["name"],
                productFormattedPrice:  this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                })
            }
            else {
            console.log("no cat for product")
            }
          }
        })
    }

    //Actions
    closeModal() {
      let HomePage = this.modalController.create('home')
      HomePage.present();
    }

    //view all
    getProductList(categorySelected) {
      console.log("categorySelected", categorySelected)
      if(categorySelected == 'Haircare')
      {
          let productListPage = this.modalController.create('productList', {
          'categoryName': "Haircare",
          'products' : this.filteredHair
        })
        productListPage.present();
      }
      if(categorySelected == 'Facial Skincare')
      {
          let productListPage = this.modalController.create('productList', {
          'categoryName': "Facial Skincare",
          'products' : this.filteredCatSkin
        })
        productListPage.present();
      }
      if(categorySelected == 'Body Skincare')
      {
          let productListPage = this.modalController.create('productList', {
          'categoryName': "Facial Skincare",
          'products' : this.filteredCatSkin
        })
        productListPage.present();
      }
    }

    //go to product details
    goToProduct(product) {
        console.log("product to pass", product);
        this.navController.push('product', {'product': product})
    }

    goToBag() {
        this.navController.push('cart');
    }

  }
