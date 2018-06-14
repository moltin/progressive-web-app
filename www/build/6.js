webpackJsonp([6],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(862);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductListModule = (function () {
    function ProductListModule() {
    }
    ProductListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductList */]
            ]
        })
    ], ProductListModule);
    return ProductListModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductList = (function () {
    function ProductList(modalController, navController, navParams, toastController, moltin) {
        this.modalController = modalController;
        this.navController = navController;
        this.navParams = navParams;
        this.toastController = toastController;
        this.moltin = moltin;
        //class variable
        this.product = [];
        this.categoryProductsList = [];
        this.categoryName = this.navParams.get('categoryName');
        this.categoryProducts = this.navParams.get('products');
        console.log("anything", this.categoryName);
        console.log("little mote", this.categoryProducts);
        for (var i = 0; i < this.categoryProducts.length; i++) {
            this.categoryProductsList.push(this.categoryProducts[i]["products"]);
        }
        console.log("there we go mote", this.categoryProductsList);
    }
    // //Actions
    ProductList.prototype.closeModal = function () {
        var productCatalogPage = this.modalController.create('productCatalog');
        productCatalogPage.present();
    };
    ProductList.prototype.goToProduct = function (product) {
        console.log("product to pass", product);
        this.navController.push('product', { 'product': product });
    };
    ProductList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-list/product-list.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n      <ion-title>\n        {{ categoryName }}\n      </ion-title>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n                </svg>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goToBag();">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n                </svg>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n      <ion-grid>\n          <ion-row>\n             <ion-col col-33 *ngFor="let product of categoryProductsList">\n                 <div class="card card-1" (click)="goToProduct(product);">\n                   <img src="{{product.image}}">\n                 </div>\n                   <h4>{{ product.name }}</h4>\n                   <p>{{ product.meta.display_price.with_tax.formatted }}</p>\n             </ion-col>\n           </ion-row>\n     </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-list/product-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_moltin_moltin__["a" /* Moltin */]])
    ], ProductList);
    return ProductList;
}());

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map