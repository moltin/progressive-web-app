webpackJsonp([3],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPageModule", function() { return ReceiptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_verification__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReceiptPageModule = (function () {
    function ReceiptPageModule() {
    }
    ReceiptPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__receipt__["a" /* ReceiptPage */],
                __WEBPACK_IMPORTED_MODULE_3__verification_verification__["a" /* VerificationDisplay */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receipt__["a" /* ReceiptPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__receipt__["a" /* ReceiptPage */]
            ]
        })
    ], ReceiptPageModule);
    return ReceiptPageModule;
}());

//# sourceMappingURL=receipt.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPage; });
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



var ReceiptPage = (function () {
    function ReceiptPage(navController, navParams, moltin, changeDetector, loadingController) {
        var _this = this;
        this.navController = navController;
        this.navParams = navParams;
        this.moltin = moltin;
        this.changeDetector = changeDetector;
        this.loadingController = loadingController;
        this.cartData = [];
        this.cart = { data: [], meta: null };
        this.products = {};
        this.order = this.navParams.get('order');
        this.selectedSegment = "receipt";
        this.moltin.getCart().subscribe(function (data) {
            _this.cart = data;
            _this.cartData = _this.cart.data.filter(function (x) { return x["type"] == "cart_item"; });
            var promoCodes = _this.cart.data.filter(function (x) { return x["type"] == "promotion_item"; });
            if (promoCodes.length > 0) {
                _this.promoCode = promoCodes[0].sku;
            }
            _this.getSubtotal();
            _this.getProducts();
            _this.moltin.deleteCart().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    ReceiptPage.prototype.getSubtotal = function () {
        var numberFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        var total = this.cartData.reduce(function (accumulator, current) {
            return accumulator + (current.value.amount / 100) * current.quantity;
        }, 0);
        this.subtotal = numberFormatter.format(total);
    };
    ReceiptPage.prototype.getProducts = function () {
        var _this = this;
        this.cartData.forEach(function (item) {
            _this.getProductById(item.product_id);
        });
    };
    ReceiptPage.prototype.getProductById = function (productId) {
        var _this = this;
        this.moltin.getProductById(productId).subscribe(function (data) {
            _this.products[productId] = data;
            _this.changeDetector.detectChanges();
        });
    };
    ReceiptPage.prototype.getProductImage = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.main_image.link.href;
    };
    ReceiptPage.prototype.getProductCategory = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.categories[0].name;
    };
    ReceiptPage.prototype.goToHome = function () {
        this.navController.popToRoot();
    };
    ReceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipt',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/receipt/receipt.html"*/'<ion-header>\n    <ion-navbar class="light" hideBackButton>\n            <ion-buttons start>\n                    <button ion-button icon-only (click)="goToHome();">\n                        <svg class="feather">\n                            <use xlink:href="assets/icon/feather-sprite.svg#home" />\n                        </svg>\n                    </button>\n                </ion-buttons>\n        <ion-title>\n            Your Receipt\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid padding>\n        <ion-row text-center>\n            <svg class="feather">\n                <use xlink:href="assets/icon/feather-sprite.svg#check-circle" />\n            </svg>\n        </ion-row>\n        <ion-row text-center>\n            <ion-col>\n                <h2>Thank you!</h2>\n                <p>Your purchases have been processed.</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row no-padding>\n            <ion-segment [(ngModel)]="selectedSegment">\n                <ion-segment-button value="receipt">\n                    Your Receipt\n                </ion-segment-button>\n                <ion-segment-button value="order">\n                    Order Overview\n                </ion-segment-button>\n            </ion-segment>\n        </ion-row>\n\n        <div *ngIf="selectedSegment == \'receipt\'">\n            <ion-row text-center class="order-details">\n                <ion-col>\n                    <h3>Time:</h3>\n                    <span>{{ order.meta.timestamps.created_at | date:\'shortTime\' }}</span>\n                </ion-col>\n                <ion-col>\n                    <h3>Date:</h3>\n                    <span>{{ order.meta.timestamps.created_at | date:\'shortDate\' }}</span>\n                </ion-col>\n                <ion-col>\n                    <h3>Total Items:</h3>\n                    <span>{{ cartData.length }}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="receipt-verification">\n                <verification-display time="{{ order.meta.timestamps.created_at | date:\'shortTime\' }}"></verification-display>\n            </ion-row>\n\n            <ion-row text-center class="info">\n                <ion-col>\n                    <p>Please be prepared to show the above code to the attendant on leaving the store if requested.</p>\n                </ion-col>\n            </ion-row>\n\n        </div>\n\n        <div *ngIf="selectedSegment == \'order\'">\n            <ion-item *ngFor="let item of cartData" class="product">\n                <ion-thumbnail item-start>\n                    <img src="{{ getProductImage(item.product_id) }}">\n                </ion-thumbnail>\n                <h2>{{ item.name }}</h2>\n                <ion-note item-end>\n                    <h4>{{ item.meta.display_price.with_tax.value.formatted }}</h4>\n                    <span>x{{ item.quantity }}</span>\n                </ion-note>\n            </ion-item>\n\n            <ion-item class="subtotal">\n                <div>\n                    <h4>Subtotal:</h4>\n                    <span>{{ subtotal }}</span>\n                </div>\n                <div *ngIf="promoCode != null" class="promo-code">\n                    <h4>Promo Code:</h4>\n                    <span>{{ promoCode }}</span>\n                </div>\n            </ion-item>\n            <ion-item class="total" no-lines>\n                <div>\n                    <h4>Total:</h4>\n                    <span>{{ cart.meta.display_price.with_tax.formatted }}</span>\n                </div>\n            </ion-item>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/receipt/receipt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ReceiptPage);
    return ReceiptPage;
}());

//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationDisplay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerificationDisplay = (function () {
    function VerificationDisplay() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('time'),
        __metadata("design:type", String)
    ], VerificationDisplay.prototype, "time", void 0);
    VerificationDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'verification-display',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/receipt/verification/verification.html"*/'<h3>{{ time }}</h3>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/receipt/verification/verification.html"*/
        })
    ], VerificationDisplay);
    return VerificationDisplay;
}());

//# sourceMappingURL=verification.js.map

/***/ })

});
//# sourceMappingURL=3.js.map