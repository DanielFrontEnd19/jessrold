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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\r\n\r\n<div  class=\" container main-container\">\r\n\r\n    <router-outlet class=\" container main-container\"></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/galeria1.service */ "./src/app/servicios/galeria1.service.ts");
/* harmony import */ var _servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios/galeria2.service */ "./src/app/servicios/galeria2.service.ts");
/* harmony import */ var _servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios/galeria3.service */ "./src/app/servicios/galeria3.service.ts");
/* harmony import */ var _servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/galeria4.service */ "./src/app/servicios/galeria4.service.ts");
/* harmony import */ var _servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/galeria5.service */ "./src/app/servicios/galeria5.service.ts");
/* harmony import */ var _servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/galeria6.service */ "./src/app/servicios/galeria6.service.ts");
/* harmony import */ var _servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/galeria7.service */ "./src/app/servicios/galeria7.service.ts");
/* harmony import */ var _servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/galeria8.service */ "./src/app/servicios/galeria8.service.ts");
/* harmony import */ var _servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicios/galeria9.service */ "./src/app/servicios/galeria9.service.ts");
/* harmony import */ var _servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicios/galeria10.service */ "./src/app/servicios/galeria10.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/heroe/heroe.component */ "./src/app/components/heroe/heroe.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/heroe-tarjeta/heroe-tarjeta.component */ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_fotos2_fotos2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/fotos2/fotos2.component */ "./src/app/components/fotos2/fotos2.component.ts");
/* harmony import */ var _components_foto2_tarjeta_foto2_tarjeta_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/foto2-tarjeta/foto2-tarjeta.component */ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.ts");
/* harmony import */ var _components_foto2_foto2_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/foto2/foto2.component */ "./src/app/components/foto2/foto2.component.ts");
/* harmony import */ var _components_foto3_foto3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/foto3/foto3.component */ "./src/app/components/foto3/foto3.component.ts");
/* harmony import */ var _components_foto3_tarjeta_foto3_tarjeta_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/foto3-tarjeta/foto3-tarjeta.component */ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.ts");
/* harmony import */ var _components_fotos3_fotos3_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/fotos3/fotos3.component */ "./src/app/components/fotos3/fotos3.component.ts");
/* harmony import */ var _components_fotos4_fotos4_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/fotos4/fotos4.component */ "./src/app/components/fotos4/fotos4.component.ts");
/* harmony import */ var _components_foto4_tarjeta_foto4_tarjeta_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/foto4-tarjeta/foto4-tarjeta.component */ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.ts");
/* harmony import */ var _components_foto4_foto4_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/foto4/foto4.component */ "./src/app/components/foto4/foto4.component.ts");
/* harmony import */ var _components_foto5_foto5_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/foto5/foto5.component */ "./src/app/components/foto5/foto5.component.ts");
/* harmony import */ var _components_foto6_foto6_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/foto6/foto6.component */ "./src/app/components/foto6/foto6.component.ts");
/* harmony import */ var _components_foto5_tarjeta_foto5_tarjeta_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/foto5-tarjeta/foto5-tarjeta.component */ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.ts");
/* harmony import */ var _components_foto6_tarjeta_foto6_tarjeta_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/foto6-tarjeta/foto6-tarjeta.component */ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.ts");
/* harmony import */ var _components_fotos5_fotos5_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/fotos5/fotos5.component */ "./src/app/components/fotos5/fotos5.component.ts");
/* harmony import */ var _components_fotos6_fotos6_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/fotos6/fotos6.component */ "./src/app/components/fotos6/fotos6.component.ts");
/* harmony import */ var _components_videos1_videos1_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/videos1/videos1.component */ "./src/app/components/videos1/videos1.component.ts");
/* harmony import */ var _components_videos2_videos2_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/videos2/videos2.component */ "./src/app/components/videos2/videos2.component.ts");
/* harmony import */ var _components_videos3_videos3_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/videos3/videos3.component */ "./src/app/components/videos3/videos3.component.ts");
/* harmony import */ var _components_videos4_videos4_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/videos4/videos4.component */ "./src/app/components/videos4/videos4.component.ts");
/* harmony import */ var _components_videos5_videos5_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/videos5/videos5.component */ "./src/app/components/videos5/videos5.component.ts");
/* harmony import */ var _components_videos6_videos6_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/videos6/videos6.component */ "./src/app/components/videos6/videos6.component.ts");
/* harmony import */ var _components_montion_montion_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/montion/montion.component */ "./src/app/components/montion/montion.component.ts");
/* harmony import */ var _components_foto7_foto7_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/foto7/foto7.component */ "./src/app/components/foto7/foto7.component.ts");
/* harmony import */ var _components_foto7_tarjeta_foto7_tarjeta_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/foto7-tarjeta/foto7-tarjeta.component */ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.ts");
/* harmony import */ var _components_fotos7_fotos7_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/fotos7/fotos7.component */ "./src/app/components/fotos7/fotos7.component.ts");
/* harmony import */ var _components_fotos8_fotos8_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/fotos8/fotos8.component */ "./src/app/components/fotos8/fotos8.component.ts");
/* harmony import */ var _components_foto8_tarjeta_foto8_tarjeta_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/foto8-tarjeta/foto8-tarjeta.component */ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.ts");
/* harmony import */ var _components_foto8_foto8_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/foto8/foto8.component */ "./src/app/components/foto8/foto8.component.ts");
/* harmony import */ var _components_foto9_foto9_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/foto9/foto9.component */ "./src/app/components/foto9/foto9.component.ts");
/* harmony import */ var _components_foto9_tarjeta_foto9_tarjeta_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/foto9-tarjeta/foto9-tarjeta.component */ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.ts");
/* harmony import */ var _components_fotos9_fotos9_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/fotos9/fotos9.component */ "./src/app/components/fotos9/fotos9.component.ts");
/* harmony import */ var _components_fotos10_fotos10_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/fotos10/fotos10.component */ "./src/app/components/fotos10/fotos10.component.ts");
/* harmony import */ var _components_foto10_tarjeta_foto10_tarjeta_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/foto10-tarjeta/foto10-tarjeta.component */ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.ts");
/* harmony import */ var _components_foto10_foto10_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/foto10/foto10.component */ "./src/app/components/foto10/foto10.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Rutas

// Servicios










// Componentes











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_19__["HeroesComponent"],
                _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_20__["HeroeComponent"],
                _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_21__["BuscadorComponent"],
                _components_heroe_tarjeta_heroe_tarjeta_component__WEBPACK_IMPORTED_MODULE_22__["HeroeTarjetaComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _components_fotos2_fotos2_component__WEBPACK_IMPORTED_MODULE_24__["Fotos2Component"],
                _components_foto2_tarjeta_foto2_tarjeta_component__WEBPACK_IMPORTED_MODULE_25__["Foto2TarjetaComponent"],
                _components_foto2_foto2_component__WEBPACK_IMPORTED_MODULE_26__["Foto2Component"],
                _components_foto3_foto3_component__WEBPACK_IMPORTED_MODULE_27__["Foto3Component"],
                _components_foto3_tarjeta_foto3_tarjeta_component__WEBPACK_IMPORTED_MODULE_28__["Foto3TarjetaComponent"],
                _components_fotos3_fotos3_component__WEBPACK_IMPORTED_MODULE_29__["Fotos3Component"],
                _components_fotos4_fotos4_component__WEBPACK_IMPORTED_MODULE_30__["Fotos4Component"],
                _components_foto4_tarjeta_foto4_tarjeta_component__WEBPACK_IMPORTED_MODULE_31__["Foto4TarjetaComponent"],
                _components_foto4_foto4_component__WEBPACK_IMPORTED_MODULE_32__["Foto4Component"],
                _components_foto5_foto5_component__WEBPACK_IMPORTED_MODULE_33__["Foto5Component"],
                _components_foto6_foto6_component__WEBPACK_IMPORTED_MODULE_34__["Foto6Component"],
                _components_foto5_tarjeta_foto5_tarjeta_component__WEBPACK_IMPORTED_MODULE_35__["Foto5TarjetaComponent"],
                _components_foto6_tarjeta_foto6_tarjeta_component__WEBPACK_IMPORTED_MODULE_36__["Foto6TarjetaComponent"],
                _components_fotos5_fotos5_component__WEBPACK_IMPORTED_MODULE_37__["Fotos5Component"],
                _components_fotos6_fotos6_component__WEBPACK_IMPORTED_MODULE_38__["Fotos6Component"],
                _components_videos1_videos1_component__WEBPACK_IMPORTED_MODULE_39__["Videos1Component"],
                _components_videos2_videos2_component__WEBPACK_IMPORTED_MODULE_40__["Videos2Component"],
                _components_videos3_videos3_component__WEBPACK_IMPORTED_MODULE_41__["Videos3Component"],
                _components_videos4_videos4_component__WEBPACK_IMPORTED_MODULE_42__["Videos4Component"],
                _components_montion_montion_component__WEBPACK_IMPORTED_MODULE_45__["MontionComponent"],
                _components_foto7_foto7_component__WEBPACK_IMPORTED_MODULE_46__["Foto7Component"],
                _components_foto7_tarjeta_foto7_tarjeta_component__WEBPACK_IMPORTED_MODULE_47__["Foto7TarjetaComponent"],
                _components_fotos7_fotos7_component__WEBPACK_IMPORTED_MODULE_48__["Fotos7Component"],
                _components_fotos8_fotos8_component__WEBPACK_IMPORTED_MODULE_49__["Fotos8Component"],
                _components_foto8_tarjeta_foto8_tarjeta_component__WEBPACK_IMPORTED_MODULE_50__["Foto8TarjetaComponent"],
                _components_foto8_foto8_component__WEBPACK_IMPORTED_MODULE_51__["Foto8Component"],
                _components_foto9_foto9_component__WEBPACK_IMPORTED_MODULE_52__["Foto9Component"],
                _components_foto9_tarjeta_foto9_tarjeta_component__WEBPACK_IMPORTED_MODULE_53__["Foto9TarjetaComponent"],
                _components_fotos9_fotos9_component__WEBPACK_IMPORTED_MODULE_54__["Fotos9Component"],
                _components_fotos10_fotos10_component__WEBPACK_IMPORTED_MODULE_55__["Fotos10Component"],
                _components_foto10_tarjeta_foto10_tarjeta_component__WEBPACK_IMPORTED_MODULE_56__["Foto10TarjetaComponent"],
                _components_foto10_foto10_component__WEBPACK_IMPORTED_MODULE_57__["Foto10Component"],
                _components_videos5_videos5_component__WEBPACK_IMPORTED_MODULE_43__["Videos5Component"],
                _components_videos6_videos6_component__WEBPACK_IMPORTED_MODULE_44__["Videos6Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"]
            ],
            providers: [
                _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_5__["Galeria1Service"],
                _servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_6__["Galeria2Service"],
                _servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_7__["Galeria3Service"],
                _servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_8__["Galeria4Service"],
                _servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_9__["Galeria5Service"],
                _servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_10__["Galeria6Service"],
                _servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_11__["Galeria7Service"],
                _servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_12__["Galeria8Service"],
                _servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_13__["Galeria9Service"],
                _servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_14__["Galeria10Service"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/heroe/heroe.component */ "./src/app/components/heroe/heroe.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _components_fotos2_fotos2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fotos2/fotos2.component */ "./src/app/components/fotos2/fotos2.component.ts");
/* harmony import */ var _components_foto2_foto2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/foto2/foto2.component */ "./src/app/components/foto2/foto2.component.ts");
/* harmony import */ var _components_foto3_foto3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/foto3/foto3.component */ "./src/app/components/foto3/foto3.component.ts");
/* harmony import */ var _components_fotos3_fotos3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fotos3/fotos3.component */ "./src/app/components/fotos3/fotos3.component.ts");
/* harmony import */ var _components_foto6_foto6_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/foto6/foto6.component */ "./src/app/components/foto6/foto6.component.ts");
/* harmony import */ var _components_fotos6_fotos6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fotos6/fotos6.component */ "./src/app/components/fotos6/fotos6.component.ts");
/* harmony import */ var _components_foto5_foto5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/foto5/foto5.component */ "./src/app/components/foto5/foto5.component.ts");
/* harmony import */ var _components_fotos5_fotos5_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/fotos5/fotos5.component */ "./src/app/components/fotos5/fotos5.component.ts");
/* harmony import */ var _components_foto4_foto4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/foto4/foto4.component */ "./src/app/components/foto4/foto4.component.ts");
/* harmony import */ var _components_fotos4_fotos4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/fotos4/fotos4.component */ "./src/app/components/fotos4/fotos4.component.ts");
/* harmony import */ var _components_videos1_videos1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/videos1/videos1.component */ "./src/app/components/videos1/videos1.component.ts");
/* harmony import */ var _components_videos2_videos2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/videos2/videos2.component */ "./src/app/components/videos2/videos2.component.ts");
/* harmony import */ var _components_videos3_videos3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/videos3/videos3.component */ "./src/app/components/videos3/videos3.component.ts");
/* harmony import */ var _components_videos4_videos4_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/videos4/videos4.component */ "./src/app/components/videos4/videos4.component.ts");
/* harmony import */ var _components_videos5_videos5_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/videos5/videos5.component */ "./src/app/components/videos5/videos5.component.ts");
/* harmony import */ var _components_videos6_videos6_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/videos6/videos6.component */ "./src/app/components/videos6/videos6.component.ts");
/* harmony import */ var _components_foto7_foto7_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/foto7/foto7.component */ "./src/app/components/foto7/foto7.component.ts");
/* harmony import */ var _components_fotos7_fotos7_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/fotos7/fotos7.component */ "./src/app/components/fotos7/fotos7.component.ts");
/* harmony import */ var _components_fotos8_fotos8_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/fotos8/fotos8.component */ "./src/app/components/fotos8/fotos8.component.ts");
/* harmony import */ var _components_foto8_foto8_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/foto8/foto8.component */ "./src/app/components/foto8/foto8.component.ts");
/* harmony import */ var _components_fotos9_fotos9_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/fotos9/fotos9.component */ "./src/app/components/fotos9/fotos9.component.ts");
/* harmony import */ var _components_foto9_foto9_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/foto9/foto9.component */ "./src/app/components/foto9/foto9.component.ts");
/* harmony import */ var _components_foto10_foto10_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/foto10/foto10.component */ "./src/app/components/foto10/foto10.component.ts");
/* harmony import */ var _components_fotos10_fotos10_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/fotos10/fotos10.component */ "./src/app/components/fotos10/fotos10.component.ts");






























var APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'heroes', component: _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'heroe/:id', component: _components_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__["HeroeComponent"] },
    { path: 'fotos2', component: _components_fotos2_fotos2_component__WEBPACK_IMPORTED_MODULE_6__["Fotos2Component"] },
    { path: 'foto2/:id', component: _components_foto2_foto2_component__WEBPACK_IMPORTED_MODULE_7__["Foto2Component"] },
    { path: 'fotos3', component: _components_fotos3_fotos3_component__WEBPACK_IMPORTED_MODULE_9__["Fotos3Component"] },
    { path: 'foto3/:id', component: _components_foto3_foto3_component__WEBPACK_IMPORTED_MODULE_8__["Foto3Component"] },
    { path: 'fotos4', component: _components_fotos4_fotos4_component__WEBPACK_IMPORTED_MODULE_15__["Fotos4Component"] },
    { path: 'foto4/:id', component: _components_foto4_foto4_component__WEBPACK_IMPORTED_MODULE_14__["Foto4Component"] },
    { path: 'fotos5', component: _components_fotos5_fotos5_component__WEBPACK_IMPORTED_MODULE_13__["Fotos5Component"] },
    { path: 'foto5/:id', component: _components_foto5_foto5_component__WEBPACK_IMPORTED_MODULE_12__["Foto5Component"] },
    { path: 'fotos6', component: _components_fotos6_fotos6_component__WEBPACK_IMPORTED_MODULE_11__["Fotos6Component"] },
    { path: 'foto6/:id', component: _components_foto6_foto6_component__WEBPACK_IMPORTED_MODULE_10__["Foto6Component"] },
    { path: 'fotos7', component: _components_fotos7_fotos7_component__WEBPACK_IMPORTED_MODULE_23__["Fotos7Component"] },
    { path: 'foto7/:id', component: _components_foto7_foto7_component__WEBPACK_IMPORTED_MODULE_22__["Foto7Component"] },
    { path: 'fotos8', component: _components_fotos8_fotos8_component__WEBPACK_IMPORTED_MODULE_24__["Fotos8Component"] },
    { path: 'foto8/:id', component: _components_foto8_foto8_component__WEBPACK_IMPORTED_MODULE_25__["Foto8Component"] },
    { path: 'fotos9', component: _components_fotos9_fotos9_component__WEBPACK_IMPORTED_MODULE_26__["Fotos9Component"] },
    { path: 'foto9/:id', component: _components_foto9_foto9_component__WEBPACK_IMPORTED_MODULE_27__["Foto9Component"] },
    { path: 'fotos10', component: _components_fotos10_fotos10_component__WEBPACK_IMPORTED_MODULE_29__["Fotos10Component"] },
    { path: 'foto10/:id', component: _components_foto10_foto10_component__WEBPACK_IMPORTED_MODULE_28__["Foto10Component"] },
    { path: 'videos1', component: _components_videos1_videos1_component__WEBPACK_IMPORTED_MODULE_16__["Videos1Component"] },
    { path: 'videos2', component: _components_videos2_videos2_component__WEBPACK_IMPORTED_MODULE_17__["Videos2Component"] },
    { path: 'videos3', component: _components_videos3_videos3_component__WEBPACK_IMPORTED_MODULE_18__["Videos3Component"] },
    { path: 'videos4', component: _components_videos4_videos4_component__WEBPACK_IMPORTED_MODULE_19__["Videos4Component"] },
    { path: 'videos5', component: _components_videos5_videos5_component__WEBPACK_IMPORTED_MODULE_20__["Videos5Component"] },
    { path: 'videos6', component: _components_videos6_videos6_component__WEBPACK_IMPORTED_MODULE_21__["Videos6Component"] },
    { path: 'buscar/:termino', component: _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_5__["BuscadorComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n body{\r\n  background: #000 !important;\r\n  padding-top: 10px;\r\n\r\n} \r\n\r\np{\r\n  color: black; \r\n\r\n  font-size: 35px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-animation: type 8s steps(60, end);\r\n          animation: type 8s steps(60, end); \r\n} \r\n\r\np:nth-child(4){\r\n  -webkit-animation: type2 7.5s steps(60, end);\r\n          animation: type2 7.5s steps(60, end);\r\n} \r\n\r\np a{\r\n  color: black;\r\n  text-decoration: none;\r\n} \r\n\r\nspan{\r\n  -webkit-animation: blink 1s infinite;\r\n          animation: blink 1s infinite;\r\n} \r\n\r\n@-webkit-keyframes type{ \r\n  from { width: 0; } \r\n} \r\n\r\n@keyframes type{ \r\n  from { width: 0; } \r\n} \r\n\r\n@-webkit-keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n} \r\n\r\n@keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n} \r\n\r\n@-webkit-keyframes blink{\r\n  to{opacity: .0;}\r\n} \r\n\r\n@keyframes blink{\r\n  to{opacity: .0;}\r\n} \r\n\r\n::-moz-selection{\r\n  background: black;\r\n} \r\n\r\n::selection{\r\n  background: black;\r\n} \r\n\r\n.img-about {\r\n  max-width: 100%;\r\n  height: auto;\r\n margin-bottom: 2em;\r\n margin-right: 2em;\r\n box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 50%;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row animated fadeIn slow\">\r\n<!-- <div class=\" col-md-4\">\r\n\r\n      <img src=\"assets/img/jessi.jpg\" class=\"img-about\" [routerLink]=\"['/heroes']\">\r\n\r\n\r\n  </div>-->\r\n \r\n\r\n  <div class=\"col-md-12\">\r\n    <!--\r\n      <a>Ya que has llegado hasta aquí, te contaré un poco quién soy y qué hago en este lugar.\r\n\r\n  Me llamo Jessica Roldán, y un 24 de diciembre de 1994 aparecí en el mundo con ganas de vivir experiencias, conseguir metas,  y con la certeza de que para ello debería esforzarme más que los que no saben qué implica crecer y vivir en un barrio humilde.\r\n  \r\n  Como me gustan los retos, decidí estudiar Comunicación Audiovisual en la Complutense, donde nunca me contaron que lo difícil venía después del Trabajo de Fin de Grado.\r\n  \r\n  Así que, tras comprobar que el mundo laboral era peor que mi barrio, decidí estudiar una formación profesional de Imagen e Iluminación donde terminé de comprender lo mucho que se puede mostrar a través del visor de una cámara, y cómo las personas o acontecimientos de la vida real, por rutinarios o simples que parezcan, se pueden convertir en algo apasionante.\r\n  \r\n  Que cada historia cuenta. Y yo quiero contarlas.</a>\r\n    -->\r\n\r\n\r\n  <p>Formación Académica</p>\r\n<div class=\"container animated fadeIn slow\">\r\n  <a>\r\n    <li>Técnica superior en Iluminación, Captación y Tratamiento de la Imagen \r\n        IES Puerta Bonita\r\n        \r\n        \r\n        </li>\r\n        <li>Graduada en Comunicación Audiovisual\r\n            Universidad Complutense de Madrid</li>\r\n    </a>\r\n</div>\r\n\r\n<p>Experiencia Profesional</p> \r\n<div class=\"container animated fadeIn slow\">\r\n    <a>\r\n      <li>Ayudante y operadora de cámara en Atresmedia realizando el módulo de Formación en Centros de Trabajo\r\n          \r\n          \r\n          </li>\r\n          <li>Operadora de cámara y montadora del vídeo institucional de los actos de graduación del Centro Superior de Estudios de Gestión (UCM)</li>\r\n          <li>Operadora de cámara en el Evento FP+I Madrid en el IES Hotel Escuela de Madrid</li>\r\n          <li>Prácticas en el Ministerio de la Presidencia en la Secretaría de Estado de Comunicación. Palacio de la Moncloa.</li>\r\n          <li>Prácticas en Infoactualidad, el periódico de la facultad de Ciencias de la Información de la Universidad Complutense de Madrid</li>\r\n      </a>\r\n  </div>\r\n  </div>\r\n\r\n</div>\r\n<br>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/buscador/buscador.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Buscando: <small>{{ termino }}</small></h1>\n<hr>\n\n<div class=\"row animated fadeIn fast\" *ngIf=\"heroes.length == 0\">\n  <div class=\"col-md-12\">\n    <div class=\"alert alert-info\" role=\"alert\">\n      No existen resultados con el término: {{ termino }}\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card-columns\">\n\n  <app-heroe-tarjeta [heroe]=\"foo\" [index]=\"foo.idx\"  *ngFor=\"let foo of heroes\"></app-heroe-tarjeta>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/buscador/buscador.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.ts ***!
  \***********************************************************/
/*! exports provided: BuscadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function() { return BuscadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria1.service */ "./src/app/servicios/galeria1.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscadorComponent = /** @class */ (function () {
    function BuscadorComponent(activatedRoute, _heroesService) {
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroes = [];
    }
    BuscadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.termino = params['termino'];
            _this.heroes = _this._heroesService.buscarHeroes(params['termino']);
            console.log(_this.heroes);
        });
    };
    BuscadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscador',
            template: __webpack_require__(/*! ./buscador.component.html */ "./src/app/components/buscador/buscador.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_2__["Galeria1Service"]])
    ], BuscadorComponent);
    return BuscadorComponent;
}());



/***/ }),

/***/ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/foto10-tarjeta/foto10-tarjeta.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n\r\n  \r\n }\r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/foto10-tarjeta/foto10-tarjeta.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n  <img class=\"card-img-top img-fluid\" [src]=\"foto10.img\" [alt]=\"foto10.nombre\" (click)=\"verFoto10()\">\n\n  <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto10-tarjeta/foto10-tarjeta.component.ts ***!
  \***********************************************************************/
/*! exports provided: Foto10TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto10TarjetaComponent", function() { return Foto10TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto10TarjetaComponent = /** @class */ (function () {
    function Foto10TarjetaComponent(router) {
        this.router = router;
        this.foto10 = {};
        this.foto10Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto10TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto10TarjetaComponent.prototype.verFoto10 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto10', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto10TarjetaComponent.prototype, "foto10", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto10TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto10TarjetaComponent.prototype, "foto10Seleccionado", void 0);
    Foto10TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto10-tarjeta',
            template: __webpack_require__(/*! ./foto10-tarjeta.component.html */ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto10-tarjeta.component.css */ "./src/app/components/foto10-tarjeta/foto10-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto10TarjetaComponent);
    return Foto10TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto10/foto10.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/foto10/foto10.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n\r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n\r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n\r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n\r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n\r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n\r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n\r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n\r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n\r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto10/foto10.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/foto10/foto10.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto10.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto10.img\" class=\"img-fluid\" [alt]=\"foto10.nombre\" [routerLink]=\"['/fotos10']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto10.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto10/foto10.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/foto10/foto10.component.ts ***!
  \*******************************************************/
/*! exports provided: Foto10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto10Component", function() { return Foto10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria10.service */ "./src/app/servicios/galeria10.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto10Component = /** @class */ (function () {
    function Foto10Component(activatedRoute, _galeria10Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria10Service = _galeria10Service;
        this.foto10 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto10 = _this._galeria10Service.getFoto10(params['id']);
        });
    }
    Foto10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto10',
            template: __webpack_require__(/*! ./foto10.component.html */ "./src/app/components/foto10/foto10.component.html"),
            styles: [__webpack_require__(/*! ./foto10.component.css */ "./src/app/components/foto10/foto10.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_2__["Galeria10Service"]])
    ], Foto10Component);
    return Foto10Component;
}());



