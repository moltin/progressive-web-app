webpackJsonp([8],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatalogModule", function() { return ProductCatalogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_catalog__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductCatalogModule = (function () {
    function ProductCatalogModule() {
    }
    ProductCatalogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_catalog__["a" /* ProductCatalog */]
            ]
        })
    ], ProductCatalogModule);
    return ProductCatalogModule;
}());

//# sourceMappingURL=product-catalog.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatalog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(186);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCatalog = (function () {
    function ProductCatalog(
        //protocols
        modalController, navController, toastController, moltin) {
        var _this = this;
        this.modalController = modalController;
        this.navController = navController;
        this.toastController = toastController;
        this.moltin = moltin;
        //class variable
        this.products = { data: [], meta: null };
        this.productData = [];
        this.productIncluded = [];
        this.product = [];
        this.productList = [];
        this.categoryList = [];
        this.filteredCatFusionAthletic = [];
        this.filteredCatMakeup = [];
        this.filteredCatSkin = [];
        this.filteredHair = [];
        this.filteredBodyCare = [];
        //Instantiatation
        this.moltin.getProducts().then(function (data) {
            //data returned
            _this.products = data;
            //product data
            _this.productData = _this.products.data;
            //data from the include (in the api request add in the included for category could be anything)
            _this.productIncluded = data['included'];
            //pull category out of the included
            _this.categoryList = _this.productIncluded['categories'];
            //loop through the products (map) and match them to a category and add the category to the products
            _this.productList = _this.products.data.map(function (product) {
                //get the image id out of the product object
                var imageId = product['relationships'].main_image
                    ? product['relationships'].main_image.data.id
                    : false;
                //get the cat id out of the product object
                var catId = product['relationships'].categories
                    ? product['relationships'].categories.data[0]["id"]
                    : false;
                //no loop through and match them to the included data (categoery object in this case)
                return __assign({}, product, { 
                    //id from product id to the the id of the included then add to product
                    image: imageId
                        ? _this.productIncluded['main_images'].find(function (img) { return img.id === imageId; }).link.href
                        : '/static/moltin-light-hex.svg', categoriesName: catId
                        ? _this.productIncluded['categories'].find(function (cat) { return cat.id === catId; }).name
                        : 'Party supplies' });
            });
            console.log("listsss", _this.productList);
            //This is not good.  I know there are 4 cats, so just splitting them up and putting them in there own array to display.
            for (var i = 0; i < _this.productList.length; i++) {
                if (_this.productList[i]["categoriesName"] == "Facial Skincare") {
                    _this.filteredCatSkin.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else if (_this.productList[i]["categoriesName"] == "Haircare") {
                    _this.filteredHair.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else if (_this.productList[i]["categoriesName"] == "Body Skincare") {
                    _this.filteredBodyCare.push({
                        products: _this.productList[i],
                        catName: _this.productList[i]["categoriesName"],
                        image: _this.productList[i]["image"],
                        productName: _this.productList[i]["name"],
                        productFormattedPrice: _this.productList[i]["meta"]["display_price"]["with_tax"]["formatted"]
                    });
                }
                else {
                    console.log("no cat for product");
                }
            }
        });
    }
    //Actions
    ProductCatalog.prototype.closeModal = function () {
        var HomePage = this.modalController.create('home');
        HomePage.present();
    };
    //view all
    ProductCatalog.prototype.getProductList = function (categorySelected) {
        console.log("categorySelected", categorySelected);
        if (categorySelected == 'Haircare') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Haircare",
                'products': this.filteredHair
            });
            productListPage.present();
        }
        if (categorySelected == 'Facial Skincare') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Facial Skincare",
                'products': this.filteredCatSkin
            });
            productListPage.present();
        }
        if (categorySelected == 'Body Skincare') {
            var productListPage = this.modalController.create('productList', {
                'categoryName': "Facial Skincare",
                'products': this.filteredCatSkin
            });
            productListPage.present();
        }
    };
    //go to product details
    ProductCatalog.prototype.goToProduct = function (product) {
        console.log("product to pass", product);
        this.navController.push('product', { 'product': product });
    };
    ProductCatalog.prototype.goToBag = function () {
        this.navController.push('cart');
    };
    ProductCatalog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalog',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-catalog/product-catalog.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-title>\n            Catalogue\n        </ion-title>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n                </svg>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goToBag();">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n                </svg>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n <div class="container">\n     <ion-col class="header" (click)="getProductList(\'Haircare\')">\n         <h1>Haircare</h1>\n          <h3>View all</h3>\n      </ion-col>\n          <ion-slides pager="true">\n              <ion-item>\n              <ion-row>\n                <ion-slides>\n                  <ion-col col-33 *ngFor="let product of filteredHair">\n                    <div class="card card-1" (click)="goToProduct(product.products);">\n                        <img src="{{product.image}}">\n                      </div>\n                        <h4>{{ product.productName }}</h4>\n                        <p>{{ product.productFormattedPrice }}</p>\n                  </ion-col>\n                </ion-slides>\n                </ion-row>\n            </ion-item>\n          </ion-slides>\n\n      <ion-col class="header" (click)="getProductList(\'Facial Skincare\')">\n          <h1>Facial Skincare</h1>\n           <h3>View all</h3>\n       </ion-col>\n <ion-slides pager="true">\n     <ion-item>\n     <ion-row>\n       <ion-item no-lines text-wrap>\n       <ion-slides>\n         <ion-col col-33 *ngFor="let product of filteredCatSkin">\n           <div class="card card-1" (click)="goToProduct(product.products);">\n               <img src="{{product.image}}">\n             </div>\n               <h4>{{ product.productName }}</h4>\n               <p>{{ product.productFormattedPrice }}</p>\n         </ion-col>\n       </ion-slides>\n     </ion-item>\n       </ion-row>\n   </ion-item>\n </ion-slides>\n\n <ion-col class="header" (click)="getProductList(\'Body Skincare\')">\n     <h1>Body Skincare</h1>\n      <h3>View all</h3>\n  </ion-col>\n<ion-slides pager="true">\n<ion-item>\n<ion-row>\n  <ion-item no-lines text-wrap>\n  <ion-slides>\n    <ion-col col-33 *ngFor="let product of filteredCatSkin">\n      <div class="card card-1" (click)="goToProduct(product.products);">\n          <img src="{{product.image}}">\n        </div>\n          <h4>{{ product.productName }}</h4>\n          <p>{{ product.productFormattedPrice }}</p>\n    </ion-col>\n  </ion-slides>\n</ion-item>\n  </ion-row>\n</ion-item>\n</ion-slides>\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-catalog/product-catalog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__["a" /* Moltin */]])
    ], ProductCatalog);
    return ProductCatalog;
}());

//# sourceMappingURL=product-catalog.js.map

/***/ })

});
//# sourceMappingURL=8.js.map