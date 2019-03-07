(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-komponente/admin-komponent.module.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-komponente/admin-komponent.module.ts ***!
  \************************************************************/
/*! exports provided: AdminKomponenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminKomponenteModule", function() { return AdminKomponenteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../paginacija/paginacija.module */ "./src/app/paginacija/paginacija.module.ts");
/* harmony import */ var _navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar-admin/navbar-admin.component */ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.ts");
/* harmony import */ var _zgrade_zgrade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zgrade/zgrade.component */ "./src/app/admin-komponente/zgrade/zgrade.component.ts");
/* harmony import */ var _zgrade_dodaj_zgradu_dodaj_zgradu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zgrade/dodaj-zgradu/dodaj-zgradu.component */ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.ts");
/* harmony import */ var _zgrade_izlistaj_zgrade_izlistaj_zgrade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zgrade/izlistaj-zgrade/izlistaj-zgrade.component */ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.ts");
/* harmony import */ var _stanari_stanari_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stanari/stanari.component */ "./src/app/admin-komponente/stanari/stanari.component.ts");
/* harmony import */ var _institucije_registruj_instituciju_registruj_instituciju_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./institucije/registruj-instituciju/registruj-instituciju.component */ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.ts");
/* harmony import */ var _institucije_institucije_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./institucije/institucije.component */ "./src/app/admin-komponente/institucije/institucije.component.ts");
/* harmony import */ var _firme_firme_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./firme/firme.component */ "./src/app/admin-komponente/firme/firme.component.ts");
/* harmony import */ var _firme_registruj_firmu_registruj_firmu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./firme/registruj-firmu/registruj-firmu.component */ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.ts");
/* harmony import */ var _stanari_registruj_stanara_registruj_stanara_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stanari/registruj-stanara/registruj-stanara.component */ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.ts");
/* harmony import */ var _stan_stan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stan/stan.component */ "./src/app/admin-komponente/stan/stan.component.ts");
/* harmony import */ var _stanari_izlistaj_stanare_izlistaj_stanare_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stanari/izlistaj-stanare/izlistaj-stanare.component */ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.ts");
/* harmony import */ var _firme_izlistaj_firme_izlistaj_firme_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./firme/izlistaj-firme/izlistaj-firme.component */ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.ts");
/* harmony import */ var _institucije_izlistaj_institucije_izlistaj_institucije_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./institucije/izlistaj-institucije/izlistaj-institucije.component */ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.ts");
/* harmony import */ var _stanar_stanar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stanar/stanar.component */ "./src/app/admin-komponente/stanar/stanar.component.ts");

























var AdminKomponenteModule = /** @class */ (function () {
    function AdminKomponenteModule() {
    }
    AdminKomponenteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_10__["NavbarAdminComponent"],
                _zgrade_zgrade_component__WEBPACK_IMPORTED_MODULE_11__["ZgradeComponent"],
                _zgrade_dodaj_zgradu_dodaj_zgradu_component__WEBPACK_IMPORTED_MODULE_12__["DodajZgraduComponent"],
                _zgrade_izlistaj_zgrade_izlistaj_zgrade_component__WEBPACK_IMPORTED_MODULE_13__["IzlistajZgradeComponent"],
                _stanari_registruj_stanara_registruj_stanara_component__WEBPACK_IMPORTED_MODULE_19__["RegistrujStanaraComponent"],
                _firme_registruj_firmu_registruj_firmu_component__WEBPACK_IMPORTED_MODULE_18__["RegistrujFirmuComponent"],
                _institucije_registruj_instituciju_registruj_instituciju_component__WEBPACK_IMPORTED_MODULE_15__["RegistrujInstitucijuComponent"],
                _stanari_stanari_component__WEBPACK_IMPORTED_MODULE_14__["StanariComponent"],
                _institucije_institucije_component__WEBPACK_IMPORTED_MODULE_16__["InstitucijeComponent"],
                _firme_firme_component__WEBPACK_IMPORTED_MODULE_17__["FirmeComponent"],
                _stan_stan_component__WEBPACK_IMPORTED_MODULE_20__["StanComponent"],
                _stanari_izlistaj_stanare_izlistaj_stanare_component__WEBPACK_IMPORTED_MODULE_21__["IzlistajStanareComponent"],
                _firme_izlistaj_firme_izlistaj_firme_component__WEBPACK_IMPORTED_MODULE_22__["IzlistajFirmeComponent"],
                _institucije_izlistaj_institucije_izlistaj_institucije_component__WEBPACK_IMPORTED_MODULE_23__["IzlistajInstitucijeComponent"],
                _stanar_stanar_component__WEBPACK_IMPORTED_MODULE_24__["StanarComponent"]
            ],
            exports: [_navbar_admin_navbar_admin_component__WEBPACK_IMPORTED_MODULE_10__["NavbarAdminComponent"]],
            imports: [
                _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_9__["PaginacijaModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], AdminKomponenteModule);
    return AdminKomponenteModule;
}());



/***/ }),

/***/ "./src/app/admin-komponente/firme/firme.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin-komponente/firme/firme.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'registracija'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'registracija'\" [class.btn-outline-primary]=\"funkcionalnost !== 'registracija'\"\n            style=\"cursor: pointer;\" (click)=\"clickedFun('registracija')\"><b>Registracija</b></button>\n          </li>\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'pregled'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'pregled'\" [class.btn-outline-primary]=\"funkcionalnost !== 'pregled'\"\n            style=\"cursor: pointer;\" (click)=\"clickedFun('pregled')\"><b>Pregled</b></button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <br>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/firme/firme.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin-komponente/firme/firme.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvZmlybWUvZmlybWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/firme/firme.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin-komponente/firme/firme.component.ts ***!
  \***********************************************************/
