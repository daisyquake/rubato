webpackJsonp([3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(308);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.myInterests = this.api.getMyInterests();
    };
    HomePage.prototype.findInterest = function () {
        this.navCtrl.push('interests-page');
    };
    HomePage.prototype.myInterestTapped = function (event, item) {
        this.navCtrl.push('available-people-page', item);
    };
    HomePage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(1);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\home\home.html"*/'<ion-content>\n\n  <div class="main-content" (swipe)="swipe($event)">\n\n    <ion-card *ngIf="!myInterests">\n\n      <ion-card-header class="my-interests-header">No Available Things</ion-card-header>\n\n      <ion-card-content>\n\n        <p>\n\n          You are currently not having any things.\n\n        </p>\n\n        <p>\n\n          First add a thing then you will be able to see available people to connect.\n\n        </p>\n\n        <button ion-button full round (click)="findInterest()">\n\n            <ion-icon name="add-circle" padding></ion-icon> Add an Interest\n\n          </button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngIf="myInterests" class="myInterests">\n\n        <ion-list>\n\n          <ion-list-header class="my-interests-header">My Things</ion-list-header>\n\n          <button *ngFor="let item of myInterests" ion-item (click)="myInterestTapped($event, item)">\n\n           <div class="row"> \n\n          <div class="col-50"> <ion-icon [name]="item.Icon" padding ></ion-icon> </div>\n\n          <div class="col">\n\n           <div>{{item.Name}}</div>\n\n           <div class="smallFont">People: {{item.Total}}</div>\n\n           <div class="smallFont">Currently available: {{item.CurrentlyOnline}} </div>\n\n          </div>\n\n          </div>\n\n          </button>\n\n        </ion-list>\n\n        <ion-card-content>\n\n          <button ion-button round icon-only (click)="findInterest()" style="float:right">\n\n            <ion-icon name="paper-plane" padding class="findInterestIcon"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n     \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__["a" /* ApiService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/available-people/available-people.module": [
		194
	],
	"../pages/chat/chat.module": [
		386,
		0
	],
	"../pages/edit-info/edit-info.module": [
		195
	],
	"../pages/home/home.module": [
		387,
		2
	],
	"../pages/interest-item/interest-item.module": [
		388,
		1
	],
	"../pages/interests/interests.module": [
		200
	],
	"../pages/settings/settings.module": [
		201
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailablePeoplePageModule", function() { return AvailablePeoplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__available_people__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_item_user_item__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailablePeoplePageModule = (function () {
    function AvailablePeoplePageModule() {
    }
    AvailablePeoplePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__available_people__["a" /* AvailablePeoplePage */],
                __WEBPACK_IMPORTED_MODULE_3__user_item_user_item__["a" /* UserItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__available_people__["a" /* AvailablePeoplePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_item_user_item__["a" /* UserItemPage */]
            ]
        })
    ], AvailablePeoplePageModule);
    return AvailablePeoplePageModule;
}());

//# sourceMappingURL=available-people.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfoPageModule", function() { return EditInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_info__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditInfoPageModule = (function () {
    function EditInfoPageModule() {
    }
    EditInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_info__["a" /* EditInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_info__["a" /* EditInfoPage */]),
            ],
        })
    ], EditInfoPageModule);
    return EditInfoPageModule;
}());

//# sourceMappingURL=edit-info.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsPageModule", function() { return InterestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interests__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterestsPageModule = (function () {
    function InterestsPageModule() {
    }
    InterestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interests__["a" /* InterestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interests__["a" /* InterestsPage */]),
            ],
        })
    ], InterestsPageModule);
    return InterestsPageModule;
}());

