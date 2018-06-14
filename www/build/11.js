webpackJsonp([11],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeInputModule", function() { return BarcodeInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode_input__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BarcodeInputModule = (function () {
    function BarcodeInputModule() {
    }
    BarcodeInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_input__["a" /* BarcodeInputPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barcode_input__["a" /* BarcodeInputPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_input__["a" /* BarcodeInputPage */]
            ]
        })
    ], BarcodeInputModule);
    return BarcodeInputModule;
}());

//# sourceMappingURL=barcode-input.module.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeInputPage; });
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



var BarcodeInputPage = (function () {
    function BarcodeInputPage(navController, viewController, moltin) {
        this.navController = navController;
        this.viewController = viewController;
        this.moltin = moltin;
        this.code = "";
    }
    BarcodeInputPage.prototype.getProduct = function () {
        var _this = this;
        this.moltin.getProduct(this.code).subscribe(function (product) { return _this.goToProduct(product); }, function (err) { return console.log(err); });
    };
    BarcodeInputPage.prototype.goToProduct = function (product) {
        this.navController.push('product', { 'product': product });
    };
    BarcodeInputPage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    BarcodeInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-barcode',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/barcode-input/barcode-input.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-title>\n            <img src="/assets/imgs/title-logo.png" />\n        </ion-title>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal();">\n                <svg class="feather">\n                    <use xlink:href="assets/icon/feather-sprite.svg#arrow-left"/>\n                </svg>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid padding>\n        <ion-row>\n            <ion-col>\n                <h2>Manual Barcode Entry</h2>\n                <p>If you\'re having trouble scanning an item you can manually enter it\'s barcode below.</p>\n                <ion-input [(ngModel)]="code" placeholder="Barcode"></ion-input>\n                <button ion-button block round icon-end (click)="getProduct();">\n                    View Item\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#arrow-right"/>\n                    </svg>\n                </button>\n\n                <span class="info">If you continue to have trouble please ask a member of staff for assistance.</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/barcode-input/barcode-input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */]])
    ], BarcodeInputPage);
    return BarcodeInputPage;
}());

//# sourceMappingURL=barcode-input.js.map

/***/ })

});
//# sourceMappingURL=11.js.map