/*! exports provided: FirmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmeComponent", function() { return FirmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");



var FirmeComponent = /** @class */ (function () {
    function FirmeComponent(router) {
        this.router = router;
    }
    FirmeComponent.prototype.ngOnInit = function () {
        var url = this.router.url;
        var splitovanUrl = String(url).split("/");
        if (splitovanUrl[splitovanUrl.length - 1] === "firme") {
            this.funkcionalnost = "registracija";
        }
        else {
            this.funkcionalnost = splitovanUrl[splitovanUrl.length - 1];
        }
    };
    FirmeComponent.prototype.clickedFun = function (funkcionalnost) {
        this.funkcionalnost = funkcionalnost;
        this.router.navigate(["/firme/" + funkcionalnost]);
    };
    FirmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firme',
            template: __webpack_require__(/*! ./firme.component.html */ "./src/app/admin-komponente/firme/firme.component.html"),
            styles: [__webpack_require__(/*! ./firme.component.scss */ "./src/app/admin-komponente/firme/firme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FirmeComponent);
    return FirmeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/firme/firme.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin-komponente/firme/firme.routing.ts ***!
  \*********************************************************/
/*! exports provided: firmeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firmeRouting", function() { return firmeRouting; });
/* harmony import */ var _registruj_firmu_registruj_firmu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registruj-firmu/registruj-firmu.component */ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.ts");
/* harmony import */ var _izlistaj_firme_izlistaj_firme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./izlistaj-firme/izlistaj-firme.component */ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.ts");


var firmeRouting = [
    { path: '', component: _registruj_firmu_registruj_firmu_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujFirmuComponent"], pathMatch: 'full' },
    { path: 'registracija', component: _registruj_firmu_registruj_firmu_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujFirmuComponent"] },
    { path: 'pregled', component: _izlistaj_firme_izlistaj_firme_component__WEBPACK_IMPORTED_MODULE_1__["IzlistajFirmeComponent"] }
];


/***/ }),

/***/ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" *ngIf=\"firme !== undefined\">\n    <div class=\"col-md-10\">\n      <div class=\"row\">\n        <label class=\"col-md-1\">Prikazi: </label>\n        <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n        </select>\n        <label class=\"col-md-5\"> </label>\n        <input type=\"text\" class=\"form-control col-md-3\" id=\"filter\" [(ngModel)]=\"filterPolje\" placeholder=\"Unesite naziv ili email\">\n        &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"filtriraj()\">Pretraga</button>\n      </div>\n      <br>\n      <table class=\"table table-hover\" *ngIf=\"firme.length !== 0\">\n        <thead>\n          <tr class=\"table-primary d-flex\">\n            <th class=\"col-md-1\">#</th>\n            <th class=\"col-md-11\">Naziv (email)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-secondary d-flex\" *ngFor=\"let firma of firme; let i = index\">\n            <th class=\"col-md-1\">{{pager.velicinaStrane * (pager.trenutnaStrana - 1) + i+1}}</th>\n            <td class=\"col-md-11\">{{firma.naziv}} <b> ({{firma.email}})</b></td>\n          </tr>\n        </tbody>\n      </table>\n      <h2 *ngIf=\"firme.length === 0\">Nijedna firma sa trazenim kriterijumom nije prondajena!</h2>\n    </div>\n    <div>\n      <app-pager [pager]=\"pager\" (izmenaEvent)=\"izlistajFirme($event)\"></app-pager>\n    </div>\n  </div>\n  \n  <div class=\"row justify-content-md-center\" *ngIf=\"firme !== undefined && firme.length === 0 && !pretraga\">\n    <div class=\"col-md-10\">\n      <div class=\"row\">\n        <h2>Nema registrovanih firmi!</h2>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvZmlybWUvaXpsaXN0YWotZmlybWUvaXpsaXN0YWotZmlybWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IzlistajFirmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlistajFirmeComponent", function() { return IzlistajFirmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");





var IzlistajFirmeComponent = /** @class */ (function () {
    function IzlistajFirmeComponent(route, administratorService, utilService) {
        this.route = route;
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    IzlistajFirmeComponent.prototype.ngOnInit = function () {
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 5,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.izlistajFirme();
        this.pretraga = false;
    };
    IzlistajFirmeComponent.prototype.izlistajFirme = function () {
        var _this = this;
        this.administratorService.getFirme(this.pager.trenutnaStrana - 1, this.pager.velicinaStrane, this.filter).subscribe(function (res) {
            _this.firme = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
            _this.pretraga = true;
        });
    };
    IzlistajFirmeComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izlistajFirme();
    };
    IzlistajFirmeComponent.prototype.filtriraj = function () {
        this.filter = this.filterPolje;
        this.pager.trenutnaStrana = 1;
        this.izlistajFirme();
    };
    IzlistajFirmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izlistaj-firme',
            template: __webpack_require__(/*! ./izlistaj-firme.component.html */ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.html"),
            styles: [__webpack_require__(/*! ./izlistaj-firme.component.scss */ "./src/app/admin-komponente/firme/izlistaj-firme/izlistaj-firme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], IzlistajFirmeComponent);
    return IzlistajFirmeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <form class=\"col-md-6 box\" [formGroup]=\"form\" (ngSubmit)=\"registrujFirmu()\">\n    <fieldset>\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"control-label col-md-3\"><b>Email</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [formControl]=\"form.controls['email']\" \n          [class.is-invalid]=\"!form.controls['email'].valid && (form.controls['email'].touched || form.controls['email'].dirty)\">\n          <div *ngIf=\"form.controls['email'].hasError('required') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['email'].hasError('pattern') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Neispravna email adresa!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"lozinka\" class=\"control-label col-md-3\"><b>Lozinka</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"lozinka\" name=\"lozinka\" placeholder=\"Lozinka\" [formControl]=\"form.controls['lozinka']\" \n          [class.is-invalid]=\"!form.controls['lozinka'].valid && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\">\n          <div *ngIf=\"form.controls['lozinka'].hasError('required') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['lozinka'].hasError('pattern') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Neispravna lozinka!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"naziv\" class=\"control-label col-md-3\"><b>Naziv</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"naziv\" name=\"naziv\" placeholder=\"Naziv\" [formControl]=\"form.controls['naziv']\" \n          [class.is-invalid]=\"!form.controls['naziv'].valid && (form.controls['naziv'].touched || form.controls['naziv'].dirty)\">\n          <div *ngIf=\"!form.controls['naziv'].valid && (form.controls['naziv'].touched || form.controls['naziv'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"mesto\" class=\"control-label col-md-3\"><b>Mesto</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"mesto\" name=\"mesto\" placeholder=\"Mesto\" [formControl]=\"form.controls['mesto']\"\n          [class.is-invalid]=\"!form.controls['mesto'].valid && (form.controls['mesto'].touched || form.controls['mesto'].dirty)\">\n          <div *ngIf=\"!form.controls['mesto'].valid && (form.controls['mesto'].touched || form.controls['mesto'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"ulica\" class=\"control-label col-md-3\"><b>Ulica</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"ulica\" name=\"ulica\" placeholder=\"Ulica\" [formControl]=\"form.controls['ulica']\"\n          [class.is-invalid]=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\">\n          <div *ngIf=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"broj\" class=\"control-label col-md-3\"><b>Broj</b><br></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control col-md-5\" id=\"broj\" name=\"broj\" placeholder=\"Broj\" maxlength=\"3\" \n          [formControl]=\"form.controls['broj']\" (keypress)=\"onlyNumber($event)\" \n          [class.is-invalid]=\"!form.controls['broj'].valid && (form.controls['broj'].touched || form.controls['broj'].dirty)\">\n          <div *ngIf=\"form.controls['broj'].hasError('required') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['broj'].hasError('min') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Broj mora biti pozitivan!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"brojTelefona\" class=\"control-label col-md-3\"><b>Broj telefona</b><br></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"brojTelefona\" name=\"brojTelefona\" placeholder=\"Broj telefona\" \n          [formControl]=\"form.controls['brojTelefona']\" (keypress)=\"onlyNumber($event)\" maxlength=\"12\"\n          [class.is-invalid]=\"!form.controls['brojTelefona'].valid \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\">\n          <div *ngIf=\"form.controls['brojTelefona'].hasError('required') \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['brojTelefona'].hasError('minlength') \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\" \n          class=\"invalid-feedback\">Broj mora imati najmanje 9 cifara!</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Registrujte</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Resetujte</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvZmlybWUvcmVnaXN0cnVqLWZpcm11L3JlZ2lzdHJ1ai1maXJtdS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrujFirmuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrujFirmuComponent", function() { return RegistrujFirmuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var RegistrujFirmuComponent = /** @class */ (function () {
    function RegistrujFirmuComponent(fb, toastrService, administratorService) {
        this.toastrService = toastrService;
        this.administratorService = administratorService;
        this.emailPattern2 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.lozinkaPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$";
        this.form = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)])],
            'lozinka': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.lozinkaPattern)])],
            'naziv': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'mesto': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'ulica': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'broj': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])],
            'brojTelefona': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])]
        });
    }
    RegistrujFirmuComponent.prototype.ngOnInit = function () {
    };
    RegistrujFirmuComponent.prototype.onlyNumber = function (event) {
        if (event.charCode > 31 && (event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))) {
            return event.preventDefault();
        }
    };
    RegistrujFirmuComponent.prototype.registrujFirmu = function () {
        var _this = this;
        var adresa = this.form.value.ulica + ' ' + this.form.value.broj + ', ' + this.form.value.mesto;
        var firma = {
            email: this.form.value.email,
            lozinka: this.form.value.lozinka,
            naziv: this.form.value.naziv,
            adresa: adresa,
            brojTelefona: this.form.value.brojTelefona
        };
        this.administratorService.registrujFirmu(firma).subscribe(function (data) {
            if (data.id !== null) {
                _this.toastrService.success("Uspesno ste registrovali firmu!");
                _this.form.reset();
            }
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    RegistrujFirmuComponent.prototype.reset = function () {
        this.form.reset();
    };
    RegistrujFirmuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registruj-firmu',
            template: __webpack_require__(/*! ./registruj-firmu.component.html */ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.html"),
            styles: [__webpack_require__(/*! ./registruj-firmu.component.scss */ "./src/app/admin-komponente/firme/registruj-firmu/registruj-firmu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"]])
    ], RegistrujFirmuComponent);
    return RegistrujFirmuComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/institucije/institucije.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/institucije.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'registracija'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'registracija'\" [class.btn-outline-primary]=\"funkcionalnost !== 'registracija'\"\n            style=\"cursor: pointer;\" (click)=\"clickedFun('registracija')\"><b>Registracija</b></button>\n          </li>\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'pregled'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'pregled'\" [class.btn-outline-primary]=\"funkcionalnost !== 'pregled'\"\n            style=\"cursor: pointer;\" (click)=\"clickedFun('pregled')\"><b>Pregled</b></button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <br>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/institucije.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/institucije.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvaW5zdGl0dWNpamUvaW5zdGl0dWNpamUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/institucije.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/institucije.component.ts ***!
  \***********************************************************************/
/*! exports provided: InstitucijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucijeComponent", function() { return InstitucijeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");



var InstitucijeComponent = /** @class */ (function () {
    function InstitucijeComponent(router) {
        this.router = router;
    }
    InstitucijeComponent.prototype.ngOnInit = function () {
        var url = this.router.url;
        var splitovanUrl = String(url).split("/");
        if (splitovanUrl[splitovanUrl.length - 1] === "institucije") {
            this.funkcionalnost = "registracija";
        }
        else {
            this.funkcionalnost = splitovanUrl[splitovanUrl.length - 1];
        }
    };
    InstitucijeComponent.prototype.clickedFun = function (funkcionalnost) {
        this.funkcionalnost = funkcionalnost;
        this.router.navigate(["/institucije/" + funkcionalnost]);
    };
    InstitucijeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-institucije',
            template: __webpack_require__(/*! ./institucije.component.html */ "./src/app/admin-komponente/institucije/institucije.component.html"),
            styles: [__webpack_require__(/*! ./institucije.component.scss */ "./src/app/admin-komponente/institucije/institucije.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InstitucijeComponent);
    return InstitucijeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/institucije/institucije.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/institucije.routing.ts ***!
  \*********************************************************************/
/*! exports provided: institucijeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "institucijeRouting", function() { return institucijeRouting; });
/* harmony import */ var _registruj_instituciju_registruj_instituciju_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registruj-instituciju/registruj-instituciju.component */ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.ts");
/* harmony import */ var _izlistaj_institucije_izlistaj_institucije_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./izlistaj-institucije/izlistaj-institucije.component */ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.ts");


var institucijeRouting = [
    { path: '', component: _registruj_instituciju_registruj_instituciju_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujInstitucijuComponent"], pathMatch: 'full' },
    { path: 'registracija', component: _registruj_instituciju_registruj_instituciju_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujInstitucijuComponent"] },
    { path: 'pregled', component: _izlistaj_institucije_izlistaj_institucije_component__WEBPACK_IMPORTED_MODULE_1__["IzlistajInstitucijeComponent"] }
];


/***/ }),

/***/ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" *ngIf=\"institucije !== undefined\">\n    <div class=\"col-md-10\">\n      <div class=\"row\">\n        <label class=\"col-md-1\">Prikazi: </label>\n        <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n        </select>\n        <label class=\"col-md-5\"> </label>\n        <input type=\"text\" class=\"form-control col-md-3\" id=\"filter\" [(ngModel)]=\"filterPolje\" placeholder=\"Unesite naziv ili email\">\n        &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"filtriraj()\">Pretraga</button>\n      </div>\n      <br>\n      <table class=\"table table-hover\" *ngIf=\"institucije.length !== 0\">\n        <thead>\n          <tr class=\"table-primary d-flex\">\n            <th class=\"col-md-1\">#</th>\n            <th class=\"col-md-11\">Naziv (email)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-secondary d-flex\" *ngFor=\"let institucija of institucije; let i = index\">\n            <th class=\"col-md-1\">{{pager.velicinaStrane * (pager.trenutnaStrana - 1) + i+1}}</th>\n            <td class=\"col-md-11\">{{institucija.naziv}} <b> ({{institucija.email}})</b></td>\n          </tr>\n        </tbody>\n      </table>\n      <h2 *ngIf=\"institucije.length === 0\">Nijedna institucija sa trazenim kriterijumom nije prondajena!</h2>\n    </div>\n    <div>\n      <app-pager [pager]=\"pager\" (izmenaEvent)=\"izlistajInstitucije($event)\"></app-pager>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-md-center\" *ngIf=\"institucije !== undefined \n  && institucije.length === 0 && !pretraga\">\n    <div class=\"col-md-10\">\n      <div class=\"row\">\n        <h2>Nema registrovanih institucija!</h2>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvaW5zdGl0dWNpamUvaXpsaXN0YWotaW5zdGl0dWNpamUvaXpsaXN0YWotaW5zdGl0dWNpamUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: IzlistajInstitucijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlistajInstitucijeComponent", function() { return IzlistajInstitucijeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");





var IzlistajInstitucijeComponent = /** @class */ (function () {
    function IzlistajInstitucijeComponent(route, administratorService, utilService) {
        this.route = route;
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    IzlistajInstitucijeComponent.prototype.ngOnInit = function () {
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 5,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.izlistajInstitucije();
        this.pretraga = false;
    };
    IzlistajInstitucijeComponent.prototype.izlistajInstitucije = function () {
        var _this = this;
        this.administratorService.getInstitucije(this.pager.trenutnaStrana - 1, this.pager.velicinaStrane, this.filter).subscribe(function (res) {
            _this.institucije = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
            _this.pretraga = true;
        });
    };
    IzlistajInstitucijeComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izlistajInstitucije();
    };
    IzlistajInstitucijeComponent.prototype.filtriraj = function () {
        this.filter = this.filterPolje;
        this.pager.trenutnaStrana = 1;
        this.izlistajInstitucije();
    };
    IzlistajInstitucijeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izlistaj-institucije',
            template: __webpack_require__(/*! ./izlistaj-institucije.component.html */ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.html"),
            styles: [__webpack_require__(/*! ./izlistaj-institucije.component.scss */ "./src/app/admin-komponente/institucije/izlistaj-institucije/izlistaj-institucije.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], IzlistajInstitucijeComponent);
    return IzlistajInstitucijeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <form class=\"col-md-6 box\" [formGroup]=\"form\" (ngSubmit)=\"registrujInstituciju()\">\n    <fieldset>\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"control-label col-md-3\"><b>Email</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [formControl]=\"form.controls['email']\" \n          [class.is-invalid]=\"!form.controls['email'].valid && (form.controls['email'].touched || form.controls['email'].dirty)\">\n          <div *ngIf=\"form.controls['email'].hasError('required') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['email'].hasError('pattern') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Neispravna email adresa!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"lozinka\" class=\"control-label col-md-3\"><b>Lozinka</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"lozinka\" name=\"lozinka\" placeholder=\"Lozinka\" [formControl]=\"form.controls['lozinka']\" \n          [class.is-invalid]=\"!form.controls['lozinka'].valid && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\">\n          <div *ngIf=\"form.controls['lozinka'].hasError('required') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['lozinka'].hasError('pattern') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Neispravna lozinka!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"naziv\" class=\"control-label col-md-3\"><b>Naziv</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"naziv\" name=\"naziv\" placeholder=\"Naziv\" [formControl]=\"form.controls['naziv']\" \n          [class.is-invalid]=\"!form.controls['naziv'].valid && (form.controls['naziv'].touched || form.controls['naziv'].dirty)\">\n          <div *ngIf=\"!form.controls['naziv'].valid && (form.controls['naziv'].touched || form.controls['naziv'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"mesto\" class=\"control-label col-md-3\"><b>Mesto</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"mesto\" name=\"mesto\" placeholder=\"Mesto\" [formControl]=\"form.controls['mesto']\"\n          [class.is-invalid]=\"!form.controls['mesto'].valid && (form.controls['mesto'].touched || form.controls['mesto'].dirty)\">\n          <div *ngIf=\"!form.controls['mesto'].valid && (form.controls['mesto'].touched || form.controls['mesto'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"ulica\" class=\"control-label col-md-3\"><b>Ulica</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"ulica\" name=\"ulica\" placeholder=\"Ulica\" [formControl]=\"form.controls['ulica']\"\n          [class.is-invalid]=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\">\n          <div *ngIf=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"broj\" class=\"control-label col-md-3\"><b>Broj</b><br></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control col-md-5\" id=\"broj\" name=\"broj\" placeholder=\"Broj\" maxlength=\"3\" \n          [formControl]=\"form.controls['broj']\" (keypress)=\"onlyNumber($event)\" \n          [class.is-invalid]=\"!form.controls['broj'].valid && (form.controls['broj'].touched || form.controls['broj'].dirty)\">\n          <div *ngIf=\"form.controls['broj'].hasError('required') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['broj'].hasError('min') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Broj mora biti pozitivan!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"brojTelefona\" class=\"control-label col-md-3\"><b>Broj telefona</b><br></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"brojTelefona\" name=\"brojTelefona\" placeholder=\"Broj telefona\" \n          [formControl]=\"form.controls['brojTelefona']\" (keypress)=\"onlyNumber($event)\" maxlength=\"12\"\n          [class.is-invalid]=\"!form.controls['brojTelefona'].valid \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\">\n          <div *ngIf=\"form.controls['brojTelefona'].hasError('required') \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['brojTelefona'].hasError('minlength') \n          && (form.controls['brojTelefona'].touched || form.controls['brojTelefona'].dirty)\" \n          class=\"invalid-feedback\">Broj mora imati najmanje 9 cifara!</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Registrujte</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Resetujte</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvaW5zdGl0dWNpamUvcmVnaXN0cnVqLWluc3RpdHVjaWp1L3JlZ2lzdHJ1ai1pbnN0aXR1Y2lqdS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RegistrujInstitucijuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrujInstitucijuComponent", function() { return RegistrujInstitucijuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var RegistrujInstitucijuComponent = /** @class */ (function () {
    function RegistrujInstitucijuComponent(fb, toastrService, administratorService) {
        this.toastrService = toastrService;
        this.administratorService = administratorService;
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.lozinkaPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$";
        this.form = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)])],
            'lozinka': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.lozinkaPattern)])],
            'naziv': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'mesto': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'ulica': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'broj': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])],
            'brojTelefona': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)])]
        });
    }
    RegistrujInstitucijuComponent.prototype.ngOnInit = function () {
    };
    RegistrujInstitucijuComponent.prototype.onlyNumber = function (event) {
        if (event.charCode > 31 && (event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))) {
            return event.preventDefault();
        }
    };
    RegistrujInstitucijuComponent.prototype.registrujInstituciju = function () {
        var _this = this;
        var lokacija = this.form.value.ulica + ' ' + this.form.value.broj + ', ' + this.form.value.mesto;
        var institucija = {
            email: this.form.value.email,
            lozinka: this.form.value.lozinka,
            naziv: this.form.value.naziv,
            lokacija: lokacija,
            brojTelefona: this.form.value.brojTelefona
        };
        this.administratorService.registrujInstituciju(institucija).subscribe(function (data) {
            if (data.id !== null) {
                _this.toastrService.success("Uspesno ste registrovali instituciju!");
                _this.form.reset();
            }
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    RegistrujInstitucijuComponent.prototype.reset = function () {
        this.form.reset();
    };
    RegistrujInstitucijuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registruj-instituciju',
            template: __webpack_require__(/*! ./registruj-instituciju.component.html */ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.html"),
            styles: [__webpack_require__(/*! ./registruj-instituciju.component.scss */ "./src/app/admin-komponente/institucije/registruj-instituciju/registruj-instituciju.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"]])
    ], RegistrujInstitucijuComponent);
    return RegistrujInstitucijuComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin-komponente/navbar-admin/navbar-admin.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/pocetna']\">Pocetna</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/zgrade']\">Zgrade</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/stanari']\">Stanari</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/institucije']\">Institucije</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/firme']\">Firme</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right btn-outline-primary\">\n      <li>\n        <label class=\"nav-link active\">{{email}}&nbsp;&nbsp;&nbsp;</label>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary\" (click)=\"odjavljivanje()\">Izlogujte se</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin-komponente/navbar-admin/navbar-admin.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvbmF2YmFyLWFkbWluL25hdmJhci1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin-komponente/navbar-admin/navbar-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdminComponent", function() { return NavbarAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");





var NavbarAdminComponent = /** @class */ (function () {
    function NavbarAdminComponent(router, authenticateService, utilService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.utilService = utilService;
    }
    NavbarAdminComponent.prototype.ngOnInit = function () {
        this.email = this.utilService.email();
    };
    NavbarAdminComponent.prototype.odjavljivanje = function () {
        var _this = this;
        localStorage.removeItem('korisnik');
        this.authenticateService.izlogujSe()
            .subscribe(function (result) {
            if (result) {
                localStorage.removeItem('korisnik');
                _this.router.navigate(['/logovanje']);
            }
        }, function (error) {
            localStorage.removeItem('korisnik');
            _this.router.navigate(['/logovanje']);
            console.log(error);
            /* KASNIJE DODATI OBRADJIVANJE GRESKU */
        });
    };
    NavbarAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-admin',
            template: __webpack_require__(/*! ./navbar-admin.component.html */ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.html"),
            styles: [__webpack_require__(/*! ./navbar-admin.component.scss */ "./src/app/admin-komponente/navbar-admin/navbar-admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stan/stan.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin-komponente/stan/stan.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-8\">\n    <h2>Stan</h2>\n    <h5 *ngIf=\"zgrada\"><b>Adresa zgrade: </b>{{zgrada.ulica}} {{zgrada.broj}}, {{zgrada.lokacija}}</h5>\n    <div class=\"row\" *ngIf=\"stan && stan.vlasnik\">\n      <h5 class=\"col-md-10\">\n        <b>Vlasnik: </b><a routerLink=\"/stanar/{{stan.vlasnik.id}}\">{{stan.vlasnik.naziv}} </a> ({{stan.vlasnik.email}})\n      </h5>\n      <div class=\"btn-group col-md-2\">\n        <button class=\"btn btn-danger\" id=\"ukloniVlasnika\" (click)=\"ukloniVlasnika()\">Ukloni</button>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"stan && !stan.vlasnik\">\n      <h5 class=\"col-md-12\"><b>Vlasnik: </b>Nema vlasnika</h5>\n    </div>\n    <br>\n    <h4>Stanari: <div *ngIf=\"stanari && stanari.length === 0\">Nema useljenih stanara!</div></h4>\n    <table class=\"table table-hover\" id=\"stanari\" *ngIf=\"stanari && stanari.length !== 0\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\">#</th>\n          <th class=\"col-md-5\">Stanar</th>\n          <th class=\"col-md-6\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stanar of stanari; let i = index\">\n          <th class=\"col-md-1\">{{i+1}}</th>\n          <td class=\"col-md-5\">\n            <a routerLink=\"/stanar/{{stanar.id}}\">{{stanar.naziv}} </a><b> ({{stanar.email}})</b></td>\n          <td class=\"col-md-6\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\" (click)=\"postaviPredsednika(stanar.id)\" [disabled]=\"zgrada && zgrada.predsednikSkupstine\">\n              Postavi za predsednika</button>&nbsp;\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\" (click)=\"postaviVlasnika(stanar.id)\">Postavi za vlasnika</button>&nbsp;\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-danger\" (click)=\"ukloniStanara(stanar.id)\">Ukloni</button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-md-8\">\n    <h3>&nbsp;</h3>\n    <h4>Korsinici:</h4>\n    <div class=\"row\">\n      <label class=\"col-md-1\">Prikazi: </label>\n      <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n        <option value=\"5\">5</option>\n        <option value=\"10\">10</option>\n        <option value=\"25\">25</option>\n        <option value=\"50\">50</option>\n      </select>\n      <label class=\"col-md-5\"> </label>\n      <input type=\"text\" class=\"form-control col-md-3\" id=\"filter\" [(ngModel)]=\"filterPolje\" placeholder=\"Unesite ime, prezime ili email\">\n      &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"filtriraj()\">Filtriraj</button>\n    </div>\n    <br>\n    <table class=\"table table-hover\" id=\"korisnici\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\">#</th>\n          <th class=\"col-md-6\">Stanar</th>\n          <th class=\"col-md-5\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stanar of korisnici; let i = index\">\n          <th class=\"col-md-1\">{{i+1}}</th>\n          <td class=\"col-md-6\">\n            <p><a routerLink=\"/stanar/{{stanar.id}}\">{{stanar.naziv}} </a><b> ({{stanar.email}})</b></p>\n          </td>\n          <td class=\"col-md-5\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\" (click)=\"postaviVlasnika(stanar.id)\">Postavi za vlasnika</button>&nbsp;\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\" [disabled]=\"stanar.useljen\" (click)=\"dodajStanara(stanar.id)\">Dodaj u stanare</button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-4\">\n    <app-pager [pager]=\"pager\" (izmenaEvent)=\"getKorisnici($event)\"></app-pager>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/stan/stan.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin-komponente/stan/stan.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvc3Rhbi9zdGFuLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-komponente/stan/stan.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin-komponente/stan/stan.component.ts ***!
  \*********************************************************/
/*! exports provided: StanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StanComponent", function() { return StanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var StanComponent = /** @class */ (function () {
    function StanComponent(route, zgradaService, toastrService, administratorService, utilService) {
        this.route = route;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    StanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 5,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.route.params.subscribe(function (params) {
            _this.id = Number(params['id']);
            _this.getStan();
        });
    };
    StanComponent.prototype.getStan = function () {
        var _this = this;
        this.zgradaService.getStan(this.id).subscribe(function (data) {
            _this.stan = data;
            _this.getZgrada();
            _this.getStanari();
        });
    };
    StanComponent.prototype.getZgrada = function () {
        var _this = this;
        this.zgradaService.getZgrada(this.stan.zgradaId).subscribe(function (data) { return _this.zgrada = data; });
    };
    StanComponent.prototype.getStanari = function () {
        var _this = this;
        this.zgradaService.getStanareStana(this.stan.id).subscribe(function (data) {
            _this.stanari = data;
            _this.getKorisnici();
        });
    };
    StanComponent.prototype.getKorisnici = function () {
        var _this = this;
        this.administratorService.getStanari(this.pager.trenutnaStrana - 1, this.pager.velicinaStrane, this.filter).subscribe(function (res) {
            _this.korisnici = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
            for (var i in _this.korisnici) {
                _this.korisnici[i].useljen = false;
                for (var j in _this.stanari) {
                    if (_this.korisnici[i].email === _this.stanari[j].email) {
                        _this.korisnici[i].useljen = true;
                        break;
                    }
                }
            }
        });
    };
    StanComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.getKorisnici();
    };
    StanComponent.prototype.filtriraj = function () {
        this.filter = this.filterPolje;
        this.pager.trenutnaStrana = 1;
        this.getKorisnici();
    };
    StanComponent.prototype.postaviVlasnika = function (stanarId) {
        var _this = this;
        this.administratorService.postaviVlasnika(stanarId, this.stan.id).subscribe(function (data) {
            _this.getStan();
            _this.toastrService.success("Uspesno ste postavili vlasnika!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    StanComponent.prototype.ukloniVlasnika = function () {
        var _this = this;
        this.administratorService.ukloniVlasnika(this.stan.id).subscribe(function (data) {
            _this.getStan();
            _this.toastrService.success("Uspesno ste uklonili vlasnika!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    StanComponent.prototype.dodajStanara = function (stanarId) {
        var _this = this;
        this.administratorService.dodajStanara(stanarId, this.stan.id).subscribe(function (data) {
            _this.getStanari();
            _this.toastrService.success("Uspesno ste dodali stanara!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    StanComponent.prototype.ukloniStanara = function (stanarId) {
        var _this = this;
        this.administratorService.ukloniStanara(stanarId, this.stan.id).subscribe(function (data) {
            _this.getStanari();
            _this.getZgrada();
            _this.toastrService.success("Uspesno ste uklonili stanara!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    StanComponent.prototype.postaviPredsednika = function (stanarId) {
        var _this = this;
        this.administratorService.postaviPredsednika(stanarId).subscribe(function (data) {
            _this.zgrada = data;
            _this.toastrService.success("Uspesno ste postavili predsednika zgrade!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    StanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stan',
            template: __webpack_require__(/*! ./stan.component.html */ "./src/app/admin-komponente/stan/stan.component.html"),
            styles: [__webpack_require__(/*! ./stan.component.scss */ "./src/app/admin-komponente/stan/stan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_5__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], StanComponent);
    return StanComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stanar/stanar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin-komponente/stanar/stanar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-8\" *ngIf=\"stanar\">\n    <h2>Stanar</h2>\n    <h5><b>Ime i prezime: </b>{{stanar.naziv}}</h5>\n    <h5><b>Stan u kom stanuje: </b><span *ngIf=\"stanovi && stanovi.stanuje.length === 0\">Stanar nije useljen ni u jedan stan!</span></h5>\n    <table class=\"table table-hover\" id=\"stan\" *ngIf=\"stanovi && stanovi.stanuje.length !== 0\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\"></th>\n          <th class=\"col-md-9\">Zgrada</th>\n          <th class=\"col-md-2\">Stan broj</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stan of stanovi.stanuje\">\n          <th class=\"col-md-1\"></th>\n          <td class=\"col-md-9\" *ngIf=\"stan.zgrada\">\n            <a routerLink=\"/zgrada/{{stan.zgradaId}}\">{{stan.zgrada.ulica}} {{stan.zgrada.broj}}, {{stan.zgrada.lokacija}} </a></td>\n          <td class=\"col-md-2\">\n            <a routerLink=\"/stan/{{stan.id}}\">{{stan.broj}}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <h4>&nbsp;</h4>\n    <h5><b>Stanovi u kojima je vlasnik: </b><span *ngIf=\"stanovi && stanovi.vlasnik.length === 0\">Stanar nije vlasnik nijedanog stana!</span></h5>\n    <table class=\"table table-hover\" id=\"vlasnikStanova\" *ngIf=\"stanovi && stanovi.vlasnik.length !== 0\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\">#</th>\n          <th class=\"col-md-9\">Zgrada</th>\n          <th class=\"col-md-2\">Stan broj</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stan of stanovi.vlasnik; let i = index\">\n          <th class=\"col-md-1\">{{i+1}}</th>\n          <td class=\"col-md-9\" *ngIf=\"stan.zgrada\">\n            <a routerLink=\"/zgrada/{{stan.zgradaId}}\">{{stan.zgrada.ulica}} {{stan.zgrada.broj}}, {{stan.zgrada.lokacija}} </a></td>\n          <td class=\"col-md-2\">\n            <a routerLink=\"/stan/{{stan.id}}\">{{stan.broj}}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-komponente/stanar/stanar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin-komponente/stanar/stanar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvc3RhbmFyL3N0YW5hci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/stanar/stanar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-komponente/stanar/stanar.component.ts ***!
  \*************************************************************/
/*! exports provided: StanarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StanarComponent", function() { return StanarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");





var StanarComponent = /** @class */ (function () {
    function StanarComponent(route, administratorService, zgradaService) {
        this.route = route;
        this.administratorService = administratorService;
        this.zgradaService = zgradaService;
    }
    StanarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params['id']);
            _this.getStanar();
        });
    };
    StanarComponent.prototype.getStanar = function () {
        var _this = this;
        this.administratorService.getStanar(this.id).subscribe(function (data) {
            _this.stanar = data;
            _this.getZgradeStanara();
        });
    };
    StanarComponent.prototype.getZgradeStanara = function () {
        var _this = this;
        this.administratorService.getStanoviStanara(this.stanar.id).subscribe(function (data) {
            _this.stanovi = data;
            if (_this.stanovi['stanuje'].length !== 0) {
                _this.getZgrada(_this.stanovi['stanuje'][0]);
            }
            for (var _i = 0, _a = _this.stanovi['vlasnik']; _i < _a.length; _i++) {
                var stan = _a[_i];
                _this.getZgrada(stan);
            }
        });
    };
    StanarComponent.prototype.getZgrada = function (stan) {
        this.zgradaService.getZgrada(stan.zgradaId).subscribe(function (data) { return stan.zgrada = data; });
    };
    StanarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stanar',
            template: __webpack_require__(/*! ./stanar.component.html */ "./src/app/admin-komponente/stanar/stanar.component.html"),
            styles: [__webpack_require__(/*! ./stanar.component.scss */ "./src/app/admin-komponente/stanar/stanar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__["ZgradaService"]])
    ], StanarComponent);
    return StanarComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" *ngIf=\"stanari !== undefined\">\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <label class=\"col-md-1\">Prikazi: </label>\n      <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n        <option value=\"5\">5</option>\n        <option value=\"10\">10</option>\n        <option value=\"25\">25</option>\n        <option value=\"50\">50</option>\n      </select>\n      <label class=\"col-md-5\"> </label>\n      <input type=\"text\" class=\"form-control col-md-3\" id=\"filter\" [(ngModel)]=\"filterPolje\" placeholder=\"Unesite ime, prezime ili email\">\n      &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"filtriraj()\">Pretraga</button>\n    </div>\n    <br>\n    <table class=\"table table-hover\" *ngIf=\"stanari.length !== 0\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\">#</th>\n          <th class=\"col-md-11\">Ime i prezime (email)</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stanar of stanari; let i = index\">\n          <th class=\"col-md-1\">{{pager.velicinaStrane * (pager.trenutnaStrana - 1) + i+1}}</th>\n          <td class=\"col-md-11\">\n              <a routerLink=\"/stanar/{{stanar.id}}\">{{stanar.naziv}} </a><b> ({{stanar.email}})</b>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <h2 *ngIf=\"stanari.length === 0\">Nijedan stanar sa trazenim kriterijumom nije prondajen!</h2>\n  </div>\n  <div>\n    <app-pager [pager]=\"pager\" (izmenaEvent)=\"izlistajStanare($event)\"></app-pager>\n  </div>\n</div>\n\n<div class=\"row justify-content-md-center\" *ngIf=\"stanari !== undefined && stanari.length === 0 && !pretraga\">\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <h2>Nema registrovanih stanara!</h2>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvc3RhbmFyaS9pemxpc3Rhai1zdGFuYXJlL2l6bGlzdGFqLXN0YW5hcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IzlistajStanareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlistajStanareComponent", function() { return IzlistajStanareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");





var IzlistajStanareComponent = /** @class */ (function () {
    function IzlistajStanareComponent(route, administratorService, utilService) {
        this.route = route;
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    IzlistajStanareComponent.prototype.ngOnInit = function () {
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 5,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.izlistajStanare();
        this.pretraga = false;
    };
    IzlistajStanareComponent.prototype.izlistajStanare = function () {
        var _this = this;
        this.administratorService.getStanari(this.pager.trenutnaStrana - 1, this.pager.velicinaStrane, this.filter).subscribe(function (res) {
            _this.stanari = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
            _this.pretraga = true;
        });
    };
    IzlistajStanareComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izlistajStanare();
    };
    IzlistajStanareComponent.prototype.filtriraj = function () {
        this.filter = this.filterPolje;
        this.pager.trenutnaStrana = 1;
        this.izlistajStanare();
    };
    IzlistajStanareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izlistaj-stanare',
            template: __webpack_require__(/*! ./izlistaj-stanare.component.html */ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.html"),
            styles: [__webpack_require__(/*! ./izlistaj-stanare.component.scss */ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], IzlistajStanareComponent);
    return IzlistajStanareComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <form class=\"col-md-6 box\" [formGroup]=\"form\" (ngSubmit)=\"registrujStanara()\">\n    <fieldset>\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"control-label col-md-3\"><b>Email</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [formControl]=\"form.controls['email']\" \n          [class.is-invalid]=\"!form.controls['email'].valid && (form.controls['email'].touched || form.controls['email'].dirty)\">\n          <div *ngIf=\"form.controls['email'].hasError('required') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['email'].hasError('pattern') && (form.controls['email'].touched || form.controls['email'].dirty)\" \n          class=\"invalid-feedback\">Neispravna email adresa!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"lozinka\" class=\"control-label col-md-3\"><b>Lozinka</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"lozinka\" name=\"lozinka\" placeholder=\"Lozinka\" [formControl]=\"form.controls['lozinka']\" \n          [class.is-invalid]=\"!form.controls['lozinka'].valid && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\">\n          <div *ngIf=\"form.controls['lozinka'].hasError('required') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['lozinka'].hasError('pattern') && (form.controls['lozinka'].touched || form.controls['lozinka'].dirty)\" \n          class=\"invalid-feedback\">Neispravna lozinka!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"ime\" class=\"control-label col-md-3\"><b>Ime</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"ime\" name=\"ime\" placeholder=\"Ime\" [formControl]=\"form.controls['ime']\"\n          [class.is-invalid]=\"!form.controls['ime'].valid && (form.controls['ime'].touched || form.controls['ime'].dirty)\">\n          <div *ngIf=\"!form.controls['ime'].valid && (form.controls['ime'].touched || form.controls['ime'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"prezime\" class=\"control-label col-md-3\"><b>Prezime</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"prezime\" name=\"prezime\" placeholder=\"Prezime\" [formControl]=\"form.controls['prezime']\"\n          [class.is-invalid]=\"!form.controls['prezime'].valid && (form.controls['prezime'].touched || form.controls['prezime'].dirty)\">\n          <div *ngIf=\"!form.controls['prezime'].valid && (form.controls['prezime'].touched || form.controls['prezime'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Registrujte</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Resetujte</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvc3RhbmFyaS9yZWdpc3RydWotc3RhbmFyYS9yZWdpc3RydWotc3RhbmFyYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistrujStanaraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrujStanaraComponent", function() { return RegistrujStanaraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var RegistrujStanaraComponent = /** @class */ (function () {
    function RegistrujStanaraComponent(fb, toastrService, administratorService) {
        this.toastrService = toastrService;
        this.administratorService = administratorService;
        this.emailPattern2 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.lozinkaPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$";
        this.form = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)])],
            'lozinka': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.lozinkaPattern)])],
            'ime': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'prezime': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    RegistrujStanaraComponent.prototype.ngOnInit = function () {
    };
    RegistrujStanaraComponent.prototype.onlyNumber = function (event) {
        if (event.charCode > 31 && (event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))) {
            return event.preventDefault();
        }
    };
    RegistrujStanaraComponent.prototype.registrujStanara = function () {
        var _this = this;
        this.administratorService.registrujStanara(this.form.value).subscribe(function (data) {
            if (data.id !== null) {
                _this.toastrService.success("Uspesno ste registrovali stanara!");
                _this.form.reset();
            }
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    RegistrujStanaraComponent.prototype.reset = function () {
        this.form.reset();
    };
    RegistrujStanaraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registruj-stanara',
            template: __webpack_require__(/*! ./registruj-stanara.component.html */ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.html"),
            styles: [__webpack_require__(/*! ./registruj-stanara.component.scss */ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"]])
    ], RegistrujStanaraComponent);
    return RegistrujStanaraComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stanari/stanari.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/stanari.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'registracija'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'registracija'\" [class.btn-outline-primary]=\"funkcionalnost !== 'registracija'\" \n            style=\"cursor: pointer;\" (click)=\"clickedFun('registracija')\"><b>Registracija</b></button>\n          </li>\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'pregled'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'pregled'\" [class.btn-outline-primary]=\"funkcionalnost !== 'pregled'\" \n            style=\"cursor: pointer;\" (click)=\"clickedFun('pregled')\"><b>Pregled</b></button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <br>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/stanari.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/stanari.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvc3RhbmFyaS9zdGFuYXJpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-komponente/stanari/stanari.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/stanari.component.ts ***!
  \***************************************************************/
/*! exports provided: StanariComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StanariComponent", function() { return StanariComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");



var StanariComponent = /** @class */ (function () {
    function StanariComponent(router) {
        this.router = router;
    }
    StanariComponent.prototype.ngOnInit = function () {
        var url = this.router.url;
        var splitovanUrl = String(url).split("/");
        if (splitovanUrl[splitovanUrl.length - 1] === "stanari") {
            this.funkcionalnost = "registracija";
        }
        else {
            this.funkcionalnost = splitovanUrl[splitovanUrl.length - 1];
        }
    };
    StanariComponent.prototype.clickedFun = function (funkcionalnost) {
        this.funkcionalnost = funkcionalnost;
        this.router.navigate(["/stanari/" + funkcionalnost]);
    };
    StanariComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stanari',
            template: __webpack_require__(/*! ./stanari.component.html */ "./src/app/admin-komponente/stanari/stanari.component.html"),
            styles: [__webpack_require__(/*! ./stanari.component.scss */ "./src/app/admin-komponente/stanari/stanari.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StanariComponent);
    return StanariComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/stanari/stanari.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-komponente/stanari/stanari.routing.ts ***!
  \*************************************************************/
/*! exports provided: stanariRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stanariRouting", function() { return stanariRouting; });
/* harmony import */ var _registruj_stanara_registruj_stanara_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registruj-stanara/registruj-stanara.component */ "./src/app/admin-komponente/stanari/registruj-stanara/registruj-stanara.component.ts");
/* harmony import */ var _izlistaj_stanare_izlistaj_stanare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./izlistaj-stanare/izlistaj-stanare.component */ "./src/app/admin-komponente/stanari/izlistaj-stanare/izlistaj-stanare.component.ts");


var stanariRouting = [
    { path: '', component: _registruj_stanara_registruj_stanara_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujStanaraComponent"], pathMatch: 'full' },
    { path: 'registracija', component: _registruj_stanara_registruj_stanara_component__WEBPACK_IMPORTED_MODULE_0__["RegistrujStanaraComponent"] },
    { path: 'pregled', component: _izlistaj_stanare_izlistaj_stanare_component__WEBPACK_IMPORTED_MODULE_1__["IzlistajStanareComponent"] }
];


/***/ }),

/***/ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <form class=\"col-md-6 box\" [formGroup]=\"form\" (ngSubmit)=\"dodajZgradu()\">\n    <fieldset>\n      <div class=\"form-group row\">\n        <label for=\"mesto\" class=\"control-label col-md-3\"><b>Mesto</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"mesto\" name=\"mesto\" placeholder=\"Mesto\" [formControl]=\"form.controls['lokacija']\"\n          [class.is-invalid]=\"!form.controls['lokacija'].valid && (form.controls['lokacija'].touched || form.controls['lokacija'].dirty)\">\n          <div *ngIf=\"!form.controls['lokacija'].valid && (form.controls['lokacija'].touched || form.controls['lokacija'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"ulica\" class=\"control-label col-md-3\"><b>Ulica</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" id=\"ulica\" name=\"ulica\" placeholder=\"Ulica\" [formControl]=\"form.controls['ulica']\"\n          [class.is-invalid]=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\">\n          <div *ngIf=\"!form.controls['ulica'].valid && (form.controls['ulica'].touched || form.controls['ulica'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"broj\" class=\"control-label col-md-3\"><b>Broj</b><br></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control col-md-5\" id=\"broj\" name=\"broj\" placeholder=\"Broj\" maxlength=\"3\" \n          [formControl]=\"form.controls['broj']\" (keypress)=\"onlyNumber($event)\" \n          [class.is-invalid]=\"!form.controls['broj'].valid && (form.controls['broj'].touched || form.controls['broj'].dirty)\">\n          <div *ngIf=\"form.controls['broj'].hasError('required') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['broj'].hasError('min') && (form.controls['broj'].touched || form.controls['broj'].dirty)\" \n          class=\"invalid-feedback\">Broj mora biti pozitivan!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"brojStanova\" class=\"control-label col-md-3\"><b>Broj stanova</b></label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control col-md-5\" id=\"brojStanova\" name=\"brojStanova\" placeholder=\"Broj stanova\" maxlength=\"3\" \n          [formControl]=\"form.controls['brojStanova']\" (keypress)=\"onlyNumber($event)\"\n          [class.is-invalid]=\"!form.controls['brojStanova'].valid && (form.controls['brojStanova'].touched || form.controls['brojStanova'].dirty)\">\n          <div *ngIf=\"form.controls['brojStanova'].hasError('required') && (form.controls['brojStanova'].touched || form.controls['brojStanova'].dirty)\" \n          class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          <div *ngIf=\"form.controls['brojStanova'].hasError('min') && (form.controls['brojStanova'].touched || form.controls['brojStanova'].dirty)\" \n          class=\"invalid-feedback\">Broj mora biti pozitivan!</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-9\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Dodajte</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Resetujte</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvemdyYWRlL2RvZGFqLXpncmFkdS9kb2Rhai16Z3JhZHUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.ts ***!
  \********************************************************************************/
/*! exports provided: DodajZgraduComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajZgraduComponent", function() { return DodajZgraduComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var DodajZgraduComponent = /** @class */ (function () {
    function DodajZgraduComponent(fb, administratorService, toastrService) {
        this.administratorService = administratorService;
        this.toastrService = toastrService;
        this.form = fb.group({
            'lokacija': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'ulica': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'broj': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)])],
            'brojStanova': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)])]
        });
    }
    DodajZgraduComponent.prototype.ngOnInit = function () {
    };
    DodajZgraduComponent.prototype.onlyNumber = function (event) {
        if (event.charCode > 31 && (event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))) {
            return event.preventDefault();
        }
    };
    DodajZgraduComponent.prototype.dodajZgradu = function () {
        var _this = this;
        this.administratorService.dodajZgradu(this.form.value).subscribe(function (data) {
            if (data.id !== null) {
                _this.toastrService.success("Uspesno ste dodali zgradu!");
                _this.form.reset();
            }
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    DodajZgraduComponent.prototype.reset = function () {
        this.form.reset();
    };
    DodajZgraduComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-zgradu',
            template: __webpack_require__(/*! ./dodaj-zgradu.component.html */ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.html"),
            styles: [__webpack_require__(/*! ./dodaj-zgradu.component.scss */ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], DodajZgraduComponent);
    return DodajZgraduComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" *ngIf=\"zgrade !== undefined\">\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <label class=\"col-md-1\">Prikazi: </label>\n      <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n        <option value=\"5\">5</option>\n        <option value=\"10\">10</option>\n        <option value=\"25\">25</option>\n        <option value=\"50\">50</option>\n      </select>\n      <label class=\"col-md-3\"> </label>\n      <input type=\"text\" class=\"form-control col-md-3\" id=\"ulicaBroj\" [(ngModel)]=\"ulicaBrojPolje\" placeholder=\"Unesite ulicu i/ili broj\">\n      &nbsp;&nbsp;<input type=\"text\" class=\"form-control col-md-2\" id=\"mesto\" [(ngModel)]=\"mestoPolje\" placeholder=\"Unesite grad\">\n      &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"filtriraj()\">Pretraga</button>\n    </div>\n    <br>\n    <table class=\"table table-hover\" *ngIf=\"zgrade.length !== 0\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-1\"></th>\n          <th class=\"col-md-6\">Adresa</th>\n          <th class=\"col-md-3\">Predsednik zgrade</th>\n          <th class=\"col-md-2\">Broj stanova</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let zgrada of zgrade; let i = index\">\n          <th class=\"col-md-1\">{{pager.velicinaStrane * (pager.trenutnaStrana - 1) + i+1}}</th>\n          <td class=\"col-md-6\"><a routerLink=\"/zgrada/{{zgrada.id}}\">{{zgrada.ulica}} {{zgrada.broj}}, {{zgrada.lokacija}}</a></td>\n          <td class=\"col-md-3\" *ngIf=\"zgrada.predsednikSkupstine\"><a routerLink=\"/stanar/{{zgrada.predsednikSkupstine.id}}\">{{zgrada.predsednikSkupstine.naziv}}</a></td>\n          <td class=\"col-md-3\" *ngIf=\"!zgrada.predsednikSkupstine\">Nema predsednika</td>\n          <th class=\"col-md-2\">{{zgrada.brojStanova}}</th>\n        </tr>\n      </tbody>\n    </table>\n    <h2 *ngIf=\"zgrade.length === 0\">Nijedna zgrada sa trazenim kriterijumima nije prondajena!</h2>\n  </div>\n  <div>\n    <app-pager [pager]=\"pager\" (izmenaEvent)=\"izlistajZgrade($event)\"></app-pager>\n  </div>\n</div>\n\n<div class=\"row justify-content-md-center\" *ngIf=\"zgrade !== undefined && zgrade.length === 0 && !pretraga\">\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <h2>Nema zgrada!</h2>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvemdyYWRlL2l6bGlzdGFqLXpncmFkZS9pemxpc3Rhai16Z3JhZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IzlistajZgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlistajZgradeComponent", function() { return IzlistajZgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");




var IzlistajZgradeComponent = /** @class */ (function () {
    function IzlistajZgradeComponent(administratorService, utilService) {
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    IzlistajZgradeComponent.prototype.ngOnInit = function () {
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 5,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.izlistajZgrade();
        this.pretraga = false;
    };
    IzlistajZgradeComponent.prototype.izlistajZgrade = function () {
        var _this = this;
        this.administratorService.getZgrade(this.pager.trenutnaStrana - 1, this.pager.velicinaStrane, this.ulicaBroj, this.mesto).subscribe(function (res) {
            _this.zgrade = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
            _this.pretraga = true;
        });
    };
    IzlistajZgradeComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izlistajZgrade();
    };
    IzlistajZgradeComponent.prototype.filtriraj = function () {
        this.ulicaBroj = this.ulicaBrojPolje;
        this.mesto = this.mestoPolje;
        this.pager.trenutnaStrana = 1;
        this.izlistajZgrade();
    };
    IzlistajZgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izlistaj-zgrade',
            template: __webpack_require__(/*! ./izlistaj-zgrade.component.html */ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.html"),
            styles: [__webpack_require__(/*! ./izlistaj-zgrade.component.scss */ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], IzlistajZgradeComponent);
    return IzlistajZgradeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/zgrade/zgrade.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/zgrade.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'dodavanje'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'dodavanje'\" [class.btn-outline-primary]=\"funkcionalnost !== 'dodavanje'\" \n            style=\"cursor: pointer;\" (click)=\"clickedFun('dodavanje')\"><b>Dodavanje</b></button>\n          </li>\n          <li class=\"nav-item\" [class.active]=\"funkcionalnost === 'pregled'\">\n            <button class=\"btn\" [class.btn-primary]=\"funkcionalnost === 'pregled'\" [class.btn-outline-primary]=\"funkcionalnost !== 'pregled'\" \n            style=\"cursor: pointer;\" (click)=\"clickedFun('pregled')\"><b>Pregled</b></button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <br>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/zgrade.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/zgrade.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWtvbXBvbmVudGUvemdyYWRlL3pncmFkZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-komponente/zgrade/zgrade.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/zgrade.component.ts ***!
  \*************************************************************/
/*! exports provided: ZgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZgradeComponent", function() { return ZgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");



var ZgradeComponent = /** @class */ (function () {
    function ZgradeComponent(router) {
        this.router = router;
    }
    ZgradeComponent.prototype.ngOnInit = function () {
        // postvaljamo aktivnu karticu u zavisnosti od putanje
        var url = this.router.url;
        var splitovanUrl = String(url).split("/");
        if (splitovanUrl[splitovanUrl.length - 1] === "zgrade") {
            this.funkcionalnost = "dodavanje";
        }
        else {
            this.funkcionalnost = splitovanUrl[splitovanUrl.length - 1];
        }
    };
    ZgradeComponent.prototype.clickedFun = function (funkcionalnost) {
        this.funkcionalnost = funkcionalnost;
        this.router.navigate(["/zgrade/" + funkcionalnost]);
    };
    ZgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zgrade',
            template: __webpack_require__(/*! ./zgrade.component.html */ "./src/app/admin-komponente/zgrade/zgrade.component.html"),
            styles: [__webpack_require__(/*! ./zgrade.component.scss */ "./src/app/admin-komponente/zgrade/zgrade.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ZgradeComponent);
    return ZgradeComponent;
}());



/***/ }),

/***/ "./src/app/admin-komponente/zgrade/zgrade.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin-komponente/zgrade/zgrade.routing.ts ***!
  \***********************************************************/
/*! exports provided: zgradeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zgradeRouting", function() { return zgradeRouting; });
/* harmony import */ var _dodaj_zgradu_dodaj_zgradu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dodaj-zgradu/dodaj-zgradu.component */ "./src/app/admin-komponente/zgrade/dodaj-zgradu/dodaj-zgradu.component.ts");
/* harmony import */ var _izlistaj_zgrade_izlistaj_zgrade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./izlistaj-zgrade/izlistaj-zgrade.component */ "./src/app/admin-komponente/zgrade/izlistaj-zgrade/izlistaj-zgrade.component.ts");


var zgradeRouting = [
    { path: '', component: _dodaj_zgradu_dodaj_zgradu_component__WEBPACK_IMPORTED_MODULE_0__["DodajZgraduComponent"], pathMatch: 'full' },
    { path: 'dodavanje', component: _dodaj_zgradu_dodaj_zgradu_component__WEBPACK_IMPORTED_MODULE_0__["DodajZgraduComponent"] },
    { path: 'pregled', component: _izlistaj_zgrade_izlistaj_zgrade_component__WEBPACK_IMPORTED_MODULE_1__["IzlistajZgradeComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet (activate)=\"checkRole()\">\n    <app-navbar\n        *ngIf=\"uloga === 'STANAR' || uloga === 'PREDSEDNIK_SKUPSTINE' ||uloga === 'INSTITUCIJA' || uloga === 'FIRMA'\">\n    </app-navbar>\n    <app-navbar-admin *ngIf=\"uloga === 'ADMIN'\"></app-navbar-admin>\n    <br>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticateService) {
        this.router = router;
        this.authenticateService = authenticateService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.checkRole = function () {
        // mozda ovde podesiti start up page
        var item = localStorage.getItem('korisnik');
        if (!item) {
            this.router.navigate(['logovanje']);
            this.uloga = '';
            return;
        }
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        this.uloga = jwt.decodeToken(item).role[0].authority;
        console.log(this.uloga);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _admin_komponente_admin_komponent_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-komponente/admin-komponent.module */ "./src/app/admin-komponente/admin-komponent.module.ts");
/* harmony import */ var _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paginacija/paginacija.module */ "./src/app/paginacija/paginacija.module.ts");
/* harmony import */ var _zgrada_zgrada_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zgrada/zgrada.module */ "./src/app/zgrada/zgrada.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var _logovanje_logovanje_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logovanje/logovanje.component */ "./src/app/logovanje/logovanje.component.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _promena_lozinke_promena_lozinke_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./promena-lozinke/promena-lozinke.component */ "./src/app/promena-lozinke/promena-lozinke.component.ts");
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");
/* harmony import */ var _services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/role-guard/role-guard.service */ "./src/app/services/role-guard/role-guard.service.ts");
/* harmony import */ var _services_login_guard_login_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/login-guard/login-guard.service */ "./src/app/services/login-guard/login-guard.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/anketa/anketa.service */ "./src/app/services/anketa/anketa.service.ts");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _kvarovi_odgovornog_lica_kvarovi_odgovornog_lica_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component */ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _logovanje_logovanje_component__WEBPACK_IMPORTED_MODULE_15__["LogovanjeComponent"],
                _promena_lozinke_promena_lozinke_component__WEBPACK_IMPORTED_MODULE_17__["PromenaLozinkeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_18__["PocetnaComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundPageComponent"],
                _kvarovi_odgovornog_lica_kvarovi_odgovornog_lica_component__WEBPACK_IMPORTED_MODULE_28__["KvaroviOdgovornogLicaComponent"]
            ],
            imports: [
                _admin_komponente_admin_komponent_module__WEBPACK_IMPORTED_MODULE_10__["AdminKomponenteModule"],
                _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_11__["PaginacijaModule"],
                _zgrada_zgrada_module__WEBPACK_IMPORTED_MODULE_12__["ZgradaModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["appRouting"], { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [_services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_25__["AnketaService"], _services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_19__["RoleGuardService"], _services_login_guard_login_guard_service__WEBPACK_IMPORTED_MODULE_20__["LoginGuardService"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"],
                _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_26__["AdministratorService"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_22__["ZgradaService"], _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_23__["KvarService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_24__["UtilService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");
/* harmony import */ var _zgrada_zgrada_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zgrada/zgrada.component */ "./src/app/zgrada/zgrada.component.ts");
/* harmony import */ var _logovanje_logovanje_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logovanje/logovanje.component */ "./src/app/logovanje/logovanje.component.ts");
/* harmony import */ var _promena_lozinke_promena_lozinke_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promena-lozinke/promena-lozinke.component */ "./src/app/promena-lozinke/promena-lozinke.component.ts");
/* harmony import */ var _services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/role-guard/role-guard.service */ "./src/app/services/role-guard/role-guard.service.ts");
/* harmony import */ var _services_login_guard_login_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/login-guard/login-guard.service */ "./src/app/services/login-guard/login-guard.service.ts");
/* harmony import */ var _zgrada_zgrada_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zgrada/zgrada.routing */ "./src/app/zgrada/zgrada.routing.ts");
/* harmony import */ var _admin_komponente_zgrade_zgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-komponente/zgrade/zgrade.component */ "./src/app/admin-komponente/zgrade/zgrade.component.ts");
/* harmony import */ var _admin_komponente_zgrade_zgrade_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-komponente/zgrade/zgrade.routing */ "./src/app/admin-komponente/zgrade/zgrade.routing.ts");
/* harmony import */ var _admin_komponente_stanari_stanari_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-komponente/stanari/stanari.component */ "./src/app/admin-komponente/stanari/stanari.component.ts");
/* harmony import */ var _admin_komponente_stanari_stanari_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-komponente/stanari/stanari.routing */ "./src/app/admin-komponente/stanari/stanari.routing.ts");
/* harmony import */ var _admin_komponente_institucije_institucije_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-komponente/institucije/institucije.component */ "./src/app/admin-komponente/institucije/institucije.component.ts");
/* harmony import */ var _admin_komponente_institucije_institucije_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-komponente/institucije/institucije.routing */ "./src/app/admin-komponente/institucije/institucije.routing.ts");
/* harmony import */ var _admin_komponente_firme_firme_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-komponente/firme/firme.component */ "./src/app/admin-komponente/firme/firme.component.ts");
/* harmony import */ var _admin_komponente_firme_firme_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-komponente/firme/firme.routing */ "./src/app/admin-komponente/firme/firme.routing.ts");
/* harmony import */ var _admin_komponente_stan_stan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-komponente/stan/stan.component */ "./src/app/admin-komponente/stan/stan.component.ts");
/* harmony import */ var _admin_komponente_stanar_stanar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-komponente/stanar/stanar.component */ "./src/app/admin-komponente/stanar/stanar.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _kvarovi_odgovornog_lica_kvarovi_odgovornog_lica_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component */ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.ts");



















var appRouting = [
    // mozda neophodna izmena
    { path: '',
        redirectTo: '/logovanje',
        pathMatch: 'full'
    },
    { path: 'kvarovi/odgovoran',
        component: _kvarovi_odgovornog_lica_kvarovi_odgovornog_lica_component__WEBPACK_IMPORTED_MODULE_18__["KvaroviOdgovornogLicaComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|FIRMA|INSTITUCIJA' }
    },
    { path: 'pocetna',
        component: _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_0__["PocetnaComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|ADMIN|FIRMA|INSTITUCIJA' }
    },
    { path: 'logovanje',
        component: _logovanje_logovanje_component__WEBPACK_IMPORTED_MODULE_2__["LogovanjeComponent"],
        canActivate: [_services_login_guard_login_guard_service__WEBPACK_IMPORTED_MODULE_5__["LoginGuardService"]]
    },
    { path: 'promenaLozinke',
        component: _promena_lozinke_promena_lozinke_component__WEBPACK_IMPORTED_MODULE_3__["PromenaLozinkeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|FIRMA|INSTITUCIJA' }
    },
    { path: 'zgrade',
        component: _admin_komponente_zgrade_zgrade_component__WEBPACK_IMPORTED_MODULE_7__["ZgradeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' },
        children: _admin_komponente_zgrade_zgrade_routing__WEBPACK_IMPORTED_MODULE_8__["zgradeRouting"]
    },
    { path: 'zgrada/:id',
        component: _zgrada_zgrada_component__WEBPACK_IMPORTED_MODULE_1__["ZgradaComponent"],
        children: _zgrada_zgrada_routing__WEBPACK_IMPORTED_MODULE_6__["zgradaRouting"]
    },
    { path: 'stanari',
        component: _admin_komponente_stanari_stanari_component__WEBPACK_IMPORTED_MODULE_9__["StanariComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' },
        children: _admin_komponente_stanari_stanari_routing__WEBPACK_IMPORTED_MODULE_10__["stanariRouting"]
    },
    { path: 'institucije',
        component: _admin_komponente_institucije_institucije_component__WEBPACK_IMPORTED_MODULE_11__["InstitucijeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' },
        children: _admin_komponente_institucije_institucije_routing__WEBPACK_IMPORTED_MODULE_12__["institucijeRouting"]
    },
    { path: 'firme',
        component: _admin_komponente_firme_firme_component__WEBPACK_IMPORTED_MODULE_13__["FirmeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' },
        children: _admin_komponente_firme_firme_routing__WEBPACK_IMPORTED_MODULE_14__["firmeRouting"]
    },
    { path: 'stan/:id',
        component: _admin_komponente_stan_stan_component__WEBPACK_IMPORTED_MODULE_15__["StanComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' }
    },
    { path: 'stanar/:id',
        component: _admin_komponente_stanar_stanar_component__WEBPACK_IMPORTED_MODULE_16__["StanarComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_4__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' }
    },
    { path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundPageComponent"]
    }
];


/***/ }),

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var item = localStorage.getItem("korisnik");
        var decodedItem = JSON.parse(item);
        if (item) {
            var cloned = req.clone({
                headers: req.headers.set("X-Auth-Token", decodedItem.token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 container\">\n<app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n\n<div class=\"row\">\n    <div class=\"checkbox\">\n        <label style=\"padding: 10px; margin-left: 20px;\">\n            <input type=\"checkbox\" [(ngModel)]=\"gotovo\" (change)=\"checked()\"> Prikazi zavrsene kvarove\n        </label>\n    </div>\n</div>\n<div *ngFor=\"let kvar of kvarovi\">\n    <div class=\"row blob\" id=\"kvar_{{kvar.id}}\">\n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{kvar.stanar.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la kvar u <i>{{kvar.datumPostavljanja | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span class=\"super-high-impact-text\" *ngIf=\"kvar.gotovo\">KVAR JE ZAVSREN</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span class=\"low-impact-text\">{{kvar.opis}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                \n                <a class=\"pogledaj_{{kvar.id}}\" [routerLink]=\"['/zgrada/'+ kvar.zgradaId +'/kvar', kvar.id]\"><span class=\"operacije lower-impact-text\">pogledaj</span> </a>\n            </td>\n        </tr>\n        </table>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.blob {\n  border-radius: 10px;\n  background-color: #effeff;\n  padding: 10px;\n  margin-top: 20px; }\n\n.low-impact-text {\n  color: #545454; }\n\n.lower-impact-text {\n  color: #808080; }\n\n.operacije {\n  margin-left: 10px;\n  cursor: pointer; }\n\n.operacije:hover {\n  text-decoration: underline; }\n\n.naziv {\n  font-size: 18px;\n  color: #212529; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3Zhcm92aS1vZGdvdm9ybm9nLWxpY2EvQzpcXFVzZXJzXFxMZW5vdm9cXERlc2t0b3BcXEt1cnNldmlcXEtUUy1OV1QtYW5ndWxhci1tYXN0ZXIgLSBDb3B5L3NyY1xcYXBwXFxrdmFyb3ZpLW9kZ292b3Jub2ctbGljYVxca3Zhcm92aS1vZGdvdm9ybm9nLWxpY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2t2YXJvdmktb2Rnb3Zvcm5vZy1saWNhL2t2YXJvdmktb2Rnb3Zvcm5vZy1saWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJsb2Ige1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmVmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb3ctaW1wYWN0LXRleHQge1xuICAgIGNvbG9yOiAjNTQ1NDU0O1xufVxuXG4ubG93ZXItaW1wYWN0LXRleHQge1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ub3BlcmFjaWple1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG4ub3BlcmFjaWplOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5uYXppdntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG59Il19 */"

/***/ }),

/***/ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.ts ***!
  \******************************************************************************/
/*! exports provided: KvaroviOdgovornogLicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KvaroviOdgovornogLicaComponent", function() { return KvaroviOdgovornogLicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");





var KvaroviOdgovornogLicaComponent = /** @class */ (function () {
    function KvaroviOdgovornogLicaComponent(route, utilService, kvarService) {
        this.route = route;
        this.utilService = utilService;
        this.kvarService = kvarService;
        this.gotovo = false;
    }
    KvaroviOdgovornogLicaComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.kvarService.getKvaroviOdgovornog(pager.trenutnaStrana - 1, pager.velicinaStrane, this.gotovo)
            .subscribe(function (res) {
            _this.kvarovi = res.body;
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get('X-ukupno-strana')));
        });
    };
    KvaroviOdgovornogLicaComponent.prototype.checked = function () {
        this.utilService.refreshPagination.emit(0);
    };
    KvaroviOdgovornogLicaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kvarovi-odgovornog-lica',
            template: __webpack_require__(/*! ./kvarovi-odgovornog-lica.component.html */ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.html"),
            styles: [__webpack_require__(/*! ./kvarovi-odgovornog-lica.component.scss */ "./src/app/kvarovi-odgovornog-lica/kvarovi-odgovornog-lica.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_4__["KvarService"]])
    ], KvaroviOdgovornogLicaComponent);
    return KvaroviOdgovornogLicaComponent;
}());



/***/ }),

/***/ "./src/app/logovanje/logovanje.component.html":
/*!****************************************************!*\
  !*** ./src/app/logovanje/logovanje.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"loginForm box\" name=\"loginForm\" (ngSubmit)=\"logovanje()\" novalidate>\n    <fieldset>\n      <legend>Logovanje</legend>\n      <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"greska\">\n        <strong>{{greska}}</strong>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <input type=\"text\" class=\"form-control input-lg\" id=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lozinka\" class=\"control-label\">Lozinka</label>\n        <input type=\"password\" class=\"form-control input-lg\" id=\"lozinka\" name=\"lozinka\" placeholder=\"Lozinka\" [(ngModel)]=\"lozinka\" required>\n      </div>\n      <div class=\"form-group center\">\n        <button type=\"submit\" class=\"btn btn-primary\">Ulogujte se</button>&nbsp;&nbsp;\n        <br><br>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/logovanje/logovanje.component.scss":
/*!****************************************************!*\
  !*** ./src/app/logovanje/logovanje.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\n  width: 350px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n@media (max-width: 350px) {\n  .myForm {\n    min-width: 90%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3ZhbmplL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxcbG9nb3ZhbmplXFxsb2dvdmFuamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdDQUFnQyxFQUFBOztBQUVwQztFQUNJO0lBQ0UsY0FBYyxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dvdmFuamUvbG9nb3ZhbmplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRm9ybSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICAgIC5teUZvcm0ge1xuICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/logovanje/logovanje.component.ts":
/*!**************************************************!*\
  !*** ./src/app/logovanje/logovanje.component.ts ***!
  \**************************************************/
/*! exports provided: LogovanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogovanjeComponent", function() { return LogovanjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");




var LogovanjeComponent = /** @class */ (function () {
    function LogovanjeComponent(router, authenticateService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.greska = undefined;
    }
    LogovanjeComponent.prototype.ngOnInit = function () {
    };
    LogovanjeComponent.prototype.logovanje = function () {
        var _this = this;
        this.greska = undefined;
        this.authenticateService.logovanje(this.email, this.lozinka)
            .subscribe(function (result) {
            localStorage.setItem('korisnik', JSON.stringify(result));
            _this.router.navigate(['pocetna']);
        }, function (error) {
            // moguce grekse
            // Stanaru nije dodeljen stan!
            // Pogresan email ili lozinka!
            _this.greska = error.error;
        });
    };
    LogovanjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logovanje',
            template: __webpack_require__(/*! ./logovanje.component.html */ "./src/app/logovanje/logovanje.component.html"),
            styles: [__webpack_require__(/*! ./logovanje.component.scss */ "./src/app/logovanje/logovanje.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LogovanjeComponent);
    return LogovanjeComponent;
}());



/***/ }),

/***/ "./src/app/model/VrstaPitanja.ts":
/*!***************************************!*\
  !*** ./src/app/model/VrstaPitanja.ts ***!
  \***************************************/
/*! exports provided: VrstaPitanja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrstaPitanja", function() { return VrstaPitanja; });
var VrstaPitanja;
(function (VrstaPitanja) {
    VrstaPitanja[VrstaPitanja["OBICNO_PITANJE"] = 0] = "OBICNO_PITANJE";
    VrstaPitanja[VrstaPitanja["STANAR_PITANJE"] = 1] = "STANAR_PITANJE";
    VrstaPitanja[VrstaPitanja["FIRMA_PITANJE"] = 2] = "FIRMA_PITANJE";
})(VrstaPitanja || (VrstaPitanja = {}));


/***/ }),

/***/ "./src/app/model/zgrada.ts":
/*!*********************************!*\
  !*** ./src/app/model/zgrada.ts ***!
  \*********************************/
/*! exports provided: Zgrada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zgrada", function() { return Zgrada; });
var Zgrada = /** @class */ (function () {
    function Zgrada() {
    }
    return Zgrada;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"> \n        <a class=\"nav-link\" [routerLink]=\"['/pocetna']\">Pocetna</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/kvarovi/odgovoran']\">Dodeljeni kvarovi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/promenaLozinke']\">Promena lozinke</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>\n        <label class=\"nav-link active\">{{email}}&nbsp;&nbsp;&nbsp;</label>\n      </li>\n      <li>\n        <button class=\"btn btn-secondary\" (click)=\"odjavljivanje()\">Izlogujte se</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authenticateService, utilService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.utilService = utilService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.email = this.utilService.email();
    };
    NavbarComponent.prototype.odjavljivanje = function () {
        var _this = this;
        localStorage.removeItem('korisnik');
        this.authenticateService.izlogujSe()
            .subscribe(function (result) {
            if (result) {
                localStorage.removeItem('korisnik');
                _this.router.navigate(['/logovanje']);
            }
        }, function (error) {
            localStorage.removeItem('korisnik');
            _this.router.navigate(['/logovanje']);
            console.log(error);
            /* KASNIJE DODATI OBRADJIVANJE GRESKU */
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404 Stranica nije pronadjena</h1>"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.scss */ "./src/app/not-found-page/not-found-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/paginacija/pager/pager.component.html":
/*!*******************************************************!*\
  !*** ./src/app/paginacija/pager/pager.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\" >\n  <li class=\"page-item\">\n    <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === 1\" \n    (click)=\"promeniStranu(1)\">&lt;&lt;</button>\n  </li>\n  &nbsp;\n  <li class=\"page-item\">\n    <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === 1\" \n    (click)=\"promeniStranu(pager.trenutnaStrana - 1)\">&lt;</button>\n  </li> \n  &nbsp;\n  <li class=\"page-item\" *ngFor=\"let strana of pager.strane\">\n    <button class=\"btn\" [class.btn-primary]=\"strana === pager.trenutnaStrana\" [class.btn-outline-primary]=\"strana !== pager.trenutnaStrana\"\n    (click)=\"promeniStranu(strana)\">{{strana}}</button>\n  </li>\n  &nbsp;\n  <li class=\"page-item\">\n    <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === pager.ukupnoStrana\" \n    (click)=\"promeniStranu(pager.trenutnaStrana + 1)\" >&gt;</button>\n  </li>\n  &nbsp;\n  <li class=\"page-item\">\n    <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === pager.ukupnoStrana\" \n    (click)=\"promeniStranu(pager.ukupnoStrana)\">&gt;&gt;</button>\n  </li> \n</ul>"

/***/ }),

/***/ "./src/app/paginacija/pager/pager.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/paginacija/pager/pager.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYWNpamEvcGFnZXIvcGFnZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/paginacija/pager/pager.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginacija/pager/pager.component.ts ***!
  \*****************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");



var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.izmenaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PagerComponent.prototype.ngOnInit = function () {
    };
    PagerComponent.prototype.promeniStranu = function (strana) {
        this.pager.trenutnaStrana = strana;
        this.izmenaEvent.emit(this.pager);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PagerComponent.prototype, "pager", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PagerComponent.prototype, "izmenaEvent", void 0);
    PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pager',
            template: __webpack_require__(/*! ./pager.component.html */ "./src/app/paginacija/pager/pager.component.html"),
            styles: [__webpack_require__(/*! ./pager.component.scss */ "./src/app/paginacija/pager/pager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "./src/app/paginacija/paginacija.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paginacija/paginacija.module.ts ***!
  \*************************************************/
/*! exports provided: PaginacijaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginacijaModule", function() { return PaginacijaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _paginacija_paginacija_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginacija/paginacija.component */ "./src/app/paginacija/paginacija/paginacija.component.ts");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pager/pager.component */ "./src/app/paginacija/pager/pager.component.ts");






var PaginacijaModule = /** @class */ (function () {
    function PaginacijaModule() {
    }
    PaginacijaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _paginacija_paginacija_component__WEBPACK_IMPORTED_MODULE_4__["PaginacijaComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"]
            ],
            exports: [
                _paginacija_paginacija_component__WEBPACK_IMPORTED_MODULE_4__["PaginacijaComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
        })
    ], PaginacijaModule);
    return PaginacijaModule;
}());



/***/ }),

/***/ "./src/app/paginacija/paginacija/paginacija.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/paginacija/paginacija/paginacija.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row paginacija\">\n    <label class=\"col-md-1\">Prikazi: </label>\n    <select class=\"form-control col-md-1\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"10\">10</option>\n      <option value=\"25\">25</option>\n      <option value=\"50\">50</option>\n    </select>\n\n    <div style=\"margin-left: 10%\" >\n        <ul class=\"pagination\">\n          <li class=\"page-item\">\n            <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === 1\" \n            (click)=\"promeniStranu(1)\">&lt;&lt;</button>\n          </li>\n          &nbsp;\n          <li class=\"page-item\">\n            <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === 1\" \n            (click)=\"promeniStranu(pager.trenutnaStrana - 1)\">&lt;</button>\n          </li> \n          &nbsp;\n          <li class=\"page-item\" *ngFor=\"let strana of pager.strane\">\n            <button class=\"btn\" [class.btn-primary]=\"strana === pager.trenutnaStrana\" [class.btn-outline-primary]=\"strana !== pager.trenutnaStrana\"\n            (click)=\"promeniStranu(strana)\">{{strana}}</button>\n          </li>\n          &nbsp;\n          <li class=\"page-item\">\n            <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === pager.ukupnoStrana\" \n            (click)=\"promeniStranu(pager.trenutnaStrana + 1)\" >&gt;</button>\n          </li>\n          &nbsp;\n          <li class=\"page-item\">\n            <button class=\"btn btn-outline-primary\" [disabled]=\"pager.trenutnaStrana === pager.ukupnoStrana\" \n            (click)=\"promeniStranu(pager.ukupnoStrana)\">&gt;&gt;</button>\n          </li> \n        </ul>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/paginacija/paginacija/paginacija.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/paginacija/paginacija/paginacija.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.paginacija {\n  padding: 10px;\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hY2lqYS9wYWdpbmFjaWphL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxccGFnaW5hY2lqYVxccGFnaW5hY2lqYVxccGFnaW5hY2lqYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYWNpamEvcGFnaW5hY2lqYS9wYWdpbmFjaWphLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBhZ2luYWNpamEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/paginacija/paginacija/paginacija.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/paginacija/paginacija/paginacija.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginacijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginacijaComponent", function() { return PaginacijaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");



var PaginacijaComponent = /** @class */ (function () {
    function PaginacijaComponent(utilService) {
        this.utilService = utilService;
        this.izmenaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginacijaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 10,
            ukupnoStrana: 10,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.izmenaEvent.emit(this.pager);
        this.utilService.updateUkupnoStrana
            .subscribe(function (num) {
            _this.pager.ukupnoStrana = num;
            console.log(_this.utilService.getPager(_this.pager));
            _this.pager = _this.utilService.getPager(_this.pager);
        });
        this.utilService.refreshPagination
            .subscribe(function (num) {
            _this.izmenaEvent.emit(_this.pager);
        });
    };
    PaginacijaComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izmenaEvent.emit(this.pager);
    };
    PaginacijaComponent.prototype.promeniStranu = function (strana) {
        this.pager.trenutnaStrana = strana;
        this.izmenaEvent.emit(this.pager);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginacijaComponent.prototype, "izmenaEvent", void 0);
    PaginacijaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paginacija',
            template: __webpack_require__(/*! ./paginacija.component.html */ "./src/app/paginacija/paginacija/paginacija.component.html"),
            styles: [__webpack_require__(/*! ./paginacija.component.scss */ "./src/app/paginacija/paginacija/paginacija.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], PaginacijaComponent);
    return PaginacijaComponent;
}());



/***/ }),

/***/ "./src/app/pocetna/pocetna.component.html":
/*!************************************************!*\
  !*** ./src/app/pocetna/pocetna.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" *ngIf=\"uloga === 'ADMIN'\">\n  <label class=\"col-md-12\">&nbsp;</label>\n  <label class=\"col-md-12\">&nbsp;</label>\n  <label class=\"col-md-12\">&nbsp;</label>\n  <h4><ul id=\"opcije\">\n    <li><a [routerLink]=\"['/zgrade']\">Zgrade</a></li>\n    <li><a [routerLink]=\"['/stanari']\">Stanari</a></li>\n    <li><a [routerLink]=\"['/institucije']\">Institucije</a></li>\n    <li><a [routerLink]=\"['/firme']\">Firme</a></li>\n  </ul></h4>\n</div>\n\n<div class=\"row justify-content-md-center\" *ngIf=\"uloga === 'STANAR' || uloga === 'PREDSEDNIK_SKUPSTINE'\">\n    <table class=\"table table-dark\" id=\"zgradaStanuje\">\n      <caption>Zgrada u kojoj zivite</caption>\n        <thead>\n          <tr>\n            <th scope=\"col\">Lokacija</th>\n            <th scope=\"col\">Ulica</th>\n            <th scope=\"col\">Broj</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"data !== undefined\">\n            <tr *ngFor=\"let zgrada of data.Stanuje\">\n                <td>{{zgrada.lokacija}}</td>\n                <td>{{zgrada.ulica}}</td>\n                <td>{{zgrada.broj}}</td>\n                <td><a [routerLink]=\"['/zgrada', zgrada.id]\" >Stranica</a></td>\n              </tr>\n        </tbody>\n    </table>\n</div>\n\n<div class=\"row justify-content-md-center\" *ngIf=\"uloga === 'STANAR' || uloga === 'PREDSEDNIK_SKUPSTINE'\">\n  <table class=\"table table-dark\" id=\"zgradaVlasnik\">\n    <caption>Zgrade u kojima ste vlasnik stana</caption>\n      <thead>\n        <tr>\n          <th scope=\"col\">Lokacija</th>\n          <th scope=\"col\">Ulica</th>\n          <th scope=\"col\">Broj</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"data !== undefined\">\n          <tr *ngFor=\"let zgrada of data.Vlasnik\">\n              <td>{{zgrada.lokacija}}</td>\n              <td>{{zgrada.ulica}}</td>\n              <td>{{zgrada.broj}}</td>\n              <td><a [routerLink]=\"['/zgrada', zgrada.id]\">Stranica</a></td>\n            </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pocetna/pocetna.component.scss":
/*!************************************************!*\
  !*** ./src/app/pocetna/pocetna.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  width: 500px;\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9jZXRuYS9DOlxcVXNlcnNcXExlbm92b1xcRGVza3RvcFxcS3Vyc2V2aVxcS1RTLU5XVC1hbmd1bGFyLW1hc3RlciAtIENvcHkvc3JjXFxhcHBcXHBvY2V0bmFcXHBvY2V0bmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb2NldG5hL3BvY2V0bmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJsZSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pocetna/pocetna.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pocetna/pocetna.component.ts ***!
  \**********************************************/
/*! exports provided: PocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaComponent", function() { return PocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var PocetnaComponent = /** @class */ (function () {
    function PocetnaComponent(zgradaService, toastrService, utilService) {
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.utilService = utilService;
    }
    PocetnaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var item = localStorage.getItem('korisnik');
        this.uloga = this.utilService.uloga();
        if (this.uloga === "STANAR" || this.uloga === "PREDSEDNIK_SKUPSTINE") {
            var email = this.utilService.email();
            this.zgradaService.zgrade(email).subscribe(function (result) {
                _this.data = result;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    PocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pocetna',
            template: __webpack_require__(/*! ./pocetna.component.html */ "./src/app/pocetna/pocetna.component.html"),
            styles: [__webpack_require__(/*! ./pocetna.component.scss */ "./src/app/pocetna/pocetna.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_2__["ZgradaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], PocetnaComponent);
    return PocetnaComponent;
}());



/***/ }),

/***/ "./src/app/promena-lozinke/promena-lozinke.component.html":
/*!****************************************************************!*\
  !*** ./src/app/promena-lozinke/promena-lozinke.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"container\">\n  <form class=\"promenaLozinke box\" [formGroup]=\"form\" name=\"promenaLozinkeForm\" (ngSubmit)=\"promenaLozinke()\">\n    <fieldset>\n      <legend>Promena lozinke</legend>\n      <div class=\"form-group\">\n        <label for=\"staraLozinka\" class=\"control-label\">Stara lozinka:</label>\n        <input type=\"password\" class=\"form-control input-lg\" id=\"staraLozinka\" name=\"staraLozinka\" placeholder=\"Stara lozinka\" \n        formControlName=\"staraLozinka\" \n        [class.is-invalid]=\"!form.get('staraLozinka').valid && (form.get('staraLozinka').touched || form.get('staraLozinka').dirty)\">\n        <div *ngIf=\"!form.get('staraLozinka').valid && (form.get('staraLozinka').touched || form.get('staraLozinka').dirty)\"\n        class=\"invalid-feedback\">Ovo polje je obavezno!</div>\n      </div>\n      <div formGroupName=\"noveLozinke\">\n        <div class=\"form-group\">\n          <label for=\"novaLozinka\" class=\"control-label\">Nova lozinka:</label>\n          <input type=\"password\" class=\"form-control input-lg\" id=\"novaLozinka\" name=\"novaLozinka\" placeholder=\"Nova lozinka\" \n          formControlName=\"lozinka\" [class.is-invalid]=\"!form.get('noveLozinke').get('lozinka').valid &&\n           (form.get('noveLozinke').get('lozinka').touched || form.get('noveLozinke').get('lozinka').dirty)\">\n          <div *ngIf=\"form.get('noveLozinke').get('lozinka').hasError('required') &&\n          (form.get('noveLozinke').get('lozinka').touched || form.get('noveLozinke').get('lozinka').dirty)\"\n          class=\"invalid-feedback\">Ovo polje je obavezno!</div>\n          <div *ngIf=\"form.get('noveLozinke').get('lozinka').hasError('pattern') &&\n          (form.get('noveLozinke').get('lozinka').touched || form.get('noveLozinke').get('lozinka').dirty)\"\n          class=\"invalid-feedback\">Neispravna lozinka! Pogledajte napomenu.</div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"potvrdaNoveLozinke\" class=\"control-label\">Potvrda nove lozinke:</label>\n          <input type=\"password\" class=\"form-control input-lg\" id=\"potvrdaNoveLozinke\" name=\"potvrdaNoveLozinke\" \n          placeholder=\"Potvrda nove lozinke\" formControlName=\"potvrdaLozinke\"\n          [class.is-invalid]=\"form.get('noveLozinke').dirty && form.get('noveLozinke').hasError('invalid')\">\n          <div *ngIf=\"form.get('noveLozinke').dirty && form.get('noveLozinke').hasError('invalid')\" \n          class=\"invalid-feedback\">Lozinke se ne poklapaju!</div>\n        </div>\n      </div>\n      <div class=\"small\">*Lozinka mora imati najmanje 6 karaktera i po jedno veliko slovo, malo slovo i cifru</div>\n      <br>\n      <div class=\"form-group center\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Promenite lozinku</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/promena-lozinke/promena-lozinke.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/promena-lozinke/promena-lozinke.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promenaLozinke {\n  width: 350px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n@media (max-width: 350px) {\n  .promenaLozinke {\n    min-width: 90%; } }\n\n.box {\n  border-radius: 10px;\n  background-color: #ecf0f1;\n  padding: 30px; }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbWVuYS1sb3ppbmtlL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxccHJvbWVuYS1sb3ppbmtlXFxwcm9tZW5hLWxvemlua2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJO0lBQ0UsY0FBYyxFQUFBLEVBQ2Y7O0FBR0w7RUFDSSxtQkFBbUI7RUFDbkIseUJBckJjO0VBc0JkLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvbWVuYS1sb3ppbmtlL3Byb21lbmEtbG96aW5rZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5LTIwMDogI2VjZjBmMSAhZGVmYXVsdDtcblxuJGxpZ2h0OiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi5wcm9tZW5hTG96aW5rZSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gICAgLnByb21lbmFMb3ppbmtlIHtcbiAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgIH1cbn1cblxuLmJveCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */"

/***/ }),

/***/ "./src/app/promena-lozinke/promena-lozinke.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/promena-lozinke/promena-lozinke.component.ts ***!
  \**************************************************************/
/*! exports provided: PromenaLozinkeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromenaLozinkeComponent", function() { return PromenaLozinkeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");






var PromenaLozinkeComponent = /** @class */ (function () {
    function PromenaLozinkeComponent(fb, router, toastrService, authenticateService) {
        this.router = router;
        this.toastrService = toastrService;
        this.authenticateService = authenticateService;
        this.lozinkaPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$";
        this.form = fb.group({
            'staraLozinka': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'noveLozinke': fb.group({
                'lozinka': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.lozinkaPattern)])],
                'potvrdaLozinke': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }, { validator: this.poklapanjeLozinki })
        });
    }
    PromenaLozinkeComponent.prototype.ngOnInit = function () {
    };
    PromenaLozinkeComponent.prototype.poklapanjeLozinki = function (c) {
        if (c.get('lozinka').value !== c.get('potvrdaLozinke').value) {
            return { invalid: true };
        }
    };
    PromenaLozinkeComponent.prototype.promenaLozinke = function () {
        var _this = this;
        this.authenticateService.promenaLozinke(this.form.value.staraLozinka, this.form.value.noveLozinke.lozinka, this.form.value.noveLozinke.potvrdaLozinke).subscribe(function (result) {
            localStorage.removeItem('korisnik');
            _this.toastrService.success("Lozinka uspesno izmenjena!");
            _this.router.navigate(['/logovanje']);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PromenaLozinkeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promena-lozinke',
            template: __webpack_require__(/*! ./promena-lozinke.component.html */ "./src/app/promena-lozinke/promena-lozinke.component.html"),
            styles: [__webpack_require__(/*! ./promena-lozinke.component.scss */ "./src/app/promena-lozinke/promena-lozinke.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], PromenaLozinkeComponent);
    return PromenaLozinkeComponent;
}());



/***/ }),

/***/ "./src/app/services/administrator/administrator.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/administrator/administrator.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdministratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorService", function() { return AdministratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");



var AdministratorService = /** @class */ (function () {
    function AdministratorService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    AdministratorService.prototype.dodajZgradu = function (zgrada) {
        return this.http.post("/api/admin/zgrada/dodaj", zgrada);
    };
    AdministratorService.prototype.getZgrade = function (page, size, ulicaBroj, mesto) {
        if (!ulicaBroj && !mesto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page).append("size", size);
            return this.http.get("/api/admin/zgrade", { params: params, observe: "response" });
        }
        else if (!ulicaBroj) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page).append("size", size).append("mesto", mesto);
            return this.http.get("/api/admin/zgrade", { params: params, observe: "response" });
        }
        else if (!mesto) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page).append("size", size).append("ulicaBroj", ulicaBroj);
            return this.http.get("/api/admin/zgrade", { params: params, observe: "response" });
        }
        else {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page).append("size", size).append("ulicaBroj", ulicaBroj).append("mesto", mesto);
            return this.http.get("/api/admin/zgrade", { params: params, observe: "response" });
        }
    };
    AdministratorService.prototype.izlistajStanove = function (zgradaId, page, size) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString());
        return this.http.get("/api/admin/zgrada/" + zgradaId + "/stanovi", { params: params, observe: "response" });
    };
    AdministratorService.prototype.registrujStanara = function (stanar) {
        return this.http.post("api/admin/stanar/dodaj", stanar);
    };
    AdministratorService.prototype.getStanar = function (stanarId) {
        return this.http.get("/api/admin/stanar/" + stanarId);
    };
    AdministratorService.prototype.getStanari = function (page, size, filter) {
        if (filter !== undefined) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString())
                .append("filter", filter);
            return this.http.get("/api/admin/stanari", { params: params, observe: "response" });
        }
        else {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString());
            return this.http.get("/api/admin/stanari", { params: params, observe: "response" });
        }
    };
    AdministratorService.prototype.getStanoviStanara = function (stanarId) {
        return this.http.get("/api/admin/stanar/" + stanarId + "/stanovi");
    };
    AdministratorService.prototype.registrujInstituciju = function (institucija) {
        return this.http.post("/api/admin/institucija/dodaj", institucija);
    };
    AdministratorService.prototype.getInstitucije = function (page, size, filter) {
        if (filter !== undefined) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString())
                .append("filter", filter);
            return this.http.get("/api/admin/institucije", { params: params, observe: "response" });
        }
        else {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString());
            return this.http.get("/api/admin/institucije", { params: params, observe: "response" });
        }
    };
    AdministratorService.prototype.registrujFirmu = function (firma) {
        return this.http.post("/api/admin/firma/dodaj", firma);
    };
    AdministratorService.prototype.getFirme = function (page, size, filter) {
        if (filter !== undefined) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString())
                .append("filter", filter);
            return this.http.get("/api/admin/firme", { params: params, observe: "response" });
        }
        else {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("page", page.toString()).append("size", size.toString());
            return this.http.get("/api/admin/firme", { params: params, observe: "response" });
        }
    };
    AdministratorService.prototype.postaviVlasnika = function (stanarId, stanId) {
        return this.http.request("put", "api/admin/stan/" + stanId + "/postaviVlasnika/" + stanarId);
    };
    AdministratorService.prototype.ukloniVlasnika = function (stanId) {
        return this.http.request("put", "/api/admin/stan/" + stanId + "/ukloniVlasnika");
    };
    AdministratorService.prototype.dodajStanara = function (stanarId, stanId) {
        return this.http.request("put", "api/admin/stan/" + stanId + "/dodeli/" + stanarId);
    };
    AdministratorService.prototype.ukloniStanara = function (stanarId, stanId) {
        return this.http.request("put", "api/admin/stan/" + stanId + "/ukloni/" + stanarId);
    };
    AdministratorService.prototype.postaviPredsednika = function (stanarId) {
        return this.http.request("put", "/api/admin/stanar/" + stanarId + "/postaviZaPredsednika");
    };
    AdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdministratorService);
    return AdministratorService;
}());