//# sourceMappingURL=interests.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_page_transitions__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(nativePageTransitions) {
        this.nativePageTransitions = nativePageTransitions;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        this.loaded = false;
        this.tabIndex = 0;
    }
    TabsPage.prototype.getAnimationDirection = function (index) {
        var currentIndex = this.tabIndex;
        this.tabIndex = index;
        switch (true) {
            case (currentIndex < index):
                return ('left');
            case (currentIndex > index):
                return ('right');
        }
    };
    TabsPage.prototype.transition = function (e) {
        var options = {
            direction: this.getAnimationDirection(e.index),
            duration: 250,
            slowdownfactor: -1,
            slidePixels: 0,
            iosdelay: 20,
            androiddelay: 0,
            fixedPixelsTop: 48,
            fixedPixelsBottom: 48
        };
        if (!this.loaded) {
            this.loaded = true;
            return;
        }
        this.nativePageTransitions.slide(options);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\tabs\tabs.html"*/'<ion-tabs (ionChange)="transition($event)">\n\n  <ion-tab [root]="tab1Root" tabTitle="Things" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Me" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Messages" tabIcon="chatbubbles"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userProfile__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.person = new __WEBPACK_IMPORTED_MODULE_2__userProfile__["a" /* UserProfile */]();
    }
    AboutPage.prototype.openSettings = function () {
        this.navCtrl.push('settings-page');
    };
    AboutPage.prototype.editInfo = function () {
        this.navCtrl.push('edit-info-page');
    };
    AboutPage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(2);
        }
        if (event.direction === 4) {
            this.navCtrl.parent.select(0);
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Me\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="main-content" (swipe)="swipe($event)">\n\n    <ion-row>\n\n        <page-user-item [userData]="person"></page-user-item>\n\n          <h4>{{person.Name}}, {{person.Age}}</h4>\n\n          <h5>{{person.Company}}</h5>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button (click)="openSettings()">\n\n          <ion-icon name="settings">Settings</ion-icon>\n\n      </button>\n\n      <button ion-button (click)="editInfo()">\n\n          <ion-icon name="color-wand">Edit Info</ion-icon>\n\n      </button>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesPage = (function () {
    function MessagesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MessagesPage.prototype.swipe = function (event) {
        if (event.direction === 4) {
            this.navCtrl.parent.select(1);
        }
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\messages\messages.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Messages\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="main-content" (swipe)="swipe($event)">\n\n    <ion-list>\n\n      <ion-item navPush="Chat" [navParams]="toUser">\n\n        <ion-avatar item-left>\n\n          <img src="./assets/to-user.jpg">\n\n        </ion-avatar>\n\n        <h2>Hancock</h2>\n\n        <p>If at first you don’t succeed, call it version 1.0</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\messages\messages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_available_people_available_people_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_interests_interests_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mat_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_info_edit_info_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_emoji__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_crop__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(385);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__mat_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_available_people_available_people_module__["AvailablePeoplePageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_interests_interests_module__["InterestsPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_info_edit_info_module__["EditInfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/available-people/available-people.module#AvailablePeoplePageModule', name: 'available-people-page', segment: 'available-people', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-info/edit-info.module#EditInfoPageModule', name: 'edit-info-page', segment: 'edit-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatModule', name: 'Chat', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home-page', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interest-item/interest-item.module#InterestItemPageModule', name: 'InterestItemPage', segment: 'interest-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interests/interests.module#InterestsPageModule', name: 'interests-page', segment: 'interests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'settings-page', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared__["a" /* ApiService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_18__shared_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailablePeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailablePeoplePage = (function () {
    function AvailablePeoplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.people = [{
                Id: 1,
                FullName: 'Phil Colson',
                ImageUrl: 'assets/imgs/philColson.png',
                Raiting: 5,
            },
            {
                Id: 2,
                FullName: 'Melinda May',
                ImageUrl: 'assets/imgs/melindaMay.png',
                Raiting: 4,
            },
            {
                Id: 3,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 4,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 5,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 6,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 7,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 8,
                FullName: 'Grant Ward',
                ImageUrl: 'assets/imgs/grantWard.png',
                Raiting: 3,
            },
            {
                Id: 9,
                FullName: 'Phil Colson',
                ImageUrl: 'assets/imgs/philColson.png',
                Raiting: 5,
            },
            {
                Id: 10,
                FullName: 'Melinda May',
                ImageUrl: 'assets/imgs/melindaMay.png',
                Raiting: 4,
            }
        ];
    }
    AvailablePeoplePage.prototype.ionViewDidLoad = function () {
        this.interest = this.navParams.get('Name');
        console.log('ionViewDidLoad AvailablePeoplePage');
        console.log('Interest name: ' + this.interest);
        this.grid = new Array();
        this.populateGrid();
    };
    AvailablePeoplePage.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    AvailablePeoplePage.prototype.populateGrid = function () {
        var rowNum = 0; //counter to iterate over the rows in the grid
        var copyPeople = Object.assign([], this.people);
        for (; copyPeople.length > 0;) {
            var i = 0;
            var randomConst = this.getRandomInt(0, 3);
            this.grid[rowNum] = Array(3); //declare two elements per row
            //  console.log("people " + (randomConst) + "  " + copyPeople[i])
            if (copyPeople[i]) {
                this.grid[rowNum][randomConst] = copyPeople[i]; //insert user
                copyPeople.splice(i, 1);
                i = i + 1;
            }
            // console.log("people " + (randomConst) + "  " + copyPeople[i])
            if (copyPeople[i] && randomConst !== 1) {
                this.grid[rowNum][1] = copyPeople[i];
                copyPeople.splice(i, 1);
                i = i + 1;
            }
            // console.log("people " + (randomConst) + "  " + copyPeople[i])
            if (copyPeople[i] && randomConst == 1) {
                this.grid[rowNum][randomConst + 1] = copyPeople[i];
                copyPeople.splice(i, 1);
                i = i + 1;
            }
            rowNum++; //go on to the next row
        }
    };
    AvailablePeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-available-people',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\available-people\available-people.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Available People</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n      <ion-row *ngFor="let row of grid">\n\n          <ion-col width-50 *ngFor="let user of row">\n\n            <page-user-item [userData]="user"></page-user-item>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-grid> \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\available-people\available-people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AvailablePeoplePage);
    return AvailablePeoplePage;
}());

//# sourceMappingURL=available-people.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserItemPage = (function () {
    function UserItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserItemPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UserItemPage.prototype, "userData", void 0);
    UserItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-item',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\user-item\user-item.html"*/'<button ion-item class="item-profile" *ngIf="userData">\n\n    <div class="item-avatar">\n\n      <img [src]="userData?.ImageUrl" class="user-detail">\n\n    </div>\n\n  </button>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\user-item\user-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UserItemPage);
    return UserItemPage;
}());

