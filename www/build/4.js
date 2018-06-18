webpackJsonp([4],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button_select__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_button_select__["a" /* ButtonSelect */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ]
        })
    ], CartModule);
    return CartModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
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



var CartPage = (function () {
    function CartPage(navController, moltin, changeDetector, loadingController) {
        var _this = this;
        this.navController = navController;
        this.moltin = moltin;
        this.changeDetector = changeDetector;
        this.loadingController = loadingController;
        this.cartData = [];
        this.cart = { data: [], meta: null };
        this.products = {};
        this.moltin.getCart().subscribe(function (data) {
            _this.cart = data;
            _this.cartData = _this.cart.data.filter(function (x) { return x["type"] == "cart_item"; });
            _this.getProducts();
        }, function (error) { return console.error(error); });
    }
    CartPage.prototype.getProducts = function () {
        var _this = this;
        this.cartData.forEach(function (item) {
            _this.getProductById(item.product_id);
        });
    };
    CartPage.prototype.getProductById = function (productId) {
        var _this = this;
        this.moltin.getProductById(productId).subscribe(function (data) {
            console.log(data);
            _this.products[productId] = data;
            _this.changeDetector.detectChanges();
        });
    };
    CartPage.prototype.getProductImage = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.main_image.link.href;
    };
    CartPage.prototype.getProductCategory = function (productId) {
        var product = this.products[productId];
        if (!product) {
            return "";
        }
        return product.categories[0].name;
    };
    CartPage.prototype.onChangeQuantity = function (element) {
        var _this = this;
        var loadingIndicator = this.loadingController.create({
            content: "Updating..."
        });
        loadingIndicator.present();
        this.moltin.updateCartItem(element.item.id, element.getValue()).subscribe(function (data) {
            _this.cart = data;
            _this.changeDetector.detectChanges();
            loadingIndicator.dismiss();
        }, function (error) {
            loadingIndicator.dismiss();
        });
    };
    CartPage.prototype.onDeleteItem = function (item) {
        var _this = this;
        var loadingIndicator = this.loadingController.create({
            content: "Deleting..."
        });
        loadingIndicator.present();
        this.moltin.deleteCartItem(item.id).subscribe(function (data) {
            _this.cart = data;
            _this.changeDetector.detectChanges();
            loadingIndicator.dismiss();
        }, function (error) {
            loadingIndicator.dismiss();
        });
    };
    CartPage.prototype.scanAnotherItem = function () {
        this.navController.push('scan');
    };
    CartPage.prototype.checkout = function () {
        this.navController.push('checkout-detail', { 'cart': this.cart });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/cart/cart.html"*/'<ion-header>\n    <ion-navbar class="light">\n        <ion-title>\n            Your Bag <ion-badge *ngIf="cartData.length > 0">{{ cartData.length }}</ion-badge>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n    \n<ion-content>\n    <ion-list>\n        <div class="container" *ngFor="let item of cartData">\n            <ion-item no-lines>\n                <ion-thumbnail item-start>\n                    <img src="{{ getProductImage(item.product_id) }}">\n                </ion-thumbnail>\n                <h2>{{ item.name }}</h2>\n                <span>{{ getProductCategory(item.product_id) }}</span>\n                <ion-note item-end>\n                    {{ item.meta.display_price.with_tax.value.formatted }}\n                </ion-note>\n            </ion-item>\n            <ion-grid>\n                <ion-row>\n                    <ion-col id="quantity-{{item.id}}">\n                        <button-select [item]="item" label="Quantity" (onChange)="onChangeQuantity($event);"></button-select>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button full round outline (click)="onDeleteItem(item);">\n                            <svg class="feather">\n                                <use xlink:href="assets/icon/feather-sprite.svg#trash-2" />\n                            </svg>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer *ngIf="cart.meta != null && cart.data.length > 0">\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row class="subtotal">\n                <h2><span>Subtotal: </span>{{ cart.meta.display_price.with_tax.formatted }}</h2>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button ion-button full outline round icon-start (click)="scanAnotherItem();">\n                        <svg class="feather">\n                            <use xlink:href="assets/icon/feather-sprite.svg#maximize" />\n                        </svg>\n                        Scan Item\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <button ion-button block round icon-end (click)="checkout();">\n                        Checkout\n                        <svg class="feather">\n                            <use xlink:href="assets/icon/feather-sprite.svg#arrow-right" />\n                        </svg>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_moltin_moltin__["a" /* Moltin */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonSelect; });
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


var ButtonSelect = (function () {
    function ButtonSelect() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ButtonSelect.prototype.getQuantityOptions = function () {
        return Array.from({ length: Math.max(10, this.item.quantity) }, function (x, i) { return i + 1; });
    };
    ButtonSelect.prototype.openQuantity = function () {
        this.select.open();
    };
    ButtonSelect.prototype.onQuantityChange = function () {
        this.button.getNativeElement().textContent = "x" + this.getValue();
        this.onChange.emit(this);
    };
    ButtonSelect.prototype.getValue = function () {
        return this.select.value;
    };
    ButtonSelect.prototype.setValue = function (value) {
        this.button.getNativeElement().textContent = "x" + value;
        this.select.setValue(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Button */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Button */])
    ], ButtonSelect.prototype, "button", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Select */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Select */])
    ], ButtonSelect.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('item'),
        __metadata("design:type", Object)
    ], ButtonSelect.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('label'),
        __metadata("design:type", String)
    ], ButtonSelect.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ButtonSelect.prototype, "onChange", void 0);
    ButtonSelect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'button-select',template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/cart/components/button-select.html"*/'<ion-item [hidden]="true">\n    <ion-label>{{ label }}</ion-label>\n    <ion-select (ionChange)="onQuantityChange()">\n        <ion-option *ngFor="let value of getQuantityOptions()" [value]="value">{{value}}</ion-option>\n    </ion-select>\n</ion-item>\n<button ion-button full round outline (click)="openQuantity();">\n    x{{ item.quantity }}\n</button>'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/pages/cart/components/button-select.html"*/
        })
    ], ButtonSelect);
    return ButtonSelect;
}());

//# sourceMappingURL=button-select.js.map

/***/ })

});
//# sourceMappingURL=4.js.map