/***/ }),

/***/ "./src/app/services/anketa/anketa.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/anketa/anketa.service.ts ***!
  \***************************************************/
/*! exports provided: AnketaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnketaService", function() { return AnketaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");



var AnketaService = /** @class */ (function () {
    function AnketaService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    AnketaService.prototype.dodajPitanje = function (ptdrId, opcije, tekst, vrstaPitanja) {
        return this.http.post("api/ptdr/" + ptdrId + "/anketa/dodajPitanje", { "tekst": tekst, "vrstaPitanja": vrstaPitanja, "opcije": opcije }, { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.izmeniPitanje = function (ptdrId, pitanjeId, tekst) {
        return this.http.put("api/ptdr/" + ptdrId + "/anketa/" + pitanjeId, { "tekst": tekst }, { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.izbrisiPitanje = function (ptdrId, pitanjeId) {
        return this.http.delete("api/ptdr/" + ptdrId + "/anketa/" + pitanjeId, { headers: this.headers, responseType: 'text' });
    };
    AnketaService.prototype.dodajOpciju = function (pitanjeId, opcija) {
        return this.http.post("api/anketa/" + pitanjeId + "/opcija/dodaj", opcija, { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.izmeniOpciju = function (pitanjeId, opcijaId, opcija) {
        return this.http.put("api/anketa/" + pitanjeId + "/opcija/" + opcijaId, opcija, { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.izbrisiOpciju = function (pitanjeId, opcijaId) {
        return this.http.delete("api/anketa/" + pitanjeId + "/opcija/" + opcijaId, { headers: this.headers, responseType: 'text' });
    };
    AnketaService.prototype.stanoviKojiSuGlasali = function (pitanjeId) {
        return this.http.get("api/" + pitanjeId + "/stanoviKojiSuGlasaliIzZgrade", { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.stanoviKojiNisuGlasali = function (pitanjeId) {
        return this.http.get("api/" + pitanjeId + "/stanoviKojiNisuGlasaliIzZgrade", { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.glasaj = function (pitanjeId, glas) {
        return this.http.post("api/anketa/" + pitanjeId + "/glasaj", glas, { headers: this.headers, responseType: 'json' });
    };
    AnketaService.prototype.ukloniGlas = function (pitanjeId, glas) {
        return this.http.put("api/anketa/" + pitanjeId + "/ukloniGlas", glas, { headers: this.headers, responseType: 'text' });
    };
    AnketaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnketaService);
    return AnketaService;
}());



/***/ }),

/***/ "./src/app/services/authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.logovanje = function (email, lozinka) {
        return this.http.post("api/ulogujSe", { "email": email, "lozinka": lozinka }, { headers: this.headers, responseType: 'json' });
    };
    AuthenticationService.prototype.promenaLozinke = function (staraLozinka, novaLozinka, potvrdaNoveLozinke) {
        return this.http.put("api/promenaLozinke", { "staraLozinka": staraLozinka, "novaLozinka": novaLozinka, "potvrdaNoveLozinke": potvrdaNoveLozinke }, { headers: this.headers, responseType: 'text' });
    };
    AuthenticationService.prototype.izlogujSe = function () {
        return this.http.get("api/izlogujSe", { headers: this.headers, responseType: 'text' });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('korisnik');
        // Check whether the token is expired and return
        // true or false
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        if (!token) {
            return false;
        }
        return !jwt.isTokenExpired(token);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('korisnik');
        if (!token) {
            return false;
        }
        return true;
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/kvar/kvar.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/kvar/kvar.service.ts ***!
  \***********************************************/
/*! exports provided: KvarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KvarService", function() { return KvarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var KvarService = /** @class */ (function () {
    function KvarService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', '0').append("size", Number.MAX_VALUE.toString());
    }
    KvarService.prototype.getKvar = function (id) {
        console.log(id);
        return this.http.get('/api/kvar/' + id, { headers: this.headers, observe: "response" });
    };
    KvarService.prototype.getKvarovi = function (id, page, size, gotovo) {
        return this.http.get('/api/zgrada/' + id + '/kvarovi?page='
            + page + '&size=' + size + '&gotovo=' + gotovo, { headers: this.headers, observe: "response" });
    };
    KvarService.prototype.getKvaroviOdgovornog = function (page, size, gotovo) {
        return this.http.get('/api/kvarovi/odgovoran?page='
            + page + '&size=' + size + '&gotovo=' + gotovo, { headers: this.headers, observe: "response" });
    };
    KvarService.prototype.dodajKvar = function (kvar) {
        return this.http.post('/api/kvar/dodaj', kvar, { headers: this.headers, observe: 'response' });
    };
    KvarService.prototype.izmenaKvara = function (kvar) {
        return this.http.put('/api/kvar/' + kvar.id + '/izmeni', kvar, { headers: this.headers, observe: 'response' });
    };
    KvarService.prototype.dodajSliku = function (kvarId, slika) {
        var formData = new FormData();
        formData.append("files", slika);
        return this.http.post('/api/kvar/' + kvarId + '/slika/dodaj', formData, { observe: 'response' });
    };
    KvarService.prototype.getSliku = function (slikaId) {
        return this.http.get('/api/slika/' + slikaId, { observe: 'response' });
    };
    KvarService.prototype.deleteSliku = function (kvarId, slikaId) {
        return this.http.delete('/api/kvar/' + kvarId + '/slika/' + slikaId, { headers: this.headers, responseType: 'text' });
    };
    KvarService.prototype.proslediKvar = function (kvarId, korisnikId) {
        return this.http.put('/api/kvar/' + kvarId + '/prosledi/' + korisnikId, { headers: this.headers, observe: 'response' });
    };
    KvarService.prototype.zavrsiKvar = function (kvarId) {
        return this.http.put('/api/kvar/' + kvarId + '/zavrsi', { headers: this.headers, observe: 'response' });
    };
    KvarService.prototype.zakaziPopravku = function (kvarId, datum) {
        return this.http.put('/api/kvar/' + kvarId + '/zakaziVreme', { 'vremePopravke': datum }, { headers: this.headers, responseType: 'json' });
    };
    KvarService.prototype.deleteKvar = function (id) {
        return this.http.delete('/api/kvar/' + id, { headers: this.headers, responseType: 'text' });
    };
    KvarService.prototype.getMoguciOdgovorni = function (id, page, size, search) {
        return this.http.get('/api/zgrada/' + id + '/moguciOdgovorni?page=' + page + '&size=' + size + '&search=' + search, { headers: this.headers, observe: "response" });
    };
    KvarService.prototype.getKomentari = function (id, page, size) {
        return this.http.get('/api/kvar/' + id + '/komentari?page=' + page + '&size=' + size, { headers: this.headers, observe: "response" });
    };
    KvarService.prototype.dodajKomentar = function (kvarId, tekst) {
        return this.http.post('/api/kvar/' + kvarId + '/komentar/dodaj', { 'tekst': tekst }, { headers: this.headers, responseType: 'json' });
    };
    KvarService.prototype.izmenaKomentara = function (kvarId, komId, tekst) {
        return this.http.put('/api/kvar/' + kvarId + '/komentar/' + komId, { 'tekst': tekst }, { headers: this.headers, responseType: 'json' });
    };
    KvarService.prototype.deleteKomentar = function (kvarId, komId) {
        return this.http.delete('/api/kvar/' + kvarId + '/komentar/' + komId, { headers: this.headers, responseType: 'text' });
    };
    KvarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], KvarService);
    return KvarService;
}());



/***/ }),

/***/ "./src/app/services/login-guard/login-guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/login-guard/login-guard.service.ts ***!
  \*************************************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");




var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginGuardService.prototype.canActivate = function () {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/pocetna']);
            return false;
        }
        return true;
    };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/services/role-guard/role-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/role-guard/role-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);





var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RoleGuardService.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var ocekivaneUloge = route.data.ocekivaneUloge;
        var item = localStorage.getItem('korisnik');
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelper"]();
        if (!item) {
            this.router.navigate(['/logovanje']);
            return false;
        }
        // decode the token to get its payload
        var info = jwt.decodeToken(item);
        //ako su role pred skup i stanar
        var uloge = ocekivaneUloge.split("|", 5);
        //console.log(uloge);
        if (!this.auth.isLoggedIn() || uloge.indexOf(info.role[0].authority) === -1) {
            this.router.navigate(['/pocetna']);
            return false;
        }
        return true;
    };
    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);



var UtilService = /** @class */ (function () {
    function UtilService() {
        this.updateUkupnoStrana = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshPagination = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moguciOdgovorniModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moguciOdgovorniModalSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UtilService.prototype.zgrada = function () {
        var item = localStorage.getItem('korisnik');
        if (!item) {
            return -1;
        }
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        var info = jwt.decodeToken(item);
        return info.building;
    };
    UtilService.prototype.email = function () {
        var item = localStorage.getItem('korisnik');
        if (!item) {
            return null;
        }
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        var info = jwt.decodeToken(item);
        return info.sub;
    };
    UtilService.prototype.uloga = function () {
        var item = localStorage.getItem('korisnik');
        if (!item) {
            return null;
        }
        var jwt = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        var info = jwt.decodeToken(item);
        return info.role[0].authority;
    };
    UtilService.prototype.getPager = function (pager) {
        if (pager.ukupnoStrana <= 7) {
            pager.prvaStrana = 1;
            pager.poslednjaStrana = pager.ukupnoStrana;
        }
        else {
            if (pager.trenutnaStrana <= 4) {
                pager.prvaStrana = 1;
                pager.poslednjaStrana = 7;
            }
            else if (pager.trenutnaStrana + 3 > pager.ukupnoStrana) {
                pager.prvaStrana = pager.ukupnoStrana - 6;
                pager.poslednjaStrana = pager.ukupnoStrana;
            }
            else {
                pager.prvaStrana = pager.trenutnaStrana - 3;
                pager.poslednjaStrana = pager.trenutnaStrana + 3;
            }
        }
        pager.strane = Array(pager.poslednjaStrana - pager.prvaStrana + 1).fill(0).map(function (e, i) { return pager.prvaStrana + i; });
        return pager;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilService.prototype, "updateUkupnoStrana", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilService.prototype, "refreshPagination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilService.prototype, "moguciOdgovorniModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UtilService.prototype, "moguciOdgovorniModalSelection", void 0);
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/services/zgrada/zgrada.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/zgrada/zgrada.service.ts ***!
  \***************************************************/
/*! exports provided: ZgradaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZgradaService", function() { return ZgradaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");




var ZgradaService = /** @class */ (function () {
    function ZgradaService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('page', '0').append("size", Number.MAX_VALUE.toString());
    }
    ZgradaService.prototype.getZgrada = function (id) {
        return this.http.get("/api/zgrada/" + id);
    };
    ZgradaService.prototype.zgrade = function (email) {
        return this.http.get("/api/zgrada/izlistajZgradeStanara", { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.getStan = function (id) {
        //return this.http.get("/api/stan/" + id).map(this.extractData);
        return this.http.get("/api/stan/" + id);
    };
    /*private extractData(res: Response) {
        let body = res.json();
        return body;
    }*/
    ZgradaService.prototype.getStanareStana = function (stanId) {
        return this.http.get("/api/admin/stan/" + stanId + "/stanari");
    };
    ZgradaService.prototype.firmeNekeZgrade = function (zgradaId) {
        return this.http.get("/api/zgrada/" + zgradaId + "/izlistajFirme", { headers: this.headers, responseType: 'json', params: this.params });
    };
    ZgradaService.prototype.stanariNekeZgrade = function (zgradaId) {
        return this.http.get("/api/zgrada/" + zgradaId + "/izlistajStanare", { headers: this.headers, responseType: 'json', params: this.params });
    };
    ZgradaService.prototype.getObavestenja = function (id, page, size) {
        return this.http.get('/api/zgrada/' + id + '/obavestenja?page=' + page + '&size=' + size, { headers: this.headers, observe: "response" });
    };
    ZgradaService.prototype.novoObavestenje = function (tekstObavestenja) {
        return this.http.post('/api/obavestenje/dodaj', { 'tekst': tekstObavestenja }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.deleteObavestenje = function (id) {
        return this.http.delete('/api/obavestenje/' + id, { headers: this.headers, responseType: 'text' });
    };
    ZgradaService.prototype.getSastanci = function (id, page, size, krit) {
        return this.http.get('/api/zgrada/' + id + '/skupstine?page=' + page + '&size=' + size
            + '&krit=' + krit, { headers: this.headers, observe: "response" });
    };
    ZgradaService.prototype.getSastanciKojiPredstoje = function (id) {
        return this.http.get('/api/zgrada/' + id + '/predstojeceSkupstine', { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.izmenaObavestenja = function (id, tekstObavestenja) {
        return this.http.put('/api/obavestenje/' + id, { 'noviTekst': tekstObavestenja }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.noviSastanak = function (pocetakSkupstine, zavrsetakSkupstine) {
        return this.http.post('/api/skupstina/dodaj', { 'pocetakSkupstine': pocetakSkupstine + ':00', 'krajSkupstine': zavrsetakSkupstine + ':00' }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.getSastanak = function (id) {
        return this.http.get('/api/skupstina/' + id, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.izmenaSastanka = function (id, pocetakSkupstine, zavrsetakSkupstine) {
        return this.http.put('/api/skupstina/' + id, { 'pocetakSkupstine': pocetakSkupstine + ':00', 'krajSkupstine': zavrsetakSkupstine + ':00' }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.deleteSastanak = function (id) {
        return this.http.delete('/api/skupstina/' + id, { headers: this.headers, responseType: 'text' });
    };
    ZgradaService.prototype.getPtdri = function (id, page, size) {
        return this.http.get('/api/zgrada/' + id + '/ptdri?page=' + page + '&size=' + size, { headers: this.headers, observe: "response" });
    };
    ZgradaService.prototype.noviPtdr = function (tekstPtdr) {
        return this.http.post('/api/ptdr/dodaj', { 'tekst': tekstPtdr }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.izmenaPtdra = function (id, tekstPtdra) {
        return this.http.put('/api/ptdr/' + id, { 'noviTekst': tekstPtdra }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.donosenjeOdluke = function (id, tekstOdluke) {
        return this.http.put('/api/ptdr/' + id + '/odluka', { 'noviTekst': tekstOdluke }, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.dodajPtdrUSkupstinu = function (ptdrId, skupstinaId) {
        return this.http.put('/api/skupstina/' + skupstinaId + '/ptdr/' + ptdrId + '/dodaj', { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.ukloniPtdrIzSkupstine = function (ptdrId, skupstinaId) {
        return this.http.put('/api/skupstina/' + skupstinaId + '/ptdr/' + ptdrId + '/ukloni', { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.deletePtdr = function (id) {
        return this.http.delete('/api/ptdr/' + id, { headers: this.headers, responseType: 'text' });
    };
    ZgradaService.prototype.dobaviPtdr = function (ptdrId) {
        return this.http.get('api/ptdr/' + ptdrId, { headers: this.headers, responseType: 'json' });
    };
    ZgradaService.prototype.getDnevniRed = function (id, page, size) {
        return this.http.get('/api/skupstina/' + id + '/ptdri?page=' + page + '&size=' + size, { headers: this.headers, observe: "response" });
    };
    ZgradaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ZgradaService);
    return ZgradaService;
}());



/***/ }),

/***/ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:750px\">\n\n\n        <div class=\"row input\">\n            <div class=\"col-md-12\">\n                <label class=\"col-form-label\" style=\"width: 100%;\">\n                    Tekst pitanja:\n                    <input type=\"text\" class=\"form-control tekst\" placeholder=\"Tekst pitanja\" [(ngModel)]=\"tekst\" \n                    [class.is-invalid]=\"tekst.trim() === ''\" (input)=\"tekst.trim() === ''\" (blur)=\"tekst.trim() === ''\" required>\n                    <div *ngIf=\"tekst.trim() === ''\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"row input\">\n            <div class=\"col-md-3\">\n                <label>\n                    Tip pitanja:\n                </label>\n            </div>\n            <div class=\"col-md-3\">\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" id=\"radio1\" [(ngModel)]=\"vrstaPitanja\" [value]=\"0\" (click)=\"hiddenObicna = true; hiddenStanar = false; hiddenFirma = false; checked=true\">Obicno pitanje</label>\n            </div>\n            <div class=\"col-md-3\">\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" id=\"radio2\" [(ngModel)]=\"vrstaPitanja\" [value]=\"1\" (click)=\"hiddenObicna = false; hiddenStanar = true; hiddenFirma = false; checked=true\">Stanar pitanje</label>\n            </div>\n            <div class=\"col-md-3\">\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" id=\"radio3\" [(ngModel)]=\"vrstaPitanja\" [value]=\"2\" (click)=\"hiddenObicna = false; hiddenStanar = false; hiddenFirma = true; checked=true\">Firma pitanje</label>\n            </div>\n        </div>\n\n        <div class=\"row input\" [hidden]=\"!hiddenObicna\">\n            <div class=\"col-md-8\">\n                <label class=\"col-form-label\" style=\"width: 100%;\">\n                    Tekst opcije:\n                    <input type=\"text\" class=\"form-control tekstOpcije\" placeholder=\"Tekst opcije\" [(ngModel)]=\"unesenaObicnaOpcija\"\n                    [class.is-invalid]=\"unesenaObicnaOpcija.trim() === ''\" (input)=\"unesenaObicnaOpcija.trim() === ''\" (blur)=\"unesenaObicnaOpcija.trim() === ''\" required>\n                    <div *ngIf=\"unesenaObicnaOpcija.trim() === ''\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n                </label>\n            </div>\n            <div class=\"col-md-4\"> \n                <button type=\"button\" class=\"btn btn-success dodajObicnuOpciju\" [disabled]=\"unesenaObicnaOpcija.trim() === ''\" (click)=\"dodajObicnuOpciju()\">Dodaj obicnu opciju</button>                  \n            </div>\n        </div>\n\n        <div class=\"row input\" [hidden]=\"!hiddenStanar\">\n            <div class=\"col-md-8\">\n                <label class=\"col-form-label\" style=\"width: 100%;\">\n                    Stanar:\n                    <select class=\"custom-select stanarOpcija\" [(ngModel)]=\"selektovanaStanarOpcija\" [class.is-invalid]=\"selektovanaStanarOpcija === undefined\"> \n                        <option [ngValue]=\"undefined\" disabled>Izaberite stanara</option>\n                        <option *ngFor=\"let stanar of stanari; let i = index\" [ngValue]=\"stanar\">{{stanar.naziv}} - {{stanar.email}}</option>\n                    </select>\n                    <div *ngIf=\"selektovanaStanarOpcija === undefined\" class=\"invalid-feedback\">Morate izabrati neku od opcija!</div>\n                </label>  \n            </div>\n            <div class=\"col-md-4\"> \n                <button type=\"button\" class=\"btn btn-success dodajStanarOpciju\" [disabled]=\"selektovanaStanarOpcija === undefined\" (click)=\"dodajStanarOpciju()\">Dodaj stanar opciju</button>                  \n            </div>\n        </div>\n\n        <div class=\"row input\" [hidden]=\"!hiddenFirma\">\n            <div class=\"col-md-8\">\n                <label class=\"col-form-label\" style=\"width: 100%;\">\n                    Firma:\n                    <select class=\"custom-select firmaOpcija\" [(ngModel)]=\"selektovanaFirmaOpcija\" [class.is-invalid]=\"selektovanaFirmaOpcija === undefined\">\n                        <option [ngValue]=\"undefined\" disabled>Izaberite firmu</option>\n                        <option *ngFor=\"let firma of firme\" [ngValue]=\"firma\">{{firma.naziv}} - {{firma.email}}</option>\n                    </select>  \n                    <div *ngIf=\"selektovanaFirmaOpcija === undefined\" class=\"invalid-feedback\">Morate izabrati neku od opcija!</div>\n                </label>\n            </div>\n            <div class=\"col-md-4\"> \n                <button type=\"button\" class=\"btn btn-success dodajFirmaOpciju\" [disabled]=\"selektovanaFirmaOpcija === undefined\" (click)=\"dodajFirmaOpciju()\">Dodaj firma opciju</button>                  \n            </div>\n        </div>\n\n        <div class=\"row input\">\n            <div class=\"col-md-12\">\n                <label class=\"col-form-label\" style=\"width: 100%;\">\n                    Opcije:\n                    <table class=\"table table-light\">\n                        <thead>\n                            <tr>\n                                <th>Tip</th>\n                                <th>Tekst</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let opcija of opcije; let i = index\">\n                                <td *ngIf=\"opcija.type === 'DTOObicnaOpcija'\">Obicna opcija</td>\n                                <td *ngIf=\"opcija.type === 'DTOStanarOpcija'\">Stanar opcija</td>\n                                <td *ngIf=\"opcija.type === 'DTOFirmaOpcija'\">Firma opcija</td>\n                                <td>{{opcija.tekst}}</td>\n                                <td><button type=\"button\" class=\"btn btn-danger ukloni\" (click)=\"ukloniOpciju($event, i)\">Ukloni opciju</button></td>\n                            </tr>\n                        </tbody>\n                    </table> \n                </label>\n            </div>\n        </div>\n\n        <div class=\"row input\">\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-6\" *ngIf=\"tekst.trim() === '' || vrstaPitanja === undefined || opcije.length < 2\">\n                <button type=\"button\" class=\"btn btn-success dodajPitanje\"  \n                 [disabled]=\"true\">Dodaj pitanje u anketu za predlog tacke dnevnog reda</button>\n            </div>\n            <div class=\"col-md-6\" *ngIf=\"tekst.trim() !== '' && vrstaPitanja !== undefined && opcije.length > 1\">\n                <button type=\"button\" class=\"btn btn-success dodajPitanje\" \n                *ngIf=\"(vrstaPitanja === 0 && unesenaObicnaOpcija === '') || (vrstaPitanja === 1 && selektovanaStanarOpcija === undefined) || (vrstaPitanja === 2 && selektovanaFirmaOpcija === undefined)\"\n                 [disabled]=\"true\">Dodaj pitanje u anketu za predlog tacke dnevnog reda</button>\n\n                 <button type=\"button\" class=\"btn btn-success dodajPitanje\" \n                *ngIf=\"(vrstaPitanja === 0 && unesenaObicnaOpcija !== '') || (vrstaPitanja === 1 && selektovanaStanarOpcija !== undefined) || (vrstaPitanja === 2 && selektovanaFirmaOpcija !== undefined)\"\n                 [disabled]=\"false\" (click)=\"dodajPitanje()\">Dodaj pitanje u anketu za predlog tacke dnevnog reda</button>\n            </div>\n            <div class=\"col-md-3\">\n            </div>\n        </div>\n\n    \n</div>"

/***/ }),

/***/ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\n  margin: 0 auto;\n  margin-top: 20px;\n  background-color: bisque;\n  border-radius: 25px;\n  height: auto; }\n\ndiv.input {\n  overflow: auto;\n  height: auto;\n  margin: 5px 5px 5px 5px; }\n\nbutton.dodajStanarOpciju, button.dodajFirmaOpciju, button.dodajObicnuOpciju {\n  margin-top: 29px;\n  margin-left: 3px; }\n\nbutton.dodaj, button.dodajPitanje {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemdyYWRhL2Fua2V0ZS9kb2Rhai1waXRhbmplL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxcemdyYWRhXFxhbmtldGVcXGRvZGFqLXBpdGFuamVcXGRvZGFqLXBpdGFuamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFpQjtFQUNqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3pncmFkYS9hbmtldGUvZG9kYWotcGl0YW5qZS9kb2Rhai1waXRhbmplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdi5pbnB1dCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xufVxuXG5idXR0b24uZG9kYWpTdGFuYXJPcGNpanUsIGJ1dHRvbi5kb2RhakZpcm1hT3BjaWp1LCBidXR0b24uZG9kYWpPYmljbnVPcGNpanUge1xuICAgIG1hcmdpbi10b3AgOiAyOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmJ1dHRvbi5kb2RhaiwgYnV0dG9uLmRvZGFqUGl0YW5qZSB7XG4gICAgbWFyZ2luLXRvcCA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.ts ***!
  \************************************************************************/
/*! exports provided: DodajPitanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajPitanjeComponent", function() { return DodajPitanjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _model_VrstaPitanja__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/VrstaPitanja */ "./src/app/model/VrstaPitanja.ts");
/* harmony import */ var _services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/anketa/anketa.service */ "./src/app/services/anketa/anketa.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var DodajPitanjeComponent = /** @class */ (function () {
    function DodajPitanjeComponent(anketaService, toastrService) {
        this.anketaService = anketaService;
        this.toastrService = toastrService;
        this.tekst = "";
        this.opcije = new Array();
        this.vrstaPitanja = undefined;
        this.unesenaObicnaOpcija = "";
        this.selektovanaStanarOpcija = undefined;
        this.selektovanaFirmaOpcija = undefined;
        this.dodavanjePitanjaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
    DodajPitanjeComponent.prototype.ngOnInit = function () {
    };
    DodajPitanjeComponent.prototype.dodajObicnuOpciju = function () {
        var opcija = {
            type: "DTOObicnaOpcija",
            tekst: this.unesenaObicnaOpcija
        };
        this.opcije.push(opcija);
    };
    DodajPitanjeComponent.prototype.dodajStanarOpciju = function () {
        var opcija = {
            type: "DTOStanarOpcija",
            tekst: this.selektovanaStanarOpcija.naziv,
            email: this.selektovanaStanarOpcija.email
        };
        this.opcije.push(opcija);
    };
    DodajPitanjeComponent.prototype.dodajFirmaOpciju = function () {
        var opcija = {
            type: "DTOFirmaOpcija",
            tekst: this.selektovanaFirmaOpcija.naziv,
            firmaId: this.selektovanaFirmaOpcija.id
        };
        this.opcije.push(opcija);
    };
    DodajPitanjeComponent.prototype.ukloniOpciju = function (evt, i) {
        evt.preventDefault();
        this.opcije.splice(i, 1);
    };
    DodajPitanjeComponent.prototype.dodajPitanje = function () {
        var _this = this;
        if (this.opcije.length < 2) {
            //ispisati gresku za nedovoljan broj opcija
            this.toastrService.error("Nedovoljan broj opcija");
            return;
        }
        if (this.vrstaPitanja === _model_VrstaPitanja__WEBPACK_IMPORTED_MODULE_2__["VrstaPitanja"].OBICNO_PITANJE) {
            for (var _i = 0, _a = this.opcije; _i < _a.length; _i++) {
                var opcija = _a[_i];
                if (opcija.type !== "DTOObicnaOpcija") {
                    //ispisati gresku, ne sme biti drugih opcija
                    this.toastrService.error("Ne sme biti drugih opcija");
                    return;
                }
            }
        }
        else if (this.vrstaPitanja === _model_VrstaPitanja__WEBPACK_IMPORTED_MODULE_2__["VrstaPitanja"].STANAR_PITANJE) {
            for (var _b = 0, _c = this.opcije; _b < _c.length; _b++) {
                var opcija = _c[_b];
                if (opcija.type !== "DTOStanarOpcija") {
                    //ispisati gresku, ne sme biti drugih opcija
                    this.toastrService.error("Ne sme biti drugih opcija");
                    return;
                }
            }
        }
        else {
            for (var _d = 0, _e = this.opcije; _d < _e.length; _d++) {
                var opcija = _e[_d];
                if (opcija.type !== "DTOFirmaOpcija") {
                    this.toastrService.error("Ne sme biti drugih opcija");
                    return;
                }
            }
        }
        this.anketaService.dodajPitanje(this.ptdrId, this.opcije, this.tekst, this.vrstaPitanja)
            .subscribe(function (result) {
            _this.toastrService.success("Pitanje uspesno dodato");
            _this.dodavanjePitanjaEvent.emit(result);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DodajPitanjeComponent.prototype, "firme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DodajPitanjeComponent.prototype, "stanari", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DodajPitanjeComponent.prototype, "ptdrId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DodajPitanjeComponent.prototype, "dodavanjePitanjaEvent", void 0);
    DodajPitanjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-pitanje',
            template: __webpack_require__(/*! ./dodaj-pitanje.component.html */ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.html"),
            styles: [__webpack_require__(/*! ./dodaj-pitanje.component.scss */ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_3__["AnketaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], DodajPitanjeComponent);
    return DodajPitanjeComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:800px\" *ngIf=\"(k_uloga === 'PREDSEDNIK_SKUPSTINE' || k_uloga === 'STANAR') && pocetakSkupstine > datum\">\n\n\t<div class=\"row poll\">\n\t\t<div class=\"col-md-9\">\n\t\t\t<p class=\"text-info\">Da li zelite da dodate novo pitanje?</p>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<button type=\"button\" class=\"btn btn-info dodaj\" (click)=\"hidden=!hidden; $event.stopPropagation()\">Dodaj pitanje</button>\n\t\t</div>\n\t</div>\n\t\n</div>\n\n<app-dodaj-pitanje [stanari]=\"stanari\" [firme]=\"firme\" [ptdrId]=\"ptdrId\" (dodavanjePitanjaEvent)=\"dodajPitanje($event)\" [hidden]=\"!hidden\"></app-dodaj-pitanje>\n\n<div *ngFor=\"let pitanje of anketa\">\n\t<app-pitanje [stanari]=\"stanari\" [firme]=\"firme\" [pitanje]=\"pitanje\" [pocetakSkupstine]=\"pocetakSkupstine\" [krajSkupstine]=\"krajSkupstine\"\n\t(brisanjePitanjaEvent)=\"izbrisiPitanje($event)\" (dodavanjeOpcijeEvent)=\"dodajOpciju($event)\" (brisanjeOpcijeEvent)=\"izbrisiOpciju($event)\"\n\t(izmenaPitanjaEvent)=\"izmeniPitanje($event)\">\n\t</app-pitanje>\n</div>"

/***/ }),

/***/ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\n  margin: 0 auto;\n  margin-top: 20px;\n  background-color: bisque;\n  border-radius: 25px;\n  height: 60px; }\n\np.text-info {\n  margin-top: 10px;\n  margin-left: 20px;\n  font-size: 18pt; }\n\nbutton.dodaj {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemdyYWRhL2Fua2V0ZS9pemxpc3Rhai1hbmtldGUvQzpcXFVzZXJzXFxMZW5vdm9cXERlc2t0b3BcXEt1cnNldmlcXEtUUy1OV1QtYW5ndWxhci1tYXN0ZXIgLSBDb3B5L3NyY1xcYXBwXFx6Z3JhZGFcXGFua2V0ZVxcaXpsaXN0YWotYW5rZXRlXFxpemxpc3Rhai1hbmtldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvemdyYWRhL2Fua2V0ZS9pemxpc3Rhai1hbmtldGUvaXpsaXN0YWotYW5rZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbnAudGV4dC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE4cHQ7XG59XG5cbmJ1dHRvbi5kb2RhaiB7XG4gICAgbWFyZ2luLXRvcCA6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.ts ***!
  \****************************************************************************/
/*! exports provided: IzlistajAnketeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlistajAnketeComponent", function() { return IzlistajAnketeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");







var IzlistajAnketeComponent = /** @class */ (function () {
    function IzlistajAnketeComponent(router, route, zgradaService, toastrService, utilService) {
        this.router = router;
        this.route = route;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.utilService = utilService;
        this.datum = new Date();
    }
    IzlistajAnketeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.zgrada = params['id'];
        });
        this.ptdrId = Number(this.route.snapshot.paramMap.get("idTacke"));
        this.skupstinaId = Number(this.route.snapshot.paramMap.get("idSastanka"));
        this.k_uloga = this.utilService.uloga();
        this.zgradaService.getSastanak(this.skupstinaId)
            .subscribe(function (res) {
            _this.skupstina = res;
            _this.pocetakSkupstine = _this.skupstina.pocetakSkupstine;
            _this.krajSkupstine = _this.skupstina.krajSkupstine;
        }, function (error) {
            _this.router.navigate(['sastanci'], { relativeTo: _this.route.parent });
            _this.toastrService.error(error.error);
        });
        this.zgradaService.dobaviPtdr(this.ptdrId)
            .subscribe(function (result) {
            _this.tacke = result;
            _this.anketa = _this.tacke.anketa;
        }, function (error) {
            _this.router.navigate(['sastanci'], { relativeTo: _this.route.parent });
            _this.toastrService.error(error.error);
        });
        if (this.k_uloga === "PREDSEDNIK_SKUPSTINE" || this.k_uloga === "STANAR") {
            this.zgradaService.firmeNekeZgrade(this.zgrada)
                .subscribe(function (result) {
                _this.firme = result;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
            this.zgradaService.stanariNekeZgrade(this.zgrada)
                .subscribe(function (result) {
                _this.stanari = result;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    IzlistajAnketeComponent.prototype.dodajPitanje = function (pitanje) {
        this.anketa.push(pitanje);
    };
    IzlistajAnketeComponent.prototype.izbrisiPitanje = function (pitanjeId) {
        for (var i = 0; i < this.anketa.length; i++) {
            if (this.anketa[i].id === pitanjeId) {
                this.anketa.splice(i, 1);
                break;
            }
        }
    };
    IzlistajAnketeComponent.prototype.izmeniPitanje = function (pitanje) {
        for (var i = 0; i < this.anketa.length; i++) {
            if (this.anketa[i].id === pitanje.id) {
                this.anketa[i] = pitanje;
            }
        }
    };
    IzlistajAnketeComponent.prototype.izbrisiOpciju = function (opcija) {
        var index;
        for (var i = 0; i < this.anketa.length; i++) {
            if (this.anketa[i].id === opcija.pitanjeId) {
                for (var j = 0; j < this.anketa[i].opcije.length; j++) {
                    if (this.anketa[i].opcije[j].id === opcija.opcijaId) {
                        this.anketa[i].opcije.splice(j, 1);
                        break;
                    }
                }
            }
        }
    };
    IzlistajAnketeComponent.prototype.dodajOpciju = function (opcija) {
        for (var i = 0; i < this.anketa.length; i++) {
            if (this.anketa[i].id === opcija.pitanjeId) {
                this.anketa[i].opcije.push(opcija);
                break;
            }
        }
    };
    IzlistajAnketeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izlistaj-ankete',
            template: __webpack_require__(/*! ./izlistaj-ankete.component.html */ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.html"),
            styles: [__webpack_require__(/*! ./izlistaj-ankete.component.scss */ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], IzlistajAnketeComponent);
    return IzlistajAnketeComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/ankete/pitanje/pitanje.component.html":
/*!**************************************************************!*\
  !*** ./src/app/zgrada/ankete/pitanje/pitanje.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width:800px\">\n    \n    <div class=\"row poll\" *ngIf=\"dozvola()\">\n        <div class=\"col-md-7\">\n            <p class=\"text-info\"><span [hidden]=\"editable\">{{pitanje.tekst}}</span>\n            <span class=\"izmena\" [hidden]=\"!editable\" contenteditable=\"true\" #ref1>{{pitanje.tekst}}</span></p>\n        </div>\n        <div class=\"col-md-5\">\n            <button type=\"button\" class=\"btn btn-info vidiGlasove\" (click)=\"hidden = !hidden\">Vidi glasove</button>\n            <button type=\"button\" class=\"btn btn-info izmenitiPitanje\" [hidden]=\"editable\" (click)=\"izmeniPitanje()\">Izmeniti</button>\n            <button type=\"button\" class=\"btn btn-info sacuvatiPitanje\" [hidden]=\"!editable\" (click)=\"sacuvajPitanje(ref1)\">Sacuvati</button>\n            <button type=\"button\" class=\"btn btn-danger izbrisatiPitanje\" (click)=\"izbrisiPitanje(pitanje.id)\">Izbrisati</button>\n        </div>\n    </div>\n\n    <div class=\"row poll\" *ngIf=\"!dozvola()\">\n        <div class=\"col-md-9\">\n            <p class=\"text-info\">{{pitanje.tekst}}</p>\n        </div>\n        <div class=\"col-md-3\">\n            <button type=\"button\" class=\"btn btn-info vidiGlasove\" (click)=\"hidden = !hidden\">Vidi glasove</button>\n        </div>\n    </div>\n\n    <fieldset>\n        <div class=\"form-group\">\n            <div *ngFor=\"let opcija of pitanje.opcije; let i = index\">\n                <div class=\"row options\">\n\n                    <div class=\"col-md-8\" *ngIf=\"dozvola()\">\n                        <div class=\"custom-control custom-radio\">\n                            <input id=\"{{opcija.id}}\" type=\"radio\" name=\"customRadio\" class=\"custom-control-input\" [(ngModel)]=\"selektovanaOpcija\" [value]=\"opcija\">\n                            <label contenteditable=\"false\" class=\"custom-control-label\" style=\"max-width: 380px; overflow:auto;\" for=\"{{opcija.id}}\">\n                                <span id=\"span_{{opcija.id}}_1\" [hidden]=\"editableOption[i]\">{{opcija.tekst}}</span>\n                                <span class=\"izmenaOpcije\" id=\"span_{{opcija.id}}_2\" [hidden]=\"!editableOption[i]\" contenteditable=\"true\">{{opcija.tekst}}</span>\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"!dozvola()\">\n                        <div class=\"custom-control custom-radio\">\n                            <input id=\"{{opcija.id}}\" type=\"radio\" name=\"customRadio\" class=\"custom-control-input\" [(ngModel)]=\"selektovanaOpcija\" [value]=\"opcija\">\n                            <label class=\"custom-control-label\" style=\"max-width: 510px; overflow:auto;\" for={{opcija.id}}>{{opcija.tekst}}</label>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\" *ngIf=\"dozvola()\">\n                        <button type=\"button\" class=\"btn btn-warning izmenitiOpciju\" [hidden]=\"editableOption[i]\" (click)=\"izmeniOpciju(i)\">Izmeniti</button>\n                        <button type=\"button\" class=\"btn btn-warning sacuvatiOpciju\" [hidden]=\"!editableOption[i]\" (click)=\"sacuvajOpciju(i, opcija)\">Sacuvati</button>\n                        <button type=\"button\" class=\"btn btn-danger izbrisatiOpciju\" [disabled]=\"pitanje.opcije.length === 2\" (click)=\"izbrisiOpciju(pitanje.id, opcija.id)\">Izbrisati</button>\n                    </div>\n                </div>\n\n                <div class= \"row results\" [hidden]=\"!hidden\">\n                    <div class=\"col-md-12\">\n                        <span *ngFor=\"let stan of opcija.stanovi\">Stan {{stan.broj}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"(k_uloga === 'STANAR' || k_uloga === 'PREDSEDNIK_SKUPSTINE') && pocetakSkupstine < datum && krajSkupstine > datum\">\n                <div class=\"col-md-2\">\n                    <button type=\"button\" class=\"btn btn-success glasati\" [disabled]=\"stanZaGlasanje === undefined || selektovanaOpcija === udenfined\" (click)=\"glasaj(pitanje.id)\">Glasaj</button>\n                </div>\n        \n                <div class=\"col-md-4\">    \n                    <select class=\"custom-select glasanjeOpcija\" style=\"width:200px\" [(ngModel)]=\"stanZaGlasanje\" [class.is-invalid]=\"stanZaGlasanje === undefined\">\n                        <option [ngValue]=\"undefined\" disabled>Izaberite stan</option>\n                        <option *ngFor=\"let stan of stanoviKojiNisuGlasali\" [ngValue]=\"stan\">Stan {{stan.broj}}</option>\n                    </select>\n                </div>\n        \n                <div class=\"col-md-2\">\n                    <button type=\"button\" class=\"btn btn-danger uklonitiGlas\" [disabled]=\"stanZaUklanjanjeGlasa === undefined\" (click)=\"ukloniGlas(pitanje.id)\">Ukloni glas</button>\n                </div>\n        \n                <div class=\"col-md-4\">    \n                    <select class=\"custom-select uklanjanjeGlasaOpcija\" style=\"width:200px\" [(ngModel)]=\"stanZaUklanjanjeGlasa\" [class.is-invalid]=\"stanZaUklanjanjeGlasa === undefined\">\n                        <option [ngValue]=\"undefined\" disabled>Izaberite stan</option>\n                        <option *ngFor=\"let stan of stanoviKojiSuGlasali\" [ngValue]=\"stan\">Stan {{stan.broj}}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n\n    <div class=\"row unos\" *ngIf=\"dozvola() && pitanje.vrstaPitanja === 'OBICNO_PITANJE'\">\n        <div class=\"col-md-4\">\n            <button type=\"button\" class=\"btn btn-success dodajObicnuOpciju1\" [disabled]=\"tekstObicneOpcije === ''\" (click)=\"dodajObicnuOpciju(pitanje.id)\">Dodaj obicnu opciju</button>\n        </div>\n        <div class=\"col-md-8\"> \n            <label class=\"col-form-label\" style=\"width: 100%;\">\n                Tekst opcije:\n                <input type=\"text\" class=\"form-control tekst1\" placeholder=\"Tekst opcije\" [(ngModel)]=\"tekstObicneOpcije\" [class.is-invalid]=\"tekstObicneOpcije === ''\">  \n                <div *ngIf=\"tekstObicneOpcije === ''\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n            </label>                  \n        </div>\n    </div>\n\n    <div class=\"row unos\" *ngIf=\"dozvola() && pitanje.vrstaPitanja === 'STANAR_PITANJE'\">\n        <div class=\"col-md-4\">\n            <button type=\"button\" class=\"btn btn-success dodajStanarOpciju1\" [disabled]=\"selektovanaStanarOpcija === undefined\" (click)=\"dodajStanarOpciju(pitanje.id)\">Dodaj stanara kao opciju</button>\n        </div>\n        <div class=\"col-md-8\"> \n            <label class=\"col-form-label\" style=\"width: 100%;\">\n                Stanar:\n                <select class=\"custom-select stanarOpcija1\" [(ngModel)]=\"selektovanaStanarOpcija\" [class.is-invalid]=\"selektovanaStanarOpcija === undefined\">\n                    <option [ngValue]=\"undefined\" disabled>Izaberite stanara</option>\n                    <option *ngFor=\"let stanar of stanari\" [ngValue]=\"stanar\">{{stanar.naziv}} - {{stanar.email}}</option>\n                </select>\n            </label>                \n        </div>\n    </div>\n\n    <div class=\"row unos\" *ngIf=\"dozvola() && pitanje.vrstaPitanja === 'FIRMA_PITANJE'\">\n        <div class=\"col-md-4\">\n            <button type=\"button\" class=\"btn btn-success dodajFirmaOpciju1\" [disabled]=\"selektovanaFirmaOpcija === undefined\" (click)=\"dodajFirmaOpciju(pitanje.id)\">Dodaj firmu kao opciju</button>\n        </div>\n        <div class=\"col-md-8\">\n            <label class=\"col-form-label\" style=\"width: 100%;\">\n                Firma:\n                <select class=\"custom-select firmaOpcija1\" [(ngModel)]=\"selektovanaFirmaOpcija\" [class.is-invalid]=\"selektovanaFirmaOpcija === undefined\">\n                    <option [ngValue]=\"undefined\" disabled>Izaberite firmu</option>\n                    <option *ngFor=\"let firma of firme\" [ngValue]=\"firma\">{{firma.naziv}} - {{firma.email}}</option>\n                </select>\n            </label>                   \n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/zgrada/ankete/pitanje/pitanje.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/zgrada/ankete/pitanje/pitanje.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\n  margin: 0 auto;\n  margin-top: 20px;\n  background-color: lightgrey;\n  border-radius: 25px;\n  height: auto; }\n\ndiv.poll {\n  word-wrap: break-word;\n  height: auto; }\n\ndiv.options {\n  background-color: darkgrey;\n  border-radius: 25px;\n  margin: 10px 10px 10px 10px;\n  height: auto;\n  min-height: 80px; }\n\ndiv.results {\n  background-color: bisque;\n  border-radius: 25px;\n  margin: 20px 20px 20px 20px; }\n\nspan {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-size: 16pt; }\n\ndiv.custom-control {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-size: 16pt; }\n\n.row {\n  height: 80px;\n  margin-top: 10px; }\n\n.unos {\n  height: 90px;\n  margin-top: 10px; }\n\np.text-info {\n  margin-top: 20px;\n  margin-left: 20px;\n  font-size: 22pt; }\n\nbutton.izmenitiOpciju, button.izmenitiPitanje, button.izbrisatiOpciju, button.izbrisatiPitanje,\nbutton.vidiGlasove, button.sacuvatiOpciju, button.sacuvatiPitanje {\n  margin-top: 20px;\n  margin-right: 1px; }\n\nbutton.glasati, button.uklonitiGlas {\n  margin-left: 20px; }\n\nbutton.dodajStanarOpciju1,\nbutton.dodajFirmaOpciju1, button.dodajObicnuOpciju1 {\n  margin-top: 28px;\n  margin-left: 20px; }\n\ninput.form-control {\n  width: 200px;\n  margin-left: 1px; }\n\n.custom-select {\n  width: 95%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemdyYWRhL2Fua2V0ZS9waXRhbmplL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxcemdyYWRhXFxhbmtldGVcXHBpdGFuamVcXHBpdGFuamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksZ0JBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7O0VBRUksZ0JBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjs7RUFFSSxnQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3pncmFkYS9hbmtldGUvcGl0YW5qZS9waXRhbmplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmRpdi5wb2xsIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5kaXYub3B0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbmRpdi5yZXN1bHRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbnNwYW4ge1xuICAgIG1hcmdpbi10b3AgOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuZGl2LmN1c3RvbS1jb250cm9sIHtcbiAgICBtYXJnaW4tdG9wIDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHQ7XG59XG5cbi5yb3cge1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udW5vcyB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnAudGV4dC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wIDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDIycHQ7XG59XG5cbmJ1dHRvbi5pem1lbml0aU9wY2lqdSwgYnV0dG9uLml6bWVuaXRpUGl0YW5qZSwgYnV0dG9uLml6YnJpc2F0aU9wY2lqdSwgYnV0dG9uLml6YnJpc2F0aVBpdGFuamUsIFxuYnV0dG9uLnZpZGlHbGFzb3ZlLCBidXR0b24uc2FjdXZhdGlPcGNpanUsIGJ1dHRvbi5zYWN1dmF0aVBpdGFuamUge1xuICAgIG1hcmdpbi10b3AgOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG5idXR0b24uZ2xhc2F0aSwgYnV0dG9uLnVrbG9uaXRpR2xhcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5kb2RhalN0YW5hck9wY2lqdTEsIFxuYnV0dG9uLmRvZGFqRmlybWFPcGNpanUxLCBidXR0b24uZG9kYWpPYmljbnVPcGNpanUxIHtcbiAgICBtYXJnaW4tdG9wIDogMjhweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICAgIHdpZHRoOiA5NSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/zgrada/ankete/pitanje/pitanje.component.ts":
/*!************************************************************!*\
  !*** ./src/app/zgrada/ankete/pitanje/pitanje.component.ts ***!
  \************************************************************/
/*! exports provided: PitanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitanjeComponent", function() { return PitanjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/anketa/anketa.service */ "./src/app/services/anketa/anketa.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var PitanjeComponent = /** @class */ (function () {
    function PitanjeComponent(route, utilService, anketaService, zgradaService, toastrService) {
        this.route = route;
        this.utilService = utilService;
        this.anketaService = anketaService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.tekstObicneOpcije = "";
        this.selektovanaStanarOpcija = undefined;
        this.selektovanaFirmaOpcija = undefined;
        this.selektovanaOpcija = undefined;
        this.stanZaGlasanje = undefined;
        this.stanZaUklanjanjeGlasa = undefined;
        this.datum = new Date();
        this.editable = false;
        this.editableOption = [];
        this.brisanjePitanjaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.izmenaPitanjaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brisanjeOpcijeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dodavanjeOpcijeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PitanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.zgrada = params['id'];
        });
        this.ptdrId = Number(this.route.snapshot.paramMap.get("idTacke"));
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        if (this.k_uloga === "STANAR" || this.k_uloga === "PREDSEDNIK_SKUPSTINE") {
            this.anketaService.stanoviKojiSuGlasali(this.pitanje.id)
                .subscribe(function (result) {
                _this.stanoviKojiSuGlasali = result;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
            this.anketaService.stanoviKojiNisuGlasali(this.pitanje.id)
                .subscribe(function (result) {
                _this.stanoviKojiNisuGlasali = result;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    PitanjeComponent.prototype.dozvola = function () {
        return (this.pitanje.stanar.email === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgrada === this.k_zgrada.toString() && this.pocetakSkupstine > this.datum;
    };
    PitanjeComponent.prototype.izmeniPitanje = function () {
        this.editable = !this.editable;
    };
    PitanjeComponent.prototype.sacuvajPitanje = function (span) {
        var _this = this;
        //ovde namestiti da bude pravi predlog tacke dnevnog reda
        this.anketaService.izmeniPitanje(this.ptdrId, this.pitanje.id, span.innerHTML)
            .subscribe(function (result) {
            _this.izmenaPitanjaEvent.emit(result);
            _this.toastrService.success("Izmena pitanja uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.izbrisiPitanje = function (pitanjeId) {
        var _this = this;
        this.anketaService.izbrisiPitanje(this.ptdrId, pitanjeId)
            .subscribe(function (result) {
            _this.brisanjePitanjaEvent.emit(pitanjeId);
            _this.toastrService.success("Brisanje pitanja uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.dodajObicnuOpciju = function (pitanjeId) {
        var _this = this;
        this.anketaService.dodajOpciju(pitanjeId, { "type": "DTOObicnaOpcija", "tekst": this.tekstObicneOpcije })
            .subscribe(function (result) {
            _this.dodavanjeOpcijeEvent.emit(result);
            _this.toastrService.success("Dodavanje opcije uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.dodajStanarOpciju = function (pitanjeId) {
        var _this = this;
        this.anketaService.dodajOpciju(pitanjeId, { "type": "DTOStanarOpcija", "tekst": this.selektovanaStanarOpcija.naziv, "email": this.selektovanaStanarOpcija.email })
            .subscribe(function (result) {
            _this.dodavanjeOpcijeEvent.emit(result);
            _this.toastrService.success("Dodavanje opcije uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.dodajFirmaOpciju = function (pitanjeId) {
        var _this = this;
        this.anketaService.dodajOpciju(pitanjeId, { "type": "DTOFirmaOpcija",
            "tekst": this.selektovanaFirmaOpcija.naziv, "firmaId": this.selektovanaFirmaOpcija.id })
            .subscribe(function (result) {
            _this.dodavanjeOpcijeEvent.emit(result);
            _this.toastrService.success("Dodavanje opcije uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.izmeniOpciju = function (i) {
        this.editableOption[i] = !this.editableOption[i];
    };
    PitanjeComponent.prototype.sacuvajOpciju = function (i, opcija) {
        var _this = this;
        console.log(this.pitanje.opcije);
        var noviTekst = document.getElementById("span_" + opcija.id + "_2").innerHTML;
        var dtoOpcija;
        if (this.pitanje.vrstaPitanja.toString() === "OBICNO_PITANJE") {
            dtoOpcija = { "type": "DTOObicnaOpcija", "tekst": noviTekst };
        }
        else if (this.pitanje.vrstaPitanja.toString() === "STANAR_PITANJE") {
            dtoOpcija = { "type": "DTOStanarOpcija", "tekst": noviTekst, "email": opcija.email };
        }
        else {
            dtoOpcija = { "type": "DTOFirmaOpcija", "tekst": noviTekst, "firmaId": opcija.firmaId };
        }
        this.anketaService.izmeniOpciju(this.pitanje.id, opcija.id, dtoOpcija)
            .subscribe(function (result) {
            for (var i_1 = 0; i_1 < _this.pitanje.opcije.length; i_1++) {
                if (_this.pitanje.opcije[i_1].id === opcija.id) {
                    _this.pitanje.opcije[i_1] = result;
                    _this.editableOption[i_1] = !_this.editableOption[i_1];
                }
            }
            _this.toastrService.success("Izmena opcije uspesna");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.izbrisiOpciju = function (pitanjeId, opcijaId) {
        var _this = this;
        //srediti za pravu putanju
        this.anketaService.izbrisiOpciju(pitanjeId, opcijaId)
            .subscribe(function (result) {
            _this.brisanjeOpcijeEvent.emit({ "pitanjeId": pitanjeId, "opcijaId": opcijaId });
            _this.toastrService.success("Brisanje opcije uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.glasaj = function (pitanjeId) {
        var _this = this;
        this.anketaService.glasaj(pitanjeId, { "stanId": this.stanZaGlasanje.id, "opcijaId": this.selektovanaOpcija.id })
            .subscribe(function (result) {
            for (var i = 0; i < _this.pitanje.opcije.length; i++) {
                if (_this.pitanje.opcije[i].id === _this.selektovanaOpcija.id) {
                    _this.pitanje.opcije[i].stanovi.push(result);
                    break;
                }
            }
            for (var i = 0; i < _this.stanoviKojiNisuGlasali.length; i++) {
                if (_this.stanoviKojiNisuGlasali[i].id === _this.stanZaGlasanje.id) {
                    _this.stanoviKojiSuGlasali.push(_this.stanoviKojiNisuGlasali[i]);
                    _this.stanoviKojiNisuGlasali.splice(i, 1);
                    _this.stanZaGlasanje = undefined;
                    break;
                }
            }
            _this.toastrService.success("Glasanje uspesno");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    PitanjeComponent.prototype.ukloniGlas = function (pitanjeId) {
        var _this = this;
        var opcijaId;
        for (var _i = 0, _a = this.pitanje.opcije; _i < _a.length; _i++) {
            var opcija = _a[_i];
            for (var _b = 0, _c = opcija.stanovi; _b < _c.length; _b++) {
                var stan = _c[_b];
                if (stan.id === this.stanZaUklanjanjeGlasa.id) {
                    opcijaId = opcija.id;
                }
            }
        }
        this.anketaService.ukloniGlas(pitanjeId, { "stanId": this.stanZaUklanjanjeGlasa.id, "opcijaId": opcijaId })
            .subscribe(function (result) {
            for (var i = 0; i < _this.pitanje.opcije.length; i++) {
                for (var j = 0; j < _this.pitanje.opcije[i].stanovi.length; j++) {
                    if (_this.pitanje.opcije[i].stanovi[j].id === _this.stanZaUklanjanjeGlasa.id) {
                        _this.pitanje.opcije[i].stanovi.splice(j, 1);
                    }
                }
            }
            for (var i = 0; i < _this.stanoviKojiSuGlasali.length; i++) {
                if (_this.stanoviKojiSuGlasali[i].id === _this.stanZaUklanjanjeGlasa.id) {
                    _this.stanoviKojiNisuGlasali.push(_this.stanoviKojiSuGlasali[i]);
                    _this.stanoviKojiSuGlasali.splice(i, 1);
                    _this.stanZaUklanjanjeGlasa = undefined;
                    break;
                }
            }
            _this.toastrService.success("Uspesno uklonjen glas");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "pitanje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PitanjeComponent.prototype, "stanari", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PitanjeComponent.prototype, "firme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "pocetakSkupstine", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "krajSkupstine", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "brisanjePitanjaEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "izmenaPitanjaEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "brisanjeOpcijeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PitanjeComponent.prototype, "dodavanjeOpcijeEvent", void 0);
    PitanjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pitanje',
            template: __webpack_require__(/*! ./pitanje.component.html */ "./src/app/zgrada/ankete/pitanje/pitanje.component.html"),
            styles: [__webpack_require__(/*! ./pitanje.component.scss */ "./src/app/zgrada/ankete/pitanje/pitanje.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_anketa_anketa_service__WEBPACK_IMPORTED_MODULE_4__["AnketaService"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], PitanjeComponent);
    return PitanjeComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sadrzaj row justify-content-md-center\">\n  <form class=\"col-md-6 box\" (ngSubmit)=\"dodajKvar()\">\n    <fieldset>\n      <div class=\"form-group row\">\n        <label for=\"mesto\" class=\"control-label col-md-3\"><b>Lokacija kvara</b></label>\n        <div class=\"col-md-9\">\n          <textarea rows=\"4\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"validnoMesto === false\" id=\"mesto\" name=\"mesto\" \n          placeholder=\"Mesto\" [(ngModel)]=\"kvar.lokacija\" (input)=\"proveriMesto()\" (blur)=\"proveriMesto()\" required></textarea>\n          <div *ngIf=\"validnoMesto === false\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"opis\" class=\"control-label col-md-3\"><b>Opis</b></label>\n        <div class=\"col-md-9\">\n          <textarea rows=\"4\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"validnaOpis === false\" id=\"opis\" name=\"opis\"\n          placeholder=\"Opis\" [(ngModel)]=\"kvar.opis\" (input)=\"proveriOpis()\" (blur)=\"proveriOpis()\" required></textarea>\n          <div *ngIf=\"validnaOpis === false\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n        </div>\n      </div>\n    \n      <div class=\"form-group row\">\n        <label class=\"control-label col-md-3\"><b>Odgovorno Lice</b></label>\n        <div class=\"col-md-9\">\n          <button id=\"odgovorno_lice\" type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px\" (click)=\"moguciOdgovorni()\">Izaberi</button>\n          <span *ngIf=\"odgovornoLice !== undefined\" class=\"low-impact-text\">{{odgovornoLice.naziv}}</span>        \n        </div>\n      </div>\n      \n      <moguci-odgovorni-modal></moguci-odgovorni-modal>\n\n      <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-9\">\n          <button id=\"submit\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!validnaForma\">Dodaj</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.ts ***!
  \*******************************************************************/
/*! exports provided: DodajKvarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajKvarComponent", function() { return DodajKvarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var DodajKvarComponent = /** @class */ (function () {
    function DodajKvarComponent(router, route, toastrService, kvarService, utilService) {
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.kvarService = kvarService;
        this.utilService = utilService;
        this.validnoMesto = undefined;
        this.validanOpis = undefined;
        this.validnaForma = false;
        this.ngUnsubscribe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    DodajKvarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
        this.kvar = {
            lokacija: "",
            opis: "",
            odgovornoLice: undefined
        };
        this.utilService.moguciOdgovorniModalSelection
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (korisnik) {
            _this.odgovornoLice = korisnik;
        });
    };
    DodajKvarComponent.prototype.proveriMesto = function () {
        if (this.kvar.lokacija.trim() === "") {
            this.validnoMesto = false;
        }
        else {
            this.validnoMesto = true;
        }
        this.proveriDugme();
    };
    DodajKvarComponent.prototype.proveriOpis = function () {
        if (this.kvar.opis.trim() === "") {
            this.validanOpis = false;
        }
        else {
            this.validanOpis = true;
        }
        this.proveriDugme();
    };
    DodajKvarComponent.prototype.proveriDugme = function () {
        if (this.validnoMesto && this.validanOpis) {
            this.validnaForma = true;
        }
        else {
            this.validnaForma = false;
        }
    };
    DodajKvarComponent.prototype.dodajKvar = function () {
        var _this = this;
        if (this.odgovornoLice !== undefined)
            this.kvar.odgovornoLiceId = this.odgovornoLice.id;
        this.kvarService.dodajKvar(this.kvar).subscribe(function (data) {
            var kvar = data.body;
            _this.toastrService.success("Kvar uspesno dodat");
            _this.router.navigate(['kvar/' + kvar.id], { relativeTo: _this.route.parent });
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    DodajKvarComponent.prototype.moguciOdgovorni = function () {
        this.utilService.moguciOdgovorniModal.emit(this.zgradaId);
    };
    DodajKvarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DodajKvarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-kvar',
            template: __webpack_require__(/*! ./dodaj-kvar.component.html */ "./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__["KvarService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], DodajKvarComponent);
    return DodajKvarComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sadrzaj row justify-content-md-center\">\n    <form class=\"col-md-6 box\" (ngSubmit)=\"izmeniKvar()\">\n      <fieldset>\n        <div class=\"form-group row\">\n          <label for=\"mesto\" class=\"control-label col-md-3\"><b>Lokacija kvara</b></label>\n          <div class=\"col-md-9\">\n            <textarea rows=\"4\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"validnoMesto === false\" id=\"mesto\" name=\"mesto\" \n            placeholder=\"Mesto\" [(ngModel)]=\"lokacijaKvara\" (input)=\"proveriMesto()\" (blur)=\"proveriMesto()\" required></textarea>\n            <div *ngIf=\"validnoMesto === false\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"opis\" class=\"control-label col-md-3\"><b>Opis</b></label>\n          <div class=\"col-md-9\">\n            <textarea rows = \"4\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"validnaOpis === false\" id=\"opis\" name=\"opis\"\n            placeholder=\"Opis\" [(ngModel)]=\"opisKvara\" (input)=\"proveriOpis()\" (blur)=\"proveriOpis()\" required></textarea>\n            <div *ngIf=\"validnaOpis === false\" class=\"invalid-feedback\">Ovo polje ne sme biti prazno!</div>\n          </div>\n        </div>\n  \n        <div class=\"row\">\n          <div class=\"col-lg-3\"></div>\n          <div class=\"col-lg-9\">\n            <button id=\"submit\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!validnaForma\">Izmeni</button>\n            <button id=\"reset\" type=\"button\" class=\"btn btn-danger\" (click)=\"reset()\">Resetuj</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.ts ***!
  \***********************************************************************/
/*! exports provided: IzmenaKvaraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzmenaKvaraComponent", function() { return IzmenaKvaraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var IzmenaKvaraComponent = /** @class */ (function () {
    function IzmenaKvaraComponent(kvarService, toastrService, router, route) {
        this.kvarService = kvarService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
        this.validnoMesto = undefined;
        this.validanOpis = undefined;
        this.validnaForma = false;
        this.opisKvara = "";
        this.lokacijaKvara = "";
    }
    IzmenaKvaraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kvarId = Number(this.route.snapshot.paramMap.get("kvarId"));
        this.kvarService.getKvar(this.kvarId)
            .subscribe(function (res) {
            _this.kvar = res.body;
            _this.opisKvara = _this.kvar.opis;
            _this.lokacijaKvara = _this.kvar.lokacija;
            _this.proveriMesto();
            _this.proveriOpis();
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    IzmenaKvaraComponent.prototype.proveriMesto = function () {
        if (this.lokacijaKvara.trim() === "") {
            this.validnoMesto = false;
        }
        else {
            this.validnoMesto = true;
        }
        this.proveriDugme();
    };
    IzmenaKvaraComponent.prototype.proveriOpis = function () {
        if (this.opisKvara.trim() === "") {
            this.validanOpis = false;
        }
        else {
            this.validanOpis = true;
        }
        this.proveriDugme();
    };
    IzmenaKvaraComponent.prototype.proveriDugme = function () {
        if (this.validnoMesto && this.validanOpis) {
            this.validnaForma = true;
        }
        else {
            this.validnaForma = false;
        }
    };
    IzmenaKvaraComponent.prototype.reset = function () {
        this.lokacijaKvara = this.kvar.lokacija;
        this.opisKvara = this.kvar.opis;
        this.proveriMesto();
        this.proveriOpis();
    };
    IzmenaKvaraComponent.prototype.izmeniKvar = function () {
        var _this = this;
        this.kvar.lokacija = this.lokacijaKvara;
        this.kvar.opis = this.opisKvara;
        this.kvarService.izmenaKvara(this.kvar)
            .subscribe(function (result) {
            _this.toastrService.success("Kvar uspesno izmenjen");
            _this.router.navigate(['kvar/' + _this.kvar.id], { relativeTo: _this.route.parent });
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    IzmenaKvaraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izmena-kvara',
            template: __webpack_require__(/*! ./izmena-kvara.component.html */ "./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__["KvarService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], IzmenaKvaraComponent);
    return IzmenaKvaraComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/komentari/komentari.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/komentari/komentari.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Komentari</h3>\n<div *ngIf=\"kvar.stanar.email === k_email || kvar.odgovornoLice.email === k_email\" class=\"container\">\n    <form class=\"novoObavestenje box\" name=\"novoObavestenjeForm\" (ngSubmit)=\"novoObavestenje()\" novalidate>\n        <fieldset>\n            <div class=\"form-group\">\n                <textarea type=\"text\" class=\"form-control\" rows=\"3\" id=\"tekstKomentara\" \n                    (input)=\"proveriTekst()\" (blur)=\"proveriTekst()\" name=\"tekstKomentara\" \n                    placeholder=\"Napisite svoj komentar..\"  [(ngModel)]=\"tekstKomentara\" required>\n                </textarea>\n            </div>\n            <div class=\"form-group left\">\n              <button id=\"button_komentar\" type=\"button\" class=\"btn btn-primary\" (click)=\"dodajKomentar()\" [disabled]=\"!validanKomentar\">Potvrdi</button>\n            </div>\n        </fieldset>\n    </form>\n</div>\n\n<app-paginacija  (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n\n<div class=\"komentar\" *ngFor=\"let komentar of komentari; let i = index\">\n    <div class=\"row blob\">\n        <table>\n        <tr>\n            <td>\n                <b id=\"kom_{{komentar.id}}_autor\" class=\"naziv\">{{komentar.autor.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la komentar u <i>{{komentar.datum | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span id=\"kom_{{komentar.id}}_tekst\" class=\"line-breaker low-impact-text\" [hidden] = \"editable[i]\">{{komentar.tekst}}</span>\n                <span id=\"kom_{{komentar.id}}_novi_tekst\" class=\"line-breaker low-impact-text\" style=\"color:blue\" contenteditable=\"true\" [hidden] = \"!editable[i]\" #ref>{{komentar.tekst}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span *ngIf=\"komentar.autor.email === k_email\">\n                    <a class=\"kom_{{komentar.id}}_izmeni\" (click)=\"izmeni(i)\"><span [hidden] = \"editable[i]\" class=\"operacije lower-impact-text\">izmeni</span></a>\n                    <a class=\"kom_{{komentar.id}}_brisi\" (click)=\"brisi(komentar)\"><span [hidden] = \"editable[i]\" class=\"operacije lower-impact-text\">brisi</span></a>\n                    <a class=\"kom_{{komentar.id}}_potvrdi\" (click)=\"potvrdi(i,ref)\"[hidden] = \"!editable[i]\">\n                            <span   style=\"color:green\" class=\"operacije lower-impact-text\">potvrdi</span> </a>\n                        <a class=\"kom_{{komentar.id}}_odustani\" (click)=\"odustani(i,ref)\" [hidden] = \"!editable[i]\" >\n                            <span  style = \"color:red\" class=\"operacije lower-impact-text\"> <font>odustani</font></span> </a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/komentari/komentari.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/komentari/komentari.component.ts ***!
  \*****************************************************************/
/*! exports provided: KomentariComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomentariComponent", function() { return KomentariComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var KomentariComponent = /** @class */ (function () {
    function KomentariComponent(utilService, kvarService, toastrService) {
        this.utilService = utilService;
        this.kvarService = kvarService;
        this.toastrService = toastrService;
        this.editable = [];
        this.validanTekst = undefined;
        this.validanKomentar = false;
    }
    KomentariComponent.prototype.ngOnInit = function () {
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
    };
    KomentariComponent.prototype.dodajKomentar = function () {
        var _this = this;
        this.kvarService.dodajKomentar(this.kvar.id, this.tekstKomentara)
            .subscribe(function (result) {
            _this.utilService.refreshPagination.emit(0);
            _this.tekstKomentara = '';
            _this.validanTekst = undefined;
            _this.validanKomentar = false;
            _this.toastrService.success("Komentar uspesno dodat");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KomentariComponent.prototype.proveriTekst = function () {
        if (this.tekstKomentara.trim() === "") {
            this.validanTekst = false;
        }
        else {
            this.validanTekst = true;
        }
        this.proveriDugme();
    };
    KomentariComponent.prototype.proveriDugme = function () {
        if (this.validanTekst) {
            this.validanKomentar = true;
        }
        else {
            this.validanKomentar = false;
        }
    };
    KomentariComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.kvarService.getKomentari(this.kvar.id, pager.trenutnaStrana - 1, pager.velicinaStrane)
            .subscribe(function (res) {
            _this.komentari = res.body;
            _this.editable = [];
            //for(let i = 0; i < this.komentari.length; i++){
            // this.editable.push(false);
            //}
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get('X-ukupno-strana')));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KomentariComponent.prototype.dozvola = function (autor) {
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada;
    };
    KomentariComponent.prototype.brisi = function (komentar) {
        var _this = this;
        this.kvarService.deleteKomentar(this.kvar.id, komentar.id).subscribe(function (result) {
            _this.utilService.refreshPagination.emit(0);
            _this.toastrService.success('Komentar uspesno izbrisan');
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KomentariComponent.prototype.izmeni = function (i) {
        this.editable[i] = !this.editable[i];
    };
    KomentariComponent.prototype.potvrdi = function (i, span) {
        var _this = this;
        this.tekst = span.innerHTML;
        if (this.tekst.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.komentari[i].tekst;
        }
        else {
            this.kvarService.izmenaKomentara(this.kvar.id, this.komentari[i].id, span.innerHTML).subscribe(function (result) {
                _this.utilService.refreshPagination.emit(0);
                _this.toastrService.success('Komentar uspesno izmenjen');
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    KomentariComponent.prototype.odustani = function (i, span) {
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.komentari[i].tekst;
        }
        else {
            this.editable[i] = !this.editable[i];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KomentariComponent.prototype, "kvar", void 0);
    KomentariComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-komentari',
            template: __webpack_require__(/*! ./komentari.component.html */ "./src/app/zgrada/kvarovi/komentari/komentari.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_3__["KvarService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], KomentariComponent);
    return KomentariComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/kvar/kvar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/zgrada/kvarovi/kvar/kvar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sadrzaj\" *ngIf=\"kvar !== undefined\">\n<div class=\"row\">\n<table>\n    <tr>\n        <td>\n            <b class=\"naziv\">{{kvar.stanar.naziv}} </b> \n            <span class=\"lower-impact-text\"> je postavio/la kvar u <i>{{kvar.datumPostavljanja | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            \n        </td> \n    </tr>\n    <tr>\n        <td>\n            <span class=\"super-high-impact-text\" *ngIf=\"kvar.gotovo\">KVAR JE ZAVSREN</span>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <span id=\"lokacija\" class=\" line-breaker low-impact-text\">Lokacija - {{kvar.lokacija}}</span>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <span id=\"opis\" class=\"line-breaker low-impact-text\">{{kvar.opis}}</span>\n        </td>\n    </tr>\n    <tr>\n        <td>\n           <span id=\"odgovorno_lice\" class=\"low-impact-text\">Odgovorno Lice - {{kvar.odgovornoLice.naziv}} ({{kvar.odgovornoLice.email}})</span>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <span class=\"low-impact-text\">Vreme popravke - {{kvar.vremePopravke | date: \"HH:mm dd.MM.yyyy\"}}\n                <span *ngIf=\"kvar.vremePopravke === null\">Nije zakazano</span>\n            </span>\n        </td>\n    </tr>\n    <tr *ngIf=\"kvar.stanar.email === k_email && !kvar.gotovo\">\n        <td>\n            <span class=\"low-impact-text\"> Dodaj sliku - </span>\n            <input type=\"file\" accept=\"image/x-png,image/jpeg\"  multiple (change)=\"onChange($event)\"  #fileInput placeholder=\"Dodaj sliku...\"/> \n        </td>\n    </tr>\n    <tr>\n        <span *ngIf=\"dozvola(kvar.stanar.email) && !kvar.gotovo\">\n            <a class=\"izmeni\" [routerLink]=\"['../../kvar/' + kvar.id + '/izmena']\" ><span class=\"operacije lower-impact-text\">izmeni</span></a>\n        </span>\n        <span *ngIf=\"dozvola(kvar.stanar.email) && !kvar.gotovo\">\n            <a class=\"brisi\" (click)=\"brisi()\"><span class=\"operacije lower-impact-text\">brisi</span></a>\n        </span>\n        <span *ngIf=\"kvar.odgovornoLice.email === k_email && !kvar.gotovo\">\n            <a class=\"prosledi\" (click)=\"moguciOdgovorni()\"><span class=\"operacije lower-impact-text\">prosledi kvar</span></a>\n        </span>\n        <span *ngIf=\"kvar.odgovornoLice.email === k_email && !kvar.gotovo\">\n            <a class=\"zakazi\" [routerLink]=\"['../../kvar/' + kvar.id + '/zakazivanje']\"><span class=\"operacije lower-impact-text\">zakazi vreme popravke</span></a>\n        </span>\n        <span *ngIf=\"kvar.stanar.email === k_email && !kvar.gotovo\">\n            <a class=\"izmeni_odgovornog\" (click)=\"moguciOdgovorni()\"><span class=\"operacije lower-impact-text\">izmeni odgovorno lice</span></a>\n        </span>\n        <span *ngIf=\"kvar.stanar.email === k_email && !kvar.gotovo\">\n            <a class=\"zavrsi\" (click)=\"zavrsiKvar()\"><span class=\"operacije lower-impact-text\">zavrsi kvar</span></a>\n        </span>\n        <span *ngIf=\"kvar.stanar.email === k_email && kvar.gotovo\">\n            <a class=\"od_zavrsi\" (click)=\"zavrsiKvar()\"><span class=\"operacije lower-impact-text\">od-zavrsi kvar</span></a>\n        </span>\n    </tr>\n    \n</table>\n</div>\n<div class= \"row\">\n    <div *ngFor=\"let slika of slike\" class=\"gallery\">\n        \n        <a *ngIf=\"slika !== undefined\" target=\"_blank\" href=\"data:image/png;base64,{{slika.sadrzaj}}\">\n            <span class=\"crop\">\n                <img id=\"slika.id\" src=\"data:image/png;base64,{{slika.sadrzaj}}\" />\n            </span>\n        </a>\n        <div *ngIf=\"kvar.stanar.email === k_email && !kvar.gotovo\" class=\"desc\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"brisiSliku(slika.id)\">Obrisi</button>\n        </div>\n    </div>\n</div>\n<moguci-odgovorni-modal></moguci-odgovorni-modal>\n<hr/>\n<div>\n    <app-komentari [kvar]=\"kvar\"></app-komentari>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/kvar/kvar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/zgrada/kvarovi/kvar/kvar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.gallery {\n  margin: 5px;\n  border: 1px solid #ccc;\n  float: left; }\n\ndiv.gallery:hover {\n  border: 1px solid #777; }\n\ndiv.gallery img {\n  height: 200px; }\n\ndiv.desc {\n  padding: 15px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemdyYWRhL2t2YXJvdmkva3Zhci9DOlxcVXNlcnNcXExlbm92b1xcRGVza3RvcFxcS3Vyc2V2aVxcS1RTLU5XVC1hbmd1bGFyLW1hc3RlciAtIENvcHkvc3JjXFxhcHBcXHpncmFkYVxca3Zhcm92aVxca3Zhclxca3Zhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksYUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3pncmFkYS9rdmFyb3ZpL2t2YXIva3Zhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYuZ2FsbGVyeTpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3Nztcbn1cblxuZGl2LmdhbGxlcnkgaW1nIHtcbiAgICBoZWlnaHQ6MjAwcHg7XG59XG5cbmRpdi5kZXNjIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/kvar/kvar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/zgrada/kvarovi/kvar/kvar.component.ts ***!
  \*******************************************************/
/*! exports provided: KvarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KvarComponent", function() { return KvarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");








var KvarComponent = /** @class */ (function () {
    function KvarComponent(router, route, kvarService, utilService, toastrService) {
        this.router = router;
        this.route = route;
        this.kvarService = kvarService;
        this.utilService = utilService;
        this.toastrService = toastrService;
        this.ngUnsubscribe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.slike = [];
    }
    KvarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.params.subscribe(function (params) {
            _this.kvarService.getKvar(Number(params['kvarId']))
                .subscribe(function (res) {
                _this.kvar = res.body;
                var _loop_1 = function (i) {
                    _this.kvarService.getSliku(_this.kvar.slike[i])
                        .subscribe(function (res) {
                        _this.slike[i] = res.body;
                    });
                };
                for (var i = 0; i < _this.kvar.slike.length; i++) {
                    _loop_1(i);
                }
            }, function (error) {
                _this.toastrService.error(error.error);
                _this.router.navigate(['kvarovi'], { relativeTo: _this.route.parent });
            });
        });
        this.utilService.moguciOdgovorniModalSelection
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (korisnik) {
            _this.kvarService.proslediKvar(_this.kvar.id, korisnik.id)
                .subscribe(function (res) {
                _this.kvar.odgovornoLice = korisnik;
                _this.toastrService.success("Odgovorno lice uspesno izmenjeno");
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        });
    };
    KvarComponent.prototype.brisiSliku = function (slikaId) {
        var _this = this;
        this.kvarService.deleteSliku(this.kvar.id, slikaId).subscribe(function (res) {
            for (var i = 0; i < _this.slike.length; i++) {
                if (_this.slike[i].id === slikaId) {
                    _this.slike.splice(i, 1);
                    _this.toastrService.success("Slika uspesno uklonjena");
                    break;
                }
            }
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KvarComponent.prototype.onChange = function (event, input) {
        var _this = this;
        var fileBrowser = this.fileInput.nativeElement;
        var slika = fileBrowser.files[0];
        if (slika) {
            this.kvarService.dodajSliku(this.kvar.id, slika).subscribe(function (res) {
                _this.slike.push(res.body);
                _this.toastrService.success("Slika uspesno dodata");
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    KvarComponent.prototype.dozvola = function (autor) {
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.kvar.zgradaId === this.k_zgrada;
    };
    KvarComponent.prototype.moguciOdgovorni = function () {
        this.utilService.moguciOdgovorniModal.emit(this.kvar.zgradaId);
    };
    KvarComponent.prototype.zavrsiKvar = function () {
        var _this = this;
        this.kvarService.zavrsiKvar(this.kvar.id)
            .subscribe(function (res) {
            _this.kvar.gotovo = !_this.kvar.gotovo;
            _this.toastrService.success("Kvar uspesno zavrsen");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KvarComponent.prototype.brisi = function () {
        var _this = this;
        this.kvarService.deleteKvar(this.kvar.id).subscribe(function (result) {
            _this.toastrService.success("Uspesno izbrisan kvar");
            _this.router.navigate(['kvarovi'], { relativeTo: _this.route.parent });
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KvarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KvarComponent.prototype, "fileInput", void 0);
    KvarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kvar',
            template: __webpack_require__(/*! ./kvar.component.html */ "./src/app/zgrada/kvarovi/kvar/kvar.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss"), __webpack_require__(/*! ./kvar.component.scss */ "./src/app/zgrada/kvarovi/kvar/kvar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_6__["KvarService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], KvarComponent);
    return KvarComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/kvarovi.component.html":
/*!*******************************************************!*\
  !*** ./src/app/zgrada/kvarovi/kvarovi.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n\n<div class=\"row\">\n    <a id=\"dodaj\" *ngIf=\"zgradaId === k_zgrada\" routerLink=\"../kvar/dodaj\">\n        <button class=\"btn\" style=\"cursor: pointer;\"><b>Dodaj</b></button>\n    </a>\n\n    <div class=\"checkbox\">\n        <label style=\"padding: 10px; margin-left: 20px;\">\n            <input type=\"checkbox\" [(ngModel)]=\"gotovo\" (change)=\"checked()\"> Prikazi zavrsene kvarove\n        </label>\n    </div>\n</div>\n<div *ngFor=\"let kvar of kvarovi\">\n    <div class=\"row blob\" id=\"kvar_{{kvar.id}}\">\n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{kvar.stanar.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la kvar u <i>{{kvar.datumPostavljanja | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span class=\"super-high-impact-text\" *ngIf=\"kvar.gotovo\">KVAR JE ZAVSREN</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span id = \"opisKvara\" class=\"line-breaker low-impact-text\">{{kvar.opis}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                \n                <a class=\"pogledaj_{{kvar.id}}\" [routerLink]=\"['../kvar', kvar.id]\"><span class=\"operacije lower-impact-text\">pogledaj</span> </a>\n                <span  *ngIf=\"dozvola(kvar.stanar.email) && !kvar.gotovo\">\n                        <a class=\"izmeni_{{kvar.id}}\" [routerLink]=\"['../kvar/' + kvar.id + '/izmena']\" ><span class=\"operacije lower-impact-text\">izmeni</span></a>\n                </span>\n                <span *ngIf=\"dozvola(kvar.stanar.email) && !kvar.gotovo\">\n                    <a class=\"brisi_{{kvar.id}}\" (click)=\"brisi(kvar)\"><span class=\"operacije lower-impact-text\">brisi</span></a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/kvarovi.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/zgrada/kvarovi/kvarovi.component.ts ***!
  \*****************************************************/
/*! exports provided: KvaroviComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KvaroviComponent", function() { return KvaroviComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../..//services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var KvaroviComponent = /** @class */ (function () {
    function KvaroviComponent(route, utilService, kvarService, toastrService) {
        this.route = route;
        this.utilService = utilService;
        this.kvarService = kvarService;
        this.toastrService = toastrService;
        this.gotovo = false;
    }
    KvaroviComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
    };
    KvaroviComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.kvarService.getKvarovi(this.zgradaId, pager.trenutnaStrana - 1, pager.velicinaStrane, this.gotovo)
            .subscribe(function (res) {
            _this.kvarovi = res.body;
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get('X-ukupno-strana')));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KvaroviComponent.prototype.dozvola = function (autor) {
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada;
    };
    KvaroviComponent.prototype.checked = function () {
        this.utilService.refreshPagination.emit(0);
    };
    KvaroviComponent.prototype.brisi = function (kvar) {
        var _this = this;
        this.kvarService.deleteKvar(kvar.id).subscribe(function (result) {
            _this.toastrService.success("Uspesno izbrisan kvar");
            _this.utilService.refreshPagination.emit(0);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    KvaroviComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    KvaroviComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kvarovi',
            template: __webpack_require__(/*! ./kvarovi.component.html */ "./src/app/zgrada/kvarovi/kvarovi.component.html"),
            styles: [__webpack_require__(/*! ../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_4__["KvarService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], KvaroviComponent);
    return KvaroviComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.html":
/*!*****************************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" [ngStyle]=\"{'display': display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': display}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h2 class=\"modal-title\">Izbor odgovornog lica</h2>\n\n      </div>\n      <div class=\"modal-body\">\n        <label class=\"col-form-label\" >\n            Pretraga:\n            <input type=\"text\" class=\"form-control\" placeholder=\"Pretraga\" [(ngModel)]=\"search\"\n                (input)=\"izmena()\" >\n        </label>\n        <app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n\n        <table class=\"table table-hover\">\n            <thead>\n              <tr class=\"table-primary\">\n                <th class=\"col-md-2\">Naziv</th>\n                <th class=\"col-md-2\">Email</th>\n                <th class=\"col-md-2\">Uloga</th>\n                <th class=\"col-md-2\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"table-secondary\" *ngFor=\"let korisnik of korisnici\">\n                <td class=\"col-md-2\">{{korisnik.naziv}}</td>\n                <td class=\"col-md-2\">{{korisnik.email}}</td>\n                <td class=\"col-md-2\">{{korisnik.uloga}}</td>\n                <td class=\"col-md-2\"><button id=\"button_{{korisnik.id}}\" type=\"button\" class=\"btn btn-primary\" (click)=\"onPrihvati(korisnik)\">Prihvati</button></td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onOdustani()\">Odustani</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.ts":
/*!***************************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.ts ***!
  \***************************************************************************/
/*! exports provided: MoguciOdgovorniModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoguciOdgovorniModal", function() { return MoguciOdgovorniModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js");






var MoguciOdgovorniModal = /** @class */ (function () {
    function MoguciOdgovorniModal(kvarService, utilService) {
        this.kvarService = kvarService;
        this.utilService = utilService;
        this.display = 'none';
        this.ngUnsubscribe = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.search = '';
    }
    MoguciOdgovorniModal.prototype.onPrihvati = function (korisnik) {
        this.utilService.moguciOdgovorniModalSelection.emit(korisnik);
        this.display = 'none';
    };
    MoguciOdgovorniModal.prototype.onOdustani = function () {
        this.display = 'none';
    };
    MoguciOdgovorniModal.prototype.ngOnInit = function () {
        var _this = this;
        this.utilService.moguciOdgovorniModal
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (zgradaId) {
            _this.display = 'block';
            _this.zgradaId = zgradaId;
            _this.utilService.refreshPagination.emit(0);
        });
    };
    MoguciOdgovorniModal.prototype.izlistaj = function (pager) {
        var _this = this;
        if (this.zgradaId !== undefined) {
            this.kvarService.getMoguciOdgovorni(this.zgradaId, pager.trenutnaStrana - 1, pager.velicinaStrane, this.search)
                .subscribe(function (res) {
                _this.korisnici = res.body;
                _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get('X-ukupno-strana')));
            }, function (error) {
                console.log(error.error);
            });
        }
    };
    MoguciOdgovorniModal.prototype.izmena = function () {
        this.utilService.refreshPagination.emit(0);
    };
    MoguciOdgovorniModal.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    MoguciOdgovorniModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'moguci-odgovorni-modal',
            template: __webpack_require__(/*! ./moguci-odgovorni.modal.html */ "./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.html"),
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 120%;\n            height: 100vh;\n        }\n        h2 {\n          margin-left: 2.19%;\n        }\n        .modal-dialog{\n            max-width: 80%;\n            left: 0;\n            top: 0;\n            height: 500px;\n        }\n        .modal-body{\n            max-height: calc(100vh - 210px);\n            overflow-y: auto;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_2__["KvarService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], MoguciOdgovorniModal);
    return MoguciOdgovorniModal;
}());



/***/ }),

/***/ "./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"sadrzaj container\">\n  <form class=\"zakaziPopravku box\" name= \"zakaziPopravku\" (ngSubmit)=\"zakaziPopravku()\" novalidate>\n    <fieldset>\n      <legend>Zakazivanje popravke kvara</legend>\n      <div class=\"form-group\">\n        <label for=\"tekst\" class=\"control-label\">Odaberite datum i vreme popravke:</label>\n        <input id=\"field_createdDate\" type=\"datetime-local\" class=\"form-control\" name=\"vremePopravka\" \n        (input)=\"proveriVreme()\" (blur)=\"proveriVreme()\" [(ngModel)]=\"vremePopravka\"/>\n      </div>\n      <div class=\"form-group center\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"zakaziPopravku()\" [disabled]=\"!validnoVrijeme\" >Potvrdi</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ZakaziPopravkuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZakaziPopravkuComponent", function() { return ZakaziPopravkuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/kvar/kvar.service */ "./src/app/services/kvar/kvar.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var ZakaziPopravkuComponent = /** @class */ (function () {
    function ZakaziPopravkuComponent(router, toastrService, kvarService, route) {
        this.router = router;
        this.toastrService = toastrService;
        this.kvarService = kvarService;
        this.route = route;
        this.validnoVrijeme = false;
    }
    ZakaziPopravkuComponent.prototype.ngOnInit = function () {
        this.kvarId = Number(this.route.snapshot.paramMap.get("kvarId"));
    };
    ZakaziPopravkuComponent.prototype.proveriVreme = function () {
        if (this.vremePopravka != undefined && new Date(this.vremePopravka).getTime() >= new Date().getTime()) {
            this.validnoVrijeme = true;
        }
        else {
            this.validnoVrijeme = false;
        }
    };
    ZakaziPopravkuComponent.prototype.zakaziPopravku = function () {
        var _this = this;
        this.vremePopravka = new Date(this.vremePopravka);
        this.vremePopravkaString = this.vremePopravka.toJSON();
        this.kvarService.zakaziPopravku(this.kvarId, this.vremePopravkaString.substring(0, 16))
            .subscribe(function (result) {
            _this.toastrService.success("Uspesno zakazano vreme popravke");
            _this.router.navigate(['kvar/' + _this.kvarId], { relativeTo: _this.route.parent });
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    ZakaziPopravkuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zakazi-popravku',
            template: __webpack_require__(/*! ./zakazi-popravku.component.html */ "./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_kvar_kvar_service__WEBPACK_IMPORTED_MODULE_3__["KvarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ZakaziPopravkuComponent);
    return ZakaziPopravkuComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\" *ngIf=\"uloga === 'ADMIN'\">\n    <a class=\"nav-link\" [class.active]=\"tab === 'stanovi'\" [routerLink]=\"['stanovi']\"\n    (click)=\"promeniTab('stanovi')\">Stanovi</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"tab === 'obavestenja'\" [routerLink]=\"['obavestenja']\"\n    (click)=\"promeniTab('obavestenja')\">Obavestenja</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"tab === 'tacke'\" [routerLink]=\"['tacke']\"\n    (click)=\"promeniTab('tacke')\">Predlozi tacke dnevnog reda</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"tab === 'sastanci'\" [routerLink]=\"['sastanci']\"\n    (click)=\"promeniTab('sastanci')\">Sastanci skupstine</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"tab === 'kvarovi'\" [routerLink]=\"['kvarovi']\"\n    (click)=\"promeniTab('kvarovi')\">Kvarovi</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarZgradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarZgradaComponent", function() { return NavbarZgradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");





var NavbarZgradaComponent = /** @class */ (function () {
    function NavbarZgradaComponent(utilService, route, router) {
        this.utilService = utilService;
        this.route = route;
        this.router = router;
    }
    NavbarZgradaComponent.prototype.ngOnInit = function () {
        this.uloga = this.utilService.uloga();
        if (this.uloga === "ADMIN") {
            this.tab = "stanovi";
            this.router.navigate(['zgrada/' + this.id + '/stanovi']);
        }
        else {
            //this.tab = "obavestenja"
            //this.router.navigate(['zgrada/' + this.id + '/obavestenja'])
        }
    };
    NavbarZgradaComponent.prototype.promeniTab = function (tab) {
        this.tab = tab;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NavbarZgradaComponent.prototype, "id", void 0);
    NavbarZgradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-zgrada',
            template: __webpack_require__(/*! ./navbar-zgrada.component.html */ "./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarZgradaComponent);
    return NavbarZgradaComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"sadrzaj container\">\n  <form class=\"novoObavestenje box\" name=\"novoObavestenjeForm\" (ngSubmit)=\"novoObavestenje()\" novalidate>\n    <fieldset>\n      <legend>Novo obavestenje</legend>\n      <div class=\"form-group\">\n        <label for=\"tekst\" class=\"control-label\">Unesite tekst obavestenja:</label>\n        <textarea type=\"text\" class=\"form-control tekstObavestenja\" rows=\"10\" id=\"tekstObavestenja\" \n        (input)=\"proveriTekst()\" (blur)=\"proveriTekst()\" name=\"tekstObavestenja\" placeholder=\"Tekst\" [(ngModel)]=\"tekstObavestenja\" required>\n        </textarea>\n      </div>\n      <div class=\"form-group center\">\n        <button id='dodajObavestenje' type=\"button\" class=\"btn btn-primary\" (click)=\"novoObavestenje()\" [disabled]=\"!validnoObavestenje\">Potvrdi</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DodajObavestenjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajObavestenjeComponent", function() { return DodajObavestenjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _model_zgrada__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/zgrada */ "./src/app/model/zgrada.ts");








var DodajObavestenjeComponent = /** @class */ (function () {
    function DodajObavestenjeComponent(router, utilService, zgradaService, toastrService) {
        this.router = router;
        this.utilService = utilService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.validanTekst = undefined;
        this.validnoObavestenje = false;
    }
    DodajObavestenjeComponent.prototype.ngOnInit = function () {
    };
    DodajObavestenjeComponent.prototype.novoObavestenje = function () {
        var _this = this;
        this.zgradaService.novoObavestenje(this.tekstObavestenja)
            .subscribe(function (result) {
            _this.toastrService.success("Obavestenje uspesno dodato!");
            _this.utilService.refreshPagination.emit(0);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    DodajObavestenjeComponent.prototype.proveriTekst = function () {
        if (this.tekstObavestenja.trim() === "") {
            this.validanTekst = false;
        }
        else {
            this.validanTekst = true;
        }
        this.proveriDugme();
    };
    DodajObavestenjeComponent.prototype.proveriDugme = function () {
        if (this.validanTekst) {
            this.validnoObavestenje = true;
        }
        else {
            this.validnoObavestenje = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DodajObavestenjeComponent.prototype, "korisnici", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DodajObavestenjeComponent.prototype, "datum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_zgrada__WEBPACK_IMPORTED_MODULE_6__["Zgrada"])
    ], DodajObavestenjeComponent.prototype, "zgrada", void 0);
    DodajObavestenjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-obavestenje',
            template: __webpack_require__(/*! ./dodaj-obavestenje.component.html */ "./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DodajObavestenjeComponent);
    return DodajObavestenjeComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/obavestenja/obavestenja.component.html":
/*!***************************************************************!*\
  !*** ./src/app/zgrada/obavestenja/obavestenja.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n<a *ngIf=\"zgradaId === k_zgrada\" routerLink=\"../obavestenje/dodaj\">\n    <button class=\"btn\" id = \"dodajObavestenje\" style=\"cursor: pointer;\"><b>Dodaj</b></button>\n</a>\n<div *ngFor=\"let ob of obavestenja; let i = index\">\n    <div class=\"row blob\">\n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{ob.stanar.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la obavestenje u <i>{{ob.datum | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span class=\"line-breaker\" id = \"stariTekst\" [hidden] = \"editable[i]\" #ref>{{ob.tekst}}</span>\n                <span class=\"line-breaker\" contenteditable=\"true\" [hidden] = \"!editable[i]\" \n                id = \"noviTekst\" style=\"color:blue\" name = \"noviTekst\" #ref1>{{ob.tekst}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span *ngIf=\"dozvola(ob.stanar.email)\">\n                    <a (click)=\"izmeni(i)\"  [hidden] = \"editable[i]\"><span id = \"izmeniObavestenje\" class=\"operacije lower-impact-text\">izmeni</span> </a>\n                    <a (click)=\"potvrdi(i,ref1)\"[hidden] = \"!editable[i]\">\n                        <span   style=\"color:green\" id = \"potvrdiObavestenje\" class=\"operacije lower-impact-text\">potvrdi</span> </a>\n                    <a (click)=\"odustani(i,ref1)\" [hidden] = \"!editable[i]\" >\n                        <span  style = \"color:red\" id = \"odbaciPromenu\" class=\"operacije lower-impact-text\"> <font>odustani</font></span> </a>\n                    <a (click)=\"brisi(ob.id)\"><span id = \"brisiObavestenje\" class=\"operacije lower-impact-text\">brisi</span></a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/zgrada/obavestenja/obavestenja.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/zgrada/obavestenja/obavestenja.component.ts ***!
  \*************************************************************/
/*! exports provided: ObavestenjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObavestenjaComponent", function() { return ObavestenjaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../..//services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ObavestenjaComponent = /** @class */ (function () {
    function ObavestenjaComponent(router, route, utilService, authenticateService, zgradaService, toastrService) {
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.authenticateService = authenticateService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.editable = [];
    }
    ObavestenjaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
    };
    ObavestenjaComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.zgradaService.getObavestenja(this.zgradaId, pager.trenutnaStrana - 1, pager.velicinaStrane)
            .subscribe(function (res) {
            _this.obavestenja = res.body;
            _this.editable = [];
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get("X-ukupno-strana")));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    ObavestenjaComponent.prototype.dozvola = function (autor) {
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada;
    };
    ObavestenjaComponent.prototype.izmeni = function (i) {
        this.editable[i] = !this.editable[i];
    };
    ObavestenjaComponent.prototype.odustani = function (i, span) {
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.obavestenja[i].tekst;
        }
        else {
            this.editable[i] = !this.editable[i];
        }
    };
    ObavestenjaComponent.prototype.potvrdi = function (i, span) {
        var _this = this;
        this.tekst = span.innerHTML;
        if (this.tekst.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.obavestenja[i].tekst;
        }
        else {
            this.zgradaService.izmenaObavestenja(this.obavestenja[i].id, this.tekst).subscribe(function (result) {
                _this.toastrService.success("Uspesno izmenjeno obavestenje");
                _this.utilService.refreshPagination.emit(0);
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    ObavestenjaComponent.prototype.brisi = function (id) {
        var _this = this;
        this.zgradaService.deleteObavestenje(id).subscribe(function (result) {
            _this.toastrService.success("Uspesno izbrisano obavestenje");
            _this.utilService.refreshPagination.emit(0);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    ObavestenjaComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ObavestenjaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-obavestenja',
            template: __webpack_require__(/*! ./obavestenja.component.html */ "./src/app/zgrada/obavestenja/obavestenja.component.html"),
            styles: [__webpack_require__(/*! ../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ObavestenjaComponent);
    return ObavestenjaComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"sadrzaj container\">\n  <form class=\"noviPtdr box\" name= \"noviPtdr\" (ngSubmit)=\"noviPtdr()\" novalidate>\n    <fieldset>\n      <legend>Zakazivanje skupstine</legend>\n      <div class=\"form-group\">\n        <label for=\"tekst\" class=\"control-label\">Odaberite datum pocetka skupstine:</label>\n        <input id=\"field_createdDate\" type=\"datetime-local\" class=\"form-control\" name=\"pocetakSkupstine\" \n        (input)=\"proveriPocetak()\" (blur)=\"proveriPocetak()\" [(ngModel)]=\"pocetakSkupstine\"/>\n        <label for=\"tekst\" class=\"control-label\">Odaberite datum zavrsetka skupstine:</label>\n        <input id=\"field_createdDate\" type=\"datetime-local\" class=\"form-control\" name=\"zavrsetakSkupstine\" \n        (input)=\"proveriKraj()\" (blur)=\"proveriKraj()\"[(ngModel)]=\"zavrsetakSkupstine\"/>\n      </div>\n      <div class=\"form-group center\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"noviSastanak()\" [disabled]=\"!validnoVrijeme\" >Potvrdi</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.ts ***!
  \****************************************************************************/
/*! exports provided: DodajSastanakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajSastanakComponent", function() { return DodajSastanakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var DodajSastanakComponent = /** @class */ (function () {
    function DodajSastanakComponent(router, toastrService, zgradaService) {
        this.router = router;
        this.toastrService = toastrService;
        this.zgradaService = zgradaService;
        this.validanPocetak = undefined;
        this.validanKraj = undefined;
        this.validnoVrijeme = false;
    }
    DodajSastanakComponent.prototype.ngOnInit = function () {
    };
    DodajSastanakComponent.prototype.noviSastanak = function () {
        var _this = this;
        this.pocetakSkupstine = new Date(this.pocetakSkupstine);
        this.pocetakSkupstineString = this.pocetakSkupstine.toJSON();
        this.zavrsetakSkupstine = new Date(this.zavrsetakSkupstine);
        this.zavrsetakSkupstineString = this.zavrsetakSkupstine.toJSON();
        this.zgradaService.noviSastanak(this.pocetakSkupstineString.substring(0, 16), this.zavrsetakSkupstineString.substring(0, 16))
            .subscribe(function (result) {
            _this.toastrService.success("Sastanak uspesno zakazan");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    DodajSastanakComponent.prototype.proveriPocetak = function () {
        if (this.pocetakSkupstine != undefined && new Date(this.pocetakSkupstine).getTime() >= new Date().getTime()) {
            this.validanPocetak = true;
        }
        else {
            this.validanPocetak = false;
        }
        this.proveriDugme();
    };
    DodajSastanakComponent.prototype.proveriKraj = function () {
        if (this.zavrsetakSkupstine != undefined && new Date(this.zavrsetakSkupstine).getTime() >= new Date().getTime()) {
            this.validanKraj = true;
        }
        else {
            this.validanKraj = false;
        }
        this.proveriDugme();
    };
    DodajSastanakComponent.prototype.proveriDugme = function () {
        if (this.validanPocetak && this.validanKraj) {
            if (new Date(this.zavrsetakSkupstine).getTime() <= new Date(this.pocetakSkupstine).getTime()) {
                this.validnoVrijeme = false;
            }
            else {
                this.validnoVrijeme = true;
            }
        }
        else {
            this.validnoVrijeme = false;
        }
    };
    DodajSastanakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-sastanak',
            template: __webpack_require__(/*! ./dodaj-sastanak.component.html */ "./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"]])
    ], DodajSastanakComponent);
    return DodajSastanakComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"sadrzaj container\">\n  <form class=\"noviPtdr box\" name= \"noviPtdr\" (ngSubmit)=\"noviPtdr()\" novalidate>\n    <fieldset>\n      <legend>Izmena termina skupstine</legend>\n      <div class=\"form-group\">\n        <label for=\"tekst\" class=\"control-label\">Izmenite datum pocetka skupstine:</label>\n        <input id=\"field_createdDate\" type=\"datetime-local\" class=\"form-control\" name=\"pocetakSkupstine\" \n        (input)=\"proveriPocetak()\" (blur)=\"proveriPocetak()\" [(ngModel)]=\"pocetakSkupstineString\"/>\n        <label for=\"tekst\" class=\"control-label\">Izmenite datum zavrsetka skupstine:</label>\n        <input id=\"field_createdDate\" type=\"datetime-local\" class=\"form-control\" name=\"zavrsetakSkupstine\" \n        (input)=\"proveriKraj()\" (blur)=\"proveriKraj()\"[(ngModel)]=\"zavrsetakSkupstineString\"/>\n      </div>\n      <div class=\"form-group center\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"izmenaSastanka()\" [disabled]=\"!validnoVrijeme\" >Potvrdi</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.ts ***!
  \******************************************************************************/
/*! exports provided: IzmenaSastankaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzmenaSastankaComponent", function() { return IzmenaSastankaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var IzmenaSastankaComponent = /** @class */ (function () {
    function IzmenaSastankaComponent(router, route, zgradaService, toastrService) {
        this.router = router;
        this.route = route;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.validanPocetak = undefined;
        this.validanKraj = undefined;
        this.validnoVrijeme = false;
    }
    IzmenaSastankaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skupstinaId = Number(this.route.snapshot.paramMap.get("idSastanka"));
        this.zgradaService.getSastanak(this.skupstinaId)
            .subscribe(function (res) {
            _this.sastanak = res;
            _this.pocetakSkupstine = new Date(_this.sastanak.pocetakSkupstine);
            _this.pocetakSkupstine.setMinutes(_this.pocetakSkupstine.getMinutes() - _this.pocetakSkupstine.getTimezoneOffset());
            _this.pocetakSkupstineString = _this.pocetakSkupstine.toJSON().slice(0, -1);
            _this.zavrsetakSkupstine = new Date(_this.sastanak.krajSkupstine);
            _this.zavrsetakSkupstine.setMinutes(_this.zavrsetakSkupstine.getMinutes() - _this.zavrsetakSkupstine.getTimezoneOffset());
            _this.zavrsetakSkupstineString = _this.zavrsetakSkupstine.toJSON().slice(0, -1);
            _this.proveriPocetak();
            _this.proveriKraj();
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    IzmenaSastankaComponent.prototype.izmenaSastanka = function () {
        var _this = this;
        this.pocetakSkupstine = new Date(this.pocetakSkupstine);
        this.pocetakSkupstineString = this.pocetakSkupstine.toJSON();
        this.zavrsetakSkupstine = new Date(this.zavrsetakSkupstine);
        this.zavrsetakSkupstineString = this.zavrsetakSkupstine.toJSON();
        this.zgradaService.izmenaSastanka(this.skupstinaId, this.pocetakSkupstineString.substring(0, 16), this.zavrsetakSkupstineString.substring(0, 16))
            .subscribe(function (result) {
            _this.toastrService.success("Sastanak uspesno izmenjen!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    IzmenaSastankaComponent.prototype.proveriPocetak = function () {
        this.pocetakSkupstine = new Date(this.pocetakSkupstineString);
        if (this.pocetakSkupstine != undefined && new Date(this.pocetakSkupstine).getTime() >= new Date().getTime()) {
            this.validanPocetak = true;
        }
        else {
            this.validanPocetak = false;
        }
        this.proveriDugme();
    };
    IzmenaSastankaComponent.prototype.proveriKraj = function () {
        this.zavrsetakSkupstine = new Date(this.zavrsetakSkupstineString);
        if (this.zavrsetakSkupstine != undefined && new Date(this.zavrsetakSkupstine).getTime() >= new Date().getTime()) {
            this.validanKraj = true;
        }
        else {
            this.validanKraj = false;
        }
        this.proveriDugme();
    };
    IzmenaSastankaComponent.prototype.proveriDugme = function () {
        if (this.validanPocetak && this.validanKraj) {
            if (new Date(this.zavrsetakSkupstine).getTime() <= new Date(this.pocetakSkupstine).getTime()) {
                this.validnoVrijeme = false;
            }
            else {
                this.validnoVrijeme = true;
            }
        }
        else {
            this.validnoVrijeme = false;
        }
    };
    IzmenaSastankaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-izmena-sastanka',
            template: __webpack_require__(/*! ./izmena-sastanka.component.html */ "./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], IzmenaSastankaComponent);
    return IzmenaSastankaComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/sastanci/sastanci.component.html":
/*!*********************************************************!*\
  !*** ./src/app/zgrada/sastanci/sastanci.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n<a *ngIf=\"dozvolaDodavanja()\" routerLink=\"../sastanak/zakazi\">\n    <button class=\"btn\" style=\"cursor: pointer;\"><b>Dodaj</b></button>\n</a>\n\n<select class=\"custom-select\" (change)=onChange() [(ngModel)]=\"kriterijum\" style=\"margin-left:150px; width:200px;\">\n        <option [ngValue]=\"0\" >Svi</option>\n        <option [ngValue]=\"3\" >Sastanci u toku</option>\n        <option [ngValue]=\"1\" >Buduci Sastanci</option>\n        <option [ngValue]=\"2\" >Prosli Sastanci</option>\n</select>\n\n<div *ngFor=\"let sastanak of sastanci\">\n    <div class=\"row blob\">\n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{sastanak.predsednikSkupstine.naziv}} </b> \n                <span class=\"lower-impact-text\"> je zakazao/la sastanak</span>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span class=\"green-impact-text\" \n                *ngIf=\"!zavrsen(sastanak.krajSkupstine) && poceo(sastanak.pocetakSkupstine)\">SASTANAK JE U TOKU</span>\n                <span class=\"super-high-impact-text\" *ngIf=\"zavrsen(sastanak.krajSkupstine)\">SASTANAK JE ZAVRSEN</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span id = \"pocetakSkupstine\" class=\"low-impact-text\">Pocetak skupstine - {{sastanak.pocetakSkupstine | date: \"HH:mm dd.MM.yyyy\"}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span class=\"low-impact-text\">Kraj skupstine - {{sastanak.krajSkupstine | date: \"HH:mm dd.MM.yyyy\"}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span *ngIf=\"dozvola(sastanak.pocetakSkupstine)\">\n                    <a [routerLink]=\"['izmena',sastanak.id]\"><span class=\"operacije lower-impact-text\">izmeni</span> </a>\n                </span>\n                <span *ngIf=\"dozvola(sastanak.pocetakSkupstine)\">\n                    <a (click)=\"brisi(sastanak.id)\"><span class=\"operacije lower-impact-text\">otkazi sastanak</span></a>\n                </span>\n                <span class=\"tacke\">\n                    <a *ngIf=\"!zavrsen(sastanak.krajSkupstine)\" [routerLink]=\"[sastanak.id, 'tacke']\"><span class=\"operacije lower-impact-text\">Pregledaj tacke</span></a>\n                </span>\n                <span class=\"zapisnik\">\n                    <a *ngIf=\"zavrsen(sastanak.krajSkupstine)\" [routerLink]=\"[sastanak.id, 'tacke']\"><span class=\"operacije lower-impact-text\">Pregledaj zapisnik</span></a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/zgrada/sastanci/sastanci.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/zgrada/sastanci/sastanci.component.ts ***!
  \*******************************************************/
/*! exports provided: SastanciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SastanciComponent", function() { return SastanciComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../..//services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SastanciComponent = /** @class */ (function () {
    function SastanciComponent(router, route, utilService, zgradaService, toastrService) {
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.kriterijum = 0;
    }
    SastanciComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
    };
    SastanciComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.zgradaService.getSastanci(this.zgradaId, pager.trenutnaStrana - 1, pager.velicinaStrane, this.kriterijum)
            .subscribe(function (res) {
            _this.sastanci = res.body;
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get("X-ukupno-strana")));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    SastanciComponent.prototype.dozvolaDodavanja = function () {
        return this.k_uloga === "PREDSEDNIK_SKUPSTINE" && this.zgradaId === this.k_zgrada;
    };
    SastanciComponent.prototype.dozvola = function (datum) {
        return this.k_uloga === "PREDSEDNIK_SKUPSTINE" && this.zgradaId === this.k_zgrada && (new Date().getTime() <= new Date(datum).getTime());
    };
    SastanciComponent.prototype.poceo = function (datum) {
        return (new Date().getTime() >= new Date(datum).getTime());
    };
    SastanciComponent.prototype.zavrsen = function (datum) {
        return (new Date().getTime() >= new Date(datum).getTime());
    };
    SastanciComponent.prototype.onChange = function () {
        this.utilService.refreshPagination.emit(0);
    };
    SastanciComponent.prototype.brisi = function (id) {
        var _this = this;
        this.zgradaService.deleteSastanak(id).subscribe(function (result) {
            _this.utilService.refreshPagination.emit(0);
            _this.toastrService.success("sastanak uspesno otkazan");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    SastanciComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SastanciComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sastanci',
            template: __webpack_require__(/*! ./sastanci.component.html */ "./src/app/zgrada/sastanci/sastanci.component.html"),
            styles: [__webpack_require__(/*! ../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_4__["ZgradaService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SastanciComponent);
    return SastanciComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/stanovi/stanovi.component.html":
/*!*******************************************************!*\
  !*** ./src/app/zgrada/stanovi/stanovi.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <label class=\"col-md-2\">Prikazi: </label>\n      <select class=\"form-control col-md-2\" id=\"prikaz\" [(ngModel)]=\"pager.velicinaStrane\" (change)=\"promeniVelicinu()\">\n        <option value=\"10\">10</option>\n        <option value=\"25\">25</option>\n        <option value=\"50\">50</option>\n      </select>\n    </div>\n    <br>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr class=\"table-primary d-flex\">\n          <th class=\"col-md-2\">Broj stana</th>\n          <th class=\"col-md-6\">Vlasnik</th>\n          <th class=\"col-md-2\">Broj stanara</th>\n          <th class=\"col-md-2\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-secondary d-flex\" *ngFor=\"let stan of stanovi; let i = index\">\n          <th class=\"col-md-2\">{{stan.broj}}</th>\n          <td class=\"col-md-6\" *ngIf=\"stan.vlasnik\">\n            <a routerLink=\"/stanar/{{stan.vlasnik.id}}\">{{stan.vlasnik.naziv}} </a><b> ({{stan.vlasnik.email}})</b>\n          </td>\n          <td class=\"col-md-6\" *ngIf=\"!stan.vlasnik\">Nema vlasnika</td>\n          <th class=\"col-md-2\">{{stan.brojStanara}}</th>\n          <td class=\"col-md-2\"><a class=\"btn btn-primary\" routerLink=\"/stan/{{stan.id}}\">Vlasnik i stanari</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div>\n    <app-pager [pager]=\"pager\" (izmenaEvent)=\"izlistajStanove($event)\"></app-pager>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/zgrada/stanovi/stanovi.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/zgrada/stanovi/stanovi.component.ts ***!
  \*****************************************************/
/*! exports provided: StanoviComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StanoviComponent", function() { return StanoviComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");





var StanoviComponent = /** @class */ (function () {
    function StanoviComponent(route, administratorService, utilService) {
        this.route = route;
        this.administratorService = administratorService;
        this.utilService = utilService;
    }
    StanoviComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pager = {
            trenutnaStrana: 1,
            velicinaStrane: 10,
            ukupnoStrana: undefined,
            prvaStrana: undefined,
            poslednjaStrana: undefined,
            strane: []
        };
        this.route.parent.params.subscribe(function (params) {
            _this.id = Number(params['id']);
        });
        this.izlistajStanove();
    };
    StanoviComponent.prototype.izlistajStanove = function () {
        var _this = this;
        this.administratorService.izlistajStanove(this.id, this.pager.trenutnaStrana - 1, this.pager.velicinaStrane).subscribe(function (res) {
            _this.stanovi = res.body;
            _this.pager.ukupnoStrana = Number(res.headers.get('Ukupno-Strana'));
            _this.pager = _this.utilService.getPager(_this.pager);
        });
    };
    StanoviComponent.prototype.promeniVelicinu = function () {
        this.pager.trenutnaStrana = 1;
        this.izlistajStanove();
    };
    StanoviComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stanovi',
            template: __webpack_require__(/*! ./stanovi.component.html */ "./src/app/zgrada/stanovi/stanovi.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], StanoviComponent);
    return StanoviComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Komponenta za navigation bar -->\n\n<div class=\"sadrzaj container\">\n  <form class=\"noviPtdr box\" name= \"noviPtdr\" (ngSubmit)=\"noviPtdr()\" novalidate>\n    <fieldset>\n      <legend>Novi predlog tacke dnevnog reda</legend>\n      <div class=\"form-group\">\n        <label for=\"tekst\" class=\"control-label\">Unesite tekst predloga tacke dnevnog reda:</label>\n        <textarea type=\"text\" class=\"form-control\" rows=\"10\" id=\"tekstPtdr\" name=\"tekstPtdr\" \n        (input)=\"proveriTekst()\"  placeholder=\"Tekst\" [(ngModel)]=\"tekstPtdr\" required>\n        </textarea>\n      </div>\n      <div class=\"form-group center\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"noviPtdr()\" [disabled]=\"!validanPtdr\">Potvrdi</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.ts ***!
  \*****************************************************************/
/*! exports provided: DodajPtdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodajPtdrComponent", function() { return DodajPtdrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var DodajPtdrComponent = /** @class */ (function () {
    function DodajPtdrComponent(router, toastrService, zgradaService) {
        this.router = router;
        this.toastrService = toastrService;
        this.zgradaService = zgradaService;
        this.validanTekst = undefined;
        this.validanPtdr = false;
    }
    DodajPtdrComponent.prototype.ngOnInit = function () {
    };
    DodajPtdrComponent.prototype.noviPtdr = function () {
        var _this = this;
        this.zgradaService.noviPtdr(this.tekstPtdr)
            .subscribe(function (result) {
            _this.toastrService.success("Predlog tacke dnevnog reda uspesno dodat");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    DodajPtdrComponent.prototype.proveriTekst = function () {
        if (this.tekstPtdr.trim() === "") {
            this.validanTekst = false;
        }
        else {
            this.validanTekst = true;
        }
        this.proveriDugme();
    };
    DodajPtdrComponent.prototype.proveriDugme = function () {
        if (this.validanTekst) {
            this.validanPtdr = true;
        }
        else {
            this.validanPtdr = false;
        }
    };
    DodajPtdrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dodaj-ptdr',
            template: __webpack_require__(/*! ./dodaj-ptdr.component.html */ "./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"]])
    ], DodajPtdrComponent);
    return DodajPtdrComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n    <tr>\n        <td>\n            <b class=\"naziv\" *ngIf=\"skupstina\">{{skupstina.predsednikSkupstine.naziv}} </b> \n            <span class=\"lower-impact-text\"> je zakazao/la sastanak</span>\n        </td> \n    </tr>\n    <tr>\n        <td>\n            <span class=\"low-impact-text\" *ngIf=\"skupstina\">Pocetak skupstine - {{skupstina.pocetakSkupstine | date: \"HH:mm dd.MM.yyyy\"}}</span>\n        </td>\n    </tr>\n    <tr>\n        <td>\n            <span class=\"low-impact-text\" *ngIf=\"skupstina\">Kraj skupstine - {{skupstina.krajSkupstine | date: \"HH:mm dd.MM.yyyy\"}}</span>\n        </td>\n    </tr>\n</table>\n\n<app-paginacija (izmenaEvent)=\"izlistaj($event)\">Naslov</app-paginacija>\n\n\n<div *ngFor=\"let ptdr of tacke; let i = index\">\n    <div class=\"row blob\"> \n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{ptdr.stanar.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la predlog tacke dnevnog reda u <i>{{ptdr.datum | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td>\n            \n        </tr>\n        <tr>\n            <td>\n                <span class=\"line-breaker\" [hidden] = \"editable[i]\" #ref>{{ptdr.tekst}}</span>\n                \n                <span class=\"line-breaker izmena\" contenteditable=\"true\" [hidden] = \"!editable[i]\" \n                id = \"noviTekst\" style=\"color:blue\" name = \"noviTekst\" #ref1>{{ptdr.tekst}}</span>\n            </td>\n        </tr>\n        <tr>\n            <span style=\"color:red\" >Doneta odluka:</span>\n            <span class=\"line-breaker\"  [hidden] = \"zavrsen || odluke[i]\" >{{ptdr.odluka}}</span>\n            <span class=\"line-breaker odluka\" contenteditable=\"true\" [hidden] = \"!odluke[i]\" \n                 style=\"color:blue\" name = \"noviTekst\" #ref2>{{ptdr.odluka}}</span>\n            \n        </tr>\n        <tr>\n            <td>\n                <span *ngIf=\"dozvola(ptdr.stanar.email)\">\n                    <a (click)=\"izmeni(i)\"  [hidden] = \"editable[i]\"><span class=\"operacije lower-impact-text\">izmeni</span> </a>\n                    <a (click)=\"potvrdi(i,ref1)\"[hidden] = \"!editable[i]\">\n                        <span   style=\"color:green\" class=\"operacije lower-impact-text\">potvrdi</span> </a>\n                    <a (click)=\"odustani(i,ref1)\" [hidden] = \"!editable[i]\" >\n                        <span  style = \"color:red\" class=\"operacije lower-impact-text\"> <font>odustani</font></span> </a>\n                    <a (click)=\"ukloniIzSkupstine(ptdr.id)\"><span class=\"operacije lower-impact-text\">ukloni</span></a>\n                </span>\n                \n                <span class=\"anketa\">\n                    <a [routerLink]=\"['/zgrada', zgradaId, 'sastanci', skupstinaId, 'tacka', ptdr.id, 'anketa']\"><span class=\"operacije lower-impact-text\">Pregledaj anketu</span></a>\n                </span>\n                <span *ngIf=\"dozvolaOdluke()\">\n                    <a (click)=\"izmeniOdluku(i)\"  [hidden] = \"odluke[i]\"><span class=\"operacije lower-impact-text\">donesi odluku</span> </a>\n                    <a (click)=\"potvrdiOdluku(i,ref2)\"[hidden] = \"!odluke[i]\">\n                        <span   style=\"color:green\" class=\"operacije lower-impact-text\">potvrdi</span> </a>\n                    <a (click)=\"izmeniOdluku(i)\" [hidden] = \"!odluke[i]\" >\n                        <span  style = \"color:red\" class=\"operacije lower-impact-text\"> <font>odustani</font></span> </a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.ts ***!
  \*************************************************************************/
/*! exports provided: TackeSastanciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TackeSastanciComponent", function() { return TackeSastanciComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var TackeSastanciComponent = /** @class */ (function () {
    function TackeSastanciComponent(router, route, utilService, authenticateService, zgradaService, toastrService) {
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.authenticateService = authenticateService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.editable = [];
        this.odluke = [];
    }
    TackeSastanciComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
        this.skupstinaId = Number(this.route.snapshot.paramMap.get("idSastanka"));
        this.zgradaService.getSastanak(this.skupstinaId)
            .subscribe(function (res) {
            _this.skupstina = res;
            _this.pocetakSkupstine = _this.skupstina.pocetakSkupstine;
            _this.krajSkupstine = _this.skupstina.krajSkupstine;
            _this.zavrsen = (new Date().getTime() <= new Date(_this.pocetakSkupstine).getTime());
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeSastanciComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.zgradaService.getDnevniRed(this.skupstinaId, pager.trenutnaStrana - 1, pager.velicinaStrane)
            .subscribe(function (res) {
            _this.tacke = res.body;
            _this.editable = [];
            _this.odluke = [];
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get("X-ukupno-strana")));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeSastanciComponent.prototype.dozvola = function (autor) {
        var datum = new Date();
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada && this.pocetakSkupstine > datum;
    };
    TackeSastanciComponent.prototype.dozvolaOdluke = function () {
        var datum = new Date();
        return (this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada && this.krajSkupstine < datum;
    };
    TackeSastanciComponent.prototype.izmeni = function (i) {
        this.editable[i] = !this.editable[i];
    };
    TackeSastanciComponent.prototype.izmeniOdluku = function (i) {
        this.odluke[i] = !this.odluke[i];
    };
    TackeSastanciComponent.prototype.potvrdi = function (i, span) {
        var _this = this;
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.tacke[i].tekst;
        }
        else {
            this.zgradaService.izmenaPtdra(this.tacke[i].id, span.innerHTML).subscribe(function (result) {
                _this.utilService.refreshPagination.emit(0);
                _this.toastrService.success("Tacka uspesno izmenjena");
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    TackeSastanciComponent.prototype.odustani = function (i, span) {
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.tacke[i].tekst;
        }
        else {
            this.editable[i] = !this.editable[i];
        }
    };
    TackeSastanciComponent.prototype.potvrdiOdluku = function (i, span) {
        var _this = this;
        this.zgradaService.donosenjeOdluke(this.tacke[i].id, span.innerHTML).subscribe(function (result) {
            _this.utilService.refreshPagination.emit(0);
            _this.toastrService.success("Odluka je doneta!");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeSastanciComponent.prototype.ukloniIzSkupstine = function (id) {
        var _this = this;
        this.zgradaService.ukloniPtdrIzSkupstine(id, this.skupstina.id).subscribe(function (result) {
            _this.utilService.refreshPagination.emit(0);
            _this.toastrService.success("Tacka uspesno uklonjena");
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeSastanciComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TackeSastanciComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tacke-sastanci',
            template: __webpack_require__(/*! ./tacke-sastanci.component.html */ "./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.html"),
            styles: [__webpack_require__(/*! ../../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], TackeSastanciComponent);
    return TackeSastanciComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/tacke/tacke.component.html":
/*!***************************************************!*\
  !*** ./src/app/zgrada/tacke/tacke.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-paginacija (izmenaEvent)=\"izlistaj($event)\"></app-paginacija>\n<a *ngIf=\"dozvola2()\" routerLink=\"../ptdr/dodaj\">\n    <button class=\"btn\" style=\"cursor: pointer;\"><b>Dodaj</b></button>\n</a>\n\n<select *ngIf=\"dozvola2()\" class=\"custom-select\" style=\"margin-left:150px; width:300px;\" [(ngModel)]=\"skupstina\" [class.is-invalid]=\"skupstina === undefined\">\n    <option [ngValue]=\"undefined\" disabled>Izaberite skupstinu u koju zelite dodati tacku</option>\n    <option *ngFor=\"let skupstina of skupstineKojePredstoje\" [ngValue]=\"skupstina\">{{skupstina.pocetakSkupstine | date: \"HH:mm dd.MM.yyyy\"}} - {{skupstina.krajSkupstine | date: \"HH:mm dd.MM.yyyy\"}}</option>\n</select>\n\n<div *ngFor=\"let ptdr of tacke; let i = index\">\n    <div class=\"row blob\"> \n        <table>\n        <tr>\n            <td>\n                <b class=\"naziv\">{{ptdr.stanar.naziv}} </b> \n                <span class=\"lower-impact-text\"> je postavio/la predlog tacke dnevnog reda u <i>{{ptdr.datum | date: \"HH:mm dd.MM.yyyy\"}}</i></span>\n            </td> \n            <td>\n                <button *ngIf=\"dozvola2()\" style=\"margin-left:150px;\" type=\"button\" class=\"btn btn-success\" [disabled]=\"skupstina === undefined\" (click)=\"dodajPtdrUSkupstinu(ptdr.id)\">Dodaj predlog tacke u izabranu skupstinu</button>\n            </td> \n        </tr>\n        <tr>\n            <td>\n                <span id = \"stariTekst\" class=\"line-breaker\" [hidden] = \"editable[i]\" #ref>{{ptdr.tekst}}</span>\n                <span class=\"line-breaker izmena\" contenteditable=\"true\" [hidden] = \"!editable[i]\" \n                id = \"noviTekst\" style=\"color:blue\" name = \"noviTekst\" #ref1>{{ptdr.tekst}}</span>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <span *ngIf=\"dozvola(ptdr.stanar.email)\">\n                    <a (click)=\"izmeni(i)\"  [hidden] = \"editable[i]\"><span class=\"operacije lower-impact-text\">izmeni</span> </a>\n                    <a (click)=\"potvrdi(i,ref1)\"[hidden] = \"!editable[i]\">\n                        <span   style=\"color:green\" class=\"operacije lower-impact-text\">potvrdi</span> </a>\n                    <a (click)=\"odustani(i,ref1)\" [hidden] = \"!editable[i]\" >\n                        <span  style = \"color:red\" class=\"operacije lower-impact-text\"> <font>odustani</font></span> </a>\n                    <a (click)=\"brisi(ptdr.id)\"><span class=\"operacije lower-impact-text\">brisi</span></a>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/zgrada/tacke/tacke.component.ts":
/*!*************************************************!*\
  !*** ./src/app/zgrada/tacke/tacke.component.ts ***!
  \*************************************************/
/*! exports provided: TackeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TackeComponent", function() { return TackeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../..//services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var TackeComponent = /** @class */ (function () {
    function TackeComponent(router, route, utilService, authenticateService, zgradaService, toastrService) {
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.authenticateService = authenticateService;
        this.zgradaService = zgradaService;
        this.toastrService = toastrService;
        this.editable = [];
    }
    TackeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.k_email = this.utilService.email();
        this.k_uloga = this.utilService.uloga();
        this.k_zgrada = this.utilService.zgrada();
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.zgradaId = Number(params['id']);
        });
    };
    TackeComponent.prototype.izlistaj = function (pager) {
        var _this = this;
        this.skupstina = undefined;
        this.zgradaService.getPtdri(this.zgradaId, pager.trenutnaStrana - 1, pager.velicinaStrane)
            .subscribe(function (res) {
            _this.tacke = res.body;
            _this.editable = [];
            _this.utilService.updateUkupnoStrana.emit(Number(res.headers.get("X-ukupno-strana")));
        }, function (error) {
            _this.toastrService.error(error.error);
        });
        if (this.k_uloga === "PREDSEDNIK_SKUPSTINE") {
            this.zgradaService.getSastanciKojiPredstoje(this.zgradaId)
                .subscribe(function (res) {
                _this.skupstineKojePredstoje = res;
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    TackeComponent.prototype.dozvola = function (autor) {
        return (autor === this.k_email || this.k_uloga === "PREDSEDNIK_SKUPSTINE") && this.zgradaId === this.k_zgrada;
    };
    TackeComponent.prototype.dozvola2 = function () {
        return this.k_uloga === "PREDSEDNIK_SKUPSTINE" && this.zgradaId === this.k_zgrada;
    };
    TackeComponent.prototype.izmeni = function (i) {
        this.editable[i] = !this.editable[i];
    };
    TackeComponent.prototype.potvrdi = function (i, span) {
        var _this = this;
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.tacke[i].tekst;
        }
        else {
            this.zgradaService.izmenaPtdra(this.tacke[i].id, span.innerHTML).subscribe(function (result) {
                _this.toastrService.success("Tacka uspesno izmenjena");
                _this.utilService.refreshPagination.emit(0);
            }, function (error) {
                _this.toastrService.error(error.error);
            });
        }
    };
    TackeComponent.prototype.brisi = function (id) {
        var _this = this;
        this.zgradaService.deletePtdr(id).subscribe(function (result) {
            _this.toastrService.success("Tacka uspesno izbrisana");
            _this.utilService.refreshPagination.emit(0);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeComponent.prototype.dodajPtdrUSkupstinu = function (id) {
        var _this = this;
        this.zgradaService.dodajPtdrUSkupstinu(id, this.skupstina.id).subscribe(function (result) {
            _this.toastrService.success("Tacka uspesno dodata u skupstinu");
            _this.utilService.refreshPagination.emit(0);
        }, function (error) {
            _this.toastrService.error(error.error);
        });
    };
    TackeComponent.prototype.odustani = function (i, span) {
        if (span.innerHTML.trim() === "") {
            this.editable[i] = !this.editable[i];
            span.innerHTML = this.tacke[i].tekst;
        }
        else {
            this.editable[i] = !this.editable[i];
        }
    };
    TackeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TackeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tacke',
            template: __webpack_require__(/*! ./tacke.component.html */ "./src/app/zgrada/tacke/tacke.component.html"),
            styles: [__webpack_require__(/*! ../zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_5__["ZgradaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], TackeComponent);
    return TackeComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/zgrada.component.html":
/*!**********************************************!*\
  !*** ./src/app/zgrada/zgrada.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Zgrada</h2>\n  <br>\n  <div *ngIf=\"zgrada\">\n    <h5><b>Adresa: </b>{{zgrada.ulica}} {{zgrada.broj}}, {{zgrada.lokacija}}</h5>\n    <h5 *ngIf=\"zgrada.predsednikSkupstine\">\n      <b>Predsednik: </b><a routerLink=\"/stanar/{{zgrada.predsednikSkupstine.id}}\">\n        {{zgrada.predsednikSkupstine.naziv}} </a> ({{zgrada.predsednikSkupstine.email}})\n    </h5>\n    <h5 *ngIf=\"!zgrada.predsednikSkupstine\"><b>Predsednik: </b> Nema predsednika!</h5>\n  </div>\n  <br>\n  <div class=\"col-md-12\">\n    <app-navbar-zgrada [id]=\"id\"></app-navbar-zgrada>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/zgrada/zgrada.component.scss":
/*!**********************************************!*\
  !*** ./src/app/zgrada/zgrada.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.blob {\n  border-radius: 10px;\n  background-color: #effeff;\n  padding: 10px;\n  margin-top: 20px; }\n\n.sadrzaj {\n  margin-top: 20px; }\n\n.super-high-impact-text {\n  color: red; }\n\n.low-impact-text {\n  color: #545454; }\n\n.lower-impact-text {\n  color: #808080; }\n\n.green-impact-text {\n  color: green; }\n\n.operacije {\n  margin-left: 10px;\n  cursor: pointer; }\n\n.operacije:hover {\n  text-decoration: underline; }\n\n.naziv {\n  font-size: 18px;\n  color: #212529; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemdyYWRhL0M6XFxVc2Vyc1xcTGVub3ZvXFxEZXNrdG9wXFxLdXJzZXZpXFxLVFMtTldULWFuZ3VsYXItbWFzdGVyIC0gQ29weS9zcmNcXGFwcFxcemdyYWRhXFx6Z3JhZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC96Z3JhZGEvemdyYWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmJsb2Ige1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmVmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zYWRyemFqIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc3VwZXItaGlnaC1pbXBhY3QtdGV4dHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubG93LWltcGFjdC10ZXh0IHtcbiAgICBjb2xvcjogIzU0NTQ1NDtcbn1cblxuLmxvd2VyLWltcGFjdC10ZXh0IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmdyZWVuLWltcGFjdC10ZXh0e1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLm9wZXJhY2lqZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuLm9wZXJhY2lqZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ubmF6aXZ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMjEyNTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/zgrada/zgrada.component.ts":
/*!********************************************!*\
  !*** ./src/app/zgrada/zgrada.component.ts ***!
  \********************************************/
/*! exports provided: ZgradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZgradaComponent", function() { return ZgradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/zgrada/zgrada.service */ "./src/app/services/zgrada/zgrada.service.ts");




var ZgradaComponent = /** @class */ (function () {
    function ZgradaComponent(route, zgradaService) {
        this.route = route;
        this.zgradaService = zgradaService;
    }
    ZgradaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getZgrada();
            console.log(_this.zgrada);
        });
    };
    ZgradaComponent.prototype.getZgrada = function () {
        var _this = this;
        this.zgradaService.getZgrada(this.id).subscribe(function (data) { return _this.zgrada = data; });
    };
    ZgradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zgrada',
            template: __webpack_require__(/*! ./zgrada.component.html */ "./src/app/zgrada/zgrada.component.html"),
            styles: [__webpack_require__(/*! ./zgrada.component.scss */ "./src/app/zgrada/zgrada.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_zgrada_zgrada_service__WEBPACK_IMPORTED_MODULE_3__["ZgradaService"]])
    ], ZgradaComponent);
    return ZgradaComponent;
}());



/***/ }),

/***/ "./src/app/zgrada/zgrada.module.ts":
/*!*****************************************!*\
  !*** ./src/app/zgrada/zgrada.module.ts ***!
  \*****************************************/
/*! exports provided: ZgradaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZgradaModule", function() { return ZgradaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../paginacija/paginacija.module */ "./src/app/paginacija/paginacija.module.ts");
/* harmony import */ var _zgrada_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zgrada.component */ "./src/app/zgrada/zgrada.component.ts");
/* harmony import */ var _obavestenja_obavestenja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./obavestenja/obavestenja.component */ "./src/app/zgrada/obavestenja/obavestenja.component.ts");
/* harmony import */ var _sastanci_sastanci_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sastanci/sastanci.component */ "./src/app/zgrada/sastanci/sastanci.component.ts");
/* harmony import */ var _kvarovi_kvarovi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kvarovi/kvarovi.component */ "./src/app/zgrada/kvarovi/kvarovi.component.ts");
/* harmony import */ var _tacke_tacke_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tacke/tacke.component */ "./src/app/zgrada/tacke/tacke.component.ts");
/* harmony import */ var _ankete_pitanje_pitanje_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ankete/pitanje/pitanje.component */ "./src/app/zgrada/ankete/pitanje/pitanje.component.ts");
/* harmony import */ var _ankete_izlistaj_ankete_izlistaj_ankete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ankete/izlistaj-ankete/izlistaj-ankete.component */ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.ts");
/* harmony import */ var _ankete_dodaj_pitanje_dodaj_pitanje_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ankete/dodaj-pitanje/dodaj-pitanje.component */ "./src/app/zgrada/ankete/dodaj-pitanje/dodaj-pitanje.component.ts");
/* harmony import */ var _obavestenja_dodaj_obavestenje_dodaj_obavestenje_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./obavestenja/dodaj-obavestenje/dodaj-obavestenje.component */ "./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.ts");
/* harmony import */ var _tacke_dodaj_ptdr_dodaj_ptdr_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tacke/dodaj-ptdr/dodaj-ptdr.component */ "./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.ts");
/* harmony import */ var _sastanci_dodaj_sastanak_dodaj_sastanak_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sastanci/dodaj-sastanak/dodaj-sastanak.component */ "./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.ts");
/* harmony import */ var _kvarovi_dodaj_kvar_dodaj_kvar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kvarovi/dodaj-kvar/dodaj-kvar.component */ "./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.ts");
/* harmony import */ var _kvarovi_kvar_kvar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./kvarovi/kvar/kvar.component */ "./src/app/zgrada/kvarovi/kvar/kvar.component.ts");
/* harmony import */ var _kvarovi_komentari_komentari_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./kvarovi/komentari/komentari.component */ "./src/app/zgrada/kvarovi/komentari/komentari.component.ts");
/* harmony import */ var _kvarovi_moguci_odgovorni_moguci_odgovorni_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kvarovi/moguci-odgovorni/moguci-odgovorni.modal */ "./src/app/zgrada/kvarovi/moguci-odgovorni/moguci-odgovorni.modal.ts");
/* harmony import */ var _sastanci_izmena_sastanka_izmena_sastanka_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sastanci/izmena-sastanka/izmena-sastanka.component */ "./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.ts");
/* harmony import */ var _tacke_tacke_sastanci_tacke_sastanci_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tacke/tacke-sastanci/tacke-sastanci.component */ "./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.ts");
/* harmony import */ var _stanovi_stanovi_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./stanovi/stanovi.component */ "./src/app/zgrada/stanovi/stanovi.component.ts");
/* harmony import */ var _kvarovi_izmena_kvara_izmena_kvara_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kvarovi/izmena-kvara/izmena-kvara.component */ "./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.ts");
/* harmony import */ var _kvarovi_zakazi_popravku_zakazi_popravku_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./kvarovi/zakazi-popravku/zakazi-popravku.component */ "./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.ts");
/* harmony import */ var _navbar_zgrada_navbar_zgrada_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./navbar-zgrada/navbar-zgrada.component */ "./src/app/zgrada/navbar-zgrada/navbar-zgrada.component.ts");































var ZgradaModule = /** @class */ (function () {
    function ZgradaModule() {
    }
    ZgradaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _zgrada_component__WEBPACK_IMPORTED_MODULE_10__["ZgradaComponent"],
                _obavestenja_obavestenja_component__WEBPACK_IMPORTED_MODULE_11__["ObavestenjaComponent"],
                _sastanci_sastanci_component__WEBPACK_IMPORTED_MODULE_12__["SastanciComponent"],
                _kvarovi_kvarovi_component__WEBPACK_IMPORTED_MODULE_13__["KvaroviComponent"],
                _tacke_tacke_component__WEBPACK_IMPORTED_MODULE_14__["TackeComponent"],
                _tacke_tacke_sastanci_tacke_sastanci_component__WEBPACK_IMPORTED_MODULE_26__["TackeSastanciComponent"],
                _ankete_pitanje_pitanje_component__WEBPACK_IMPORTED_MODULE_15__["PitanjeComponent"],
                _ankete_izlistaj_ankete_izlistaj_ankete_component__WEBPACK_IMPORTED_MODULE_16__["IzlistajAnketeComponent"],
                _ankete_dodaj_pitanje_dodaj_pitanje_component__WEBPACK_IMPORTED_MODULE_17__["DodajPitanjeComponent"],
                _obavestenja_dodaj_obavestenje_dodaj_obavestenje_component__WEBPACK_IMPORTED_MODULE_18__["DodajObavestenjeComponent"],
                _tacke_dodaj_ptdr_dodaj_ptdr_component__WEBPACK_IMPORTED_MODULE_19__["DodajPtdrComponent"],
                _sastanci_dodaj_sastanak_dodaj_sastanak_component__WEBPACK_IMPORTED_MODULE_20__["DodajSastanakComponent"],
                _kvarovi_dodaj_kvar_dodaj_kvar_component__WEBPACK_IMPORTED_MODULE_21__["DodajKvarComponent"],
                _kvarovi_kvar_kvar_component__WEBPACK_IMPORTED_MODULE_22__["KvarComponent"],
                _kvarovi_komentari_komentari_component__WEBPACK_IMPORTED_MODULE_23__["KomentariComponent"],
                _kvarovi_moguci_odgovorni_moguci_odgovorni_modal__WEBPACK_IMPORTED_MODULE_24__["MoguciOdgovorniModal"],
                _sastanci_izmena_sastanka_izmena_sastanka_component__WEBPACK_IMPORTED_MODULE_25__["IzmenaSastankaComponent"],
                _stanovi_stanovi_component__WEBPACK_IMPORTED_MODULE_27__["StanoviComponent"],
                _kvarovi_izmena_kvara_izmena_kvara_component__WEBPACK_IMPORTED_MODULE_28__["IzmenaKvaraComponent"],
                _kvarovi_zakazi_popravku_zakazi_popravku_component__WEBPACK_IMPORTED_MODULE_29__["ZakaziPopravkuComponent"],
                _navbar_zgrada_navbar_zgrada_component__WEBPACK_IMPORTED_MODULE_30__["NavbarZgradaComponent"],
            ],
            imports: [
                _paginacija_paginacija_module__WEBPACK_IMPORTED_MODULE_9__["PaginacijaModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_zgrada_component__WEBPACK_IMPORTED_MODULE_10__["ZgradaComponent"]]
        })
    ], ZgradaModule);
    return ZgradaModule;
}());



/***/ }),

/***/ "./src/app/zgrada/zgrada.routing.ts":
/*!******************************************!*\
  !*** ./src/app/zgrada/zgrada.routing.ts ***!
  \******************************************/
/*! exports provided: zgradaRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zgradaRouting", function() { return zgradaRouting; });
/* harmony import */ var _services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/role-guard/role-guard.service */ "./src/app/services/role-guard/role-guard.service.ts");
/* harmony import */ var _obavestenja_obavestenja_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obavestenja/obavestenja.component */ "./src/app/zgrada/obavestenja/obavestenja.component.ts");
/* harmony import */ var _tacke_tacke_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tacke/tacke.component */ "./src/app/zgrada/tacke/tacke.component.ts");
/* harmony import */ var _tacke_tacke_sastanci_tacke_sastanci_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tacke/tacke-sastanci/tacke-sastanci.component */ "./src/app/zgrada/tacke/tacke-sastanci/tacke-sastanci.component.ts");
/* harmony import */ var _sastanci_sastanci_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sastanci/sastanci.component */ "./src/app/zgrada/sastanci/sastanci.component.ts");
/* harmony import */ var _kvarovi_kvarovi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kvarovi/kvarovi.component */ "./src/app/zgrada/kvarovi/kvarovi.component.ts");
/* harmony import */ var _ankete_izlistaj_ankete_izlistaj_ankete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ankete/izlistaj-ankete/izlistaj-ankete.component */ "./src/app/zgrada/ankete/izlistaj-ankete/izlistaj-ankete.component.ts");
/* harmony import */ var _obavestenja_dodaj_obavestenje_dodaj_obavestenje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./obavestenja/dodaj-obavestenje/dodaj-obavestenje.component */ "./src/app/zgrada/obavestenja/dodaj-obavestenje/dodaj-obavestenje.component.ts");
/* harmony import */ var _tacke_dodaj_ptdr_dodaj_ptdr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tacke/dodaj-ptdr/dodaj-ptdr.component */ "./src/app/zgrada/tacke/dodaj-ptdr/dodaj-ptdr.component.ts");
/* harmony import */ var _sastanci_dodaj_sastanak_dodaj_sastanak_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sastanci/dodaj-sastanak/dodaj-sastanak.component */ "./src/app/zgrada/sastanci/dodaj-sastanak/dodaj-sastanak.component.ts");
/* harmony import */ var _kvarovi_dodaj_kvar_dodaj_kvar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kvarovi/dodaj-kvar/dodaj-kvar.component */ "./src/app/zgrada/kvarovi/dodaj-kvar/dodaj-kvar.component.ts");
/* harmony import */ var _kvarovi_kvar_kvar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kvarovi/kvar/kvar.component */ "./src/app/zgrada/kvarovi/kvar/kvar.component.ts");
/* harmony import */ var _sastanci_izmena_sastanka_izmena_sastanka_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sastanci/izmena-sastanka/izmena-sastanka.component */ "./src/app/zgrada/sastanci/izmena-sastanka/izmena-sastanka.component.ts");
/* harmony import */ var _stanovi_stanovi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stanovi/stanovi.component */ "./src/app/zgrada/stanovi/stanovi.component.ts");
/* harmony import */ var _kvarovi_izmena_kvara_izmena_kvara_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kvarovi/izmena-kvara/izmena-kvara.component */ "./src/app/zgrada/kvarovi/izmena-kvara/izmena-kvara.component.ts");
/* harmony import */ var _kvarovi_zakazi_popravku_zakazi_popravku_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kvarovi/zakazi-popravku/zakazi-popravku.component */ "./src/app/zgrada/kvarovi/zakazi-popravku/zakazi-popravku.component.ts");
















var zgradaRouting = [
    { path: '',
        redirectTo: 'obavestenja',
        pathMatch: 'full'
    },
    { path: 'stanovi',
        component: _stanovi_stanovi_component__WEBPACK_IMPORTED_MODULE_13__["StanoviComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'ADMIN' }
    },
    { path: 'obavestenja', component: _obavestenja_obavestenja_component__WEBPACK_IMPORTED_MODULE_1__["ObavestenjaComponent"] },
    { path: 'sastanci', component: _sastanci_sastanci_component__WEBPACK_IMPORTED_MODULE_4__["SastanciComponent"] },
    { path: 'kvarovi', component: _kvarovi_kvarovi_component__WEBPACK_IMPORTED_MODULE_5__["KvaroviComponent"] },
    { path: 'tacke', component: _tacke_tacke_component__WEBPACK_IMPORTED_MODULE_2__["TackeComponent"] },
    { path: 'kvar/dodaj',
        component: _kvarovi_dodaj_kvar_dodaj_kvar_component__WEBPACK_IMPORTED_MODULE_10__["DodajKvarComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'kvar/:kvarId',
        component: _kvarovi_kvar_kvar_component__WEBPACK_IMPORTED_MODULE_11__["KvarComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|INSTITUCIJA|FIRMA|ADMIN' }
    },
    { path: 'sastanci/:idSastanka/tacka/:idTacke/anketa',
        component: _ankete_izlistaj_ankete_izlistaj_ankete_component__WEBPACK_IMPORTED_MODULE_6__["IzlistajAnketeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|ADMIN|INSTITUCIJA|FIRMA' }
    },
    { path: 'obavestenje/dodaj',
        component: _obavestenja_dodaj_obavestenje_dodaj_obavestenje_component__WEBPACK_IMPORTED_MODULE_7__["DodajObavestenjeComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'ptdr/dodaj',
        component: _tacke_dodaj_ptdr_dodaj_ptdr_component__WEBPACK_IMPORTED_MODULE_8__["DodajPtdrComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'sastanci/:idSastanka/tacke',
        component: _tacke_tacke_sastanci_tacke_sastanci_component__WEBPACK_IMPORTED_MODULE_3__["TackeSastanciComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|ADMIN|INSTITUCIJA|FIRMA' }
    },
    { path: 'sastanak/zakazi',
        component: _sastanci_dodaj_sastanak_dodaj_sastanak_component__WEBPACK_IMPORTED_MODULE_9__["DodajSastanakComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'sastanci/izmena/:idSastanka',
        component: _sastanci_izmena_sastanka_izmena_sastanka_component__WEBPACK_IMPORTED_MODULE_12__["IzmenaSastankaComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'kvar/:kvarId/izmena',
        component: _kvarovi_izmena_kvara_izmena_kvara_component__WEBPACK_IMPORTED_MODULE_14__["IzmenaKvaraComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE' }
    },
    { path: 'kvar/:kvarId/zakazivanje',
        component: _kvarovi_zakazi_popravku_zakazi_popravku_component__WEBPACK_IMPORTED_MODULE_15__["ZakaziPopravkuComponent"],
        canActivate: [_services_role_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_0__["RoleGuardService"]],
        data: { ocekivaneUloge: 'STANAR|PREDSEDNIK_SKUPSTINE|INSTITUCIJA|FIRMA' }
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\Kursevi\KTS-NWT-angular-master - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map