/***/ }),

/***/ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto2-tarjeta/foto2-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n \r\n body{\r\n  background: #000;\r\n  padding-top: 10px;\r\n}\r\n \r\n p{\r\n  color: black; \r\n\r\n  font-size: 35px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-animation: type 8s steps(60, end);\r\n          animation: type 8s steps(60, end); \r\n}\r\n \r\n p:nth-child(3){\r\n  -webkit-animation: type2 7.5s steps(60, end);\r\n          animation: type2 7.5s steps(60, end);\r\n}\r\n \r\n p a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n \r\n span{\r\n  -webkit-animation: blink 1s infinite;\r\n          animation: blink 1s infinite;\r\n}\r\n \r\n @-webkit-keyframes type{ \r\n  from { width: 0; } \r\n}\r\n \r\n @keyframes type{ \r\n  from { width: 0; } \r\n}\r\n \r\n @-webkit-keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n \r\n @keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n \r\n @-webkit-keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n \r\n @keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n \r\n ::-moz-selection{\r\n  background: black;\r\n}\r\n \r\n ::selection{\r\n  background: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto2-tarjeta/foto2-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top img-fluid\" [src]=\"foto2.img\" [alt]=\"foto2.nombre\" (click)=\"verFoto2()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto2-tarjeta/foto2-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto2TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto2TarjetaComponent", function() { return Foto2TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto2TarjetaComponent = /** @class */ (function () {
    function Foto2TarjetaComponent(router) {
        this.router = router;
        this.foto2 = {};
        this.foto2Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto2TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto2TarjetaComponent.prototype.verFoto2 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto2', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto2TarjetaComponent.prototype, "foto2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto2TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto2TarjetaComponent.prototype, "foto2Seleccionado", void 0);
    Foto2TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto2-tarjeta',
            template: __webpack_require__(/*! ./foto2-tarjeta.component.html */ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto2-tarjeta.component.css */ "./src/app/components/foto2-tarjeta/foto2-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto2TarjetaComponent);
    return Foto2TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto2/foto2.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto2/foto2.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto2/foto2.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto2/foto2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"> <small>{{ foto2.nombre  }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto2.img\" class=\"img-fluid\" [alt]=\"foto2.nombre\" [routerLink]=\"['/fotos2']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto2.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto2/foto2.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto2/foto2.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto2Component", function() { return Foto2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria2.service */ "./src/app/servicios/galeria2.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto2Component = /** @class */ (function () {
    function Foto2Component(activatedRoute, _galeria2Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria2Service = _galeria2Service;
        this.foto2 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto2 = _this._galeria2Service.getFoto2(params['id']);
        });
    }
    Foto2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto2',
            template: __webpack_require__(/*! ./foto2.component.html */ "./src/app/components/foto2/foto2.component.html"),
            styles: [__webpack_require__(/*! ./foto2.component.css */ "./src/app/components/foto2/foto2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_2__["Galeria2Service"]])
    ], Foto2Component);
    return Foto2Component;
}());



/***/ }),

/***/ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto3-tarjeta/foto3-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto3-tarjeta/foto3-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top img-fluid\" [src]=\"foto3.img\" [alt]=\"foto3.nombre\" (click)=\"verFoto3()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto3-tarjeta/foto3-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto3TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto3TarjetaComponent", function() { return Foto3TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto3TarjetaComponent = /** @class */ (function () {
    function Foto3TarjetaComponent(router) {
        this.router = router;
        this.foto3 = {};
        this.foto3Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto3TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto3TarjetaComponent.prototype.verFoto3 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto3', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto3TarjetaComponent.prototype, "foto3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto3TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto3TarjetaComponent.prototype, "foto3Seleccionado", void 0);
    Foto3TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto3-tarjeta',
            template: __webpack_require__(/*! ./foto3-tarjeta.component.html */ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto3-tarjeta.component.css */ "./src/app/components/foto3-tarjeta/foto3-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto3TarjetaComponent);
    return Foto3TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto3/foto3.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto3/foto3.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto3/foto3.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto3/foto3.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"> <small>{{ foto3.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto3.img\" class=\"img-fluid\" [alt]=\"foto3.nombre\" [routerLink]=\"['/fotos3']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto3.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto3/foto3.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto3/foto3.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto3Component", function() { return Foto3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria3.service */ "./src/app/servicios/galeria3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto3Component = /** @class */ (function () {
    function Foto3Component(activatedRoute, _galeria3Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria3Service = _galeria3Service;
        this.foto3 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto3 = _this._galeria3Service.getFoto3(params['id']);
        });
    }
    Foto3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto3',
            template: __webpack_require__(/*! ./foto3.component.html */ "./src/app/components/foto3/foto3.component.html"),
            styles: [__webpack_require__(/*! ./foto3.component.css */ "./src/app/components/foto3/foto3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_2__["Galeria3Service"]])
    ], Foto3Component);
    return Foto3Component;
}());



/***/ }),

/***/ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto4-tarjeta/foto4-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto4-tarjeta/foto4-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top img-fluid\" [src]=\"foto4.img\" [alt]=\"foto4.nombre\" (click)=\"verFoto4()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto4-tarjeta/foto4-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto4TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto4TarjetaComponent", function() { return Foto4TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto4TarjetaComponent = /** @class */ (function () {
    function Foto4TarjetaComponent(router) {
        this.router = router;
        this.foto4 = {};
        this.foto4Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto4TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto4TarjetaComponent.prototype.verFoto4 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto4', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto4TarjetaComponent.prototype, "foto4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto4TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto4TarjetaComponent.prototype, "foto4Seleccionado", void 0);
    Foto4TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto4-tarjeta',
            template: __webpack_require__(/*! ./foto4-tarjeta.component.html */ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto4-tarjeta.component.css */ "./src/app/components/foto4-tarjeta/foto4-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto4TarjetaComponent);
    return Foto4TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto4/foto4.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto4/foto4.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto4/foto4.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto4/foto4.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"> <small>{{ foto4.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto4.img\" class=\"img-fluid\" [alt]=\"foto4.nombre\" [routerLink]=\"['/fotos4']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto4.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto4/foto4.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto4/foto4.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto4Component", function() { return Foto4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria4.service */ "./src/app/servicios/galeria4.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto4Component = /** @class */ (function () {
    function Foto4Component(activatedRoute, _galeria4Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria4Service = _galeria4Service;
        this.foto4 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto4 = _this._galeria4Service.getFoto4(params['id']);
        });
    }
    Foto4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto4',
            template: __webpack_require__(/*! ./foto4.component.html */ "./src/app/components/foto4/foto4.component.html"),
            styles: [__webpack_require__(/*! ./foto4.component.css */ "./src/app/components/foto4/foto4.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_2__["Galeria4Service"]])
    ], Foto4Component);
    return Foto4Component;
}());



/***/ }),

/***/ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto5-tarjeta/foto5-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n}\r\n \r\n body{\r\n  background: #000;\r\n  padding-top: 10px;\r\n}\r\n \r\n p{\r\n  color: black; \r\n\r\n  font-size: 35px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-animation: type 8s steps(60, end);\r\n          animation: type 8s steps(60, end); \r\n}\r\n \r\n p:nth-child(3){\r\n  -webkit-animation: type2 7.5s steps(60, end);\r\n          animation: type2 7.5s steps(60, end);\r\n}\r\n \r\n p a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n \r\n span{\r\n  -webkit-animation: blink 1s infinite;\r\n          animation: blink 1s infinite;\r\n}\r\n \r\n @-webkit-keyframes type{ \r\n  from { width: 0; } \r\n}\r\n \r\n @keyframes type{ \r\n  from { width: 0; } \r\n}\r\n \r\n @-webkit-keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n \r\n @keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n \r\n @-webkit-keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n \r\n @keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n \r\n ::-moz-selection{\r\n  background: black;\r\n}\r\n \r\n ::selection{\r\n  background: black;\r\n}"

/***/ }),

/***/ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto5-tarjeta/foto5-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top img-fluid\" [src]=\"foto5.img\" [alt]=\"foto5.nombre\" (click)=\"verFoto5()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto5-tarjeta/foto5-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto5TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto5TarjetaComponent", function() { return Foto5TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto5TarjetaComponent = /** @class */ (function () {
    function Foto5TarjetaComponent(router) {
        this.router = router;
        this.foto5 = {};
        this.foto5Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto5TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto5TarjetaComponent.prototype.verFoto5 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto5', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto5TarjetaComponent.prototype, "foto5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto5TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto5TarjetaComponent.prototype, "foto5Seleccionado", void 0);
    Foto5TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto5-tarjeta',
            template: __webpack_require__(/*! ./foto5-tarjeta.component.html */ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto5-tarjeta.component.css */ "./src/app/components/foto5-tarjeta/foto5-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto5TarjetaComponent);
    return Foto5TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto5/foto5.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto5/foto5.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto5/foto5.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto5/foto5.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto5.nombre  }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto5.img\" class=\"img-fluid\" [alt]=\"foto5.nombre\" [routerLink]=\"['/fotos5']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto5.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto5/foto5.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto5/foto5.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto5Component", function() { return Foto5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria5.service */ "./src/app/servicios/galeria5.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto5Component = /** @class */ (function () {
    function Foto5Component(activatedRoute, _galeria5Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria5Service = _galeria5Service;
        this.foto5 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto5 = _this._galeria5Service.getFoto5(params['id']);
        });
    }
    Foto5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto5',
            template: __webpack_require__(/*! ./foto5.component.html */ "./src/app/components/foto5/foto5.component.html"),
            styles: [__webpack_require__(/*! ./foto5.component.css */ "./src/app/components/foto5/foto5.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_2__["Galeria5Service"]])
    ], Foto5Component);
    return Foto5Component;
}());



/***/ }),

/***/ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto6-tarjeta/foto6-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n}"

/***/ }),

/***/ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto6-tarjeta/foto6-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n    <img class=\"card-img-top img-fluid\" [src]=\"foto6.img\" [alt]=\"foto6.nombre\" (click)=\"verFoto6()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto6-tarjeta/foto6-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto6TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto6TarjetaComponent", function() { return Foto6TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto6TarjetaComponent = /** @class */ (function () {
    function Foto6TarjetaComponent(router) {
        this.router = router;
        this.foto6 = {};
        this.foto6Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto6TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto6TarjetaComponent.prototype.verFoto6 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto6', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto6TarjetaComponent.prototype, "foto6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto6TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto6TarjetaComponent.prototype, "foto6Seleccionado", void 0);
    Foto6TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto6-tarjeta',
            template: __webpack_require__(/*! ./foto6-tarjeta.component.html */ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto6-tarjeta.component.css */ "./src/app/components/foto6-tarjeta/foto6-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto6TarjetaComponent);
    return Foto6TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto6/foto6.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto6/foto6.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto6/foto6.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto6/foto6.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto6.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto6.img\" class=\"img-fluid\" [alt]=\"foto6.nombre\" [routerLink]=\"['/fotos6']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto6.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto6/foto6.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto6/foto6.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto6Component", function() { return Foto6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria6.service */ "./src/app/servicios/galeria6.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto6Component = /** @class */ (function () {
    function Foto6Component(activatedRoute, _galeria6Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria6Service = _galeria6Service;
        this.foto6 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto6 = _this._galeria6Service.getFoto6(params['id']);
        });
    }
    Foto6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto6',
            template: __webpack_require__(/*! ./foto6.component.html */ "./src/app/components/foto6/foto6.component.html"),
            styles: [__webpack_require__(/*! ./foto6.component.css */ "./src/app/components/foto6/foto6.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_2__["Galeria6Service"]])
    ], Foto6Component);
    return Foto6Component;
}());



/***/ }),