//# sourceMappingURL=user-item.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_crop__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditInfoPage = (function () {
    function EditInfoPage(navCtrl, navParams, cropService, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cropService = cropService;
        this.imagePicker = imagePicker;
    }
    EditInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditInfoPage');
    };
    EditInfoPage.prototype.openImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.reduceImages(results).then(function () {
                console.log('all images cropped!!');
            });
        }, function (err) { console.log(err); });
    };
    EditInfoPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.cropService.crop(item, { quality: 75 })
                    .then(function (cropped_image) { return _this.photo = cropped_image; });
            });
        }, Promise.resolve());
    };
    EditInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-info',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\edit-info\edit-info.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      Edit Profile\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-card>\n\n      <img src="{{photoUrl}}" />\n\n    </ion-card>\n\n  </ion-row>\n\n  <ion-row>\n\n  <button ion-item (click)="openImagePicker()">\n\n  <ion-icon [name]="construct" padding>Change Profile Picture</ion-icon>\n\n  </button>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\edit-info\edit-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], EditInfoPage);
    return EditInfoPage;
}());

//# sourceMappingURL=edit-info.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApiService = (function () {
    function ApiService() {
        this.myInterests = [
            {
                Id: 1,
                Name: 'Tennis',
                Icon: 'tennisball',
                People: [],
                Total: 100,
                CurrentlyOnline: 50
            },
            {
                Id: 2,
                Name: "Football",
                Icon: "football",
                People: [],
                Total: 100,
                CurrentlyOnline: 50
            },
            {
                Id: 3,
                Name: "Basketball",
                Icon: "basketball",
                People: [],
                Total: 100,
                CurrentlyOnline: 50
            }
        ];
        this.interests = [
            {
                Id: 1,
                Name: "Tennis",
                Icon: "tennisball",
                People: [],
                Total: 100,
                CurrentlyOnline: 50
            },
            {
                Id: 2,
                Name: "Football",
                Icon: "football",
                People: [],
                Total: 1000,
                CurrentlyOnline: 150
            },
            {
                Id: 3,
                Name: "Basketball",
                Icon: "basketball",
                People: [],
                Total: 100,
                CurrentlyOnline: 50
            },
            {
                Id: 4,
                Name: "Chess",
                Icon: "bulb",
                People: [],
                Total: 10,
                CurrentlyOnline: 5
            },
            {
                Id: 5,
                Name: "Table tennis",
                Icon: "tennisball",
                People: [],
                Total: 150,
                CurrentlyOnline: 50
            },
            {
                Id: 6,
                Name: "Bicycling",
                Icon: "bicycle",
                People: [],
                Total: 1000,
                CurrentlyOnline: 10
            }
        ];
    }
    ApiService.prototype.addMyInterest = function (item) {
        this.myInterests.push(item);
    };
    ApiService.prototype.getMyInterests = function () {
        return this.myInterests;
    };
    ApiService.prototype.getInterests = function () {
        var _this = this;
        return this.interests.filter(function (element) { return _this.myInterests.find(function (x) { return x.Id === element.Id; }) === undefined; });
    };
    ;
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterestsPage = (function () {
    function InterestsPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.gridWidth = 3;
        this.grid = Array(this.gridWidth);
    }
    InterestsPage.prototype.interestTapped = function (event, item) {
        this.api.addMyInterest(item);
        this.navCtrl.pop();
    };
    InterestsPage.prototype.ionViewWillEnter = function () {
    };
    InterestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestsPage');
        this.interests = this.api.getInterests();
        this.populateGrid();
    };
    InterestsPage.prototype.populateGrid = function () {
        var rowIndex = 0;
        for (var i = 0; i < this.interests.length; i += this.gridWidth) {
            this.grid[rowIndex] = Array(this.gridWidth);
            for (var columnIndex = 0; columnIndex < this.gridWidth; columnIndex += 1) {
                if (this.interests[i + columnIndex]) {
                    this.grid[rowIndex][i + columnIndex] = this.interests[i + columnIndex];
                }
            }
            rowIndex++;
        }
    };
    InterestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interests',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\interests\interests.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Available Things</ion-title>\n\n  </ion-navbar>\n\n    </ion-header>\n\n<ion-content padding>\n\n        <ion-grid>\n\n          <ion-row *ngFor="let row of grid">\n\n              <ion-col width-50 *ngFor="let item of row">\n\n                <button ion-item (click)="interestTapped($event, item)" *ngIf="item">\n\n                  <ion-icon [name]="item?.Icon" padding></ion-icon>\n\n                  {{item?.Name}}\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n      </ion-grid> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\interests\interests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared__["a" /* ApiService */]])
    ], InterestsPage);
    return InterestsPage;
}());

