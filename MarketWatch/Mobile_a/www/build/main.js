webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_network__ = __webpack_require__(50);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, googlePlus, storage, network, navParams) {
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.network = network;
        this.navParams = navParams;
        this.addUser = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.googlePlus.login({}).then(function (res) {
            _this.network.getUserDetails(res.email).then(function (success) {
                console.log("0000", success);
                if (success) {
                    _this.getAllRecord();
                }
                else {
                    _this.storage.set('email', res.email);
                    _this.storage.set('Fname', res.displayName);
                    _this.storage.set('Image', res.imageUrl);
                    _this.addUser.user_Name = res.displayName;
                    _this.addUser.user_Email = res.email;
                    _this.network.addUserDetails(_this.addUser).then(function (Result) { }).catch(function (err) { });
                    _this.navCtrl.setRoot('HomePage');
                }
            }).catch(function (err) {
            });
        });
    };
    LoginPage.prototype.addUserD = function () {
    };
    LoginPage.prototype.getAllRecord = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\pages\login\login.html"*/'<ion-content padding class="BgImage">\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button color="danger" full (click)="Login()"><ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n\n    Login\n\n  </button>\n\n</ion-footer>'/*ion-inline-end:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//})
//     .catch(err => console.error(err));
// }
// let email = { "user_Email": "sweetrook@gmail.com" };
// this.network.getUserDetails(email).then(success => {
//   console.log("0000", success);
//   if (true) {
//   }
//   else {
//     this.storage.set('email', res.email);
//     this.storage.set('Fname', res.displayName);
//     this.storage.set('Image', res.imageUrl);
//     this.navCtrl.setRoot('HomePage');
//   }
// }).catch(err => {
// });
//   this.googlePlus.login({})
//     .then(res => {
//       console.log(res);
//       this.storage.set('email', res.email);
//       this.storage.set('Fname', res.displayName);
//       this.storage.set('Image', res.imageUrl);
//       this.navCtrl.setRoot('HomePage');
//       this.network.getUserDetails(res.email).then(success => {
//       }).catch(err => {
//       });
//     })
//     .catch(err => console.error(err));
// }
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-item/add-item.module": [
		282,
		0
	],
	"../pages/home/home.module": [
		283,
		2
	],
	"../pages/login/login.module": [
		284,
		1
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, network, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.network = network;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openModal = function () {
        var contactModal = this.modalCtrl.create('AddItemPage', { userId: 8675309 });
        contactModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openModal()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="BgImage">\n\n  <div class="Bg">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-grid>\n\n          <ion-row  class="FontStyle">\n\n            <ion-col>\n\n              <div>NIFTY 50</div><br> <div class="Mtop">11111.44 | 52.20 (0.45%)</div>\n\n            </ion-col>\n\n            <ion-col class="borderLeft">\n\n              <div>SENSEX</div> <br><div class="Mtop"> 3899888 | 147.77 (0.36%)</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_network_network__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-item/add-item.module#AddItemPageModule', name: 'AddItemPage', segment: 'add-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_network_network__["a" /* NetworkProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\AWS\DemoApps\MarketWatch\Mobile_a\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(http) {
        this.http = http;
        this.baseUrl = "https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json";
        this.baseApiUrl = "http://localhost:3000/api/";
        this.devices = [];
        this.resultArry = [];
        this.data = [];
        console.log('Hello NetworkProvider Provider');
    }
    NetworkProvider.prototype.getAllDevices = function () {
        // let headersObj = new HttpHeaders();
        // headersObj.append('Content-Type', 'application/json');
        // let url = this.baseUrl;
        // return new Promise((resolve, reject) => {
        //   this.http.get(url).map(data => {
        //     var Listarry = [];
        //     data.data.forEach(element => {
        //       Listarry.push(element.symbol);
        //     });
        //     resolve(Listarry);
        //   }).subscribe(resp => {
        //     resolve();
        //   }), (err) => {
        //     console.log("--------------------/", err);
        //   }
        // });
    };
    NetworkProvider.prototype.loadSymbolList = function (searchTerm) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('assets/data/symbolList.json').map(function (data) {
                // console.log('data--->', data);
                _this.data = data;
                console.log('searchTerm', searchTerm);
                var datas = _this.data.filter(function (location) {
                    return location.SYMBOL.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                });
                resolve(datas);
            }).subscribe(function (resp) {
            }), function (err) {
                console.log("--------------------/", err);
            };
        });
    };
    NetworkProvider.prototype.getUserDetails = function (email) {
        var _this = this;
        // responce will be UserId
        console.log(email);
        var headersObj = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headersObj.append('Content-Type', 'application/json');
        var url = this.baseApiUrl;
        return new Promise(function (resolve, reject) {
            _this.http.post(url + 'checkUserdetails', email).map(function (data) {
                // console.log(data);
                resolve(data);
            }).subscribe(function (resp) {
                resolve();
            }), function (err) {
                console.log("--------------------/", err);
            };
        });
    };
    NetworkProvider.prototype.addUserDetails = function (Obj) {
        var _this = this;
        console.log(Obj);
        var headersObj = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headersObj.append('Content-Type', 'application/json');
        var url = this.baseApiUrl;
        return new Promise(function (resolve, reject) {
            _this.http.post(url + 'insert_UserDetails', Obj).map(function (data) {
                // console.log(data);
                resolve(data);
            }).subscribe(function (resp) {
                resolve();
            }), function (err) {
                console.log("--------------------/", err);
            };
        });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

// var a = function () {
//   var deferred = new defer(); //promise declaration
//   if (!error) {
//     deferred.resolve(value);
//   } else {
//     deferred.reject(error);
//   }
//   return deferred.promise;
// }
// var b = function () {
//   var deferred = new defer(); //promise declaration
//   if (!error) {
//     deferred.resolve(value);
//   } else {
//     deferred.reject(error);
//   }
//   return deferred.promise;
// }
// app.post(‘/api/v1 / <api_name>’, async function (request, response) {
//   try {
//     var responseOfA = await a();
//     var responseOfB = await b();
//   } catch (error) {
//   }
// });
// //--------------------------------------------
// var triggerObject = [{ "symbol": "tcs", "trigger": 1000, "targetHit": false }, { "symbol": "infy", "trigger": 700, "targetHit": true }];
// var nseData = [{ "symbol": "tcs", currentRate: 1000 }, { "symbol": "infy", currentRate: 680 }, { "symbol": "pcj", currentRate: 100 }];
// triggerObject.forEach(function (triggerObj, index) {
//   if (!triggerObj.targetHit) {
//     var result = _.filter(nseData, function (obj) {
//       if (triggerObj.symbol == obj.symbol && obj.currentRate >= triggerObj.trigger) {
//         return obj;
//       } //end of if condition
//     }); //end of lodash filter
//     //for checking if trigger is hit
//     if (result.length > 0) {
//       //remove object from triggerObject
//       triggerObject[index].targetHit = true;
//       //send mail for trigger hit
//     }
//   } //end of triggerObj.targetHit checking if condition
// }); //end of forEach loop
//# sourceMappingURL=network.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map