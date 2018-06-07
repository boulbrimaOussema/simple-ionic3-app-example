webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(196);
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
 * Authenticate page.
 */
var AuthenticatePage = (function () {
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    function AuthenticatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    /**
     * Call authenticator.
     */
    AuthenticatePage.prototype.login = function () {
        if (this.user.username && this.user.password) {
            if (this.user.username == "root" && this.user.password == "root")
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    AuthenticatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authenticate',template:/*ion-inline-start:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\authenticate\authenticate.html"*/'<ion-header>\n    <ion-navbar style ="background-color:green">\n        <ion-title>learnApp</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <img style="margin: auto" src="assets/imgs/img_login.png" alt="your image">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n        <ion-row>\n            <ion-col>\n                <ion-list inset>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="user.username" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class="signin-col">\n                <button style ="background-color:green" ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\authenticate\authenticate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AuthenticatePage);
    return AuthenticatePage;
}());

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(197);
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
 * Home page extending require authentication page.
 */
var HomePage = (function () {
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    function HomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.modules = [{ name: "IAM", desc: "aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn", credit: 5, nm: "applications mobiles", color: "#34b5ef", weeks: [{ date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }, { date: "18 FEB - 25FEB", title: "CHAPITRE 2 : android studio", cours1: "Cours 2 (slide)", cours2: "Cours 2 (video explicatife" }, { date: "03 MAR - 10MAR", title: "CHAPITRE 3 : Introduction a android", cours1: "Cours 3 (slide)", cours2: "Cours 3 (video explicatife" }, { date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }] },
            { name: "SI", desc: "aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn", credit: 5, nm: "systemes intellegents", color: "#ef41c0", weeks: [{ date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }, { date: "18 FEB - 25FEB", title: "CHAPITRE 2 : android studio", cours1: "Cours 2 (slide)", cours2: "Cours 2 (video explicatife" }, { date: "03 MAR - 10MAR", title: "CHAPITRE 3 : Introduction a android", cours1: "Cours 3 (slide)", cours2: "Cours 3 (video explicatife" }, { date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }] },
            { name: "PARA", desc: "aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn", credit: 5, nm: "paradigmes de programmation", color: "#753b52", weeks: [{ date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }, { date: "18 FEB - 25FEB", title: "CHAPITRE 2 : android studio", cours1: "Cours 2 (slide)", cours2: "Cours 2 (video explicatife" }, { date: "03 MAR - 10MAR", title: "CHAPITRE 3 : Introduction a android", cours1: "Cours 3 (slide)", cours2: "Cours 3 (video explicatife" }, { date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }] },
            { name: "COMP", desc: "aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn", credit: 5, nm: "compilation", color: "#2b3f68", weeks: [{ date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }, { date: "18 FEB - 25FEB", title: "CHAPITRE 2 : android studio", cours1: "Cours 2 (slide)", cours2: "Cours 2 (video explicatife" }, { date: "03 MAR - 10MAR", title: "CHAPITRE 3 : Introduction a android", cours1: "Cours 3 (slide)", cours2: "Cours 3 (video explicatife" }, { date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }] },
            { name: "RO", desc: "aevkznvkrzverbvjbvbdbvidsvbydsbvbdsbvdbskvjdsbvkdnvkndsvn", credit: 5, nm: "recherche operationnel", color: "#606820", weeks: [{ date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }, { date: "18 FEB - 25FEB", title: "CHAPITRE 2 : android studio", cours1: "Cours 2 (slide)", cours2: "Cours 2 (video explicatife" }, { date: "03 MAR - 10MAR", title: "CHAPITRE 3 : Introduction a android", cours1: "Cours 3 (slide)", cours2: "Cours 3 (video explicatife" }, { date: "11 FEB - 12FEB", title: "CHAPITRE 1 : Introduction a android", cours1: "Cours 1 (slide)", cours2: "Cours 1 (video explicatife" }] },
        ];
    }
    HomePage.prototype.openModal = function (modul) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* SampleModalPage */], modul);
        myModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>LearnApp</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col col-6 style="height: 130px;" *ngFor="let modul of modules">\n      <div (click)="openModal(modul)" [ngStyle]=\'{"background-color":modul.color}\' style=\'height: 100%;width: 100%;position: relative;padding-top: 40px;\' text-center>\n        <div text-center style="position: absolute;top: 0px;right: 0px;border-radius: 50%;background-color: palevioletred;height: 20px;width: 20px">{{modul.credit}}</div>\n        <h1>{{modul.name}}</h1>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_module__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleModalPage = (function () {
    function SampleModalPage(navParams, viewCtrl, navCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.modul = this.navParams.get('nm');
        this.desc = this.navParams.get('desc');
        this.credit = this.navParams.get('credit');
        this.weeks = this.navParams.get('weeks');
    }
    SampleModalPage.prototype.openListe = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__module_module__["a" /* ModulePage */], this.weeks);
    };
    SampleModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sample-modal',template:/*ion-inline-start:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\modal\sample-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><h1>{{modul}}</h1></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3>credit :</h3>\n  <h5>{{credit}}</h5>\n\n  <h3>Description</h3>\n  <h5>{{desc}}</h5>\n  <button style ="background-color:green;position: absolute;bottom: 3px" ion-button class="submit-btn" full (click)="openListe()">Login</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\modal\sample-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SampleModalPage);
    return SampleModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Home page extending require authentication page.
 */