/***/ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto7-tarjeta/foto7-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto7-tarjeta/foto7-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n  <img class=\"card-img-top img-fluid\" [src]=\"foto7.img\" [alt]=\"foto7.nombre\" (click)=\"verFoto7()\">\n\n  <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto7-tarjeta/foto7-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto7TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto7TarjetaComponent", function() { return Foto7TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto7TarjetaComponent = /** @class */ (function () {
    function Foto7TarjetaComponent(router) {
        this.router = router;
        this.foto7 = {};
        this.foto7Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto7TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto7TarjetaComponent.prototype.verFoto7 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto7', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto7TarjetaComponent.prototype, "foto7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto7TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto7TarjetaComponent.prototype, "foto7Seleccionado", void 0);
    Foto7TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto7-tarjeta',
            template: __webpack_require__(/*! ./foto7-tarjeta.component.html */ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto7-tarjeta.component.css */ "./src/app/components/foto7-tarjeta/foto7-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto7TarjetaComponent);
    return Foto7TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto7/foto7.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto7/foto7.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto7/foto7.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto7/foto7.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto7.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto7.img\" class=\"img-fluid\" [alt]=\"foto7.nombre\" [routerLink]=\"['/fotos7']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto7.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/foto7/foto7.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto7/foto7.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto7Component", function() { return Foto7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria7.service */ "./src/app/servicios/galeria7.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto7Component = /** @class */ (function () {
    function Foto7Component(activatedRoute, _galeria7Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria7Service = _galeria7Service;
        this.foto7 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto7 = _this._galeria7Service.getFoto7(params['id']);
        });
    }
    Foto7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto7',
            template: __webpack_require__(/*! ./foto7.component.html */ "./src/app/components/foto7/foto7.component.html"),
            styles: [__webpack_require__(/*! ./foto7.component.css */ "./src/app/components/foto7/foto7.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_2__["Galeria7Service"]])
    ], Foto7Component);
    return Foto7Component;
}());



/***/ }),

/***/ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto8-tarjeta/foto8-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto8-tarjeta/foto8-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n  <img class=\"card-img-top img-fluid\" [src]=\"foto8.img\" [alt]=\"foto8.nombre\" (click)=\"verFoto8()\">\n\n  <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto8-tarjeta/foto8-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto8TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto8TarjetaComponent", function() { return Foto8TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto8TarjetaComponent = /** @class */ (function () {
    function Foto8TarjetaComponent(router) {
        this.router = router;
        this.foto8 = {};
        this.foto8Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto8TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto8TarjetaComponent.prototype.verFoto8 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto8', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto8TarjetaComponent.prototype, "foto8", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto8TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto8TarjetaComponent.prototype, "foto8Seleccionado", void 0);
    Foto8TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto8-tarjeta',
            template: __webpack_require__(/*! ./foto8-tarjeta.component.html */ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto8-tarjeta.component.css */ "./src/app/components/foto8-tarjeta/foto8-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto8TarjetaComponent);
    return Foto8TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto8/foto8.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto8/foto8.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto8/foto8.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto8/foto8.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto8.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto8.img\" class=\"img-fluid\" [alt]=\"foto8.nombre\" [routerLink]=\"['/fotos8']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto8.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto8/foto8.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto8/foto8.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto8Component", function() { return Foto8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria8.service */ "./src/app/servicios/galeria8.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto8Component = /** @class */ (function () {
    function Foto8Component(activatedRoute, _galeria8Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria8Service = _galeria8Service;
        this.foto8 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto8 = _this._galeria8Service.getFoto8(params['id']);
        });
    }
    Foto8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto8',
            template: __webpack_require__(/*! ./foto8.component.html */ "./src/app/components/foto8/foto8.component.html"),
            styles: [__webpack_require__(/*! ./foto8.component.css */ "./src/app/components/foto8/foto8.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_2__["Galeria8Service"]])
    ], Foto8Component);
    return Foto8Component;
}());



/***/ }),

/***/ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/foto9-tarjeta/foto9-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n    opacity: 1.0;\r\n   filter: alpha(opacity=100);\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   transition: -webkit-transform .3s;\r\n   transition: transform .3s;\r\n   transition: transform .3s, -webkit-transform .3s;\r\n  \r\n }\r\n \r\n img:hover {\r\n  /*opacity: 0.5;\r\n  filter: alpha(opacity=50);*/\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n}\r\n \r\n img:hover {\r\n\r\n   box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   -webkit-transform: scale(1.04);\r\n           transform: scale(1.04);\r\n   cursor: pointer;\r\n   \r\n }\r\n \r\n .entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n}"

/***/ }),

/***/ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/foto9-tarjeta/foto9-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast\">\n  <img class=\"card-img-top img-fluid\" [src]=\"foto9.img\" [alt]=\"foto9.nombre\" (click)=\"verFoto9()\">\n\n  <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/foto9-tarjeta/foto9-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: Foto9TarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto9TarjetaComponent", function() { return Foto9TarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Foto9TarjetaComponent = /** @class */ (function () {
    function Foto9TarjetaComponent(router) {
        this.router = router;
        this.foto9 = {};
        this.foto9Seleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Foto9TarjetaComponent.prototype.ngOnInit = function () {
    };
    Foto9TarjetaComponent.prototype.verFoto9 = function () {
        // console.log(  this.index );
        this.router.navigate(['/foto9', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Foto9TarjetaComponent.prototype, "foto9", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Foto9TarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Foto9TarjetaComponent.prototype, "foto9Seleccionado", void 0);
    Foto9TarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto9-tarjeta',
            template: __webpack_require__(/*! ./foto9-tarjeta.component.html */ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./foto9-tarjeta.component.css */ "./src/app/components/foto9-tarjeta/foto9-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Foto9TarjetaComponent);
    return Foto9TarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/foto9/foto9.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/foto9/foto9.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/foto9/foto9.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/foto9/foto9.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p class=\"animated fadeIn\"><small>{{ foto9.nombre }}</small></p>\n    </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"foto9.img\" class=\"img-fluid\" [alt]=\"foto9.nombre\" [routerLink]=\"['/fotos9']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n        <p>\n            {{ foto9.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/foto9/foto9.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/foto9/foto9.component.ts ***!
  \*****************************************************/
/*! exports provided: Foto9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foto9Component", function() { return Foto9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria9.service */ "./src/app/servicios/galeria9.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Foto9Component = /** @class */ (function () {
    function Foto9Component(activatedRoute, _galeria9Service) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._galeria9Service = _galeria9Service;
        this.foto9 = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.foto9 = _this._galeria9Service.getFoto9(params['id']);
        });
    }
    Foto9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foto9',
            template: __webpack_require__(/*! ./foto9.component.html */ "./src/app/components/foto9/foto9.component.html"),
            styles: [__webpack_require__(/*! ./foto9.component.css */ "./src/app/components/foto9/foto9.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_2__["Galeria9Service"]])
    ], Foto9Component);
    return Foto9Component;
}());



/***/ }),

/***/ "./src/app/components/fotos10/fotos10.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/fotos10/fotos10.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos10/fotos10.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/fotos10/fotos10.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p> <b>Semana Santa 2017</b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto10-tarjeta (foto10Seleccionado)=\"verFoto10( $event )\" [foto10]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos10; let i = index\"></app-foto10-tarjeta>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/fotos10/fotos10.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos10/fotos10.component.ts ***!
  \*********************************************************/
/*! exports provided: Fotos10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos10Component", function() { return Fotos10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria10.service */ "./src/app/servicios/galeria10.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos10Component = /** @class */ (function () {
    function Fotos10Component(_galeria10Service, router) {
        this._galeria10Service = _galeria10Service;
        this.router = router;
        this.fotos10 = [];
    }
    Fotos10Component.prototype.ngOnInit = function () {
        this.fotos10 = this._galeria10Service.getFotos10();
    };
    Fotos10Component.prototype.verFoto10 = function (idx) {
        this.router.navigate(['/foto10', idx]);
    };
    Fotos10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos10',
            template: __webpack_require__(/*! ./fotos10.component.html */ "./src/app/components/fotos10/fotos10.component.html"),
            styles: [__webpack_require__(/*! ./fotos10.component.css */ "./src/app/components/fotos10/fotos10.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria10_service__WEBPACK_IMPORTED_MODULE_1__["Galeria10Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos10Component);
    return Fotos10Component;
}());



/***/ }),

/***/ "./src/app/components/fotos2/fotos2.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos2/fotos2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos2/fotos2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos2/fotos2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p><b>Edimburgo</b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto2-tarjeta (foto2Seleccionado)=\"verFoto2( $event )\" [foto2]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos2; let i = index\"></app-foto2-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos2/fotos2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos2/fotos2.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos2Component", function() { return Fotos2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria2.service */ "./src/app/servicios/galeria2.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos2Component = /** @class */ (function () {
    function Fotos2Component(_galeria2Service, router) {
        this._galeria2Service = _galeria2Service;
        this.router = router;
        this.fotos2 = [];
    }
    Fotos2Component.prototype.ngOnInit = function () {
        this.fotos2 = this._galeria2Service.getFotos2();
    };
    Fotos2Component.prototype.verFoto2 = function (idx) {
        this.router.navigate(['/foto2', idx]);
    };
    Fotos2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos2',
            template: __webpack_require__(/*! ./fotos2.component.html */ "./src/app/components/fotos2/fotos2.component.html"),
            styles: [__webpack_require__(/*! ./fotos2.component.css */ "./src/app/components/fotos2/fotos2.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria2_service__WEBPACK_IMPORTED_MODULE_1__["Galeria2Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos2Component);
    return Fotos2Component;
}());



/***/ }),

/***/ "./src/app/components/fotos3/fotos3.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos3/fotos3.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos3/fotos3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos3/fotos3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p> <b>Fotografía de producto</b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto3-tarjeta (foto3Seleccionado)=\"verFoto3( $event )\" [foto3]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos3; let i = index\"></app-foto3-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos3/fotos3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos3/fotos3.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos3Component", function() { return Fotos3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria3.service */ "./src/app/servicios/galeria3.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos3Component = /** @class */ (function () {
    function Fotos3Component(_galeria3Service, router) {
        this._galeria3Service = _galeria3Service;
        this.router = router;
        this.fotos3 = [];
    }
    Fotos3Component.prototype.ngOnInit = function () {
        this.fotos3 = this._galeria3Service.getFotos3();
    };
    Fotos3Component.prototype.verFoto3 = function (idx) {
        this.router.navigate(['/foto3', idx]);
    };
    Fotos3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos3',
            template: __webpack_require__(/*! ./fotos3.component.html */ "./src/app/components/fotos3/fotos3.component.html"),
            styles: [__webpack_require__(/*! ./fotos3.component.css */ "./src/app/components/fotos3/fotos3.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria3_service__WEBPACK_IMPORTED_MODULE_1__["Galeria3Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos3Component);
    return Fotos3Component;
}());



/***/ }),

/***/ "./src/app/components/fotos4/fotos4.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos4/fotos4.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos4/fotos4.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos4/fotos4.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n       <p> <b>Interiorismo</b> </p> \n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto4-tarjeta (foto4Seleccionado)=\"verFoto4( $event )\" [foto4]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos4; let i = index\"></app-foto4-tarjeta>\n</div>"

/***/ }),

/***/ "./src/app/components/fotos4/fotos4.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos4/fotos4.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos4Component", function() { return Fotos4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria4.service */ "./src/app/servicios/galeria4.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos4Component = /** @class */ (function () {
    function Fotos4Component(_galeria4Service, router) {
        this._galeria4Service = _galeria4Service;
        this.router = router;
        this.fotos4 = [];
    }
    Fotos4Component.prototype.ngOnInit = function () {
        this.fotos4 = this._galeria4Service.getFotos4();
    };
    Fotos4Component.prototype.verFoto4 = function (idx) {
        this.router.navigate(['/foto4', idx]);
    };
    Fotos4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos4',
            template: __webpack_require__(/*! ./fotos4.component.html */ "./src/app/components/fotos4/fotos4.component.html"),
            styles: [__webpack_require__(/*! ./fotos4.component.css */ "./src/app/components/fotos4/fotos4.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria4_service__WEBPACK_IMPORTED_MODULE_1__["Galeria4Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos4Component);
    return Fotos4Component;
}());



/***/ }),

