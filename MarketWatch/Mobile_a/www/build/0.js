webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddItemPageModule = /** @class */ (function () {
    function AddItemPageModule() {
    }
    AddItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItemPage */]),
            ],
        })
    ], AddItemPageModule);
    return AddItemPageModule;
}());

//# sourceMappingURL=add-item.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(102);
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
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, viewCtrl, renderer, network, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.network = network;
        this.navParams = navParams;
        this.searchTerm = '';
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
        console.log('UserId', navParams.get('userId'));
        this.setFilteredItems();
    }
    AddItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddItemPage');
        this.setFilteredItems();
    };
    AddItemPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddItemPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddItemPage.prototype.setFilteredItems = function () {
        var _this = this;
        if (this.searchTerm != '') {
            this.network.loadSymbolList(this.searchTerm).then(function (s) {
                //console.log(s);
                _this.items = s;
                _this.showList = true;
            }).catch(function (err) {
                console.log("err");
            });
        }
        else {
            this.showList = false;
        }
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"D:\KPIT\poc\AWS\DemoApps\MarketWatch\BSE_Mobile\src\pages\add-item\add-item.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <h2>Welcome to Ionic!</h2>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n    <ion-list *ngIf="showList">\n      <ion-item *ngFor="let item of items">\n        {{ item.SYMBOL }}        \n      </ion-item>\n    </ion-list>\n  </div>\n  <!--{{ item.NAME OF COMPANY }}  -->\n</ion-content>'/*ion-inline-end:"D:\KPIT\poc\AWS\DemoApps\MarketWatch\BSE_Mobile\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _e || Object])
    ], AddItemPage);
    return AddItemPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=add-item.js.map

/***/ })

});
//# sourceMappingURL=0.js.map