var ModulePage = (function () {
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    function ModulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modules = this.navParams.data;
    }
    ModulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'module',template:/*ion-inline-start:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\module\module.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>LearnApp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col col-12  *ngFor="let modul of modules">\n    <ion-card>\n      <ion-card-header>{{modul.date}}</ion-card-header>\n      <ion-content>\n        {{modul.cours1}}\n      </ion-content>\n\n\n    </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\pages\module\module.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ModulePage);
    return ModulePage;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_authenticate_authenticate__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_authenticate_authenticate__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_module_module__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * Application module.
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* SampleModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_module_module__["a" /* ModulePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal__["a" /* SampleModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_module_module__["a" /* ModulePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_authenticate_authenticate__["a" /* AuthenticateProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_authenticate_authenticate__ = __webpack_require__(195);
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
 * Application.
 */
var MyApp = (function () {
    /**
     * Constructor.
     *
     * @param platform Platform.
     * @param statusBar Status bar.
     * @param splashScreen Splash screen.
     */
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_authenticate_authenticate__["a" /* AuthenticatePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ouss\Desktop\ionic3-angular4-basic-app-login-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateProvider = (function () {
    function AuthenticateProvider(http) {
        this.http = http;
        console.log('Hello AuthenticateProvider Provider');
    }
    /**
     * Store user on local storage.
     *
     * @param user User.
     */
    AuthenticateProvider.prototype.setAuthenticatedUser = function (user) {
        if (user != null) {
            localStorage.setItem('app.userInfo', 'true');
            localStorage.setItem('app.userInfo.id', user.id);
            localStorage.setItem('app.userInfo.name', user.name);
        }
    };
    /**
     * Get user from local storage.
     *
     * @return User.
     */
    AuthenticateProvider.prototype.getAuthenticatedUser = function () {
        var user;
        if (localStorage.getItem('app.userInfo')) {
            user = {
                id: localStorage.getItem('app.userInfo.id'),
                name: localStorage.getItem('app.userInfo.name')
            };
        }
        return user;
    };
    /**
     * Remove user from local storage.
     */
    AuthenticateProvider.prototype.clearAuthenticatedUser = function () {
        localStorage.removeItem('app.userInfo');
        localStorage.removeItem('app.userInfo.id');
        localStorage.removeItem('app.userInfo.name');
    };
    /**
     * Perform authentication using credentials.
     *
     * @param user Username.
     * @param password Password.
     */
    AuthenticateProvider.prototype.authenticateUsingCredentials = function (user, password) {
        var _this = this;
        if (user === null || password === null) {
            // Throws error message.
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('User and password are required.');
        }
        else {
            // Creates Observable.
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                // Perform server request to validate user credentials.
                _this.setAuthenticatedUser({ id: '1', name: 'FortDev' });
                observer.next();
                observer.complete();
            });
        }
    };
    AuthenticateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());

//# sourceMappingURL=authenticate.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map