/***/ "./src/app/components/fotos5/fotos5.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos5/fotos5.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n\r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos5/fotos5.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos5/fotos5.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n       <p> <b>Madrid</b> </p> \n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto5-tarjeta (foto5Seleccionado)=\"verFoto5( $event )\" [foto5]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos5; let i = index\"></app-foto5-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos5/fotos5.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos5/fotos5.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos5Component", function() { return Fotos5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria5.service */ "./src/app/servicios/galeria5.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos5Component = /** @class */ (function () {
    function Fotos5Component(_galeria5Service, router) {
        this._galeria5Service = _galeria5Service;
        this.router = router;
        this.fotos5 = [];
    }
    Fotos5Component.prototype.ngOnInit = function () {
        this.fotos5 = this._galeria5Service.getFotos5();
    };
    Fotos5Component.prototype.verFoto5 = function (idx) {
        this.router.navigate(['/foto5', idx]);
    };
    Fotos5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos5',
            template: __webpack_require__(/*! ./fotos5.component.html */ "./src/app/components/fotos5/fotos5.component.html"),
            styles: [__webpack_require__(/*! ./fotos5.component.css */ "./src/app/components/fotos5/fotos5.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria5_service__WEBPACK_IMPORTED_MODULE_1__["Galeria5Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos5Component);
    return Fotos5Component;
}());



/***/ }),

/***/ "./src/app/components/fotos6/fotos6.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos6/fotos6.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos6/fotos6.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos6/fotos6.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p> <b>Retrato</b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto6-tarjeta (foto6Seleccionado)=\"verFoto6( $event )\" [foto6]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos6; let i = index\"></app-foto6-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos6/fotos6.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos6/fotos6.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos6Component", function() { return Fotos6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria6.service */ "./src/app/servicios/galeria6.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos6Component = /** @class */ (function () {
    function Fotos6Component(_galeria6Service, router) {
        this._galeria6Service = _galeria6Service;
        this.router = router;
        this.fotos6 = [];
    }
    Fotos6Component.prototype.ngOnInit = function () {
        this.fotos6 = this._galeria6Service.getFotos6();
    };
    Fotos6Component.prototype.verFoto6 = function (idx) {
        this.router.navigate(['/foto6', idx]);
    };
    Fotos6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos6',
            template: __webpack_require__(/*! ./fotos6.component.html */ "./src/app/components/fotos6/fotos6.component.html"),
            styles: [__webpack_require__(/*! ./fotos6.component.css */ "./src/app/components/fotos6/fotos6.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria6_service__WEBPACK_IMPORTED_MODULE_1__["Galeria6Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos6Component);
    return Fotos6Component;
}());



/***/ }),

/***/ "./src/app/components/fotos7/fotos7.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos7/fotos7.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n\r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n\r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n\r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n\r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n\r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n\r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n\r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n\r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n\r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos7/fotos7.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos7/fotos7.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p> <b>Cabalgata de Reyes </b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto7-tarjeta (foto7Seleccionado)=\"verFoto7( $event )\" [foto7]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos7; let i = index\"></app-foto7-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos7/fotos7.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos7/fotos7.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos7Component", function() { return Fotos7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria7.service */ "./src/app/servicios/galeria7.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos7Component = /** @class */ (function () {
    function Fotos7Component(_galeria7Service, router) {
        this._galeria7Service = _galeria7Service;
        this.router = router;
        this.fotos7 = [];
    }
    Fotos7Component.prototype.ngOnInit = function () {
        this.fotos7 = this._galeria7Service.getFotos7();
    };
    Fotos7Component.prototype.verFoto7 = function (idx) {
        this.router.navigate(['/foto7', idx]);
    };
    Fotos7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos7',
            template: __webpack_require__(/*! ./fotos7.component.html */ "./src/app/components/fotos7/fotos7.component.html"),
            styles: [__webpack_require__(/*! ./fotos7.component.css */ "./src/app/components/fotos7/fotos7.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria7_service__WEBPACK_IMPORTED_MODULE_1__["Galeria7Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos7Component);
    return Fotos7Component;
}());



/***/ }),

/***/ "./src/app/components/fotos8/fotos8.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos8/fotos8.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n  \r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n  \r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n  \r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  \r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n  \r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n  \r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  \r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n  \r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n  \r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n  \r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos8/fotos8.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos8/fotos8.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n        <p> <b>Moda: en estudio</b> </p>\n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto8-tarjeta (foto8Seleccionado)=\"verFoto8( $event )\" [foto8]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos8; let i = index\"></app-foto8-tarjeta>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/fotos8/fotos8.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos8/fotos8.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos8Component", function() { return Fotos8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria8.service */ "./src/app/servicios/galeria8.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos8Component = /** @class */ (function () {
    function Fotos8Component(_galeria8Service, router) {
        this._galeria8Service = _galeria8Service;
        this.router = router;
        this.fotos8 = [];
    }
    Fotos8Component.prototype.ngOnInit = function () {
        this.fotos8 = this._galeria8Service.getFotos8();
    };
    Fotos8Component.prototype.verFoto8 = function (idx) {
        this.router.navigate(['/foto8', idx]);
    };
    Fotos8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos8',
            template: __webpack_require__(/*! ./fotos8.component.html */ "./src/app/components/fotos8/fotos8.component.html"),
            styles: [__webpack_require__(/*! ./fotos8.component.css */ "./src/app/components/fotos8/fotos8.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria8_service__WEBPACK_IMPORTED_MODULE_1__["Galeria8Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos8Component);
    return Fotos8Component;
}());



/***/ }),

/***/ "./src/app/components/fotos9/fotos9.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/fotos9/fotos9.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n  }\r\n  \r\n\r\n  img {\r\n    \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n\r\n  img:hover {\r\n   \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n\r\n  body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n\r\n  p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n  \r\n\r\n  p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n  \r\n\r\n  p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  \r\n\r\n  span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n  \r\n\r\n  @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n  \r\n\r\n  @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n  \r\n\r\n  @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n  \r\n\r\n  ::-moz-selection{\r\n    background: black;\r\n  }\r\n  \r\n\r\n  ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/fotos9/fotos9.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/fotos9/fotos9.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n      <p> <b>Moda: en exterior</b> </p>  \n    </div>\n</div>\n\n\n\n\n<div class=\"card-columns\">\n\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\n    <app-foto9-tarjeta (foto9Seleccionado)=\"verFoto9( $event )\" [foto9]=\"foo\" [index]=\"i\" *ngFor=\"let foo of fotos9; let i = index\"></app-foto9-tarjeta>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/fotos9/fotos9.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/fotos9/fotos9.component.ts ***!
  \*******************************************************/
/*! exports provided: Fotos9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fotos9Component", function() { return Fotos9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria9.service */ "./src/app/servicios/galeria9.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Fotos9Component = /** @class */ (function () {
    function Fotos9Component(_galeria9Service, router) {
        this._galeria9Service = _galeria9Service;
        this.router = router;
        this.fotos9 = [];
    }
    Fotos9Component.prototype.ngOnInit = function () {
        this.fotos9 = this._galeria9Service.getFotos9();
    };
    Fotos9Component.prototype.verFoto9 = function (idx) {
        this.router.navigate(['/foto9', idx]);
    };
    Fotos9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fotos9',
            template: __webpack_require__(/*! ./fotos9.component.html */ "./src/app/components/fotos9/fotos9.component.html"),
            styles: [__webpack_require__(/*! ./fotos9.component.css */ "./src/app/components/fotos9/fotos9.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria9_service__WEBPACK_IMPORTED_MODULE_1__["Galeria9Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Fotos9Component);
    return Fotos9Component;
}());



/***/ }),

/***/ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\n     opacity: 1.0;\r\n    filter: alpha(opacity=100);\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n   \r\n  }\r\n  \r\n  img:hover {\r\n    /*opacity: 0.5;\r\n    filter: alpha(opacity=50);*/\r\n    -webkit-filter: grayscale(100%);\r\n            filter: grayscale(100%);\r\n  }\r\n  \r\n  img:hover {\r\n \r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-transform: scale(1.04);\r\n            transform: scale(1.04);\r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n  .entrada {\r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n  \r\n}\r\n  \r\n  body{\r\n  background: #000;\r\n  padding-top: 10px;\r\n}\r\n  \r\n  p{\r\n  color: black; \r\n\r\n  font-size: 35px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-animation: type 8s steps(60, end);\r\n          animation: type 8s steps(60, end); \r\n}\r\n  \r\n  p:nth-child(3){\r\n  -webkit-animation: type2 7.5s steps(60, end);\r\n          animation: type2 7.5s steps(60, end);\r\n}\r\n  \r\n  p a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n  \r\n  span{\r\n  -webkit-animation: blink 1s infinite;\r\n          animation: blink 1s infinite;\r\n}\r\n  \r\n  @-webkit-keyframes type{ \r\n  from { width: 0; } \r\n}\r\n  \r\n  @keyframes type{ \r\n  from { width: 0; } \r\n}\r\n  \r\n  @-webkit-keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n  \r\n  @keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n  \r\n  @-webkit-keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n  \r\n  @keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n  \r\n  ::-moz-selection{\r\n  background: black;\r\n}\r\n  \r\n  ::selection{\r\n  background: black;\r\n}\r\n\r\n  \r\n \r\n"

/***/ }),

/***/ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animated fadeIn fast contenedor\">\n    <img  class=\"card-img-top img-fluid\"  [src]=\"heroe.img\" [alt]=\"heroe.galeria\" (click)=\"verHeroe()\">\n\n    <!-- <a [routerLink]=\"['/heroe',i]\" class=\"btn btn-outline-primary\">Ver más link...</a> -->\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/heroe-tarjeta/heroe-tarjeta.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeroeTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeTarjetaComponent", function() { return HeroeTarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroeTarjetaComponent = /** @class */ (function () {
    function HeroeTarjetaComponent(router) {
        this.router = router;
        this.heroe = {};
        this.heroeSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroeTarjetaComponent.prototype.ngOnInit = function () {
    };
    HeroeTarjetaComponent.prototype.verHeroe = function () {
        // console.log(  this.index );
        this.router.navigate(['/heroe', this.index]);
        // this.heroeSeleccionado.emit( this.index );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeroeTarjetaComponent.prototype, "heroe", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeroeTarjetaComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeroeTarjetaComponent.prototype, "heroeSeleccionado", void 0);
    HeroeTarjetaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroe-tarjeta',
            template: __webpack_require__(/*! ./heroe-tarjeta.component.html */ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.html"),
            styles: [__webpack_require__(/*! ./heroe-tarjeta.component.css */ "./src/app/components/heroe-tarjeta/heroe-tarjeta.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeroeTarjetaComponent);
    return HeroeTarjetaComponent;
}());



/***/ }),

/***/ "./src/app/components/heroe/heroe.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/heroe/heroe.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  border-bottom: 6px solid black;\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n \r\n}\r\n\r\nimg {\r\n  \r\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nimg:hover {\r\n \r\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n \r\n  cursor: pointer;\r\n  \r\n}\r\n\r\nbody{\r\n  background: #000;\r\n  padding-top: 10px;\r\n}\r\n\r\np{\r\n  color: black; \r\n\r\n  font-size: 35px;\r\n  margin: 10px 0 0 10px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  -webkit-animation: type 8s steps(60, end);\r\n          animation: type 8s steps(60, end); \r\n}\r\n\r\np:nth-child(3){\r\n  -webkit-animation: type2 7.5s steps(60, end);\r\n          animation: type2 7.5s steps(60, end);\r\n}\r\n\r\np a{\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\nspan{\r\n  -webkit-animation: blink 1s infinite;\r\n          animation: blink 1s infinite;\r\n}\r\n\r\n@-webkit-keyframes type{ \r\n  from { width: 0; } \r\n}\r\n\r\n@keyframes type{ \r\n  from { width: 0; } \r\n}\r\n\r\n@-webkit-keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n\r\n@keyframes type2{\r\n  0%{width: 0;}\r\n  50%{width: 0;}\r\n  100%{ width: 100; } \r\n}\r\n\r\n@-webkit-keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n\r\n@keyframes blink{\r\n  to{opacity: .0;}\r\n}\r\n\r\n::-moz-selection{\r\n  background: black;\r\n}\r\n\r\n::selection{\r\n  background: black;\r\n}"

/***/ }),

/***/ "./src/app/components/heroe/heroe.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/heroe/heroe.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"barra\">\n    <div class=\"entrada\">\n    <p class=\"animated fadeIn\"> <small>{{ heroe.nombre  }}</small></p>\n</div>\n</div>\n\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-12\">\n\n        <img [src]=\"heroe.img\" class=\"img-fluid\" [alt]=\"heroe.nombre\" [routerLink]=\"['/heroes']\">\n\n\n    </div>\n\n    <div class=\"col-md-2\">\n\n\n        <p>\n            {{ heroe.bio }}\n        </p>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/heroe/heroe.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/heroe/heroe.component.ts ***!
  \*****************************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/galeria1.service */ "./src/app/servicios/galeria1.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(activatedRoute, _heroesService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroe = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.heroe = _this._heroesService.getHeroe(params['id']);
            // console.log(this.heroe);
        });
    }
    HeroeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroe',
            template: __webpack_require__(/*! ./heroe.component.html */ "./src/app/components/heroe/heroe.component.html"),
            styles: [__webpack_require__(/*! ./heroe.component.css */ "./src/app/components/heroe/heroe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_2__["Galeria1Service"]])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "./src/app/components/heroes/heroes.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n   \r\n }\r\n body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n ::-moz-selection{\r\n    background: black;\r\n  }\r\n ::selection{\r\n    background: black;\r\n  }\r\n \r\n"

/***/ }),

