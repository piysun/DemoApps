webpackJsonp([1],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\AWS\DemoApps\MobApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="ImgCLass"><img src="../../assets/imgs/BgImg.png" class="ribbon" /></div>\n  <br><br>\n  <ion-scroll scrollX="true">\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T" text-left text-wrap>\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T">\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T">\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T">\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T">\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card no-padding class="cardId scroll-item ">\n      <ion-card-header no-padding>\n        <img src="../../assets/imgs/nin-live.png" />\n      </ion-card-header>\n      <ion-card-content class="card-M-T">\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"F:\AWS\DemoApps\MobApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map