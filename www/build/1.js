webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetshopsPageModule", function() { return PetshopsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__petshops__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetshopsPageModule = /** @class */ (function () {
    function PetshopsPageModule() {
    }
    PetshopsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__petshops__["a" /* PetshopsPage */]),
            ],
        })
    ], PetshopsPageModule);
    return PetshopsPageModule;
}());

//# sourceMappingURL=petshops.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetshopsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetshopsPage = /** @class */ (function () {
    function PetshopsPage(navCtrl, navParams, petshopService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.petshopService = petshopService;
    }
    // função chamando o serviço que consome api
    PetshopsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.petshopService.findAll()
            .subscribe(function (response) {
            _this.items = response;
        }, function (error) {
            console.log(error);
        });
    };
    PetshopsPage.prototype.getItemsbkddd = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                if (item.funcionario == undefined)
                    return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1);
                item.funcionario.forEach(function (element) {
                    console.log(element.nome);
                });
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage.prototype.getItemsdddd = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 //||
                );
            });
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage.prototype.teste = function () {
    };
    PetshopsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        var result = [];
        if (val && val.trim() != '') {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || this.items[i].endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    result.push(this.items[i]);
                }
                for (var a = 0; a < this.items[i].funcionario.length; a++) {
                    if (this.items[i].funcionario[a].nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        result.push(this.items[i]);
                    }
                }
            }
            this.items = result;
        }
        else {
            this.ionViewDidLoad();
        }
    };
    PetshopsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-petshops',template:/*ion-inline-start:"C:\Users\jonh_\Desktop\PetShop-ionic\src\pages\petshops\petshops.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Petshops</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n<ion-list>\n\n  <button ion-item (click) = "abrirService()" *ngFor="let item of items">\n\n    <ion-thumbnail item-start>\n\n      <img src="../../assets/imgs/pt.png">\n\n    </ion-thumbnail>\n\n    <h2>{{item.nome}}</h2>\n\n    <p> {{item.endereco.logradouro}} {{item.endereco.numero}}</p>\n\n  </button>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jonh_\Desktop\PetShop-ionic\src\pages\petshops\petshops.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_petshop_service__["a" /* PetshopService */]])
    ], PetshopsPage);
    return PetshopsPage;
}());

//# sourceMappingURL=petshops.js.map

/***/ })

});
//# sourceMappingURL=1.js.map