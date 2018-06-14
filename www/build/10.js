webpackJsonp([10],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(modalController) {
        this.modalController = modalController;
        this.buttonColor = '#FFFFFF'; //Default Color
    }
    HomePage.prototype.getProductCatalog = function () {
        var productCatalogPage = this.modalController.create('productCatalog');
        productCatalogPage.present();
    };
    HomePage.prototype.scanProduct = function () {
        var scanModal = this.modalController.create('scan');
        scanModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/home/home.html"*/'<ion-content>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col>\n                <img src="assets/imgs/full-logo.png" />\n            </ion-col>\n        </ion-row>\n        <ion-row class="info">\n            <ion-col>\n                <h2>Welcome to Bright Cosmetics Mobile Checkout</h2>\n                <p>Use your smartphones camera to scan and purchase items directly on your device.</p>\n\n                <button ion-button block round icon-end (click)="scanProduct();">\n                    Start by scanning your first item\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#arrow-right"/>\n                    </svg>\n                </button>\n\n                <button ion-button block round icon-end (click)="getProductCatalog();" [ngStyle]="{\'background-color\': buttonColor}">\n                    Browse Catalog\n                    <svg class="feather">\n                        <use xlink:href="assets/imgs/catalogbook.svg"/>\n                    </svg>\n                </button>\n\n                <button ion-button icon-start clear class="text-only">\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#help-circle"/>\n                    </svg>\n                    More Information\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row class="fill"></ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map