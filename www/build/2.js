webpackJsonp([2],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutConfirmationModule", function() { return CheckoutConfirmationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_confirmation__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutConfirmationModule = (function () {
    function CheckoutConfirmationModule() {
    }
    CheckoutConfirmationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_confirmation__["a" /* CheckoutConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__["a" /* CartProgressModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_confirmation__["a" /* CheckoutConfirmationPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_confirmation__["a" /* CheckoutConfirmationPage */]
            ]
        })
    ], CheckoutConfirmationModule);
    return CheckoutConfirmationModule;
}());

//# sourceMappingURL=checkout-confirmation.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_progress__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartProgressModule = (function () {
    function CartProgressModule() {
    }
    CartProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__cart_progress__["a" /* CartProgress */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__cart_progress__["a" /* CartProgress */]
            ]
        })
    ], CartProgressModule);
    return CartProgressModule;
}());

//# sourceMappingURL=cart-progress.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProgress; });
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

var CartProgress = (function () {
    function CartProgress() {
        this.elements = [
            "Details",
            "Payment",
            "Confirm"
        ];
    }
    CartProgress.prototype.getElements = function () {
        return Array.from({ length: this.amount }, function (x, i) { return i + 1; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('amount'),
        __metadata("design:type", Number)
    ], CartProgress.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('current'),
        __metadata("design:type", Number)
    ], CartProgress.prototype, "current", void 0);
    CartProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cart-progress',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/components/cart-progress/cart-progress.html"*/'<ul>\n    <li *ngFor="let number of getElements();" [ngClass]="{ \'active\': number < current }">\n        <span></span>\n        <p>{{ elements[number - 1]}}</p>\n    </li>\n</ul>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/components/cart-progress/cart-progress.html"*/
        })
    ], CartProgress);
    return CartProgress;
}());

//# sourceMappingURL=cart-progress.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutConfirmationPage; });
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



var CheckoutConfirmationPage = (function () {
    function CheckoutConfirmationPage(navController, moltin, changeDetector, loadingController, navParams) {
        var _this = this;
        this.navController = navController;
        this.moltin = moltin;
        this.changeDetector = changeDetector;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.cartData = [];
        this.cart = { data: [], meta: null };
        this.products = {};
        this.token = this.navParams.get('token');
        this.customer = this.navParams.get('customer');
        this.moltin.getCart().subscribe(function (data) {
            _this.cart = data;
            _this.cartData = _this.cart.data.filter(function (x) { return x["type"] == "cart_item"; });
            var promoCodes = _this.cart.data.filter(function (x) { return x["type"] == "promotion_item"; });
            if (promoCodes.length > 0) {
                _this.promoCode = promoCodes[0].sku;
            }
            _this.getProducts();
        }, function (error) { return console.error(error); });
    }
    CheckoutConfirmationPage.prototype.getProducts = function () {
        var _this = this;
        this.cartData.forEach(function (item) {
            _this.getProductById(item.product_id);
        });
    };
    CheckoutConfirmationPage.prototype.getProductById = function (productId) {
        var _this = this;
        this.moltin.getProductById(productId).subscribe(function (data) {
            console.log(data);
            _this.products[productId] = data;
            _this.changeDetector.detectChanges();
        });
    };
    CheckoutConfirmationPage.prototype.getProductImage = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.main_image.link.href;
    };
    CheckoutConfirmationPage.prototype.getProductCategory = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.categories[0].name;
    };
    CheckoutConfirmationPage.prototype.pay = function () {
        var _this = this;
        var billingAddress = {
            "first_name": "",
            "last_name": "",
            "line_1": "",
            "postcode": "",
            "county": "",
            "country": ""
        };
        var shippingAddress = Object.assign(billingAddress);
        this.moltin.checkoutCart(this.customer, billingAddress, shippingAddress).subscribe(function (data) { return _this.payForOrder(data); });
    };
    CheckoutConfirmationPage.prototype.payForOrder = function (order) {
        var _this = this;
        this.moltin.payForOrder(order, this.token["id"]).subscribe(function (data) { return _this.showReceipt(order); }, function (error) { return console.error(error); });
    };
    CheckoutConfirmationPage.prototype.showReceipt = function (order) {
        this.navController.push('receipt', { order: order });
    };
    CheckoutConfirmationPage.prototype.editCart = function () {
        this.navController.popTo(this.navController.getByIndex(this.navController.length() - 4));
    };
    CheckoutConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-checkout-confirmation",template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/checkout-confirmation/checkout-confirmation.html"*/'<ion-header>\n    <ion-navbar class="grey">\n        <ion-title>\n            Checkout\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row>\n            <cart-progress amount=3 current=3></cart-progress>\n        </ion-row>\n    </ion-grid>\n    <ion-grid padding>\n        <ion-row class="headings" *ngIf="promoCode != null">\n            <h4>Voucher Code</h4>\n            <span>{{ promoCode }}</span>\n        </ion-row>\n        <ion-row class="headings">\n            <h4>Payment Method</h4>\n            <span>{{ token.card.brand }} {{ token.card.last4 }}</span>\n        </ion-row>\n        <ion-row class="headings">\n            <h4>Your Items</h4>\n            <span>\n                <a (click)="editCart();">Edit</a>\n            </span>\n        </ion-row>\n\n        <ion-item *ngFor="let item of cartData">\n            <ion-thumbnail item-start>\n                <img src="{{ getProductImage(item.product_id) }}">\n            </ion-thumbnail>\n            <h2>{{ item.name }}</h2>\n            <ion-note item-end>\n                <h4>{{ item.meta.display_price.with_tax.value.formatted }}</h4>\n                <span>x{{ item.quantity }}</span>\n            </ion-note>\n        </ion-item>\n    </ion-grid>\n</ion-content>\n\n<ion-footer *ngIf="cart.meta != null && cart.data.length > 0">\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row>\n                <ion-col class="total">\n                    <h4>Total</h4>\n                    <span>{{ cart.meta.display_price.with_tax.formatted }}</span>\n                </ion-col>\n                <ion-col>\n                    <button ion-button block round icon-end (click)="pay();">\n                        Pay Now\n                        <svg class="feather">\n                            <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n                        </svg>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/checkout-confirmation/checkout-confirmation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CheckoutConfirmationPage);
    return CheckoutConfirmationPage;
}());

//# sourceMappingURL=checkout-confirmation.js.map

/***/ })

});
//# sourceMappingURL=2.js.map