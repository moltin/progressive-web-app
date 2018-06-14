webpackJsonp([8],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailModule = (function () {
    function ProductDetailModule() {
    }
    ProductDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]
            ]
        })
    ], ProductDetailModule);
    return ProductDetailModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailPage = (function () {
    function ProductDetailPage(navController, modalController, navParams, moltin, toastController) {
        this.navController = navController;
        this.modalController = modalController;
        this.navParams = navParams;
        this.moltin = moltin;
        this.toastController = toastController;
        this.product = this.navParams.get('product');
    }
    ProductDetailPage.prototype.addToCart = function () {
        var _this = this;
        this.moltin.addToCart(this.product).subscribe(function (data) { return _this.goToSuccess(); }, function (error) { return _this.displayError(); });
    };
    ProductDetailPage.prototype.goToSuccess = function () {
        var _this = this;
        var controller = this.modalController.create('add-cart-success');
        controller.onDidDismiss(function (data) {
            if (data) {
                var pop = data["pop"];
                if (pop === true) {
                    _this.navController.pop();
                }
            }
        });
        controller.present();
    };
    ProductDetailPage.prototype.goToBag = function () {
        this.navController.push('cart');
    };
    ProductDetailPage.prototype.displayError = function () {
        var toast = this.toastController.create({
            message: "Could not add to bag",
            duration: 3
        });
        toast.present();
    };
    ProductDetailPage.prototype.closeModal = function () {
        var productCatalogPage = this.modalController.create('productCatalog');
        productCatalogPage.present();
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-detail/product-detail.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-title>\n            <img src="/assets/imgs/title-logo.png" />\n        </ion-title>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n                </svg>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goToBag();">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n                </svg>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <ion-grid class="product">\n            <ion-row class="gallery">\n              <ion-slides pager="true">\n                <img src="{{ product.image }}" />\n              </ion-slides>\n\n            <ion-row class="info">\n                <ion-col>\n                    <h2>{{ product.name }}</h2>\n                    <p>{{ product.description }}</p>\n                </ion-col>\n            </ion-row>\n          </ion-row>\n\n        </ion-grid>\n        <ion-toolbar>\n            <ion-grid>\n                <ion-row class="actions">\n                    <ion-col>\n                        <h4>{{ product.meta.display_price.with_tax.formatted }}</h4>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button block round icon-start (click)="addToCart();">\n                            <svg class="feather">\n                                <use xlink:href="assets/icon/feather-sprite.svg#shopping-bag" />\n                            </svg>\n                            Add to Bag\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-toolbar>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/product-detail/product-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map