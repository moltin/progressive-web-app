webpackJsonp([0],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentModule", function() { return CheckoutPaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_payment__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPaymentModule = (function () {
    function CheckoutPaymentModule() {
    }
    CheckoutPaymentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_cart_progress_cart_progress_module__["a" /* CartProgressModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__checkout_payment__["a" /* CheckoutPaymentPage */]
            ]
        })
    ], CheckoutPaymentModule);
    return CheckoutPaymentModule;
}());

//# sourceMappingURL=checkout-payment.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_progress__ = __webpack_require__(851);
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

/***/ 851:
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

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPaymentPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CheckoutPaymentPage = (function () {
    function CheckoutPaymentPage(navController, navParams, moltin) {
        this.navController = navController;
        this.navParams = navParams;
        this.moltin = moltin;
        this.stripe = Stripe('pk_test_jpI6XzhcNeNPSGxicVyDJd2w');
        this.canMakePayment = true;
        this.moltinCart = this.navParams.get('cart');
        this.customer = this.navParams.get('customer');
        this.selectedPaymentMethod = "apple-pay";
        this.formIsValid = false;
        this.constructPaymentRequest();
    }
    CheckoutPaymentPage.prototype.ionViewDidLoad = function () {
        this.mountPaymentButton();
        this.constructPaymentForm();
    };
    CheckoutPaymentPage.prototype.constructPaymentRequest = function () {
        var _this = this;
        var items = this.moltinCart.data.map(function (item) {
            return {
                "amount": item.meta.display_price.with_tax.value.amount,
                "label": item.name
            };
        });
        this.paymentRequest = this.stripe.paymentRequest({
            country: 'US',
            currency: this.moltinCart.meta.display_price.with_tax.currency.toLowerCase(),
            total: {
                label: 'Total Payment',
                amount: this.moltinCart.meta.display_price.with_tax.amount,
            },
            requestPayerName: true,
            requestPayerEmail: true,
            displayItems: items
        });
        this.paymentRequest.on('token', function (ev) {
            ev.complete('success');
            _this.moveToConfirmationPage(ev.token);
        });
        this.paymentRequest.on('error', function (ev) {
            console.log(ev);
        });
        this.paymentRequest.on('cancel', function (ev) {
            console.log(ev);
        });
    };
    CheckoutPaymentPage.prototype.mountPaymentButton = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var prButton = elements.create('paymentRequestButton', {
            "paymentRequest": this.paymentRequest,
            style: {
                paymentRequestButton: {
                    theme: 'light-outline',
                    height: '44px',
                },
            },
        });
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRequest.canMakePayment()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            prButton.mount('#payment-request-button');
                        }
                        else {
                            this.canMakePayment = false;
                            this.selectedPaymentMethod = "card";
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    CheckoutPaymentPage.prototype.constructPaymentForm = function () {
        var _this = this;
        this.card = this.stripe.elements().create('card', {
            hidePostalCode: true
        });
        this.card.mount("#card-element");
        this.card.on('change', function (ev) {
            _this.formIsValid = ev.complete;
        });
    };
    CheckoutPaymentPage.prototype.applyPromoCode = function () {
        this.moltin.applyPromoCode(this.promoCode).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    CheckoutPaymentPage.prototype.confirmOrder = function () {
        var _this = this;
        if (this.selectedPaymentMethod == "card") {
            this.stripe.createToken(this.card).then(function (result) {
                if (result.error) {
                    console.error(result.error);
                }
                else {
                    _this.moveToConfirmationPage(result.token);
                }
            });
        }
    };
    CheckoutPaymentPage.prototype.moveToConfirmationPage = function (token) {
        this.navController.push('checkout-confirmation', {
            'customer': this.customer,
            'token': token
        });
    };
    CheckoutPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-checkout-payment",template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/checkout-payment/checkout-payment.html"*/'<ion-header>\n    <ion-navbar class="grey">\n        <ion-title>\n            Payment Method\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row>\n            <cart-progress amount=3 current=2></cart-progress>\n        </ion-row>\n    </ion-grid>\n    <ion-grid padding>\n        <ion-row>\n            <h4>Apply a Promo Code</h4>\n        </ion-row>\n        <ion-row>\n            <ion-col class="promo">\n                <ion-input placeholder="Promo Code" class="rounded" [(ngModel)]="promoCode"></ion-input>\n            </ion-col>\n            <ion-col col-3>\n                <button ion-button block round icon-end (click)="applyPromoCode();">\n                    Apply\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n                    </svg>\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row  *ngIf="canMakePayment">\n            <h4>Choose a Payment Method</h4>\n        </ion-row>\n        <ion-row class="payment-methods" *ngIf="canMakePayment">\n            <ion-col *ngIf="canMakePayment" text-center [ngClass]="{ \'selected\': selectedPaymentMethod == \'apple-pay\' }">\n                <div id="payment-request-button">\n                    <!-- A Stripe Element will be inserted here. -->\n                </div>\n                Apple Pay\n            </ion-col>\n            <ion-col text-center [ngClass]="{ \'selected\': selectedPaymentMethod == \'card\' }">\n                <button ion-button full outline round (click)="pay();">\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#credit-card" />\n                    </svg>\n                </button>\n                Credit Card\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <h4>Card Details</h4>\n        </ion-row>\n        <ion-row class="card-details" [ngClass]="{ \'hidden\': selectedPaymentMethod != \'card\' }">\n            <div id="card-element" class="rounded">\n                <!-- A Stripe Element will be inserted here. -->\n            </div>\n        </ion-row>\n        <ion-row *ngIf="selectedPaymentMethod == \'card\'">\n            <ion-col>\n                <button ion-button block round icon-end (click)="confirmOrder();" [disabled]="!formIsValid">\n                    Order Confirmation\n                    <svg class="feather">\n                        <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n                    </svg>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/checkout-payment/checkout-payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */]])
    ], CheckoutPaymentPage);
    return CheckoutPaymentPage;
}());

//# sourceMappingURL=checkout-payment.js.map

/***/ })

});
//# sourceMappingURL=0.js.map