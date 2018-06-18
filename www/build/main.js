webpackJsonp([10],{

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		838,
		4
	],
	"../pages/checkout-confirmation/checkout-confirmation.module": [
		839,
		2
	],
	"../pages/checkout-detail/checkout-detail.module": [
		840,
		1
	],
	"../pages/checkout-payment/checkout-payment.module": [
		846,
		0
	],
	"../pages/home/home.module": [
		841,
		9
	],
	"../pages/product-catalog/product-catalog.module": [
		842,
		8
	],
	"../pages/product-detail/product-detail.module": [
		843,
		7
	],
	"../pages/product-detail/success/success.module": [
		844,
		6
	],
	"../pages/product-list/product-list.module": [
		845,
		5
	],
	"../pages/receipt/receipt.module": [
		847,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Moltin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moltin_sdk__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__moltin_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Moltin = (function () {
    function Moltin(httpClient) {
        this.httpClient = httpClient;
        this.moltin = Object(__WEBPACK_IMPORTED_MODULE_0__moltin_sdk__["gateway"])({
            client_id: 'u8cV0fAtS8ELXcyxWY2r4deLTHs1i3NkgV8rt7ZqWX'
        });
    }
    //get all Products
    Moltin.prototype.getProducts = function () {
        var request = this.moltin.Products.With(["main_image", "categories"]);
        return request.All().then(function (products) {
            var product = products.data[0];
            if (!product) {
                throw { "error": "No product found" };
            }
            //pass on to the next one
            return products;
        });
    };
    Moltin.prototype.getProduct = function (sku) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            var request = _this.moltin.Products.With(["main_image", "files", "categories"]);
            request = request.Filter({
                eq: {
                    'sku': sku
                }
            });
            request.All().then(function (products) {
                var product = products.data[0];
                if (!product) {
                    observer.error({ "error": "No product found" });
                    observer.complete();
                    return;
                }
                return [product, products.included];
            }).then(function (data) {
                var product = data[0];
                var included = data[1];
                product = _this.rollUpSingleRelationship(product, "main_image", included, "main_images");
                product = _this.rollUpManyRelationship(product, "categories", included, "categories");
                product = _this.rollUpManyRelationship(product, "files", included, "files");
                return product;
            }).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.getProductById = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            var request = _this.moltin.Products.With(["main_image", "files", "categories"]);
            request.Get(id).then(function (data) {
                var product = data.data;
                if (!product) {
                    observer.error({ "error": "No product found" });
                    observer.complete();
                    return;
                }
                return [product, data.included];
            }).then(function (data) {
                var product = data[0];
                var included = data[1];
                product = _this.rollUpSingleRelationship(product, "main_image", included, "main_images");
                product = _this.rollUpManyRelationship(product, "categories", included, "categories");
                product = _this.rollUpManyRelationship(product, "files", included, "files");
                return product;
            }).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.addToCart = function (product) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().AddProduct(product.id).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.getCart = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().Items().then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.updateCartItem = function (itemID, quantity) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().UpdateItemQuantity(itemID, quantity).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.deleteCartItem = function (itemID) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().RemoveItem(itemID).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.applyPromoCode = function (promoCode) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().AddPromotion(promoCode).then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.checkoutCart = function (customer, billingAddress, shippingAddress) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().Checkout(customer, billingAddress, shippingAddress).then(function (data) {
                observer.next(data["data"]);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.deleteCart = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Cart().Delete().then(function (data) {
                observer.next(data);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.payForOrder = function (order, token) {
        var _this = this;
        var payload = {
            "gateway": "stripe",
            "method": "purchase",
            "payment": token
        };
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.moltin.Orders.Payment(order.id, payload).then(function (data) {
                observer.next(data["data"]);
                observer.complete();
            }).catch(function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    Moltin.prototype.rollUpSingleRelationship = function (item, key, included, included_key) {
        //loop through an array
        var includes = included[included_key] || [];
        var relationship = item.relationships[key];
        if (!relationship) {
            return item;
        }
        var relationship_id = relationship.data.id;
        item[key] = includes.find(function (x) { return x.id == relationship_id; });
        return item;
    };
    Moltin.prototype.rollUpManyRelationship = function (item, key, included, included_key) {
        var includes = included[included_key] || [];
        var relationship = item.relationships[key];
        if (!relationship) {
            return item;
        }
        var relationship_ids = relationship.data.map(function (item) { return item.id; });
        item[key] = includes.map(function (x) {
            return relationship_ids.indexOf(x.id) != -1 ? x : null;
        }).filter(function (x) { return x != null; });
        return item;
    };
    Moltin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], Moltin);
    return Moltin;
}());

//# sourceMappingURL=moltin.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_moltin_moltin__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MobileSelfCheckoutApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MobileSelfCheckoutApp */], {
                    backButtonText: '',
                    backButtonIcon: 'arrow-left'
                }, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartModule', name: 'cart', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-confirmation/checkout-confirmation.module#CheckoutConfirmationModule', name: 'checkout-confirmation', segment: 'checkout-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-detail/checkout-detail.module#CheckoutDetailModule', name: 'checkout-detail', segment: 'checkout-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-catalog/product-catalog.module#ProductCatalogModule', name: 'productCatalog', segment: 'productCatalog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailModule', name: 'product', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/success/success.module#AddToCartSuccessModule', name: 'add-cart-success', segment: 'success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-list/product-list.module#ProductListModule', name: 'productList', segment: 'productList', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-payment/checkout-payment.module#CheckoutPaymentModule', name: 'checkout-payment', segment: 'checkout-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipt/receipt.module#ReceiptPageModule', name: 'receipt', segment: 'receipt', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MobileSelfCheckoutApp */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__providers_moltin_moltin__["a" /* Moltin */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileSelfCheckoutApp; });
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


var MobileSelfCheckoutApp = (function () {
    function MobileSelfCheckoutApp(platform) {
        this.rootPage = 'home';
        platform.ready().then(function () {
        });
    }
    MobileSelfCheckoutApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/georgefitzgibbons/dev/mobile-checkout/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/georgefitzgibbons/dev/mobile-checkout/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MobileSelfCheckoutApp);
    return MobileSelfCheckoutApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[411]);
//# sourceMappingURL=main.js.map