//# sourceMappingURL=interests.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locationData__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__konbItem__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.distance = 1;
        this.showMe = true;
        this.newMatches = true;
        this.newMessages = true;
        this.ageRange = new __WEBPACK_IMPORTED_MODULE_3__konbItem__["a" /* KnobItem */]();
        this.location = new __WEBPACK_IMPORTED_MODULE_2__locationData__["a" /* LocationData */]();
        this.locations = [{ Name: 'Current Location' }, { Name: 'Paris' }, { Name: 'Rome' }];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-card-header> Discovery Settings</ion-card-header>\n\n  <ion-card-content>\n\n      <ion-item>\n\n          <ion-label>Location</ion-label>\n\n          <ion-select [(ngModel)]="location.Name">\n\n              <ion-option *ngFor="let location of locations" [value]="location.Name" class="option" text-wrap>{{location.Name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header>Maximum Distance {{distance}} km</ion-card-header>\n\n    <ion-card-content>\n\n        <ion-range min="0" max="200" [(ngModel)]="distance" color="secondary">\n\n          </ion-range>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n      <ion-card-header>Age Range {{ageRange.lower}} - {{ageRange.upper}}</ion-card-header>\n\n      <ion-card-content>\n\n          <ion-range min="10" max="100" [(ngModel)]="ageRange" dualKnobs="true" step="3" color="secondary">\n\n            </ion-range>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header><ion-item> <ion-label>Show me on Rubato</ion-label><ion-toggle [(ngModel)]="showMe"></ion-toggle>\n\n          </ion-item></ion-card-header>\n\n      </ion-card>\n\n      <ion-card>\n\n          <ion-card-header>App Settings</ion-card-header>\n\n       \n\n        <ion-card-content>\n\n          <ion-item> <ion-label>New Matches</ion-label>  <ion-toggle [(ngModel)]="newMatches"></ion-toggle></ion-item>\n\n            <ion-item> <ion-label>New Messages</ion-label>N<ion-toggle [(ngModel)]="newMessages"></ion-toggle></ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationData; });
var LocationData = (function () {
    function LocationData() {
        this.Name = "Current Location";
    }
    return LocationData;
}());

//# sourceMappingURL=locationData.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnobItem; });
var KnobItem = (function () {
    function KnobItem() {
        this.upper = 100;
        this.lower = 10;
    }
    return KnobItem;
}());

//# sourceMappingURL=konbItem.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\radmi\OneDrive\Documents\rubato\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\radmi\OneDrive\Documents\rubato\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = (function () {
    function UserProfile() {
        this.Name = 'TestUser';
        this.Age = 23;
        this.Company = 'Samsung';
        this.ImageUrl = 'assets/imgs/melindaMay.png';
    }
    return UserProfile;
}());

//# sourceMappingURL=userProfile.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=mat.module.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map