webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoPetPageModule", function() { return ServicoPetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servico_pet__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicoPetPageModule = /** @class */ (function () {
    function ServicoPetPageModule() {
    }
    ServicoPetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__servico_pet__["a" /* ServicoPetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servico_pet__["a" /* ServicoPetPage */]),
            ],
        })
    ], ServicoPetPageModule);
    return ServicoPetPageModule;
}());

//# sourceMappingURL=servico-pet.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoPetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
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
 * Generated class for the ServicoPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicoPetPage = /** @class */ (function () {
    function ServicoPetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServicoPetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicoPetPage');
    };
    ServicoPetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-servico-pet',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic\src\pages\servico-pet\servico-pet.html"*/'\n<ion-content class="outer-content">\n  <!-- Retorna mês e dia-->\n\n  <button ion-button block (click)="openMenu()">  Selecione um funcionario !  </button>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Mês e Dia</ion-label>\n      <ion-datetime displayFormat="DD MMMM"></ion-datetime>\n    </ion-item>\n\n    <!-- Retorna hora-->\n  <ion-list>\n    <button ion-item (click) = "" >\n      <h2>Funcionario</h2>\n      <p>Horario</p>\n      <p>Preco: R$: 15,00</p>\n    </button>\n  </ion-list>\n\n</ion-list>\n<ion-row>\n  <button ion-button block outline round color="secondary" style="color:black">\n    Agendar\n  </button>\n</ion-row>\n\n</ion-content>\n\n<style>\n  ion-list:first-child {\n    margin-top: 32px;\n  }\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n</style>'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic\src\pages\servico-pet\servico-pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ServicoPetPage);
    return ServicoPetPage;
}());

//# sourceMappingURL=servico-pet.js.map

/***/ })

});
//# sourceMappingURL=0.js.map