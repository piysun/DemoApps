webpackJsonp([0],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item__ = __webpack_require__(752);
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

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, viewCtrl, renderer, formBuilder, network, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.network = network;
        this.navParams = navParams;
        this.itemData = this.formBuilder.group({
            Symbol: [''],
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
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
        console.log(this.itemData);
        var data = this.itemData;
        console.log(data.value);
        if (this.itemData.value.Symbol != '') {
            this.network.loadSymbolList(this.itemData.value.Symbol).then(function (s) {
                console.log("..........................", s);
                _this.items = s;
                _this.showList = true;
            }).catch(function (err) {
                console.log("err", err);
            });
        }
        else {
            this.showList = false;
        }
    };
    AddItemPage.prototype.itemTapped = function (data) {
        console.log(data);
        this.itemData.value.Symbol = data;
        this.showList = false;
    };
    AddItemPage.prototype.logForm = function () {
        console.log(this.itemData.value);
        this.network.addRecord(this.itemData.value).then(function (success) {
            console.log(success);
        });
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"D:\KPIT\poc\AWS\DemoApps\MarketWatch\Mobile_a\fcmDemo - Copy\src\pages\add-item\add-item.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <h2>Welcome to Ionic!</h2>\n    <form [formGroup]="itemData" (ngSubmit)="logForm()">\n      <ion-searchbar class="ionSerch" formControlName="Symbol" [(ngModel)]="itemData.value.Symbol" (ionInput)="setFilteredItems()"></ion-searchbar>\n      <ion-list *ngIf="showList" class="ListTag">\n        <ion-item *ngFor="let item of items" (click)="itemTapped(item.SYMBOL)">\n          {{ item.SYMBOL }}\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <ion-label>Username</ion-label>\n          <ion-input type="text" formControlName="title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Password</ion-label>\n          <ion-input type="text" formControlName="description" ></ion-input>\n        </ion-item>\n        <ion-grid class="TopM">\n          <ion-row>\n            <ion-col>\n              <button ion-button full color="danger" type="reset">Clear</button>\n            </ion-col>\n            <ion-col>\n              <button ion-button full color="secondary" type="submit" [disabled]="!itemData.valid">Submit</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\KPIT\poc\AWS\DemoApps\MarketWatch\Mobile_a\fcmDemo - Copy\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ })

});
//# sourceMappingURL=0.js.map