/***/ "./src/app/components/heroes/heroes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"barra\">\r\n    <div class=\"entrada\">\r\n        <p><b>Behind the scenes</b> </p>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"card-columns\">\r\n\r\n    <!-- *ngFor=\"let heroe of heroes; let i = index\" -->\r\n    <app-heroe-tarjeta (heroeSeleccionado)=\"verHeroe( $event )\" [heroe]=\"foo\" [index]=\"i\" *ngFor=\"let foo of heroes; let i = index\"></app-heroe-tarjeta>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/galeria1.service */ "./src/app/servicios/galeria1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(_heroesService, router) {
        this._heroesService = _heroesService;
        this.router = router;
        this.heroes = [];
        // console.log("constructor");
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.heroes = this._heroesService.getHeroes();
        // console.log( this.heroes );
    };
    HeroesComponent.prototype.verHeroe = function (idx) {
        this.router.navigate(['/heroe', idx]);
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/components/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/components/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_galeria1_service__WEBPACK_IMPORTED_MODULE_1__["Galeria1Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  -ms-grid-rows: auto 1fr auto;\r\n      grid-template-rows: auto 1fr auto;\r\n  min-height: 100vh;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<div class=\"papito \">\r\n  <p style=\"text-align: center; font-size: 80pt;\">Jessica Roldán</p>\r\n</div>\r\n</div>\r\n<div class=\"col-md-12\">\r\n<video width=\"95%\" height=\"95%\" autoplay>\r\n    <source src=\"assets/video/home2.mp4\" type=\"video/mp4\">\r\n \r\n  </video>\r\n</div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/montion/montion.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/montion/montion.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/montion/montion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/montion/montion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  montion works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/montion/montion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/montion/montion.component.ts ***!
  \*********************************************************/
/*! exports provided: MontionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontionComponent", function() { return MontionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MontionComponent = /** @class */ (function () {
    function MontionComponent() {
    }
    MontionComponent.prototype.ngOnInit = function () {
    };
    MontionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-montion',
            template: __webpack_require__(/*! ./montion.component.html */ "./src/app/components/montion/montion.component.html"),
            styles: [__webpack_require__(/*! ./montion.component.css */ "./src/app/components/montion/montion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MontionComponent);
    return MontionComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    color: white;\r\n \r\n    font-size: 9.5pt;\r\n    background-color: black;\r\n    \r\n    padding: 1em 0;\r\n   \r\n  \r\n}\r\n\r\n.foto-logo {\r\n    margin-left: 0.5em;\r\n    margin-right: 0.5em;\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n}\r\n\r\n.foto-logo:hover {\r\n    -webkit-transform:rotate(360deg);\r\n            transform:rotate(360deg);\r\n  \r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <h4>Contacto: </h4>\r\n\r\n        <a href=\"https://www.linkedin.com/in/audiovisuales-jessicarold%C3%A1n/\"><img class=\"foto-logo\"   src=\"./assets/img/logoLinkedin.png\" >  </a> <a>LinkedIn</a> \r\n        <a><img class=\"foto-logo\" src=\"./assets/img/logoGmail.png\">  </a> <a>jessrold@gmail.com</a>\r\n\r\n        <p class=\" text-center\">Jessica Roldán &copy; {{anio}} </p>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\r\n    color: white;\r\n    background-color: black;\r\n    font-size: 14pt;\r\n    padding-bottom: 15px;\r\n    padding-top: 15px;\r\n    padding-left: 20px;\r\n}\r\n\r\n\r\n  .zoom:hover {\r\n    color: white;\r\n    background-color: black;\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n    margin-left: 0px;\r\n  \r\n    \r\n  }\r\n\r\n\r\n  .logo1 {\r\n    width: 50px;\r\n    height: 45px;\r\n    cursor: pointer;\r\n    transition: -webkit-transform 1s ease;\r\n    transition: transform 1s ease;\r\n    transition: transform 1s ease, -webkit-transform 1s ease;\r\n  }\r\n\r\n\r\n  .logo1:hover {\r\n    -webkit-transform:rotate(360deg);\r\n            transform:rotate(360deg);\r\n  }\r\n\r\n   "

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"nav navbar navbar-expand-md navbar bg navbar navbar-dark \">\n\n    <img class=\"navbar-brand d-lg-none d-xl-none logo1\" src=\"assets/img/LOGObuenoDEF2ªversion.png\" alt=\"\" [routerLink]=\"['home']\">\n    <img class=\"navbar-brand d-none d-lg-block logo1\" src=\"assets/img/LOGObuenoDEF2ªversion.png\"   alt=\"\" [routerLink]=\"['home']\">\n\n\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n        <ul class=\" navbar-nav mr-centre \">\n\n            <li class=\"nav-item \" routerLinkActive=\"active\">\n                <a class=\"nav nav-link\" [routerLink]=\"['home']\"> <span class=\"sr-only\">(current)</span></a>\n            </li>\n           \n            <li class=\"nav-item dropdown \" routerLinkActive=\"active\" >\n                <a class=\"nav-link dropdown-toggle nav zoom\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:currentColor\">\n                  Imágenes\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['heroes']\">Behind the scenes</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos2']\">Edimburgo</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos3']\">Fotografía de producto</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos4']\">Interiorismo</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos5']\">Madrid</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos6']\">Retrato</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos7']\">Cabalgata de Reyes de Madrid</a>\n                     <a class=\"dropdown-item\" [routerLink]=\"['fotos10']\">Semana Santa 2017</a>\n                   \n                    <a class=\"dropdown-item\" >Moda:</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos8']\"> - En estudio</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['fotos9']\"> - En exterior</a>\n                \n                   \n                    \n                </div>\n            </li>\n        </ul>\n\n\n        <ul class=\" navbar-nav ml-centre \">\n            <li class=\"nav-item dropdown \" routerLinkActive=\"active\" >\n                <a class=\"nav-link dropdown-toggle nav zoom\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:currentColor\">\n                  Vídeos\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos1']\">Cortometraje</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos2']\">Documental</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos3']\">Periódico Digital: Infoactualidad</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos4']\">Escuela de Gobierno UCM</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos5']\">Videoclip</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['videos6']\">After Effects</a>\n\n                </div>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active\" >\n                <a class=\"nav nav-link zoom\" style=\"color:currentColor\" [routerLink]=\"['about']\"> Sobre mí</a>\n            </li>\n        </ul>\n\n    </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/videos1/videos1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos1/videos1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n \r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.vid {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.vid:hover {\r\n  \r\n    -webkit-transform: scale(1.03);\r\n  \r\n            transform: scale(1.03);\r\n    cursor: pointer;\r\n}\r\n\r\nbody{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\np{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\np:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\np a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\nspan{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n@-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n@keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos1/videos1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos1/videos1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entrada\">\n   <p  ><b>Cortometraje</b></p> \n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/4ZUAAr-p1Es\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Watch your back</em></b> </h3>\n      \n        <h5>\n            Cortometraje ideado, producido, rodado y postproducido en 48 horas para el concurso Enfocando 48h en la Facultad de Ciencias de la Información (UCM) – febrero 2016\n        </h5>\n\n\n\n\n    </div>\n\n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" src=\"https://player.vimeo.com/video/129204365\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Miedo y asco en Madriz centro</em></b> </h3>\n        \n        <h5>Cortometraje en plano secuencia para la Facultad de Ciencias de la Información (UCM) – mayo 2015</h5>\n     \n        \n    </div>\n\n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/WrdRcmrsmYA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>El burlador</em></b> </h3>\n      \n        <h5>\n            Cortometraje para la Facultad de Ciencias de la Información (UCM) – mayo 2015\n        </h5>\n\n\n\n    </div>\n\n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe src=\"https://www.youtube.com/embed/WrdRcmrsmYA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/rjkNmvCCJpE\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>Práctica de Iluminación: sala cine</em></b> </h3>\n     \n        <h5>\n            Práctica de Iluminación para simulación de la sala de cine en el IES Puerta Bonita - marzo de 2017\n        </h5>\n        <h5>Alumnos de 1º de Iluminación, Captación y Tratamiento de la Imagen</h5>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/videos1/videos1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos1/videos1.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos1Component", function() { return Videos1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos1Component = /** @class */ (function () {
    function Videos1Component() {
    }
    Videos1Component.prototype.ngOnInit = function () {
    };
    Videos1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos1',
            template: __webpack_require__(/*! ./videos1.component.html */ "./src/app/components/videos1/videos1.component.html"),
            styles: [__webpack_require__(/*! ./videos1.component.css */ "./src/app/components/videos1/videos1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos1Component);
    return Videos1Component;
}());



/***/ }),

/***/ "./src/app/components/videos2/videos2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos2/videos2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n    \r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n  \r\n}\r\n\r\n.vid {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.vid:hover {\r\n  \r\n    -webkit-transform: scale(1.03);\r\n  \r\n            transform: scale(1.03);\r\n    cursor: pointer;\r\n}\r\n\r\nbody{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\np{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\np:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\np a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\nspan{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n@-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n@keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos2/videos2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos2/videos2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entrada\">\n    <p><b>Documental</b></p>\n</div>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/qA_Ew7RRQu4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Ciudad Escuela de los Muchachos</em></b> </h3>\n    \n        <h5>\n            Documental para la Facultad de Ciencias de la Información (UCM) – febrero 2016\n        </h5>\n\n\n\n    </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/2NnW0I936Ho\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Buenaventura Durruti, la historia olvidada </em></b> </h3>\n     \n        <h5>Documental para la Facultad de Ciencias de la Información (UCM) – mayo 2016</h5>\n    </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/iiPKjdVvBFs\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>P.I.Z.Z.A</em></b> </h3>\n      \n        <h5>\n            Falso documental entregado como Trabajo de Fin de Grado para la Facultad de Ciencias de la Información (UCM) – septiembre 2016\n        </h5>\n\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/videos2/videos2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos2/videos2.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos2Component", function() { return Videos2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos2Component = /** @class */ (function () {
    function Videos2Component() {
    }
    Videos2Component.prototype.ngOnInit = function () {
    };
    Videos2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos2',
            template: __webpack_require__(/*! ./videos2.component.html */ "./src/app/components/videos2/videos2.component.html"),
            styles: [__webpack_require__(/*! ./videos2.component.css */ "./src/app/components/videos2/videos2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos2Component);
    return Videos2Component;
}());



/***/ }),

/***/ "./src/app/components/videos3/videos3.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos3/videos3.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n  \r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n  \r\n}\r\n\r\n\r\n\r\n.vid {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n.vid:hover {\r\n  \r\n    -webkit-transform: scale(1.03);\r\n  \r\n            transform: scale(1.03);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\n\r\n\r\np{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\n\r\n\r\np:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\n\r\n\r\np a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n\r\nspan{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n\r\n\r\n@keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n\r\n\r\n@keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n\r\n\r\n@keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n\r\n\r\n::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n\r\n\r\n::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos3/videos3.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos3/videos3.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"barra\">\n    <div class=\"entrada\">\n    <p><b>Periódico Digital: Infoactualidad</b></p>\n    \n</div>\n</div>\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/bubb4BeI354\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Reportaje sobre Mercedes-Benz Madrid Fashion Week</em></b> </h3>\n        \n        <h5>\n            Para el periódico digital Infoacualidad de la Facultad de Ciencias de la Información (UCM) – febrero 2015\n\n        </h5>\n\n\n\n    </div>\n\n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/Q9V75NqfwvQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Entrevista a Roberto Brasero</em></b> </h3>\n       \n        <h5>Para el periódico digital Infoacualidad de la Facultad de Ciencias de la Información (UCM) – mayo 2015</h5>\n    </div>\n\n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/a4QMOx_fcX0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>Reportaje sobre la ocioteca organizada por Afadis </em></b> </h3>\n        \n        <h5>\n            Para el periódico digital Infoacualidad de la Facultad de Ciencias de la Información (UCM) – marzo 2015\n        </h5>\n\n\n\n    </div>\n   \n   \n</div>\n<br>\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/4KKuwhYkLoo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>Entrevista a Samanta Villar</em></b> </h3>\n      \n        <h5>\n            Para el periódico digital Infoacualidad de la Facultad de Ciencias de la Información (UCM) – marzo 2015\n        </h5>\n\n\n\n    </div>\n  \n    \n</div>"

/***/ }),

/***/ "./src/app/components/videos3/videos3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos3/videos3.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos3Component", function() { return Videos3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos3Component = /** @class */ (function () {
    function Videos3Component() {
    }
    Videos3Component.prototype.ngOnInit = function () {
    };
    Videos3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos3',
            template: __webpack_require__(/*! ./videos3.component.html */ "./src/app/components/videos3/videos3.component.html"),
            styles: [__webpack_require__(/*! ./videos3.component.css */ "./src/app/components/videos3/videos3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos3Component);
    return Videos3Component;
}());



/***/ }),

/***/ "./src/app/components/videos4/videos4.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos4/videos4.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n   \r\n     border-bottom: 6px solid black;\r\n     margin-bottom: 2em;\r\n     width: 100%;\r\n \r\n     box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n     \r\n   \r\n }\r\n \r\n \r\n \r\n .vid {\r\n     box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n     transition: -webkit-transform .3s;\r\n     transition: transform .3s;\r\n     transition: transform .3s, -webkit-transform .3s;\r\n     margin-bottom: 15px;\r\n }\r\n \r\n \r\n \r\n .vid:hover {\r\n   \r\n     -webkit-transform: scale(1.03);\r\n   \r\n             transform: scale(1.03);\r\n     cursor: pointer;\r\n }\r\n \r\n \r\n \r\n body{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n \r\n \r\n \r\n p{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n \r\n \r\n \r\n p:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n \r\n \r\n \r\n p a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n \r\n \r\n \r\n span{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n \r\n \r\n \r\n @-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n \r\n \r\n \r\n @keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n \r\n \r\n \r\n @-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n \r\n \r\n \r\n @keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n \r\n \r\n \r\n @-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n \r\n \r\n \r\n @keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n \r\n \r\n \r\n ::-moz-selection{\r\n    background: black;\r\n  }\r\n \r\n \r\n \r\n ::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos4/videos4.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos4/videos4.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"barra\">\n<div class=\"entrada\">\n    <p><b>Escuela de Gobierno UCM</b></p>\n</div>\n\n</div>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe src=\"https://www.youtube.com/embed/bubb4BeI354\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/QN7EvCsZoQk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Acto de Graduación Centros de Gestión UCM curso 2015 -2016</em></b> </h3>\n       \n        <h5>\n            Vídeo institucional de los actos de graduación en el Centro Superior de Estudios de Gestión de la Universidad Complutense de Madrid (2015—2016) - junio 2016\n        </h5>\n\n    </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/1qyYe_38kog\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Acto de Graduación Centros de Gestión UCM curso 2016 -2017</em></b> </h3>\n       \n        <h5>\n            Vídeo institucional de los actos de graduación en el Centro Superior de Estudios de Gestión de la Universidad Complutense de Madrid (2016—2017) - junio 2017\n        </h5>\n\n\n    </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n\n        <iframe class=\"embed-responsive-item\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/wHzGzPp1gyI\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n        <h3><b><em>Acto de Graduación Centros de Gestión UCM curso 2017 -2018</em></b> </h3>\n      \n        <h5>\n            Vídeo institucional de los actos de graduación en el Centro Superior de Estudios de Gestión de la Universidad Complutense de Madrid (2017—2018) - junio 2018\n        </h5>\n\n\n\n\n\n    </div>\n\n   \n</div>"

/***/ }),

/***/ "./src/app/components/videos4/videos4.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos4/videos4.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos4Component", function() { return Videos4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos4Component = /** @class */ (function () {
    function Videos4Component() {
    }
    Videos4Component.prototype.ngOnInit = function () {
    };
    Videos4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos4',
            template: __webpack_require__(/*! ./videos4.component.html */ "./src/app/components/videos4/videos4.component.html"),
            styles: [__webpack_require__(/*! ./videos4.component.css */ "./src/app/components/videos4/videos4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos4Component);
    return Videos4Component;
}());



/***/ }),

/***/ "./src/app/components/videos5/videos5.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos5/videos5.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n    \r\n  \r\n}\r\n\r\n.vid {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.vid:hover {\r\n  \r\n    -webkit-transform: scale(1.03);\r\n  \r\n            transform: scale(1.03);\r\n    cursor: pointer;\r\n}\r\n\r\nbody{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\np{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\np:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\np a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\nspan{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n@-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n@keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos5/videos5.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos5/videos5.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entrada\">\n  <p><b>Videoclip</b></p>\n</div>\n\n\n\n<div class=\"row animated fadeIn fast\">\n\n    <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n      <iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/jVQJ32PzmPM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <br>\n    <br>\n    <div class=\"col-md-4 text-justify\">\n\n        <h3><b><em>Cuaderno de bitácora – Ajax y Prok</em></b> </h3>\n        \n        <h5>\n          Videoclip realizado con Awake Studios - mayo 2019\n        </h5>\n\n    </div>\n\n</div>\n<br>"

/***/ }),

/***/ "./src/app/components/videos5/videos5.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos5/videos5.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos5Component", function() { return Videos5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos5Component = /** @class */ (function () {
    function Videos5Component() {
    }
    Videos5Component.prototype.ngOnInit = function () {
    };
    Videos5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos5',
            template: __webpack_require__(/*! ./videos5.component.html */ "./src/app/components/videos5/videos5.component.html"),
            styles: [__webpack_require__(/*! ./videos5.component.css */ "./src/app/components/videos5/videos5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos5Component);
    return Videos5Component;
}());



/***/ }),

/***/ "./src/app/components/videos6/videos6.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/videos6/videos6.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entrada {\r\n    border-bottom: 6px solid black;\r\n    margin-bottom: 2em;\r\n    width: 100%;\r\n\r\n    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.2);\r\n    \r\n}\r\n\r\n.vid {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.vid:hover {\r\n  \r\n    -webkit-transform: scale(1.03);\r\n  \r\n            transform: scale(1.03);\r\n    cursor: pointer;\r\n}\r\n\r\nbody{\r\n    background: #000;\r\n    padding-top: 10px;\r\n  }\r\n\r\np{\r\n    color: black; \r\n  \r\n    font-size: 35px;\r\n    margin: 10px 0 0 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    -webkit-animation: type 8s steps(60, end);\r\n            animation: type 8s steps(60, end); \r\n  }\r\n\r\np:nth-child(3){\r\n    -webkit-animation: type2 7.5s steps(60, end);\r\n            animation: type2 7.5s steps(60, end);\r\n  }\r\n\r\np a{\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n\r\nspan{\r\n    -webkit-animation: blink 1s infinite;\r\n            animation: blink 1s infinite;\r\n  }\r\n\r\n@-webkit-keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@keyframes type{ \r\n    from { width: 0; } \r\n  }\r\n\r\n@-webkit-keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@keyframes type2{\r\n    0%{width: 0;}\r\n    50%{width: 0;}\r\n    100%{ width: 100; } \r\n  }\r\n\r\n@-webkit-keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n@keyframes blink{\r\n    to{opacity: .0;}\r\n  }\r\n\r\n::-moz-selection{\r\n    background: black;\r\n  }\r\n\r\n::selection{\r\n    background: black;\r\n  }"

/***/ }),

/***/ "./src/app/components/videos6/videos6.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/videos6/videos6.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entrada\">\n  <p  ><b>After Effects</b></p> \n</div>\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/AnimaciónLogoGoogle.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n\n      <h3><b><em>Animación Logo Google</em></b> </h3>\n     \n     \n\n  </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/AnimaciónLogoMyRestaurant.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n\n      <h3><b><em>Animación Logo My Restaurant</em></b> </h3>\n     \n     \n\n\n  </div>\n\n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/Asteroides.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Asteroides</em></b> </h3>\n    \n    \n\n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/EfectoGlitch.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Efecto Glitch</em></b> </h3>\n    \n     \n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/LiquidDrop.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Liquid Drop</em></b> </h3>\n    \n   \n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/LogoNuva.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Logo Nuva</em></b> </h3>\n    \n      \n\n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/MáscaraAlphaMate.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Máscara Alpha Mate</em></b> </h3>\n    \n    \n\n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/Morphingdeformas.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Morphing de formas</em></b> </h3>\n    \n      \n\n\n\n\n\n  </div>\n\n \n</div>\n<br>\n\n<div class=\"row animated fadeIn fast\">\n\n  <div class=\"col-md-8 embed-responsive embed-responsive-16by9 vid\">\n\n\n    <video width=\"640\" height=\"360\"   controls >\n        <source src=\"assets/video/after/Reloj.mp4\"  type=\"video/mp4\">\n            </video>\n  </div>\n  <br>\n  <br>\n  <div class=\"col-md-4 text-justify\">\n      <h3><b><em>Reloj</em></b> </h3>\n    \n    \n\n\n\n\n\n  </div>\n\n \n</div>"

/***/ }),

/***/ "./src/app/components/videos6/videos6.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/videos6/videos6.component.ts ***!
  \*********************************************************/
/*! exports provided: Videos6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Videos6Component", function() { return Videos6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Videos6Component = /** @class */ (function () {
    function Videos6Component() {
    }
    Videos6Component.prototype.ngOnInit = function () {
    };
    Videos6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos6',
            template: __webpack_require__(/*! ./videos6.component.html */ "./src/app/components/videos6/videos6.component.html"),
            styles: [__webpack_require__(/*! ./videos6.component.css */ "./src/app/components/videos6/videos6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Videos6Component);
    return Videos6Component;
}());



/***/ }),

/***/ "./src/app/servicios/galeria1.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria1.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria1Service", function() { return Galeria1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria1Service = /** @class */ (function () {
    function Galeria1Service() {
        this.heroes = [
            {
                nombre: 'Mesa de sonido',
                descripcion: 'string',
                img: 'assets/img/BEHIND-THE-SCENES/MesadeSonido-min.jpg',
                fecha: 'string',
                galeria: 'Behind the scenes',
            },
            {
                nombre: 'Perfil Presentadores',
                descripcion: 'string',
                img: 'assets/img/BEHIND-THE-SCENES/PerfilPresentadores-min.jpg',
                fecha: 'string',
                galeria: 'Behind the scenes',
            },
            {
                nombre: 'Plató de televisión',
                descripcion: 'string',
                img: 'assets/img/BEHIND-THE-SCENES/Platódetelevisión-min.jpg',
                fecha: 'string',
                galeria: 'Behind the scenes',
            },
            {
                nombre: 'Presentadores',
                descripcion: 'string',
                img: 'assets/img/BEHIND-THE-SCENES/Presentadores-min.jpg',
                fecha: 'string',
                galeria: 'Behind the scenes',
            },
            {
                nombre: 'Regidora y Foto fija',
                descripcion: 'string',
                img: 'assets/img/BEHIND-THE-SCENES/RegidorayFotofija-min.jpg',
                fecha: 'string',
                galeria: 'Behind the scenes',
            },
        ];
        console.log('Servicio listo para usar!!!');
    }
    Galeria1Service.prototype.getHeroes = function () {
        return this.heroes;
    };
    Galeria1Service.prototype.getHeroe = function (idx) {
        return this.heroes[idx];
    };
    Galeria1Service.prototype.buscarHeroes = function (termino) {
        var heroesArr = [];
        termino = termino.toLowerCase();
        for (var i = 0; i < this.heroes.length; i++) {
            var heroe = this.heroes[i];
            var nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroe.idx = i;
                heroesArr.push(heroe);
            }
        }
        return heroesArr;
    };
    Galeria1Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria1Service);
    return Galeria1Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria10.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/galeria10.service.ts ***!
  \************************************************/
/*! exports provided: Galeria10Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria10Service", function() { return Galeria10Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria10Service = /** @class */ (function () {
    function Galeria10Service() {
        this.fotos10 = [
            {
                nombre: 'Cadenas',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Cadenas-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Costaleros',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Costaleros-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Costaleros con la Virgen',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Costalerosconlavirgen-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Crucifixión',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Crucifixión-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Fagot',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Fagot-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Penitente',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Penitente-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Platillos',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Platillos-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Procesión Jesús El Pobre',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/ProcesionJesusElPobre-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Rosario',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Rosario-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Trompa',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Trompa-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Trompetista',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Trompetista-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Tuba',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Tuba-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
            {
                nombre: 'Virgen',
                descripcion: 'string',
                img: 'assets/img/SEMANA_SANTA_2017/Virgen-min.jpg',
                fecha: 'string',
                galeria: 'Semana Santa 2017',
            },
        ];
    }
    Galeria10Service.prototype.getFotos10 = function () {
        return this.fotos10;
    };
    Galeria10Service.prototype.getFoto10 = function (idx) {
        return this.fotos10[idx];
    };
    Galeria10Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria10Service);
    return Galeria10Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria2.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria2.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria2Service", function() { return Galeria2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria2Service = /** @class */ (function () {
    function Galeria2Service() {
        this.fotos2 = [
            {
                nombre: 'Autobús amarillo',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Autobúsamarillo-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Bridge George IV',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/BridgeGeorgeIV-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Calle con curva',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Calleconcurva-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Callejón',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Callejón-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Castillo de Edimburgo',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/CastillodeEdimburgo-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Edinburgh Antifascists',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/EdinburghAntifascists-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Escultura David Hume',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/EsculturaDavidHume-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Greyfriars',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Greyfriars-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Las rejas de Escocia',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/LasrejasdeEscocia-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Mirador Arthurs seat',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/MiradorArthursseat-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Museo Nacional de Escocia',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/MuseoNacionaldeEscocia-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Nubes y flores amarillas',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Nubesyfloresamarillas-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Paseo por Edimburgo',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/PaseoporEdimburgo-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Puente',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/Puente-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Puerta del Castillo de Edimburgo',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/PuertadelCastillodeEdimburgo-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Scotish Man',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/ScotishMan-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
            {
                nombre: 'Tumba de David Hume',
                descripcion: 'string',
                img: 'assets/img/EDIMBURGO/TumbadeDavidHume-min.jpg',
                fecha: 'string',
                galeria: 'Edimburgo',
            },
        ];
    }
    Galeria2Service.prototype.getFotos2 = function () {
        return this.fotos2;
    };
    Galeria2Service.prototype.getFoto2 = function (idx) {
        return this.fotos2[idx];
    };
    Galeria2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria2Service);
    return Galeria2Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria3.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria3.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria3Service", function() { return Galeria3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria3Service = /** @class */ (function () {
    function Galeria3Service() {
        this.fotos3 = [
            {
                nombre: 'Battlefront',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Battlefront-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Bodegón rústico',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Bodegónrústico-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'D&G',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/D&G-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'El anillo',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Elanillo-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Happy Buddha',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/HappyBuddha-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Joyas',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Joyas-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Nikon',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Nikon-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Pulsera de plata',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Pulseradeplata-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Reloj',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Reloj-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Schweppes',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Schweppes-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Fumar mata',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Fumarmata-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
            {
                nombre: 'Las autoridades sanitarias advierten',
                descripcion: 'string',
                img: 'assets/img/FOTOGRAFÍA-DE-PRODUCTO/Lasautoridadessanitariasadvierten-min.jpg',
                fecha: 'string',
                galeria: 'Fotografía de producto',
            },
        ];
    }
    Galeria3Service.prototype.getFotos3 = function () {
        return this.fotos3;
    };
    Galeria3Service.prototype.getFoto3 = function (idx) {
        return this.fotos3[idx];
    };
    Galeria3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria3Service);
    return Galeria3Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria4.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria4.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria4Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria4Service", function() { return Galeria4Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria4Service = /** @class */ (function () {
    function Galeria4Service() {
        this.fotos4 = [
            {
                nombre: 'El Matadero',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/ElMatadero-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Estación de Príncipe Pío',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/EstacióndePríncipePío-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Galería de Cristal del Palacio de Cibeles',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/GaleríadeCristaldelPalaciodeCibeles-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Invernadero del Palacio de Cristal de Arganzuela',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/InvernaderodelPalaciodeCristaldeArganzuela-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Invernadero del Palacio de Cristal de Arganzuela',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/InvernaderodelPalaciodeCristaldeArganzuela2-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Museo Británico de Londres',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/MuseoBritánicodeLondres-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
            {
                nombre: 'Panteón de Agripa Roma',
                descripcion: 'string',
                img: 'assets/img/INTERIORISMO/PanteóndeAgripaRoma-min.jpg',
                fecha: 'string',
                galeria: 'Interiorismo',
            },
        ];
    }
    Galeria4Service.prototype.getFotos4 = function () {
        return this.fotos4;
    };
    Galeria4Service.prototype.getFoto4 = function (idx) {
        return this.fotos4[idx];
    };
    Galeria4Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria4Service);
    return Galeria4Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria5.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria5.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria5Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria5Service", function() { return Galeria5Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria5Service = /** @class */ (function () {
    function Galeria5Service() {
        this.fotos5 = [
            {
                nombre: 'Basílica San Francisco el Grande',
                descripcion: 'string',
                img: 'assets/img/MADRID/BasílicaSanFranciscoelGrande-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Bolsa de Madrid',
                descripcion: 'string',
                img: 'assets/img/MADRID/BolsadeMadrid-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Burbuja',
                descripcion: 'string',
                img: 'assets/img/MADRID/Burbuja-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Camino Ascendente',
                descripcion: 'string',
                img: 'assets/img/MADRID/CaminoAscendente-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Campo del Moro',
                descripcion: 'string',
                img: 'assets/img/MADRID/CampodelMoro-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Canasta del Mercado de la Cebada',
                descripcion: 'string',
                img: 'assets/img/MADRID/CanastadelMercadodelaCebada-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Centro Cultural Conde Duque',
                descripcion: 'string',
                img: 'assets/img/MADRID/CentroCulturalCondeDuque-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Contrapicado Catedral de la Almudena',
                descripcion: 'string',
                img: 'assets/img/MADRID/ContrapicadoCatedraldelaAlmudena-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Estación de Príncipe Pío',
                descripcion: 'string',
                img: 'assets/img/MADRID/EstacióndePríncipePío-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Flores',
                descripcion: 'string',
                img: 'assets/img/MADRID/Flores-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Frontal Catedral de la Almudena',
                descripcion: 'string',
                img: 'assets/img/MADRID/FrontalCatedraldelaAlmudena-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Jardín Botánico',
                descripcion: 'string',
                img: 'assets/img/MADRID/JardínBotánico-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'La Almudena',
                descripcion: 'string',
                img: 'assets/img/MADRID/LaAlmudena-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'La Linde',
                descripcion: 'string',
                img: 'assets/img/MADRID/LaLinde-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Ministerio de Agricultura',
                descripcion: 'string',
                img: 'assets/img/MADRID/MinisteriodeAgricultura-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Museo del Prado',
                descripcion: 'string',
                img: 'assets/img/MADRID/MuseodelPrado-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Músicos',
                descripcion: 'string',
                img: 'assets/img/MADRID/Músicos-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Naturaleza en Campo del Moro',
                descripcion: 'string',
                img: 'assets/img/MADRID/NaturalezaenCampodelMoro-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Palacio Real',
                descripcion: 'string',
                img: 'assets/img/MADRID/PalacioReal-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Palacio Real con marco',
                descripcion: 'string',
                img: 'assets/img/MADRID/PalacioRealconmarco-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Pinturas Urbanas',
                descripcion: 'string',
                img: 'assets/img/MADRID/Pinturasurbanas-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Puerta de Alcalá',
                descripcion: 'string',
                img: 'assets/img/MADRID/PuertadeAlcalá-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Real Casa de Correos',
                descripcion: 'string',
                img: 'assets/img/MADRID/RealCasadeCorreos-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Sierra de Madrid',
                descripcion: 'string',
                img: 'assets/img/MADRID/SierradeMadrid-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Templo de Debod',
                descripcion: 'string',
                img: 'assets/img/MADRID/TemplodeDebod-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'WithoutFace',
                descripcion: 'string',
                img: 'assets/img/MADRID/WithoutFace-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Pantalones de colores',
                descripcion: 'string',
                img: 'assets/img/MADRID/Pantalonesdecolores-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Pastelería',
                descripcion: 'string',
                img: 'assets/img/MADRID/Pasteleria-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Skate Park',
                descripcion: 'string',
                img: 'assets/img/MADRID/SkatePark-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Campo de la Cebada',
                descripcion: 'string',
                img: 'assets/img/MADRID/Campodecebada-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Gato callejero',
                descripcion: 'string',
                img: 'assets/img/MADRID/Gatocallejero-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
            {
                nombre: 'Gato callejero',
                descripcion: 'string',
                img: 'assets/img/MADRID/Gatocallejero2-min.jpg',
                fecha: 'string',
                galeria: 'Madrid',
            },
        ];
    }
    Galeria5Service.prototype.getFotos5 = function () {
        return this.fotos5;
    };
    Galeria5Service.prototype.getFoto5 = function (idx) {
        return this.fotos5[idx];
    };
    Galeria5Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria5Service);
    return Galeria5Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria6.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria6.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria6Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria6Service", function() { return Galeria6Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria6Service = /** @class */ (function () {
    function Galeria6Service() {
        this.fotos6 = [
            {
                nombre: '40mm',
                descripcion: 'string',
                img: 'assets/img/RETRATO/40mm-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Adrián',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Adrián-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Álex',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Álex-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Ana',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Ana-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Celia',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Celiaa-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Celia',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Celia-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Celia Pink',
                descripcion: 'string',
                img: 'assets/img/RETRATO/CeliaPink-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Estela',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Estela-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Israel',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Israel-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Luna',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Luna-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Luna',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Luna2-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'María',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Maria-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Militar',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Militar-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Monja',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Monja-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Psicodelia',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Psicodelia-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Ramo de flores',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Ramodeflores-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Werlisa',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Werlisa-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Werlisa',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Werlisa2-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Saúl',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Saul-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Juan Carlos Rivas Fraile, crítico del programa "Dias de Cine"',
                descripcion: 'string',
                img: 'assets/img/RETRATO/JuanCarlosRivasFraile,criticodelprogramaDiasdecine-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Irene',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Irene-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
            {
                nombre: 'Israel',
                descripcion: 'string',
                img: 'assets/img/RETRATO/Israel2-min.jpg',
                fecha: 'string',
                galeria: 'Retrato',
            },
        ];
    }
    Galeria6Service.prototype.getFotos6 = function () {
        return this.fotos6;
    };
    Galeria6Service.prototype.getFoto6 = function (idx) {
        return this.fotos6[idx];
    };
    Galeria6Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria6Service);
    return Galeria6Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria7.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria7.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria7Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria7Service", function() { return Galeria7Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria7Service = /** @class */ (function () {
    function Galeria7Service() {
        this.fotos7 = [
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid1-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid2-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid3-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid4-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid5-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid6-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid7-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid8-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid9-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid10-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid11-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid12-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid13-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid14-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
            {
                nombre: 'Cabalgata de Reyes de Madrid',
                descripcion: 'string',
                img: 'assets/img/CABALGATA/CabalgatadeReyesdeMadrid15-min.jpg',
                fecha: 'string',
                galeria: 'Cabalgata',
            },
        ];
    }
    Galeria7Service.prototype.getFotos7 = function () {
        return this.fotos7;
    };
    Galeria7Service.prototype.getFoto7 = function (idx) {
        return this.fotos7[idx];
    };
    Galeria7Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria7Service);
    return Galeria7Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria8.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria8.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria8Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria8Service", function() { return Galeria8Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria8Service = /** @class */ (function () {
    function Galeria8Service() {
        this.fotos8 = [
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero1-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero2-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero3-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero4-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero5-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero6-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero7-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
            {
                nombre: 'Daniel Paunero',
                descripcion: 'string',
                img: 'assets/img/EN_ESTUDIO/DanielPaunero8-min.jpg',
                fecha: 'string',
                galeria: 'En estudio',
            },
        ];
    }
    Galeria8Service.prototype.getFotos8 = function () {
        return this.fotos8;
    };
    Galeria8Service.prototype.getFoto8 = function (idx) {
        return this.fotos8[idx];
    };
    Galeria8Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria8Service);
    return Galeria8Service;
}());



/***/ }),

/***/ "./src/app/servicios/galeria9.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/galeria9.service.ts ***!
  \***********************************************/
/*! exports provided: Galeria9Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galeria9Service", function() { return Galeria9Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Galeria9Service = /** @class */ (function () {
    function Galeria9Service() {
        this.fotos9 = [
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez1-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez2-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez3-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez4-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez5-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez6-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez7-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez8-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez9-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez10-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez11-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
            {
                nombre: 'Gema González',
                descripcion: 'string',
                img: 'assets/img/EN_EXTERIOR/GemaGonzalez12-min.jpg',
                fecha: 'string',
                galeria: 'En exterior',
            },
        ];
    }
    Galeria9Service.prototype.getFotos9 = function () {
        return this.fotos9;
    };
    Galeria9Service.prototype.getFoto9 = function (idx) {
        return this.fotos9[idx];
    };
    Galeria9Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Galeria9Service);
    return Galeria9Service;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\Front End\Jessi_V_11_05_2019\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map