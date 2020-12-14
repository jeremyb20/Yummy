(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "//7u":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-user/profile-user.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function() { return ProfileUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileUserComponent.ɵfac = function ProfileUserComponent_Factory(t) { return new (t || ProfileUserComponent)(); };
ProfileUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileUserComponent, selectors: [["app-profile-user"]], decls: 2, vars: 0, template: function ProfileUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvZmlsZS9wcm9maWxlLXVzZXIvcHJvZmlsZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-user',
                templateUrl: './profile-user.component.html',
                styleUrls: ['./profile-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jbarquero/Desktop/Jeremy-test/Yummy-Eats/Yummy/src/main.ts */"zUnb");


/***/ }),

/***/ "1Sm8":
/*!*************************************************************************!*\
  !*** ./src/app/register/register-company/register-company.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompanyComponent", function() { return RegisterCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/must-match.validator */ "22eE");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");











function RegisterCompanyComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre de la empresa es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_13_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.companyName.errors.required);
} }
function RegisterCompanyComponent_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
} }
function RegisterCompanyComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tipo de negocio es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_19_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.bussinesSelected.errors.required);
} }
function RegisterCompanyComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Telefono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Telefono debe ser al menos 8 digitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solo se permiten numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_25_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterCompanyComponent_div_25_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterCompanyComponent_div_25_div_3_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.pattern);
} }
function RegisterCompanyComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email debe tener un correo valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_30_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterCompanyComponent_div_30_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email);
} }
function RegisterCompanyComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a debe ser al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_36_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterCompanyComponent_div_36_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.minlength);
} }
function RegisterCompanyComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a no son iguales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterCompanyComponent_div_41_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterCompanyComponent_div_41_div_2_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.confirmPassword.errors.mustMatch);
} }
const _c0 = function () { return { height: 45, width: 40, radius: 5 }; };
const _c1 = function (a0, a1) { return { url: a0, scaledSize: a1 }; };
function RegisterCompanyComponent_agm_marker_49_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Es tu ubicaci\u00F3n actual?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Si no es la Ubicacion puedes cambiarla haciendo click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterCompanyComponent_agm_marker_49_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const m_r24 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.changePosition(m_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cambiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterCompanyComponent_agm_marker_49_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.savePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r24 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r24.lat)("longitude", m_r24.lng)("label", m_r24.label)("agmFitBounds", true)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, m_r24.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r8.showInfo);
} }
function RegisterCompanyComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acceptar Ts & Cs Es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterCompanyComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.ShowMsg);
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
const _c3 = function () { return ["/login-company"]; };
class RegisterCompanyComponent {
    constructor(formBuilder, mapsAPILoader, ngZone, companyService, router) {
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.companyService = companyService;
        this.router = router;
        this.proper = false;
        this.submitted = false;
        this.zoom = 4;
        this.lat = 9.93040049002793;
        this.lng = -84.09062837772197;
        this.markers = [];
        this.showInfo = true;
        this.hideMsg = false;
        this.timeSeconds = 6000;
        this.bussinesType = [
            { Id: 1, name: 'Restaurante' },
            { Id: 2, name: 'Tienda de conveniencia' },
            { Id: 3, name: 'Tienda de comestibles' },
            { Id: 4, name: 'Tienda de licor' }
        ];
        this.setCurrentPosition();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bussinesSelected: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        }, {
            validator: Object(_common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"])('password', 'confirmPassword')
        });
    }
    mapClicked($event) {
        var event;
        event = $event;
        this.showInfo = true;
        if (this.markers.length < 1) {
            this.markers.push({
                lat: event.coords.lat,
                lng: event.coords.lng,
                draggable: false,
                photo: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg'
            });
        }
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.zoom = 17;
                this.markers.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    draggable: false,
                    photo: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg'
                });
                this.showInfo = true;
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    changePosition(mPosition) {
        if (this.markers.length > 0) {
            this.markers.shift();
        }
        this.showInfo = false;
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    savePosition() {
        this.showInfo = false;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var newCompany = {
            companyName: this.f.companyName.value,
            phone: this.f.phone.value,
            email: this.f.email.value,
            password: this.f.password.value,
            acceptTerms: this.f.acceptTerms.value,
            lat: this.markers[0].lat,
            lng: this.markers[0].lng,
            bussinesSelected: this.f.bussinesSelected.value,
            userState: 3
        };
        this.companyService.registerCompany(newCompany, this.file).subscribe(data => {
            if (data.success) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Registro de la empresa ' + newCompany.companyName + '',
                    html: "Su registro ha sido authenticado correctamente. Haz click en ok para iniciar sesion",
                    showCancelButton: false,
                    allowEscapeKey: false,
                    confirmButtonText: 'OK',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    reverseButtons: true,
                    position: 'top',
                    padding: 0,
                    customClass: { confirmButton: 'col-auto btn btn-info m-3' }
                })
                    .then((result) => {
                    if (result.value) {
                        this.router.navigate(['/login-company']);
                    }
                });
            }
            else {
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        }, error => {
            this.hideMsg = true;
            this.ShowMsg = "Ocurrio un error favor contactar a soporte o al administrador del sitio";
            setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    processFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
}
RegisterCompanyComponent.ɵfac = function RegisterCompanyComponent_Factory(t) { return new (t || RegisterCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegisterCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterCompanyComponent, selectors: [["app-register-company"]], inputs: { phone: "phone" }, decls: 72, vars: 45, consts: [[1, "registerCompany"], [1, "card"], [1, "card-body", "border-0", "rounded-0", "mb-5"], [1, "mb-2"], [1, "mb-3"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-6"], [1, "font-weight-bold"], ["type", "text", "formControlName", "companyName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "bussinesSelected", "id", "inputGroupSelect01", 1, "rounded-0", 3, "searchable", "clearable", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "phone", "pattern", "\\d*", "placeholder", "(+506)", "maxlength", "8", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "form-group", "col"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "text-center", "col"], [1, "map", 2, "width", "100%", "height", "35vh"], ["map", ""], [3, "latitude", "longitude", "zoom", "scrollwheel", "zoomControl", "disableDefaultUI", "mapClick"], ["style", "border-radius: 50%;", 3, "latitude", "longitude", "label", "agmFitBounds", "iconUrl", 4, "ngFor", "ngForOf"], [1, "container"], [1, "text-center", "well"], [1, "pt-2", "pr-0", "pl-0"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "form-group", "text-center"], ["type", "file", "name", "image", "accept", "image/*", 1, "d-none", 3, "change"], ["photoinput", ""], ["alt", "", "srcset", "", 1, "img-fluid", 2, "width", "100px", "height", "100px", 3, "src", "click"], [1, "form-group", "form-check"], ["type", "checkbox", "formControlName", "acceptTerms", "id", "acceptTerms", 1, "form-check-input", 3, "ngClass"], ["for", "acceptTerms", 1, "font-weight-bold", "form-check-label"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-block", "btn-yellow", "btn-sm"], [1, "btn", "btn-block", "btn-inverse", "btn-sm", 3, "routerLink"], ["class", "row no-gutters alert alert-warning error-message text-center mt-2", "role", "alert", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [2, "border-radius", "50%", 3, "latitude", "longitude", "label", "agmFitBounds", "iconUrl"], [3, "isOpen"], ["infowindow", ""], [1, "btn", "btn-info", "btn-sm", "mr-1", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center", "mt-2"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"]], template: function RegisterCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Complete los espacios siguientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterCompanyComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre de la empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterCompanyComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo de negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterCompanyComponent_ng_option_18_Template, 2, 2, "ng-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterCompanyComponent_div_19_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterCompanyComponent_div_25_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterCompanyComponent_div_30_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterCompanyComponent_div_36_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Confirmar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterCompanyComponent_div_41_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mostrar ubicacion exacta de la empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "agm-map", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function RegisterCompanyComponent_Template_agm_map_mapClick_48_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RegisterCompanyComponent_agm_marker_49_Template, 11, 10, "agm-marker", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterCompanyComponent_Template_button_click_53_listener() { return ctx.setCurrentPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mi Ubicaci\u00F3n Actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Foto:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterCompanyComponent_Template_input_change_58_listener($event) { return ctx.processFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterCompanyComponent_Template_img_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); return _r9.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Accepto Terminos & Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RegisterCompanyComponent_div_65_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, RegisterCompanyComponent_div_71_Template, 4, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, ctx.submitted && ctx.f.companyName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.companyName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchable", false)("clearable", false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, ctx.submitted && ctx.f.bussinesSelected.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bussinesType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.bussinesSelected.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c2, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c2, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", _r7.offsetHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("scrollwheel", true)("zoomControl", true)("disableDefaultUI", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoSelected || "../../../assets/upload.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c2, ctx.submitted && ctx.f.acceptTerms.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.acceptTerms.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmFitBounds"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap\");\n.registerCompany[_ngcontent-%COMP%] {\n  background-color: #81D4FA;\n}\n.registerCompany[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 30rem;\n  margin: 0 auto;\n}\n.registerCompany[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: #F9A825;\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.registerCompany[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  border: 2px solid #F57F17;\n}\n.registerCompany[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: transparent;\n  color: #F9A825;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.registerCompany[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  color: #fff;\n  border: 2px solid #F57F17;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci1jb21wYW55L3JlZ2lzdGVyLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkZBQUE7QUFFUjtFQUVJLHlCQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUhSIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci1jb21wYW55L3JlZ2lzdGVyLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6NDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4ucmVnaXN0ZXJDb21wYW55IHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAuYnRuLXllbGxvdyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGOUE4MjU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gICAgXG4gICAgLmJ0bi15ZWxsb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU3RjE3O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjU3RjE3O1xuICAgIH1cbiAgICBcbiAgICAuYnRuLWludmVyc2Uge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjlBODI1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICNGOUE4MjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgICBcbiAgICAuYnRuLWludmVyc2U6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU3RjE3O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0Y1N0YxNztcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-company',
                templateUrl: './register-company.component.html',
                styleUrls: ['./register-company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { phone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "22eE":
/*!********************************************************!*\
  !*** ./src/app/common/helpers/must-match.validator.ts ***!
  \********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "4a+M":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants/constants */ "YJXT");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/notification.service */ "gdHf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NotificationComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { notification: a0 }; };
function NotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.className(notification_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, notification_r3));
} }
function NotificationComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const notification_r5 = ctx.notification; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(notification_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = ctx.notification;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r5.message);
} }
class NotificationComponent {
    constructor(_notificationSvc) {
        this._notificationSvc = _notificationSvc;
        this.notifications = [];
    }
    _addNotification(notification) {
        this.notifications.push(notification);
        if (notification.timeout !== 0) {
            setTimeout(() => this.close(notification), notification.timeout);
        }
    }
    ngOnInit() {
        this._subscription = this._notificationSvc.getObservable().subscribe(notification => this._addNotification(notification));
    }
    ngOnDestroy() {
        if (this._subscription != undefined)
            this._subscription.unsubscribe();
    }
    close(notification) {
        this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
    }
    className(notification) {
        let style;
        switch (notification.type) {
            case _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].success:
                style = 'success';
                break;
            case _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].warning:
                style = 'warning';
                break;
            case _common_constants_constants__WEBPACK_IMPORTED_MODULE_1__["NotificationType"].error:
                style = 'error';
                break;
            default:
                style = 'info';
                break;
        }
        return style;
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 4, vars: 1, consts: [[1, "notifications"], ["class", "notification", 3, "ngClass", 4, "ngFor", "ngForOf"], ["notificationTpl", ""], [1, "notification", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "row", "no-gutters", "space-between", "center"], [1, "col-9", "col-md-9", "col-lg-9", "text-center"], [1, "col-3", "col-md-3", "col-lg-3"], ["type", "button", "aria-label", "Close", 1, "close", "ml-5", 3, "click"], ["aria-hidden", "true"], [1, "message"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationComponent_ng_template_2_Template, 9, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: [".notifications[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  min-width: 200px;\n  max-width: 200px;\n}\n.notifications[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin: 5px;\n  border-radius: 5px;\n  color: #fff;\n  overflow: hidden;\n}\n.notifications[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  padding-left: 10px;\n  font-weight: bold;\n}\n.notifications[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.notifications[_ngcontent-%COMP%]   .notification.info[_ngcontent-%COMP%] {\n  background-color: rgba(189, 189, 189, 0.9);\n}\n.notifications[_ngcontent-%COMP%]   .notification.success[_ngcontent-%COMP%] {\n  background-color: rgba(27, 158, 119, 0.9);\n}\n.notifications[_ngcontent-%COMP%]   .notification.warning[_ngcontent-%COMP%] {\n  background-color: rgba(217, 95, 2, 0.9);\n}\n.notifications[_ngcontent-%COMP%]   .notification.error[_ngcontent-%COMP%] {\n  background-color: rgba(246, 71, 71, 0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ047QUFDTTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRU07RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFHTTtFQUNFLDBDQUFBO0FBRFI7QUFJTTtFQUNFLHlDQUFBO0FBRlI7QUFLTTtFQUNFLHVDQUFBO0FBSFI7QUFNTTtFQUNFLHdDQUFBO0FBSlIiLCJmaWxlIjoiYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9ucyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgXG4gICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgICAudGl0bGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gIFxuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgICYuaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODksIDE4OSwgMC45KTtcbiAgICAgIH1cbiAgXG4gICAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAxNTgsIDExOSwgMC45KTtcbiAgICAgIH1cbiAgXG4gICAgICAmLndhcm5pbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgOTUsIDIsIDAuOSk7XG4gICAgICB9XG4gIFxuICAgICAgJi5lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCA3MSwgNzEsIDAuOSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss']
            }]
    }], function () { return [{ type: _common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/auth.service */ "AhZb");
/* harmony import */ var _common_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/company.service */ "hod3");
/* harmony import */ var _common_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/media.service */ "fkS0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "p-0 ml-3": a0 }; };
const _c1 = function (a0) { return { "justify-content-md-end": a0 }; };
function ToolbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_div_0_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r0.Media.IsMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, !ctx_r0.Media.IsMobile));
} }
class ToolbarComponent {
    constructor(authService, companyService, media, route) {
        this.authService = authService;
        this.companyService = companyService;
        this.media = media;
        this.route = route;
        this.mediaSubscription = this.media.subscribeMedia().subscribe(result => {
            this.Media = result;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
        this.route.navigate(['/home']);
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 1, vars: 1, consts: [["class", " toolbar", 4, "ngIf"], [1, "toolbar"], [1, "navbar", "navbar-expand", "navbar-dark", 3, "ngClass"], ["id", "menu-toggle", 1, "navbar-brand"], [1, "navbar-toggler-icon"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExample02", "aria-controls", "navbarsExample02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "button", "mail"], [1, "fas", "fa-bell"], [1, "badge"], [1, "nav-item", 3, "ngClass"], [1, "button-logout", "d-none", "d-lg-block", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToolbarComponent_div_0_Template, 24, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn() || ctx.companyService.loggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 64px;\n  padding: 0;\n  background-color: var(--bgcolor-toolbar-main);\n  background-image: var(--bgimage-toolbar-main);\n  width: unset;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3333);\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%]   .button-home-desktop[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 64px;\n  line-height: 64px;\n  font-size: 2.3em;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);\n  background-color: transparent;\n  border-bottom-right-radius: 0;\n  transition: color, background 0.25s ease-in-out;\n  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.1) inset;\n  cursor: pointer;\n}\n.toolbar[_ngcontent-%COMP%]   .button-home-desktop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #f7f7f7;\n}\n.toolbar[_ngcontent-%COMP%]   .button-home-desktop[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.0625);\n}\n.toolbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-left: auto;\n  align-items: center;\n}\n.toolbar[_ngcontent-%COMP%]   .button-toolbar[_ngcontent-%COMP%] {\n  min-height: 38px;\n  margin-right: 6px;\n  margin-left: 6px;\n  padding-right: 4px;\n  padding-left: 4px;\n  color: #cc5c00;\n  fill: currentColor;\n  font-weight: 600;\n  font-size: 13px;\n  background-color: #f2f2f2;\n}\n.toolbar[_ngcontent-%COMP%]   .button-toolbar-home[_ngcontent-%COMP%] {\n  min-width: 67px;\n  width: 67px;\n}\n.toolbar[_ngcontent-%COMP%]   .button-toolbar-account[_ngcontent-%COMP%] {\n  min-width: 85px;\n  width: 85px;\n}\n.toolbar[_ngcontent-%COMP%]   .button-toolbar-menu[_ngcontent-%COMP%] {\n  min-width: 30px;\n  width: 45px;\n  margin-left: 4px;\n}\n.toolbar[_ngcontent-%COMP%]   .button-toolbar-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  vertical-align: middle;\n}\n@media (min-width: 768px) {\n  .toolbar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-width: 0 1px 0 0;\n    font-size: 2.3em;\n    border-style: none solid none none;\n    border-color: transparent rgba(0, 0, 0, 0.25) transparent transparent;\n    transition: background 0.25s ease-in-out;\n    box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.1) inset;\n    cursor: pointer;\n    width: 65px;\n    height: 64px;\n    line-height: 64px;\n    text-align: center;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    color: #f7f7f7;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 0px;\n    line-height: 17.5px;\n    height: 18px;\n    padding: 0 5px;\n    font-family: Arial, sans-serif;\n    color: white;\n    background-color: #ff1f1f;\n    text-shadow: 0 1px rgba(0, 0, 0, 0.25);\n    border: 1px solid;\n    border-radius: 10px;\n    box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08);\n    font-size: 13px;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]:hover {\n    background-color: rgba(255, 255, 255, 0.0625);\n  }\n}\n.toolbar[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-width: 0 1px 0 0;\n  font-size: 2.3em;\n  border-style: none;\n  border-color: none;\n  transition: background 0.25s ease-in-out;\n  box-shadow: none;\n  width: 35px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%] {\n  position: relative;\n}\n.toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #f7f7f7;\n}\n.toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  line-height: 17.5px;\n  height: 18px;\n  padding: 0 5px;\n  font-family: Arial, sans-serif;\n  color: white;\n  background-color: #ff1f1f;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.25);\n  border: 1px solid;\n  border-radius: 10px;\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08);\n  font-size: 13px;\n}\n.toolbar[_ngcontent-%COMP%]   .button.mail[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.0625);\n}\n.toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%] {\n  height: 64px;\n  margin-right: 0;\n  margin-left: 0;\n  color: rgba(255, 255, 255, 0.875);\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);\n  min-width: 110px;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 500;\n  background-color: transparent;\n  border-width: 0 1px 0 0;\n  border-style: none solid none none;\n  border-color: transparent rgba(0, 0, 0, 0.25) transparent transparent;\n  transition: background 0.25s ease-in-out;\n  box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.1) inset;\n}\n.toolbar[_ngcontent-%COMP%]   .button-data.account[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.25);\n}\n.toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.0625);\n}\n@media (max-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    min-width: unset;\n    border: 0px;\n    margin-right: 6px;\n    margin-left: 6px;\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.9);\n    fill: currentColor;\n    border-radius: 2px;\n    font-weight: 600;\n    font-size: 13px;\n    height: unset;\n    text-shadow: none;\n    height: 38px;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]:focus {\n    color: rgba(0, 0, 0, 0.875);\n    background-color: #fafafa;\n  }\n  .toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]:first-of-type {\n    border-left: none;\n  }\n}\n.toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]   .label-data[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.67);\n  fill: currentColor;\n  font-weight: 500;\n  font-size: 12px;\n  mix-blend-mode: luminosity;\n}\n@media (max-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]   .label-data[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 12px;\n    font-weight: 600;\n  }\n}\n.toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]   .Balance[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   .button-data[_ngcontent-%COMP%]   .msgError[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.toolbar[_ngcontent-%COMP%]   .button-logout[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 64px;\n  line-height: 64px;\n  font-size: 2.3em;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);\n  background-color: transparent;\n  border-bottom-right-radius: 0;\n  transition: color, background 0.25s ease-in-out;\n  cursor: pointer;\n}\n.toolbar[_ngcontent-%COMP%]   .button-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #f7f7f7;\n}\n.toolbar[_ngcontent-%COMP%]   .button-logout[_ngcontent-%COMP%]:hover {\n  background-color: #d94444;\n  background-image: linear-gradient(to bottom, #d94444 0%, #c33 100%);\n  border-bottom-right-radius: 4px;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 10px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toolbar[_ngcontent-%COMP%]   .Balance[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   .Balance.red[_ngcontent-%COMP%] {\n  color: var(--color-negative);\n}\n@media (min-width: 992px) {\n  .toolbar[_ngcontent-%COMP%]   .Balance.red[_ngcontent-%COMP%] {\n    color: var(--color-negative-light);\n  }\n}\n.toolbar[_ngcontent-%COMP%]   .Balance.green[_ngcontent-%COMP%] {\n  color: var(--color-positive);\n}\n@media (min-width: 992px) {\n  .toolbar[_ngcontent-%COMP%]   .Balance.green[_ngcontent-%COMP%] {\n    color: var(--color-positive-light);\n  }\n}\n.toolbar[_ngcontent-%COMP%]   .msgError[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNILGdCQUFBO0VBQ0EsVUFBQTtFQUNHLDZDQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRVEsK0NBQUE7RUFDUixzREFBQTtFQUNBLGVBQUE7QUFBUjtBQUNRO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBQ1o7QUFDUTtFQUNJLDZDQUFBO0FBQ1o7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUFaO0FDSkk7RURTSTtJQUNJLDZCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtDQUFBO0lBQ0EscUVBQUE7SUFFUSx3Q0FBQTtJQUNSLHNEQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUZWO0VBR1U7SUFDSSxrQkFBQTtFQURkO0VBRWM7SUFDSSxzQkFBQTtJQUNBLGNBQUE7RUFBbEI7RUFFYztJQUNJLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0Esc0NBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBRUEsK0VBQUE7SUFDQSxlQUFBO0VBQWxCO0VBRWM7SUFDSSw2Q0FBQTtFQUFsQjtBQUNGO0FBS0k7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRVEsd0NBQUE7RUFDUixnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBSVE7RUFDSSxrQkFBQTtBQUZaO0FBR1k7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUFEaEI7QUFHWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsK0VBQUE7RUFDQSxlQUFBO0FBRGhCO0FBR1k7RUFDSSw2Q0FBQTtBQURoQjtBQU1JO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFFQUFBO0VBRVEsd0NBQUE7RUFDUixzREFBQTtBQUpSO0FBS1E7RUFDSSwwQ0FBQTtBQUhaO0FBS1E7RUFDSSw2Q0FBQTtBQUhaO0FDdEdJO0VEb0ZBO0lBd0JRLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQUZWO0VBSVU7SUFDSSwyQkFBQTtJQUNBLHlCQUFBO0VBRmQ7RUFJVTtJQUNJLGlCQUFBO0VBRmQ7QUFDRjtBQUlRO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBRlo7QUN0SUk7RURtSUk7SUFPUSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQUFkO0FBQ0Y7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFFUTtFQUNJLDBCQUFBO0FBQVo7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRVEsK0NBQUE7RUFDUixlQUFBO0FBRFI7QUFFUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQUFaO0FBRVE7RUFDSSx5QkFBQTtFQUVBLG1FQUFBO0VBQ0EsK0JBQUE7QUFBWjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFEUjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUVRO0VBQ0ksNEJBQUE7QUFBWjtBQ3BNSTtFRG1NSTtJQUdRLGtDQUFBO0VBRWQ7QUFDRjtBQUFRO0VBQ0ksNEJBQUE7QUFFWjtBQzVNSTtFRHlNSTtJQUdRLGtDQUFBO0VBSWQ7QUFDRjtBQURJO0VBQ0ksMEJBQUE7QUFHUiIsImZpbGUiOiJhcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvcGFydGlhbHMvYm9vdHN0cmFwLWJyZWFrcG9pbnRzXCI7XG5cbi50b29sYmFyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG5cdG1pbi1oZWlnaHQ6IDY0cHg7XG5cdHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjb2xvci10b29sYmFyLW1haW4pO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJnaW1hZ2UtdG9vbGJhci1tYWluKTtcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgLjMzMzMpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogIDRweDtcbiAgICAuYnV0dG9uLWhvbWUtZGVza3RvcCB7XG4gICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSBpbnNldDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA2MjUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uYXZiYXItbmF2IHsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH0gXG4gICAgLmJ1dHRvbi10b29sYmFyIHtcbiAgICAgICAgbWluLWhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIGNvbG9yOiAjY2M1YzAwO1xuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICB9XG4gICAgLmJ1dHRvbi10b29sYmFyLWhvbWUge1xuICAgICAgICBtaW4td2lkdGg6IDY3cHg7XG4gICAgICAgIHdpZHRoOiA2N3B4O1xuICAgIH1cbiAgICAuYnV0dG9uLXRvb2xiYXItYWNjb3VudCB7XG4gICAgICAgIG1pbi13aWR0aDogODVweDtcbiAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgfVxuICAgIC5idXR0b24tdG9vbGJhci1tZW51IHtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lIHNvbGlkIG5vbmUgbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAuMjUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpIGluc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgICAgIFxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICYubWFpbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTcuNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWYxZjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA2MjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4zZW07XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZSA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgICAgICAgICAgICBcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgJi5tYWlsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTcuNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFmMWY7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNjI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tZGF0YSB7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogIDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44NzUpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgICAgICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSBzb2xpZCBub25lIG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAuMjUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpIGluc2V0O1xuICAgICAgICAmLmFjY291bnQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNjI1KTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAgNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC45KTtcbiAgICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NzUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1kYXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudGl6ZSgjZmZmLCAwLjMzKTtcbiAgICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuQmFsYW5jZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5tc2dFcnJvciB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uLWxvZ291dCB7XG4gICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NDQ0NDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sZnJvbSgjZDk0NDQ0KSx0bygjYzMzKSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNkOTQ0NDQgMCUsI2MzMyAxMDAlKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgICAuQmFsYW5jZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICYucmVkIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1uZWdhdGl2ZSk7XG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW5lZ2F0aXZlLWxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmdyZWVuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wb3NpdGl2ZSk7XG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXBvc2l0aXZlLWxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubXNnRXJyb3Ige1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return [{ type: _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"] }, { type: _common_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }, { type: _common_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "70H3":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8kWL":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-company/dashboard-company.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCompanyComponent", function() { return DashboardCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var _common_services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/media.service */ "fkS0");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/notification.service */ "gdHf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["search"];
function DashboardCompanyComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu pedido se est\u00E1 Ordenando ahora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu pedido est\u00E1 pendiente ahora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu pedido se est\u00E1 preparando ahora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu pedido se est\u00E1 entregando ahora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tu pedido est\u00E1 recibido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_div_124_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const itemMenu_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showPanelMenu(itemMenu_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemMenu_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", itemMenu_r12.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemMenu_r12.foodName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemMenu_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, itemMenu_r12.cost, "\u20A1"));
} }
function DashboardCompanyComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A\u00F1ada tus menus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Costo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_div_127_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteMenuSelected(ctx_r15.showPanelMenuItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_div_127_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.editMenuSelected(ctx_r17.showPanelMenuItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.showPanelMenuItem.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre: ", ctx_r7.showPanelMenuItem.foodName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descripcion: ", ctx_r7.showPanelMenuItem.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, ctx_r7.showPanelMenuItem.cost, "\u20A1"));
} }
function DashboardCompanyComponent_h5_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nuevo Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_h5_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre de la comida es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_208_div_5_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.f.foodName.errors.required);
} }
function DashboardCompanyComponent_form_208_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre de la comida es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_208_div_10_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.f.description.errors.required);
} }
function DashboardCompanyComponent_form_208_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo debe ser al menos \u20A1100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solo se permiten numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_208_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_208_div_15_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardCompanyComponent_form_208_div_15_div_2_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardCompanyComponent_form_208_div_15_div_3_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.f.cost.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.f.cost.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.f.cost.errors.pattern);
} }
function DashboardCompanyComponent_form_208_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
function DashboardCompanyComponent_form_208__svg_svg_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function DashboardCompanyComponent_form_208_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DashboardCompanyComponent_form_208_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.newMenuSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardCompanyComponent_form_208_div_5_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardCompanyComponent_form_208_div_10_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardCompanyComponent_form_208_div_15_Template, 4, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Foto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 95, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardCompanyComponent_form_208_Template_input_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.processFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_form_208_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r21.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DashboardCompanyComponent_form_208_i_26_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DashboardCompanyComponent_form_208__svg_svg_27_Template, 7, 0, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.newMenuForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r10.submitted && ctx_r10.f.foodName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.submitted && ctx_r10.f.foodName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r10.submitted && ctx_r10.f.description.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.submitted && ctx_r10.f.description.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx_r10.submitted && ctx_r10.f.cost.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.submitted && ctx_r10.f.cost.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.photoSelected || "../../../assets/upload.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.loading);
} }
function DashboardCompanyComponent_form_209_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre de la comida es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_209_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_209_div_5_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.f.foodName.errors.required);
} }
function DashboardCompanyComponent_form_209_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre de la comida es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_209_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_209_div_10_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.f.description.errors.required);
} }
function DashboardCompanyComponent_form_209_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_209_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo debe ser al menos \u20A1100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_209_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solo se permiten numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardCompanyComponent_form_209_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardCompanyComponent_form_209_div_15_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardCompanyComponent_form_209_div_15_div_2_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardCompanyComponent_form_209_div_15_div_3_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.f.cost.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.f.cost.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.f.cost.errors.pattern);
} }
function DashboardCompanyComponent_form_209_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DashboardCompanyComponent_form_209_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.updateMenuItemSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardCompanyComponent_form_209_div_5_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardCompanyComponent_form_209_div_10_Template, 2, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardCompanyComponent_form_209_div_15_Template, 4, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Foto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 95, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardCompanyComponent_form_209_Template_input_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.processFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_form_209_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r36.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_form_209_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r11.newMenuForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r11.submitted && ctx_r11.f.foodName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.submitted && ctx_r11.f.foodName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r11.submitted && ctx_r11.f.description.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.submitted && ctx_r11.f.description.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r11.submitted && ctx_r11.f.cost.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.submitted && ctx_r11.f.cost.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.photoSelected || "../../../assets/upload.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = function (a0, a1) { return { "is-active": a0, "position-relative": a1 }; };
class DashboardCompanyComponent {
    constructor(companyService, media, formBuilder, _notificationSvc, router) {
        this.companyService = companyService;
        this.media = media;
        this.formBuilder = formBuilder;
        this._notificationSvc = _notificationSvc;
        this.router = router;
        this.submitted = false;
        this.id = 1;
        this.myfoodMenu = [];
        this.timeSeconds = 6000;
        this.showEditMenu = false;
        this.loading = false;
        this.hideMsg = false;
        this.userLogged = this.companyService.getLocalCompany();
        this.user = JSON.parse(this.userLogged);
        if (this.user != null) {
            switch (this.user.userState) {
                case 1:
                    this.router.navigate(['/dashboard-user']);
                    break;
                case 2:
                    this.router.navigate(['/dashboard-driver']);
                    break;
                case 3:
                    this.router.navigate(['/dashboard-company']);
                    break;
                default:
                    break;
            }
        }
        else {
            this.router.navigate(['/home']);
            localStorage.clear();
            return;
        }
        this.mediaSubscription = this.media.subscribeMedia().subscribe(media => {
            this.Media = media;
        });
        this.getMyListMenu();
    }
    get f() { return this.newMenuForm.controls; }
    ngOnInit() {
        this.newMenuForm = this.formBuilder.group({
            foodName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\d/)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getMyListMenu() {
        this.showEditMenu = false;
        this.companyService.getMyMenuList(this.user.id).subscribe(data => {
            if (data.length > 0) {
                this.myfoodMenu = data;
                this.showPanelMenuItem = this.myfoodMenu.slice(-1).pop();
            }
        }, error => {
            $('#newMenuModal').modal('hide');
            this._notificationSvc.warning('Hola ' + this.user.companyName + '', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
    showPanelMenu(item) {
        this.showPanelMenuItem = item;
    }
    editMenuSelected(item) {
        this.showPanelMenuItem = item;
        this.showEditMenu = true;
        this.newMenuForm = this.formBuilder.group({
            foodName: [item.foodName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cost: [item.cost, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\d/)]],
            description: [item.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        $('#newMenuModal').modal('show');
    }
    updateMenuItemSelected() {
        this.submitted = true;
        if (this.newMenuForm.invalid) {
            return;
        }
        var updateItemMenu = {
            foodName: this.f.foodName.value,
            description: this.f.description.value,
            cost: this.f.cost.value,
            idCompany: this.showPanelMenuItem.idCompany,
            _id: this.showPanelMenuItem._id
        };
        this.companyService.updateNewMenu(updateItemMenu, this.file).subscribe(data => {
            if (data.success) {
                $('#newMenuModal').modal('hide');
                this._notificationSvc.success('Hola ' + this.user.companyName + '', data.msg, 6000);
                this.showEditMenu = false;
                this.newMenuForm = this.formBuilder.group({
                    foodName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\d/)]],
                    description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
                this.getMyListMenu();
            }
            else {
                $('#newMenuModal').modal('hide');
                this._notificationSvc.warning('Hola ' + this.user.companyName + '', data.msg, 6000);
            }
        }, error => {
            $('#newMenuModal').modal('hide');
            this._notificationSvc.warning('Hola ' + this.user.companyName + '', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
    deleteMenuSelected(item) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Eliminar ' + item.foodName,
            html: "Estas seguro de eliminar este menu?",
            showCancelButton: true,
            allowEscapeKey: false,
            confirmButtonText: 'OK',
            cancelButtonText: 'No',
            allowOutsideClick: false,
            buttonsStyling: false,
            reverseButtons: true,
            position: 'top',
            padding: 0,
            customClass: { container: 'sw-leave-container', cancelButton: 'btn btn-warning border col-auto mr-auto', confirmButton: 'col-auto btn btn-info' }
        })
            .then((result) => {
            if (result.value) {
                this.companyService.deleteMenuItem(item).subscribe(data => {
                    if (data.success) {
                        this._notificationSvc.success('Hola ' + this.user.companyName + '', data.msg, 6000);
                        this.getMyListMenu();
                    }
                    else {
                        this._notificationSvc.warning('Hola ' + this.user.companyName + '', data.msg, 6000);
                    }
                }, error => {
                    $('#newMenuModal').modal('hide');
                    this._notificationSvc.warning('Hola ' + this.user.companyName + '', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
                });
            }
        });
    }
    close() {
        this.showEditMenu = false;
        $('#newMenuModal').modal('hide');
    }
    //Track order ticket
    stepTrackOrder(step) {
        this.id = step;
    }
    newMenuSubmit() {
        this.submitted = true;
        this.loading = true;
        // stop here if form is invalid
        if (this.newMenuForm.invalid) {
            return;
        }
        var newMenu = {
            foodName: this.f.foodName.value,
            description: this.f.description.value,
            cost: this.f.cost.value,
            idCompany: this.user.id
        };
        this.companyService.registerNewMenu(newMenu, this.file).subscribe(data => {
            if (data.success) {
                this.loading = false;
                $('#newMenuModal').modal('hide');
                this._notificationSvc.success('Hola ' + this.user.companyName + '', data.msg, 6000);
                this.getMyListMenu();
            }
            else {
                this.loading = false;
                $('#newMenuModal').modal('hide');
                this._notificationSvc.warning('Hola ' + this.user.companyName + '', data.msg, 6000);
            }
        }, error => {
            $('#newMenuModal').modal('hide');
            this.loading = false;
            this._notificationSvc.warning('Hola ' + this.user.companyName + '', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
    ngOnDestroy() {
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }
    }
    processFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
}
DashboardCompanyComponent.ɵfac = function DashboardCompanyComponent_Factory(t) { return new (t || DashboardCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DashboardCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardCompanyComponent, selectors: [["app-dashboard-company"]], viewQuery: function DashboardCompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, inputs: { cost: "cost" }, decls: 210, vars: 33, consts: [["id", "dashboar-company", 1, "p-1", "no-gutters", "justify-content-between", "mb-4", "align-items-center", "mt-3"], [1, "row", "no-gutters"], [1, "col-xl-3", "text-left"], [1, "page-heading"], [1, "mb-0"], [1, "col-xl-9", "mt-3", "mt-xl-0", "mb-3"], [1, "card", "mb-0"], [1, "card-body", "p-2"], [1, "card-title"], [1, "col-md-5"], [1, "input-group"], ["type", "text", "value", "ORDER-84534598", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary"], ["class", "d-block mt-1", 4, "ngIf"], [1, "col-md-7", "p-0", "mt-3", "mt-md-0"], [1, "steps"], [1, "list-unstyled", "multi-steps"], [3, "ngClass", "click"], [1, "col-lg-12", "mb-3"], [1, "card"], [1, "card-body", "top-menu"], [1, "table-responsive"], [1, "table", "verticle-middle", "table-responsive-lg", "mb-0"], [1, "text-center"], ["scope", "col"], [1, "badge", "badge-xs", "badge-primary"], [1, "d-flex"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Edit", "data-original-title", "Edit", 1, "mr-4"], [1, "fas", "fa-pencil-alt", "color-muted"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Close", "data-original-title", "Close"], [1, "fas", "fa-times", "color-danger"], ["id", "tabs", 1, "col-xl-12", "mt-3", "mt-xl-0", "project-tab"], [1, "col-md-12"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-pills", "nav-fill"], [1, "nav-item"], ["id", "nav-home-tab", "data-toggle", "tab", "href", "#nav-home", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-profile-tab", "data-toggle", "tab", "href", "#nav-profile", "role", "tab", "aria-controls", "nav-profile", "aria-selected", "false", 1, "nav-link"], ["id", "nav-contact-tab", "data-toggle", "tab", "href", "#nav-contact", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-xl-7", "col-lg-6", "col-xxl-6"], [1, "card", "top_menu_widget"], [1, "card-title", "m-2", "p-2"], ["data-toggle", "modal", "data-target", "#newMenuModal", 1, "btn", "btn-info", "ml-3", "mr-3"], [1, "fas", "fa-plus-circle"], ["class", "media border-bottom pt-3 pb-3", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-xs-12", "mx-auto", "mt-5"], ["class", "card", 4, "ngIf"], ["id", "nav-profile", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 1, "tab-pane", "fade"], ["cellspacing", "0", 1, "table"], ["href", "#"], ["id", "nav-contact", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], ["id", "newMenuModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "newMenuModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-dark", "text-white"], ["class", "modal-title", "id", "newMenuModalLabel", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "d-block", "mt-1"], [1, "media", "border-bottom", "pt-3", "pb-3", 3, "click"], ["width", "50", "height", "50", "alt", "#", 1, "mr-3", 3, "src"], [1, "media-body"], [1, "mb-1", "mt-sm-1", "mt-0"], [1, "badge-lighten-primary"], [1, "jumbotron"], [1, "row", "w-100"], [1, "card", "border-info", "mx-sm-1", "p-3"], [1, "card", "border-info", "shadow", "text-info", "p-3", "my-card"], ["aria-hidden", "true", 1, "fas", "fa-utensils"], [1, "text-info", "text-center", "mt-3"], [1, "text-info", "text-center", "mt-2"], ["data-toggle", "modal", "data-target", "#newMenuModal", 1, "btn", "btn-info"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "text-muted"], [1, "card-footer", "text-center"], ["type", "button", "id", "toleft", 1, "btn", "btn-danger", "float-left", 3, "click"], [1, "far", "fa-trash-alt"], ["type", "button", "id", "toright", 1, "btn", "btn-primary", "float-right", 3, "click"], [1, "fas", "fa-edit"], ["id", "newMenuModalLabel", 1, "modal-title"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "font-weight-bold"], ["type", "text", "formControlName", "foodName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "description", 1, "form-control", 3, "ngClass"], ["formControlName", "cost", "pattern", "\\d*", "placeholder", "\u20A1", "maxlength", "6", 1, "form-control", 3, "ngClass"], [1, "form-group", "text-center"], ["type", "file", "name", "image", "accept", "image/*", 1, "d-none", 3, "change"], ["photoinput", ""], ["alt", "", "srcset", "", 1, "img-fluid", 2, "width", "100px", "height", "100px", 3, "src", "click"], [1, "modal-footer", "text-center"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "float-left", "mr-auto"], ["type", "submit", 1, "btn", "btn-primary", "float-right"], ["class", "fas fa-plus-circle", 4, "ngIf"], ["class", "loader", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "invalid-feedback"], ["viewBox", "0 0 24 24", 1, "loader"], ["cx", "12", "cy", "12", "r", "10", 1, "loader__value"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "float-left", "mr-auto", 3, "click"]], template: function DashboardCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tu restaurante administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nuevas Ordenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tomar Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardCompanyComponent_span_19_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardCompanyComponent_span_20_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardCompanyComponent_span_21_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardCompanyComponent_span_22_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardCompanyComponent_span_23_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_Template_li_click_27_listener() { return ctx.stepTrackOrder(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ordenado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_Template_li_click_31_listener() { return ctx.stepTrackOrder(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_Template_li_click_35_listener() { return ctx.stepTrackOrder(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Preparando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_Template_li_click_39_listener() { return ctx.stepTrackOrder(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardCompanyComponent_Template_li_click_43_listener() { return ctx.stepTrackOrder(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Listas de ordenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "thead", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Accion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "54565");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Fresh Crostini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Adam Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Gulshan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "10:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "$34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mis Menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Calendario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Historial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Top Menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, DashboardCompanyComponent_div_124_Template, 10, 7, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, DashboardCompanyComponent_div_125_Template, 14, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, DashboardCompanyComponent_div_127_Template, 19, 7, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Employer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Work 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "john@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Work 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Moe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "mary@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Work 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Dooley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "july@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Contest Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Award Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Work 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "john@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Work 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Moe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "mary@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Work 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Dooley");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "july@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, DashboardCompanyComponent_h5_202_Template, 2, 0, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, DashboardCompanyComponent_h5_203_Template, 2, 0, "h5", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, DashboardCompanyComponent_form_208_Template, 29, 16, "form", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, DashboardCompanyComponent_form_209_Template, 28, 14, "form", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.user.companyName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.id === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, ctx.id === 1, ctx.id === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c2, ctx.id === 2, ctx.id === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c2, ctx.id === 3, ctx.id === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, ctx.id === 4, ctx.id === 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c2, ctx.id === 5, ctx.id === 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myfoodMenu.slice().reverse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myfoodMenu.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Media.IsMobile && ctx.showPanelMenuItem != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  counter-increment: stepNum;\n  text-align: center;\n  display: table-cell;\n  position: relative;\n  color: #ee0d0d;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%] {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.is-active[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%] {\n  color: #8f8f8f;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  color: #8f8f8f;\n  background-color: #222840;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.is-active[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%]:before {\n  content: counter(stepNum);\n  font-family: inherit;\n  font-weight: 400;\n  color: #8f8f8f;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \"\u2713\";\n  display: block;\n  margin: 0 auto 4px;\n  background-color: #fff;\n  width: 25px;\n  height: 25px;\n  line-height: 22px;\n  text-align: center;\n  font-weight: 700;\n  position: relative;\n  z-index: 1;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  color: #ee0d0d;\n}\n#dashboar-company[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 100%;\n  background-color: #ee0d0d;\n  top: 12px;\n  left: 50%;\n}\n#dashboar-company[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n#dashboar-company[_ngcontent-%COMP%]   #wrap[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: 0 auto;\n}\n#dashboar-company[_ngcontent-%COMP%]   #external-events[_ngcontent-%COMP%] {\n  float: left;\n  width: 150px;\n  padding: 0 10px;\n  text-align: left;\n}\n#dashboar-company[_ngcontent-%COMP%]   #external-events[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 0;\n  padding-top: 1em;\n}\n#dashboar-company[_ngcontent-%COMP%]   .external-event[_ngcontent-%COMP%] {\n  \n  margin: 10px 0;\n  padding: 2px 4px;\n  background: #3366CC;\n  color: #fff;\n  font-size: 0.85em;\n  cursor: pointer;\n}\n#dashboar-company[_ngcontent-%COMP%]   #external-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n  font-size: 11px;\n  color: #666;\n}\n#dashboar-company[_ngcontent-%COMP%]   #external-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0;\n  vertical-align: middle;\n}\n#dashboar-company[_ngcontent-%COMP%]   #calendar[_ngcontent-%COMP%] {\n  \n  margin: 0 auto;\n  width: 900px;\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px #C3C3C3;\n  box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.18);\n}\n#dashboar-company[_ngcontent-%COMP%]   .badge-lighten-primary[_ngcontent-%COMP%], #dashboar-company[_ngcontent-%COMP%]   .badge-lighten-success[_ngcontent-%COMP%] {\n  background-color: #f88282;\n  color: #ee0d0d;\n  padding: 0.4375rem 0.75rem;\n  border-radius: 0.3125rem;\n}\n#dashboar-company[_ngcontent-%COMP%]   .badge-lighten-success[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #95cc47;\n}\n#dashboar-company[_ngcontent-%COMP%]   .badge-lighten-danger[_ngcontent-%COMP%], #dashboar-company[_ngcontent-%COMP%]   .badge-lighten-info[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #40c4ff;\n}\n#dashboar-company[_ngcontent-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  height: 500px;\n  max-height: 549px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbXBhbnkvZGFzaGJvYXJkLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ1o7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUdJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURSO0FBR0k7RUFDSSxjQUFBO0FBRFI7QUFHSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQURSO0FBSUk7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBTUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLFNBQUE7RUFDQSxTQUFBO0FBTFI7QUFXSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBVFI7QUFlSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBYlI7QUFnQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRSO0FBaUJJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWZSO0FBa0JJO0VBQWtCLDJDQUFBO0VBQ2QsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZlI7QUFrQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoQlI7QUFtQkk7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7QUFqQlI7QUFvQkk7RUFDQSxvQkFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDRSxrQkFBQTtFQUNGLDZCQUFBO0VBR0osZ0RBQUE7QUFsQko7QUF5Qkk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBdkJSO0FBMEJJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBeEJSO0FBMkJJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBekJSO0FBMkJJO0VBRUksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUExQlIiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcGFueS9kYXNoYm9hcmQtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXNoYm9hci1jb21wYW55IHtcbiAgICAubXVsdGktc3RlcHM+bGkge1xuICAgICAgICBjb3VudGVyLWluY3JlbWVudDogc3RlcE51bTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiAjZWUwZDBkO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLm11bHRpLXN0ZXBzIHtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubXVsdGktc3RlcHM+bGkuaXMtYWN0aXZlfmxpIHtcbiAgICAgICAgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcbiAgICB9XG4gICAgLm11bHRpLXN0ZXBzPmxpOjpiZWZvcmUge1xuICAgICAgICBjb2xvcjogcmdiKDE0MywgMTQzLCAxNDMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODQwO1xuICAgIH1cbiAgICBcbiAgICAubXVsdGktc3RlcHM+bGkuaXMtYWN0aXZlfmxpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcE51bSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogcmdiKDE0MywgMTQzLCAxNDMpO1xuICAgIH1cbiAgICBcbiAgICAubXVsdGktc3RlcHM+bGk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ1xcMjcxMyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6ICNlZTBkMGQ7XG4gICAgfVxuICAgIFxuICAgIC5tdWx0aS1zdGVwcz5saTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTBkMGQ7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8vIE9yZGVyIGxpc3RcbiAgICBcbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvL2NhbGVuZGFyXG4gICAgXG4gICAgI3dyYXAge1xuICAgICAgICB3aWR0aDogMTEwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAjZXh0ZXJuYWwtZXZlbnRzIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICNleHRlcm5hbC1ldmVudHMgaDQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgLmV4dGVybmFsLWV2ZW50IHsgLyogdHJ5IHRvIG1pbWljayB0aGUgbG9vayBvZiBhIHJlYWwgZXZlbnQgKi9cbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzY2Q0M7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IC44NWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgI2V4dGVybmFsLWV2ZW50cyBwIHtcbiAgICAgICAgbWFyZ2luOiAxLjVlbSAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICNleHRlcm5hbC1ldmVudHMgcCBpbnB1dCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIFxuICAgICNjYWxlbmRhciB7XG4gICAgLyogXHRcdGZsb2F0OiByaWdodDsgKi9cbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjQzNDM0MzO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjFweCAycHggcmdiYSgwLDAsMCwwLjE4KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjFweCAycHggcmdiYSgwLDAsMCwwLjE4KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIxcHggMnB4IHJnYmEoMCwwLDAsMC4xOCk7XG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICAvL21lbnVzXG4gICAgXG4gICAgLmJhZGdlLWxpZ2h0ZW4tcHJpbWFyeSwgLmJhZGdlLWxpZ2h0ZW4tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODgyODI7XG4gICAgICAgIGNvbG9yOiAjZWUwZDBkO1xuICAgICAgICBwYWRkaW5nOiAuNDM3NXJlbSAuNzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zMTI1cmVtO1xuICAgIH1cbiAgICBcbiAgICAuYmFkZ2UtbGlnaHRlbi1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6ICM5NWNjNDc7XG4gICAgfVxuICAgIFxuICAgIC5iYWRnZS1saWdodGVuLWRhbmdlciwgLmJhZGdlLWxpZ2h0ZW4taW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjNDBjNGZmO1xuICAgIH1cbiAgICAudG9wLW1lbnVcbiAgICB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDU0OXB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-company',
                templateUrl: './dashboard-company.component.html',
                styleUrls: ['./dashboard-company.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: _common_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { cost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["search"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HomeComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_26_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
} }
function HomeComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_31_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function HomeComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ShowMsg);
} }
const _c0 = function () { return ["/login-company"]; };
const _c1 = function () { return ["/register-company"]; };
const _c2 = function (a0) { return { "is-invalid": a0 }; };
const _c3 = function () { return ["/forgot-user"]; };
const _c4 = function () { return ["/register-user"]; };
const _c5 = function () { return ["/login-driver"]; };
const _c6 = function () { return ["/register-driver"]; };
class HomeComponent {
    constructor(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.hideMsg = false;
        this.timeSeconds = 3000;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const user = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                switch (data.user.userState) {
                    case 0:
                        this.router.navigate(['/admin']);
                        break;
                    case 1:
                        this.router.navigate(['/dashboard-user']);
                        break;
                    case 2:
                        this.router.navigate(['/dashboard-driver']);
                        break;
                    case 3:
                        this.router.navigate(['/dashboard-company']);
                        break;
                    default:
                        break;
                }
                this.authService.storeUserData(data.token, data.user);
            }
            else {
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 55, vars: 22, consts: [["id", "HomeComponent", 1, "homeBody", "homeInit"], [1, "container-fluid", "px-4", "px-md-4", "py-5", "mx-auto"], [1, "row", "d-flex", "justify-content-between", "align"], [1, "card", "card1", "border-0", "rounded-0", "mb-5", "bg-white"], [1, "row", "mt-auto", "justify-content-center", "mb-2"], [1, "mb-0"], [1, "col-6"], [1, "btn", "btn-block", "btn-inverse", "btn-sm", 3, "routerLink"], [1, "btn", "btn-block", "btn-yellow", "btn-sm", 3, "routerLink"], [1, "card", "p-0", "border-0", "rounded-0", "mb-5", "bg-white"], [1, "card", "card2", "border-0", "rounded-0", "card0"], [1, "form-signin", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "font-weight-bold", "mb-0"], ["type", "text", "name", "email", "formControlName", "email", "placeholder", "abc@xyz.com", 1, "mb-4", "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF", 1, "form-control", 3, "ngClass"], [1, "text-sm", "ml-auto", "text-dim", 3, "routerLink"], [1, "row", "mt-2"], ["type", "submit", 1, "btn", "btn-block", "btn-inverse", "btn-sm"], ["class", "row no-gutters alert alert-warning error-message text-center mt-2", "role", "alert", 4, "ngIf"], ["src", "https://i.imgur.com/nUR4zg3.jpg", 1, "mt-auto"], [1, "card", "card3", "border-0", "rounded-0", "mb-5", "bg-white"], [1, "row", "mt-auto", "mb-2"], [1, "invalid-feedback"], [4, "ngIf"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center", "mt-2"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"], [1, "text-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Crear una cuenta de negocios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Un mundo de clientes ahora a tu alcance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00BFEst\u00E1s dentro de la plataforma?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inicie sesi\u00F3n aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_21_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Olvid\u00F3 contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeComponent_div_41_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "S\u00E9 un socio repartidor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Repart\u00ED usando la aplicaci\u00F3n de Yummy Eats.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Iniciar Sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["#HomeComponent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 32%;\n  padding: 30px;\n  box-shadow: 0px 8px 16px 0px #1976D2;\n  max-width: 511px;\n}\n@media screen and (max-width: 900px) {\n  #HomeComponent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    background: #fff;\n    box-shadow: 1 6px 10px #1976D2, 0 0 6px #1976D2;\n    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n    padding: 0px;\n    cursor: pointer;\n  }\n}\n#HomeComponent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 1 6px 10px #1976D2, 0 0 6px #1976D2;\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 14px 26px 18px 36px;\n  cursor: pointer;\n}\n#HomeComponent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 1 12px 20px #1976D2, 0 0 6px #1976D2;\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n}\n#HomeComponent[_ngcontent-%COMP%]   .card2[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 1px 12px 20px #1976D2, 0 0 6px #1976D2;\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n}\n#HomeComponent[_ngcontent-%COMP%]   .card0[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 30px;\n  box-shadow: none;\n}\n#HomeComponent[_ngcontent-%COMP%]   .card1[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('empresarial-account.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-height: 600px;\n}\n#HomeComponent[_ngcontent-%COMP%]   .card3[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('repartidor.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  min-height: 600px;\n}\n#HomeComponent[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: #F9A825;\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n#HomeComponent[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  border: 2px solid #F57F17;\n}\n#HomeComponent[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: transparent;\n  color: #F9A825;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n#HomeComponent[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  color: #fff;\n  border: 2px solid #F57F17;\n}\n#HomeComponent[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #E0E0E0;\n  opacity: 1;\n}\n#HomeComponent[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #E0E0E0;\n  opacity: 1;\n}\n#HomeComponent[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #E0E0E0;\n  opacity: 1;\n}\n#HomeComponent[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #E0E0E0;\n}\n#HomeComponent[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #E0E0E0;\n}\n#HomeComponent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1px 0px 3px 0px;\n  border: none;\n  border-bottom: 1px solid lightgrey;\n  margin-bottom: 3px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  color: #000;\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 500;\n}\n#HomeComponent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border-bottom: 1px solid #EF5350;\n  outline-width: 0;\n}\n#HomeComponent[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n#HomeComponent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n}\n#HomeComponent[_ngcontent-%COMP%]   .text-sm[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#HomeComponent[_ngcontent-%COMP%]   .text-dim[_ngcontent-%COMP%] {\n  color: #BDBDBD;\n}\n#HomeComponent[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n@media screen and (max-width: 1056px) {\n  #HomeComponent[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #HomeComponent[_ngcontent-%COMP%]   .align[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUtJO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsK0NBQUE7SUFDRSxtRkFBQTtJQUNKLFlBQUE7SUFDQSxlQUFBO0VBSFI7QUFDRjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0UsbUZBQUE7RUFDSiw0QkFBQTtFQUNBLGVBQUE7QUFKTjtBQU9JO0VBQ0ksc0JBQUE7RUFDQSxnREFBQTtFQUNBLG1GQUFBO0FBTFI7QUFRSTtFQUNJLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtRkFBQTtBQU5SO0FBU0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBSO0FBVUk7RUFDSSwrR0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQVJSO0FBV0k7RUFDSSxzR0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQVRSO0FBWUk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWFJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQVhSO0FBY0k7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFaUjtBQWVJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFiUjtBQWdCSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FBZFI7QUFZSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FBZFI7QUFZSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FBZFI7QUFpQkk7RUFDSSxjQUFBO0FBZlI7QUFrQkk7RUFDSSxjQUFBO0FBaEJSO0FBbUJJO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpCUjtBQW9CSTtFQUdJLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQWxCUjtBQXFCSTtFQUdJLDJCQUFBO0VBQ0EsZ0JBQUE7QUFuQlI7QUFzQkk7RUFDSSxjQUFBO0FBcEJSO0FBdUJJO0VBQ0ksZUFBQTtBQXJCUjtBQXdCSTtFQUNJLGNBQUE7QUF0QlI7QUF5Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF2QlI7QUEwQkk7RUFDSTtJQUNJLFdBQUE7RUF4QlY7RUEyQk07SUFDSSxrQ0FBQTtFQXpCVjtBQUNGIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNIb21lQ29tcG9uZW50e1xuXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogMzIlO1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4ICMxOTc2RDI7XG4gICAgICAgIG1heC13aWR0aDogNTExcHhcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gICAgICAgIC5jYXJke1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDEgNnB4IDEwcHggIzE5NzZEMiwgMCAwIDZweCAjMTk3NkQyO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAxIDZweCAxMHB4ICMxOTc2RDIsIDAgMCA2cHggIzE5NzZEMjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgICBwYWRkaW5nOiAxNHB4IDI2cHggMThweCAzNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZDpob3ZlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMSAxMnB4IDIwcHggIzE5NzZEMiwgMCAwIDZweCAjMTk3NkQyO1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgfVxuXG4gICAgLmNhcmQyOmhvdmVye1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMTJweCAyMHB4ICMxOTc2RDIsIDAgMCA2cHggIzE5NzZEMjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpLC4zcyBib3gtc2hhZG93LC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZDAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZVxuICAgIH1cbiAgICBcbiAgICAuY2FyZDEge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2VtcHJlc2FyaWFsLWFjY291bnQuanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4XG4gICAgfVxuICAgIFxuICAgIC5jYXJkMyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikpLCB1cmwoXCIuLi8uLi9hc3NldHMvcmVwYXJ0aWRvci5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHhcbiAgICB9XG4gICAgXG4gICAgLmJ0bi15ZWxsb3cge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjlBODI1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHhcbiAgICB9XG4gICAgXG4gICAgLmJ0bi15ZWxsb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU3RjE3O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjU3RjE3XG4gICAgfVxuICAgIFxuICAgIC5idG4taW52ZXJzZSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGOUE4MjU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogI0Y5QTgyNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHhcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1pbnZlcnNlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1N0YxNztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNTdGMTdcbiAgICB9XG4gICAgXG4gICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjRTBFMEUwO1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICAgIFxuICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogI0UwRTBFMFxuICAgIH1cbiAgICBcbiAgICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjRTBFMEUwXG4gICAgfVxuICAgIFxuICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMXB4IDBweCAzcHggMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwXG4gICAgfVxuICAgIFxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUY1MzUwO1xuICAgICAgICBvdXRsaW5lLXdpZHRoOiAwXG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBvdXRsaW5lLXdpZHRoOiAwXG4gICAgfVxuICAgIFxuICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogaW5oZXJpdFxuICAgIH1cbiAgICBcbiAgICAudGV4dC1zbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIH1cbiAgICBcbiAgICAudGV4dC1kaW0ge1xuICAgICAgICBjb2xvcjogI0JEQkRCRFxuICAgIH1cbiAgICBcbiAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDU2cHgpIHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuYWxpZ24ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudFxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServices"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AhZb":
/*!*************************************************!*\
  !*** ./src/app/common/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServices", function() { return AuthServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");






let AuthServices = class AuthServices {
    constructor(httpClient, jwtHelper) {
        this.httpClient = httpClient;
        this.jwtHelper = jwtHelper;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.isDev = false;
        this.isDev = false; // Change to false when you're gonna deploy your app, true when is on develop 
    }
    registerUser(user, photo) {
        const fd = new FormData();
        fd.append('username', user.username);
        fd.append('email', user.email);
        fd.append('phone', user.phone);
        fd.append('name', user.name);
        fd.append('password', user.password);
        fd.append('userState', user.userState);
        fd.append('image', photo == undefined ? user.authPhoto : photo);
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/users/register', fd);
        }
        else {
            return this.httpClient.post('users/register', fd);
        }
    }
    authenticateUser(user) {
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/users/authenticate', user, { headers: this.headers });
        }
        else {
            return this.httpClient.post('users/authenticate', user, { headers: this.headers });
        }
    }
    getMyMenuList() {
        if (this.isDev) {
            return this.httpClient.get('http://localhost:8080/users/dashboard-user/getAllMenus', { headers: this.headers });
        }
        else {
            return this.httpClient.get('users/dashboard-user/getAllMenus', { headers: this.headers });
        }
    }
    //   getUsers() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   updateUsers(user) { 
    //     let headers = new Headers();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     const token = localStorage.getItem('id_token');
    //     this.authToken = token;
    //     this.storeUserData(token,user);
    //     if(this.isDev){
    //       return this.http.put('http://localhost:8080/users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.put('users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getProfile() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/profile', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getSettings() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/settings', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/settings', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getUserMessages(id) {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   //New message 
    //   sendMessage(message) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   forgotPassword(email) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/forgot', email, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/forgot', email, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   resetPassword(reset) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/reset/', reset,  {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/reset', reset, {headers: headers}).map(res => res.json());
    //     }
    //   }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    getLocalUser() {
        return localStorage.getItem("user");
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        const token = localStorage.getItem('id_token');
        return token != null && !this.jwtHelper.isTokenExpired(token);
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
};
AuthServices.ɵfac = function AuthServices_Factory(t) { return new (t || AuthServices)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
AuthServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthServices, factory: AuthServices.ɵfac, providedIn: 'root' });
AuthServices = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthServices);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E5Ig":
/*!**********************************************************************!*\
  !*** ./src/app/profile/profile-company/profile-company.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCompanyComponent", function() { return ProfileCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileCompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileCompanyComponent.ɵfac = function ProfileCompanyComponent_Factory(t) { return new (t || ProfileCompanyComponent)(); };
ProfileCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCompanyComponent, selectors: [["app-profile-company"]], decls: 2, vars: 0, template: function ProfileCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-company works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvZmlsZS9wcm9maWxlLWNvbXBhbnkvcHJvZmlsZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-company',
                templateUrl: './profile-company.component.html',
                styleUrls: ['./profile-company.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FEVr":
/*!*********************************************!*\
  !*** ./src/app/common/admin/admin.guard.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "GNjL":
/*!*************************************************************!*\
  !*** ./src/app/forgot/forgot-user/forgot-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ForgotUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotUserComponent", function() { return ForgotUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForgotUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotUserComponent.ɵfac = function ForgotUserComponent_Factory(t) { return new (t || ForgotUserComponent)(); };
ForgotUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotUserComponent, selectors: [["app-forgot-user"]], decls: 2, vars: 0, template: function ForgotUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forgot-user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZm9yZ290L2ZvcmdvdC11c2VyL2ZvcmdvdC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-user',
                templateUrl: './forgot-user.component.html',
                styleUrls: ['./forgot-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JpYt":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-user/dashboard-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserComponent", function() { return DashboardUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _common_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/media.service */ "fkS0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "IZFd");











const _c0 = ["search"];
function DashboardUserComponent_agm_marker_7_agm_info_window_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-info-window", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Es tu ubicaci\u00F3n actual?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Si no es la Ubicacion puedes cambiarla haciendo click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_agm_marker_7_agm_info_window_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const m_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changePosition(m_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cambiar ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_agm_marker_7_agm_info_window_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.savePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Guardar ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r6.showInfo);
} }
function DashboardUserComponent_agm_marker_7_agm_info_window_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-info-window", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Es tu destino final?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Si no es la Ubicaci\u00F3n puedes cambiarla haciendo click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Distancia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_agm_marker_7_agm_info_window_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const m_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changePosition(m_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cambiar ubicaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_agm_marker_7_agm_info_window_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.createRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ir ahora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r7.showInfoFinal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.distance, " ");
} }
const _c1 = function () { return { height: 45, width: 40, radius: 5 }; };
const _c2 = function (a0, a1) { return { url: a0, scaledSize: a1 }; };
function DashboardUserComponent_agm_marker_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardUserComponent_agm_marker_7_agm_info_window_1_Template, 10, 1, "agm-info-window", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardUserComponent_agm_marker_7_agm_info_window_2_Template, 16, 2, "agm-info-window", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r4.lat)("longitude", m_r4.lng)("label", m_r4.label)("agmFitBounds", true)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c2, m_r4.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !m_r4.isDestination);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r4.isDestination);
} }
function DashboardUserComponent_agm_direction_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-direction", 19);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("renderOptions", ctx_r3.renderOptions)("markerOptions", ctx_r3.markerOptions)("origin", ctx_r3.origin)("destination", ctx_r3.destination);
} }
class DashboardUserComponent {
    constructor(authService, mapsAPILoader, ngZone, media, router) {
        this.authService = authService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.media = media;
        this.router = router;
        this.zoom = 12;
        this.lat = 9.93040049002793;
        this.lng = -84.09062837772197;
        this.showInfo = true;
        this.addDestiny = false;
        this.generate = false;
        this.getTrack = false;
        this.showInfoFinal = false;
        this.trackingRoute = false;
        this.markers = [];
        this.renderOptions = {
            suppressMarkers: true,
        };
        this.markerOptions = {
            origin: {
                icon: 'https://i.imgur.com/iYIaFyb.png',
                draggable: false,
            },
            destination: {
                icon: 'https://i.imgur.com/iYIaFyb.png',
                opacity: 0.8,
            },
        };
        this.located = false;
        this.userLogged = this.authService.getLocalUser();
        this.user = JSON.parse(this.userLogged);
        if (this.user != null) {
            switch (this.user.userState) {
                case 1:
                    this.router.navigate(['/dashboard-user']);
                    break;
                case 2:
                    this.router.navigate(['/dashboard-driver']);
                    break;
                case 3:
                    this.router.navigate(['/dashboard-company']);
                    break;
                default:
                    break;
            }
        }
        else {
            this.router.navigate(['/home']);
            localStorage.clear();
            return;
        }
        this.setCurrentPosition();
    }
    ngOnInit() {
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //set current position
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                componentRestrictions: { country: 'CR' }
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.zoom = 12;
                    this.markers.push({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        draggable: false,
                        isDestination: true,
                        photo: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg'
                    });
                    this.showInfoFinal = true;
                    this.addDestiny = true;
                    this.generate = true;
                    this.origin = { lat: this.markers[0].lat, lng: this.markers[0].lng };
                    this.destination = { lat: this.markers[1].lat, lng: this.markers[1].lng };
                    this.distance = this.calcDistance(this.markers[0].lat, this.markers[0].lng, this.markers[1].lat, this.markers[1].lng);
                    this.distance = this.roundToTwo(this.distance / 1000);
                });
            });
        });
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.zoom = 17;
                this.markers.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    draggable: false,
                    isDestination: false,
                    photo: this.user.photo
                });
                this.showInfo = true;
                this.addDestiny = false;
                this.generate = false;
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    clickedMarker(infowindow) {
        if (this.previous != undefined) {
            if (this.previous.close() != undefined)
                this.previous.close();
        }
        this.previous = infowindow;
    }
    mapClicked($event) {
        var event;
        event = $event;
        this.showInfo = true;
        if (this.addDestiny) {
            if (this.markers.length < 2) {
                this.markers.push({
                    lat: event.coords.lat,
                    lng: event.coords.lng,
                    draggable: false,
                    isDestination: true,
                    photo: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg'
                });
                this.zoom = 20;
                this.generate = true;
                this.showInfo = false;
                this.showInfoFinal = true;
                this.origin = { lat: this.markers[0].lat, lng: this.markers[0].lng };
                this.destination = { lat: this.markers[1].lat, lng: this.markers[1].lng };
                this.distance = this.calcDistance(this.markers[0].lat, this.markers[0].lng, this.markers[1].lat, this.markers[1].lng);
                this.distance = this.roundToTwo(this.distance / 1000);
            }
        }
        else {
            if (this.markers.length < 1) {
                this.markers.push({
                    lat: event.coords.lat,
                    lng: event.coords.lng,
                    draggable: false,
                    isDestination: false,
                    photo: this.user.photo
                });
            }
        }
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
    changePosition(mPosition) {
        if (mPosition.isDestination) {
            if (this.markers.length > 1) {
                this.generate = false;
                this.markers.splice(-1, 1);
            }
        }
        else {
            if (this.markers.length > 0) {
                this.markers.shift();
            }
        }
        this.showInfo = false;
    }
    savePosition() {
        this.showInfo = false;
    }
    getDirection() {
        this.addDestiny = true;
    }
    createRoute() {
        this.generate = true;
        this.showInfoFinal = false;
        this.origin = { lat: this.markers[0].lat, lng: this.markers[0].lng };
        this.destination = { lat: this.markers[1].lat, lng: this.markers[1].lng };
        var directionsService = new google.maps.DirectionsService();
        var haight = new google.maps.LatLng(this.markers[0].lat, this.markers[0].lng);
        var oceanBeach = new google.maps.LatLng(this.markers[1].lat, this.markers[1].lng);
        var request = {
            origin: haight,
            destination: oceanBeach,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, (response, status) => {
            if (status == 'OK') {
                this.confirmData = response.routes[0].legs[0];
                this.distance = this.confirmData.distance.text;
                this.duration = this.confirmData.duration.text;
                this.end_address = this.confirmData.end_address;
                this.start_address = this.confirmData.start_address;
                let costFinal = 1600;
                let endDirection = '<p><b>Dirrecion final:</b>' + this.end_address;
                +'<br></p>';
                let startDirection = '<p><b>Dirrecion inicial:</b>' + this.start_address;
                +'<br></p>';
                let distance = '<p><b>Distancia:</b>' + this.distance;
                +'<br></p>';
                let timeArrival = '<p><b>Tiempo de llegada:</b>' + this.duration + '<br></p>';
                let cost = '<p><b>Costo:</b> ₡' + costFinal + '<br></p>';
                let msg = distance + cost + timeArrival + startDirection + endDirection;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Confirmación de viaje",
                    html: msg,
                    showCancelButton: true,
                    allowEscapeKey: false,
                    confirmButtonText: 'OK',
                    cancelButtonText: 'No',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    reverseButtons: true,
                    position: 'top',
                    padding: 0,
                    customClass: { container: 'sw-leave-container', cancelButton: 'btn btn-warning border col-auto mr-auto', confirmButton: 'col-auto btn btn-info' }
                })
                    .then((result) => {
                    if (result.value) {
                        this.trackingRoute = true;
                        window.open('https://www.google.com/maps/dir/?api=1&origin=' + this.markers[0].lat + ',' + this.markers[0].lng + '&destination=' + this.markers[1].lat + ',' + this.markers[1].lng + '&travelmode=driving', '_blank');
                    }
                    else
                        console.log('somethin happened');
                    if (this.trackingRoute) {
                        this.trackMe();
                    }
                });
            }
        });
    }
    trackMe() {
        this.getTrack = true;
        if (navigator.geolocation) {
            // this.isTracking = true;
            navigator.geolocation.watchPosition((position) => {
                this.showTrackingPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    showTrackingPosition(position) {
        // this.currentLat = position.coords.latitude;
        // this.currentLong = position.coords.longitude;
        this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.destination = { lat: this.markers[1].lat, lng: this.markers[1].lng };
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
    }
    calcDistance(fromLat, fromLng, toLat, toLng) {
        return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
    }
    roundToTwo(num) {
        return num.toFixed(2);
    }
}
DashboardUserComponent.ɵfac = function DashboardUserComponent_Factory(t) { return new (t || DashboardUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DashboardUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardUserComponent, selectors: [["app-dashboard-user"]], viewQuery: function DashboardUserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, decls: 17, vars: 13, consts: [[1, "row"], [1, "form-group", "col-12"], ["placeholder", "\u00BFA donde v\u00E1s ?", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", "type", "text", 1, "form-control", 3, "formControl"], ["search", ""], [1, "map", "col-12", 2, "width", "100%", "height", "75vh"], ["map", ""], [3, "latitude", "longitude", "zoom", "scrollwheel", "zoomControl", "disableDefaultUI", "mapClick"], ["style", "border-radius: 50%;", 3, "latitude", "longitude", "label", "agmFitBounds", "iconUrl", 4, "ngFor", "ngForOf"], [3, "renderOptions", "markerOptions", "origin", "destination", 4, "ngIf"], [1, "container"], [1, "btn-toolbar", "text-center", "well"], [1, "col-6", "pt-2", "pr-0", "pl-0"], [1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], [2, "border-radius", "50%", 3, "latitude", "longitude", "label", "agmFitBounds", "iconUrl"], [3, "isOpen", 4, "ngIf"], [3, "isOpen"], ["infowindow", ""], [1, "btn", 3, "click"], [1, "btn", "btn-success", 3, "click"], [3, "renderOptions", "markerOptions", "origin", "destination"]], template: function DashboardUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "agm-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function DashboardUserComponent_Template_agm_map_mapClick_6_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardUserComponent_agm_marker_7_Template, 3, 11, "agm-marker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardUserComponent_agm_direction_8_Template, 1, 4, "agm-direction", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_Template_button_click_12_listener() { return ctx.setCurrentPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mi Ubicaci\u00F3n Actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUserComponent_Template_button_click_15_listener() { return ctx.getDirection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Seleccionar destino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", _r1.offsetHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("scrollwheel", true)("zoomControl", true)("disableDefaultUI", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.getTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.getTrack);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmFitBounds"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirection"]], styles: [".btn-toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.btn-toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXIvZGFzaGJvYXJkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLXVzZXIvZGFzaGJvYXJkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRvb2xiYXIgLmJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5idG4tdG9vbGJhciAuYnRuOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-user',
                templateUrl: './dashboard-user.component.html',
                styleUrls: ['./dashboard-user.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _common_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["search"]
        }] }); })();


/***/ }),

/***/ "JsUi":
/*!*******************************************************************!*\
  !*** ./src/app/register/register-user/register-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/must-match.validator */ "22eE");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function RegisterUserComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuario es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "remove-margin text-center": a0 }; };
function RegisterUserComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_20_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.submitted && ctx_r0.f.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
} }
function RegisterUserComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuario es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_26_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.submitted && ctx_r1.f.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.username.errors.required);
} }
function RegisterUserComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email debe tener un correo valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_32_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_32_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r2.submitted && ctx_r2.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email);
} }
function RegisterUserComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Telefono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Telefono debe ser al menos 8 digitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Solo se permiten numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_41_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_41_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterUserComponent_div_41_div_3_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.submitted && ctx_r3.f.phone.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.phone.errors.pattern);
} }
function RegisterUserComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_47_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a debe ser al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_47_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_47_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r4.submitted && ctx_r4.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.minlength);
} }
function RegisterUserComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_53_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a no son iguales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterUserComponent_div_53_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterUserComponent_div_53_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r5.submitted && ctx_r5.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.confirmPassword.errors.mustMatch);
} }
function RegisterUserComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acceptar Ts & Cs Es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterUserComponent_i_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 44);
} }
function RegisterUserComponent__svg_svg_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/login-company"]; };
class RegisterUserComponent {
    constructor(authServices, formBuilder, router, authService
    // private flashMessage: FlashMessagesService
    ) {
        this.authServices = authServices;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.hideMsg = false;
        this.timeSeconds = 6000;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/\d/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].requiredTrue]
        }, {
            validator: Object(_common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_1__["MustMatch"])('password', 'confirmPassword')
        });
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.loading = true;
            this.user = user;
            const Newuser = {
                name: this.user.name,
                email: this.user.email,
                username: this.user.firstName,
                userState: 1,
                password: 'qwer1234',
                authPhoto: this.user.provider == 'FACEBOOK' ? this.user.response.picture.data.url : this.user.photoUrl
            };
            this.authServices.registerUser(Newuser, this.file).subscribe(data => {
                if (data.success) {
                    const user = {
                        email: this.user.email,
                        password: Newuser.password
                    };
                    this.authServices.authenticateUser(user).subscribe(data => {
                        if (data.success) {
                            this.loading = false;
                            switch (Newuser.userState) {
                                case 0:
                                    this.router.navigate(['/admin']);
                                    break;
                                case 1:
                                    this.router.navigate(['/dashboard-user']);
                                    break;
                                case 2:
                                    this.router.navigate(['/dashboard-driver']);
                                    break;
                                case 3:
                                    this.router.navigate(['/dashboard-company']);
                                    break;
                                default:
                                    break;
                            }
                            this.authServices.storeUserData(data.token, data.user);
                        }
                    });
                }
                else {
                    this.router.navigate(['/register-user']);
                }
            });
        });
    }
    siginSocialMedia() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    processFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    onRegisterSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        var newUser = {
            name: this.f.name.value,
            username: this.f.username.value,
            phone: this.f.phone.value,
            email: this.f.email.value,
            password: this.f.password.value,
            acceptTerms: this.f.acceptTerms.value,
            userState: 1
        };
        this.authServices.registerUser(newUser, this.file).subscribe(data => {
            if (data.success) {
                this.loading = false;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Registro exitoso' + newUser.username + '',
                    html: "Su registro ha sido authenticado correctamente. Haz click en ok para iniciar sesion",
                    showCancelButton: false,
                    allowEscapeKey: false,
                    confirmButtonText: 'OK',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    reverseButtons: true,
                    position: 'top',
                    customClass: { confirmButton: 'col-auto btn btn-info m-3' }
                })
                    .then((result) => {
                    if (result.value) {
                        this.router.navigate(['/home']);
                    }
                });
            }
            else {
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        }, error => {
            this.hideMsg = true;
            this.ShowMsg = "Ocurrio un error favor contactar a soporte o al administrador del sitio";
            setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID).then(x => console.log());
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID).then(x => console.log());
    }
    signOut() {
        this.authService.signOut();
    }
}
RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) { return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"])); };
RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterUserComponent, selectors: [["app-register-user"]], decls: 74, vars: 34, consts: [["id", "register-user"], [1, "container-fluid"], [1, "pt-4"], [1, "card", "bg-light"], [1, "card-body", "mx-auto", "pt-1", 2, "max-width", "400px"], [3, "formGroup", "ngSubmit"], [1, "btn", "btn-block", "btn-google", 3, "click"], [1, "fab", "fa-google"], [1, "btn", "btn-block", "btn-facebook", 3, "click"], [1, "fab", "fa-facebook-f"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "formControlName", "name", "placeholder", "Nombre completo", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "ngClass", 4, "ngIf"], ["type", "text", "formControlName", "username", "placeholder", "Nombre Usuario", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-envelope"], ["type", "text", "formControlName", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-phone"], [1, "custom-select", 2, "max-width", "90px"], ["selected", ""], ["formControlName", "phone", "pattern", "\\d*", "placeholder", "Numero telefonico", "maxlength", "8", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-lock"], ["type", "password", "formControlName", "password", "placeholder", "Contrase\u00F1a", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirmar contrase\u00F1a", 1, "form-control", 3, "ngClass"], [1, "form-group", "mb-1", "text-center"], [1, "font-weight-bold"], ["type", "file", "name", "image", "accept", "image/*", 1, "d-none", 3, "change"], ["photoinput", ""], ["alt", "", "srcset", "", 1, "img-fluid", 2, "height", "66px", 3, "src", "click"], [1, "form-group", "form-check"], ["type", "checkbox", "formControlName", "acceptTerms", "id", "acceptTerms", 1, "form-check-input", 3, "ngClass"], ["for", "acceptTerms", 1, "font-weight-bold", "form-check-label"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-yellow", "btn-block"], ["class", "fas fa-plus-circle", 4, "ngIf"], ["class", "loader", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-center"], [3, "routerLink"], [1, "invalid-feedback", 3, "ngClass"], [4, "ngIf"], [1, "invalid-feedback"], [1, "fas", "fa-plus-circle"], ["viewBox", "0 0 24 24", 1, "loader"], ["cx", "12", "cy", "12", "r", "10", 1, "loader__value"]], template: function RegisterUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterUserComponent_Template_form_ngSubmit_5_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Crear cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_a_click_9_listener() { return ctx.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 Login via Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_a_click_12_listener() { return ctx.signInWithFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 Login via facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterUserComponent_div_20_Template, 2, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterUserComponent_div_26_Template, 2, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterUserComponent_div_32_Template, 3, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+506");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterUserComponent_div_41_Template, 4, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RegisterUserComponent_div_47_Template, 3, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegisterUserComponent_div_53_Template, 3, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Foto:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterUserComponent_Template_input_change_57_listener($event) { return ctx.processFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_img_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); return _r6.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Accepto Terminos & Condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RegisterUserComponent_div_64_Template, 2, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RegisterUserComponent_i_67_Template, 1, 0, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RegisterUserComponent__svg_svg_68_Template, 7, 0, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Crear Cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tiene una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.submitted && ctx.f.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirmPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoSelected || "../../../assets/upload.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx.submitted && ctx.f.acceptTerms.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.acceptTerms.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["#register-user[_ngcontent-%COMP%] {\n  background-color: #81D4FA;\n  height: 100vh;\n  background-color: #81D4FA;\n  height: 100vh;\n}\n@media (min-width: 992px) {\n  #register-user[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 30rem;\n    margin: auto;\n    background-color: #81D4FA;\n  }\n}\n#register-user[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: #81D4FA;\n}\n#register-user[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: #F9A825;\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n#register-user[_ngcontent-%COMP%]   .btn-yellow[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  border: 2px solid #F57F17;\n}\n#register-user[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%] {\n  border: 2px solid #F9A825;\n  background-color: transparent;\n  color: #F9A825;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n#register-user[_ngcontent-%COMP%]   .btn-inverse[_ngcontent-%COMP%]:hover {\n  background-color: #F57F17;\n  color: #fff;\n  border: 2px solid #F57F17;\n}\n#register-user[_ngcontent-%COMP%]   .bg-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n#register-user   [_nghost-%COMP%] {\n  height: 100%;\n}\n#register-user[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n#register-user[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n#register-user[_ngcontent-%COMP%]   .remove-margin[_ngcontent-%COMP%] {\n  margin-bottom: -10px;\n}\n#register-user[_ngcontent-%COMP%]   .btn-facebook[_ngcontent-%COMP%] {\n  background-color: #405D9D;\n  color: #fff;\n}\n#register-user[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background-color: #42AEEC;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci11c2VyL3JlZ2lzdGVyLXVzZXIuY29tcG9uZW50LnNjc3MiLCIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBWUEseUJBQUE7RUFDQSxhQUFBO0FBWEY7QUN1REk7RUR2REE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0VBR0o7QUFDRjtBQURFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBR0o7QUFDRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBQU47QUFHRTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUZOO0FBSUU7RUFDRSw2QkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFNRTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEo7QUFRRTtFQUNFLG9CQUFBO0FBTko7QUFTRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVBKO0FBU0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFQSiIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvcGFydGlhbHMvYm9vdHN0cmFwLWJyZWFrcG9pbnRzXCI7XG4jcmVnaXN0ZXItdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MUQ0RkE7XG4gIGhlaWdodDogMTAwdmg7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgICAuY2FyZHtcbiAgICAgIHdpZHRoOiAzMHJlbTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MUQ0RkE7XG4gICAgfVxuICB9XG4gIC5jYXJke1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFENEZBO1xuICB9XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MUQ0RkE7XG4gIGhlaWdodDogMTAwdmg7XG4gIC5idG4teWVsbG93IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGOUE4MjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgXG4gIC5idG4teWVsbG93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNTdGMTc7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjU3RjE3O1xuICB9XG4gIFxuICAuYnRuLWludmVyc2Uge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI0Y5QTgyNTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNGOUE4MjU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgXG4gIC5idG4taW52ZXJzZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU3RjE3O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjU3RjE3O1xuICB9XG4gIC5iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5waG90byB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnJlbW92ZS1tYXJnaW4ge1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICB9XG5cbiAgLmJ0bi1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNUQ5RDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYnRuLWdvb2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQUVFQztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG5cbiAgIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-user',
                templateUrl: './register-user.component.html',
                styleUrls: ['./register-user.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServices"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "JvrC":
/*!****************************************************************!*\
  !*** ./src/app/reset/reset-company/reset-company.component.ts ***!
  \****************************************************************/
/*! exports provided: ResetCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCompanyComponent", function() { return ResetCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/must-match.validator */ "22eE");
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/notification.service */ "gdHf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ResetCompanyComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetCompanyComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a debe ser al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "remove-margin text-center": a0 }; };
function ResetCompanyComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetCompanyComponent_div_18_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetCompanyComponent_div_18_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.minlength);
} }
function ResetCompanyComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar contrase\u00F1a es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetCompanyComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a no son iguales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetCompanyComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetCompanyComponent_div_24_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetCompanyComponent_div_24_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.submitted && ctx_r1.f.confirm.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.confirm.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.confirm.errors.mustMatch);
} }
function ResetCompanyComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 24);
} }
function ResetCompanyComponent__svg_svg_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetCompanyComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.ShowMsg);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/login-company"]; };
class ResetCompanyComponent {
    constructor(formBuilder, companyService, _notificationSvc, route, router) {
        this.formBuilder = formBuilder;
        this.companyService = companyService;
        this._notificationSvc = _notificationSvc;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.hideMsg = false;
        this.route.params.subscribe(params => {
            this.resetToken = params.token;
        });
    }
    ngOnInit() {
        this.resetCompanyForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: Object(_common_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'confirmPassword')
        });
    }
    get f() { return this.resetCompanyForm.controls; }
    onResetPasswordCompanySubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetCompanyForm.invalid) {
            return;
        }
        this.loading = true;
        const reset = {
            password: this.f.password.value,
            confirm: this.f.confirm.value,
            token: this.resetToken
        };
        debugger;
        this.companyService.resetPassword(reset).subscribe(data => {
            if (data.success) {
                this.loading = false;
                this._notificationSvc.success('Yummy Eats', data.msg, 8000);
            }
            else {
                this.loading = false;
                this._notificationSvc.warning('Yummy Eats', data.msg, 8000);
            }
        }, error => {
            this.loading = false;
            this._notificationSvc.warning('Hola', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
}
ResetCompanyComponent.ɵfac = function ResetCompanyComponent_Factory(t) { return new (t || ResetCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ResetCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetCompanyComponent, selectors: [["app-reset-company"]], decls: 35, vars: 14, consts: [["id", "reset-company", 1, "reset"], [1, "container-fluid"], [1, "pt-4"], [1, "card", "bg-light"], [1, "card-body", "mx-auto", "pt-1", 2, "max-width", "400px"], [1, "text-center", "pt-2"], [1, "fa", "fa-lock", "fa-4x"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-lock"], ["type", "password", "formControlName", "password", "placeholder", "Contrase\u00F1a", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "ngClass", 4, "ngIf"], ["type", "password", "formControlName", "confirm", "placeholder", "Confirmar contrase\u00F1a", 1, "form-control", 3, "ngClass"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-yellow", "btn-block"], ["class", "fas fa-plus-circle", 4, "ngIf"], ["class", "loader", "viewBox", "0 0 24 24", 4, "ngIf"], [3, "routerLink"], ["class", "row no-gutters alert alert-warning error-message text-center mt-2", "role", "alert", 4, "ngIf"], [1, "invalid-feedback", 3, "ngClass"], [4, "ngIf"], [1, "fas", "fa-plus-circle"], ["viewBox", "0 0 24 24", 1, "loader"], ["cx", "12", "cy", "12", "r", "10", 1, "loader__value"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center", "mt-2"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"]], template: function ResetCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Olvido Contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Puedes cambiar tu Contrase\u00F1a aqui.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetCompanyComponent_Template_form_ngSubmit_12_listener() { return ctx.onResetPasswordCompanySubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResetCompanyComponent_div_18_Template, 3, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResetCompanyComponent_div_24_Template, 3, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ResetCompanyComponent_i_27_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ResetCompanyComponent__svg_svg_28_Template, 7, 0, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Enviar correo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tiene una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ResetCompanyComponent_div_34_Template, 4, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.submitted && ctx.f.confirm.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.confirm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVzZXQvcmVzZXQtY29tcGFueS9yZXNldC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-company',
                templateUrl: './reset-company.component.html',
                styleUrls: ['./reset-company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "LkwM":
/*!**********************************************************!*\
  !*** ./src/app/reset/reset-user/reset-user.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetUserComponent", function() { return ResetUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResetUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetUserComponent.ɵfac = function ResetUserComponent_Factory(t) { return new (t || ResetUserComponent)(); };
ResetUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetUserComponent, selectors: [["app-reset-user"]], decls: 2, vars: 0, template: function ResetUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reset-user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVzZXQvcmVzZXQtdXNlci9yZXNldC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-user',
                templateUrl: './reset-user.component.html',
                styleUrls: ['./reset-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MSoh":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-driver/dashboard-driver.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDriverComponent", function() { return DashboardDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! agm-direction */ "IZFd");







const _c0 = function () { return { height: 45, width: 40 }; };
const _c1 = function (a0, a1) { return { url: a0, scaledSize: a1 }; };
function DashboardDriverComponent_agm_marker_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Es tu ubicacion actual?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Si no es la Ubicacion puedes cambiarla haciendo click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardDriverComponent_agm_marker_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cambiar ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardDriverComponent_agm_marker_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.savePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Guardar ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r1.lat)("longitude", m_r1.lng)("label", m_r1.label)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, m_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx_r0.showInfo);
} }
class DashboardDriverComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.zoom = 10;
        this.lat = 9.93040049002793;
        this.lng = -84.09062837772197;
        this.showInfo = true;
        this.addDestiny = false;
        this.origin = { lat: 29.8174782, lng: -95.6814757 };
        this.destination = { lat: 40.6976637, lng: -74.119764 };
        this.waypoints = [
            { location: { lat: 39.0921167, lng: -94.8559005 } },
            { location: { lat: 41.8339037, lng: -87.8720468 } }
        ];
        this.markers = [];
        this.located = false;
        this.userLogged = this.authService.getLocalUser();
        this.user = JSON.parse(this.userLogged);
        if (this.user != null) {
            switch (this.user.userState) {
                case 1:
                    this.router.navigate(['/dashboard-user']);
                    break;
                case 2:
                    this.router.navigate(['/dashboard-driver']);
                    break;
                case 3:
                    this.router.navigate(['/dashboard-company']);
                    break;
                default:
                    break;
            }
        }
        else {
            this.router.navigate(['/home']);
            localStorage.clear();
            return;
        }
    }
    ngOnInit() { }
    clickedMarker(infowindow) {
        if (this.previous != undefined) {
            if (this.previous.close() != undefined)
                this.previous.close();
        }
        this.previous = infowindow;
    }
    mapClicked($event) {
        var event;
        event = $event;
        if (this.addDestiny) {
            this.markers.push({
                lat: event.coords.lat,
                lng: event.coords.lng,
                draggable: true,
                isDestination: true,
                photo: this.user.photo
            });
        }
        else {
            if (this.markers.length < 1) {
                this.markers.push({
                    lat: event.coords.lat,
                    lng: event.coords.lng,
                    draggable: true,
                    isDestination: false,
                    photo: this.user.photo
                });
            }
        }
    }
    markerDragEnd(m, $event) {
        this.origin = { lat: this.lat, lng: this.lng };
        this.destination = { lat: 24.799524, lng: 120.975017 };
        console.log('dragEnd', m, $event);
    }
    getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.markers.push({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                draggable: true,
                photo: this.user.photo
            });
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.zoom = 17;
            this.located = true;
        });
    }
    changePosition() {
        this.showInfo = true;
        if (this.markers.length > 0) {
            this.markers.shift();
        }
    }
    savePosition() {
        this.showInfo = false;
        console.log(this.markers, 'Guardar');
    }
    getDirection() {
        this.addDestiny = true;
        // Location within a string
        // this.origin = 'Taipei Main Station';
        // this.destination = 'Taiwan Presidential Office';
    }
}
DashboardDriverComponent.ɵfac = function DashboardDriverComponent_Factory(t) { return new (t || DashboardDriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardDriverComponent, selectors: [["app-dashboard-driver"]], decls: 7, vars: 7, consts: [[3, "latitude", "longitude", "zoom", "disableDefaultUI", "mapClick"], [3, "latitude", "longitude", "label", "iconUrl", 4, "ngFor", "ngForOf"], [3, "origin", "destination"], [1, "btn", "btn-info", "m-4", 3, "click"], [3, "latitude", "longitude", "label", "iconUrl"], [3, "isOpen"], ["infowindow", ""], [1, "btn", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function DashboardDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function DashboardDriverComponent_Template_agm_map_mapClick_0_listener($event) { return ctx.mapClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardDriverComponent_agm_marker_1_Template, 11, 9, "agm-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "agm-direction", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardDriverComponent_Template_button_click_3_listener() { return ctx.getCurrentPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mi Ubicacion Actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardDriverComponent_Template_button_click_5_listener() { return ctx.getDirection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Selecionar mi destino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("disableDefaultUI", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("origin", ctx.origin)("destination", ctx.destination);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirection"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLWRyaXZlci9kYXNoYm9hcmQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1kcml2ZXIvZGFzaGJvYXJkLWRyaXZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-driver',
                templateUrl: './dashboard-driver.component.html',
                styleUrls: ['./dashboard-driver.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "PhYt":
/*!*******************************************************************!*\
  !*** ./src/app/forgot/forgot-company/forgot-company.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotCompanyComponent", function() { return ForgotCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/notification.service */ "gdHf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ForgotCompanyComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotCompanyComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email debe tener un correo valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "remove-margin text-center": a0 }; };
function ForgotCompanyComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotCompanyComponent_div_18_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotCompanyComponent_div_18_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function ForgotCompanyComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function ForgotCompanyComponent__svg_svg_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotCompanyComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.ShowMsg);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function () { return ["/login-company"]; };
class ForgotCompanyComponent {
    constructor(formBuilder, companyService, _notificationSvc, router) {
        this.formBuilder = formBuilder;
        this.companyService = companyService;
        this._notificationSvc = _notificationSvc;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.hideMsg = false;
        this.timeSeconds = 8000;
    }
    ngOnInit() {
        this.forgotCompanyForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    }
    get f() { return this.forgotCompanyForm.controls; }
    onForgotPasswordCompanySubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgotCompanyForm.invalid) {
            return;
        }
        this.loading = true;
        const user = {
            email: this.f.email.value
        };
        this.companyService.forgotPassword(user).subscribe(data => {
            if (data.success) {
                this.loading = false;
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Correo enviado exitosamente',
                    html: data.msg,
                    showCancelButton: false,
                    allowEscapeKey: false,
                    confirmButtonText: 'OK',
                    allowOutsideClick: false,
                    buttonsStyling: false,
                    reverseButtons: true,
                    position: 'top',
                    customClass: { confirmButton: 'col-auto btn btn-info m-3' }
                })
                    .then((result) => {
                    if (result.value) {
                        this.router.navigate(['/home']);
                    }
                });
            }
            else {
                this.loading = false;
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        }, error => {
            this.loading = false;
            this._notificationSvc.warning('Hola', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
}
ForgotCompanyComponent.ɵfac = function ForgotCompanyComponent_Factory(t) { return new (t || ForgotCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ForgotCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotCompanyComponent, selectors: [["app-forgot-company"]], decls: 29, vars: 10, consts: [["id", "forgot-company", 1, "forgot"], [1, "container-fluid"], [1, "pt-4"], [1, "card", "bg-light"], [1, "card-body", "mx-auto", "pt-1", 2, "max-width", "400px"], [1, "text-center", "pt-2"], [1, "fa", "fa-lock", "fa-4x"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-envelope"], ["type", "text", "formControlName", "email", "placeholder", "Correo electronico", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 3, "ngClass", 4, "ngIf"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-yellow", "btn-block"], ["class", "fas fa-plus-circle", 4, "ngIf"], ["class", "loader", "viewBox", "0 0 24 24", 4, "ngIf"], [3, "routerLink"], ["class", "row no-gutters alert alert-warning error-message text-center mt-2", "role", "alert", 4, "ngIf"], [1, "invalid-feedback", 3, "ngClass"], [4, "ngIf"], [1, "fas", "fa-plus-circle"], ["viewBox", "0 0 24 24", 1, "loader"], ["cx", "12", "cy", "12", "r", "10", 1, "loader__value"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center", "mt-2"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"]], template: function ForgotCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Olvido Contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Puedes cambiar tu Contrase\u00F1a aqui.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotCompanyComponent_Template_form_ngSubmit_12_listener() { return ctx.onForgotPasswordCompanySubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotCompanyComponent_div_18_Template, 3, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ForgotCompanyComponent_i_21_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ForgotCompanyComponent__svg_svg_22_Template, 7, 0, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Enviar correo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tiene una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Iniciar sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ForgotCompanyComponent_div_28_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZm9yZ290L2ZvcmdvdC1jb21wYW55L2ZvcmdvdC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-company',
                templateUrl: './forgot-company.component.html',
                styleUrls: ['./forgot-company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "STdi":
/*!**************************************************************!*\
  !*** ./src/app/menu-registered/menu-registered.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuRegisteredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRegisteredComponent", function() { return MenuRegisteredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/company.service */ "hod3");
/* harmony import */ var _common_services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/media.service */ "fkS0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/notification.service */ "gdHf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/auth.service */ "AhZb");








class MenuRegisteredComponent {
    constructor(companyService, media, formBuilder, _notificationSvc, router, authService) {
        this.companyService = companyService;
        this.media = media;
        this.formBuilder = formBuilder;
        this._notificationSvc = _notificationSvc;
        this.router = router;
        this.authService = authService;
        this.userLogged = this.authService.getLocalUser();
        this.user = JSON.parse(this.userLogged);
        this.authService.getMyMenuList().subscribe(data => {
            console.log(data);
            if (data.length > 0) {
                this.foodMenuDataList = data;
            }
        }, error => {
            this._notificationSvc.warning('Hola ' + this.user.username + '', 'Ocurrio un error favor contactar a soporte o al administrador del sitio', 6000);
        });
    }
    ngOnInit() {
    }
}
MenuRegisteredComponent.ɵfac = function MenuRegisteredComponent_Factory(t) { return new (t || MenuRegisteredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"])); };
MenuRegisteredComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuRegisteredComponent, selectors: [["app-menu-registered"]], decls: 20, vars: 0, consts: [["id", "menu-registered"], [1, "row", "no-gutters"], [1, "col-12"], [1, "col-sm-6", "col-md-4", "col-lg-3", "mt-1", "mr-2"], [1, "card", "card-inverse", "card-info"], ["src", "https://picsum.photos/200/150/?random", 1, "card-img-top"], [1, "card-block"], [1, "profile", "profile-inline"], ["src", "https://picsum.photos/200/150/?random", "alt", "", 1, "profile-avatar"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "btn", "btn-info", "float-right", "btn-sm"]], template: function MenuRegisteredComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Restaurante: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tawshif Ahsan Khan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tawshif is a web designer living in Bangladesh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#menu-registered[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  font-size: 1em;\n  overflow: hidden;\n  padding: 0;\n  border: none;\n  border-radius: 0.28571429rem;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n}\n#menu-registered[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  font-size: 1em;\n  position: relative;\n  margin: 0;\n  padding: 1em;\n  border: none;\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\n  box-shadow: none;\n}\n#menu-registered[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n#menu-registered[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.28571429em;\n  font-weight: 700;\n  line-height: 1.2857em;\n}\n#menu-registered[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  clear: both;\n  margin-top: 0.5em;\n  color: rgba(0, 0, 0, 0.68);\n}\n#menu-registered[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  font-size: 1em;\n  position: static;\n  top: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 0.75em 1em;\n  color: rgba(0, 0, 0, 0.4);\n  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;\n  background: #fff;\n}\n#menu-registered[_ngcontent-%COMP%]   .card-inverse[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n#menu-registered[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  display: inline-block;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 25px;\n  height: 25px;\n  margin: 0;\n  border: 1px solid #fff;\n  border-radius: 50%;\n}\n#menu-registered[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n#menu-registered[_ngcontent-%COMP%]   .profile-inline[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  display: inline-block;\n}\n#menu-registered[_ngcontent-%COMP%]   .profile-inline[_ngcontent-%COMP%]    ~ .card-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 4px;\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tZW51LXJlZ2lzdGVyZWQvbWVudS1yZWdpc3RlcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtEQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUhSO0FBTUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUpSO0FBT0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDSSxxQ0FBQTtBQU5SO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFVSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUlI7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0FBVFI7QUFZSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZSIiwiZmlsZSI6ImFwcC9tZW51LXJlZ2lzdGVyZWQvbWVudS1yZWdpc3RlcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUtcmVnaXN0ZXJlZCB7XG4gICAgLmNhcmQge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1ibG9jayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLXRleHQge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAuNzVlbSAxZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1pbnZlcnNlIC5idG4ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gICAgfVxuICAgIFxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1pbmxpbmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRegisteredComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-registered',
                templateUrl: './menu-registered.component.html',
                styleUrls: ['./menu-registered.component.scss']
            }]
    }], function () { return [{ type: _common_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] }, { type: _common_services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'tico-eats';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WWIH":
/*!********************************************************************!*\
  !*** ./src/app/profile/profile-driver/profile-driver.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDriverComponent", function() { return ProfileDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileDriverComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileDriverComponent.ɵfac = function ProfileDriverComponent_Factory(t) { return new (t || ProfileDriverComponent)(); };
ProfileDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDriverComponent, selectors: [["app-profile-driver"]], decls: 2, vars: 0, template: function ProfileDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-driver works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvZmlsZS9wcm9maWxlLWRyaXZlci9wcm9maWxlLWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-driver',
                templateUrl: './profile-driver.component.html',
                styleUrls: ['./profile-driver.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YJXT":
/*!***********************************************!*\
  !*** ./src/app/common/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: BootstrapBreakpoints, UserState, TimeoutSeconds, Notification, NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapBreakpoints", function() { return BootstrapBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserState", function() { return UserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutSeconds", function() { return TimeoutSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
const BootstrapBreakpoints = [
    { Id: 0, Name: 'xs', MediaQuery: "(max-width: 575.98px)" },
    { Id: 1, Name: 'sm', MediaQuery: "(min-width: 576px) and (max-width: 767.98px)" },
    { Id: 2, Name: 'md', MediaQuery: "(min-width: 768px) and (max-width: 991.98px)" },
    { Id: 3, Name: 'lg', MediaQuery: "(min-width: 992px) and (max-width: 1199.98px)" },
    { Id: 4, Name: 'xl', MediaQuery: "(min-width: 1200px)" },
    { Id: 5, Name: 'landscape', MediaQuery: "(orientation: landscape)" }
];
const UserState = [
    { Id: 0, IS_ADMIN: true },
    { Id: 1, IS_USER: true },
    { Id: 2, IS_DRIVER: true },
    { Id: 3, IS_COMPANY: true }
];
const TimeoutSeconds = 95 * 60;
class Notification {
    constructor(id, type, title, message, timeout) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.message = message;
        this.timeout = timeout;
    }
}
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["success"] = 0] = "success";
    NotificationType[NotificationType["warning"] = 1] = "warning";
    NotificationType[NotificationType["error"] = 2] = "error";
    NotificationType[NotificationType["info"] = 3] = "info";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! agm-direction */ "IZFd");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/services/auth.service */ "AhZb");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-idle/core */ "+lv+");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register-user/register-user.component */ "JsUi");
/* harmony import */ var _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register-company/register-company.component */ "1Sm8");
/* harmony import */ var _register_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register-driver/register-driver.component */ "vFmH");
/* harmony import */ var _login_login_company_login_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login-company/login-company.component */ "a+pX");
/* harmony import */ var _login_login_driver_login_driver_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login-driver/login-driver.component */ "uSMz");
/* harmony import */ var _profile_profile_driver_profile_driver_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/profile-driver/profile-driver.component */ "WWIH");
/* harmony import */ var _profile_profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile/profile-company/profile-company.component */ "E5Ig");
/* harmony import */ var _profile_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/profile-user/profile-user.component */ "//7u");
/* harmony import */ var _admin_master_admin_master_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-master/admin-master.component */ "axCH");
/* harmony import */ var _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/dashboard-user/dashboard-user.component */ "JpYt");
/* harmony import */ var _dashboard_dashboard_company_dashboard_company_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard-company/dashboard-company.component */ "8kWL");
/* harmony import */ var _dashboard_dashboard_driver_dashboard_driver_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/dashboard-driver/dashboard-driver.component */ "MSoh");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "hMFs");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/services/notification.service */ "gdHf");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./notification/notification.component */ "4a+M");
/* harmony import */ var _menu_registered_menu_registered_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./menu-registered/menu-registered.component */ "STdi");
/* harmony import */ var _forgot_forgot_company_forgot_company_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./forgot/forgot-company/forgot-company.component */ "PhYt");
/* harmony import */ var _forgot_forgot_user_forgot_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./forgot/forgot-user/forgot-user.component */ "GNjL");
/* harmony import */ var _forgot_forgot_driver_forgot_driver_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./forgot/forgot-driver/forgot-driver.component */ "i+Zk");
/* harmony import */ var _reset_reset_company_reset_company_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./reset/reset-company/reset-company.component */ "JvrC");
/* harmony import */ var _reset_reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./reset/reset-user/reset-user.component */ "LkwM");
/* harmony import */ var _reset_reset_driver_reset_driver_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./reset/reset-driver/reset-driver.component */ "nWF4");















































function tokenGetter() {
    return localStorage.getItem("id_token");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_common_services_notification_service__WEBPACK_IMPORTED_MODULE_33__["NotificationService"], _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"]('637451349426-cboh4fm1lruorkdbhgr75jb584r05b8n.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"]('427713864913309')
                    }
                ]
            },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
            _ng_idle_core__WEBPACK_IMPORTED_MODULE_7__["NgIdleModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhos:8080", "foo.com", "bar.com"],
                },
            }),
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                apiKey: '',
                libraries: ['places', 'geometry', 'weather']
            }),
            agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirectionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_18__["RegisterUserComponent"],
        _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_19__["RegisterCompanyComponent"],
        _register_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_20__["RegisterDriverComponent"],
        _login_login_company_login_company_component__WEBPACK_IMPORTED_MODULE_21__["LoginCompanyComponent"],
        _login_login_driver_login_driver_component__WEBPACK_IMPORTED_MODULE_22__["LoginDriverComponent"],
        _profile_profile_driver_profile_driver_component__WEBPACK_IMPORTED_MODULE_23__["ProfileDriverComponent"],
        _profile_profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_24__["ProfileCompanyComponent"],
        _admin_master_admin_master_component__WEBPACK_IMPORTED_MODULE_26__["AdminMasterComponent"],
        _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_27__["DashboardUserComponent"],
        _dashboard_dashboard_company_dashboard_company_component__WEBPACK_IMPORTED_MODULE_28__["DashboardCompanyComponent"],
        _dashboard_dashboard_driver_dashboard_driver_component__WEBPACK_IMPORTED_MODULE_29__["DashboardDriverComponent"],
        _profile_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_25__["ProfileUserComponent"],
        _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_30__["MainLayoutComponent"],
        _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_31__["LoginLayoutComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
        _menu_registered_menu_registered_component__WEBPACK_IMPORTED_MODULE_35__["MenuRegisteredComponent"],
        _forgot_forgot_company_forgot_company_component__WEBPACK_IMPORTED_MODULE_36__["ForgotCompanyComponent"],
        _forgot_forgot_user_forgot_user_component__WEBPACK_IMPORTED_MODULE_37__["ForgotUserComponent"],
        _forgot_forgot_driver_forgot_driver_component__WEBPACK_IMPORTED_MODULE_38__["ForgotDriverComponent"],
        _reset_reset_company_reset_company_component__WEBPACK_IMPORTED_MODULE_39__["ResetCompanyComponent"],
        _reset_reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_40__["ResetUserComponent"],
        _reset_reset_driver_reset_driver_component__WEBPACK_IMPORTED_MODULE_41__["ResetDriverComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"], _ng_idle_core__WEBPACK_IMPORTED_MODULE_7__["NgIdleModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"], agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirectionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["ToolbarComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_18__["RegisterUserComponent"],
                    _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_19__["RegisterCompanyComponent"],
                    _register_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_20__["RegisterDriverComponent"],
                    _login_login_company_login_company_component__WEBPACK_IMPORTED_MODULE_21__["LoginCompanyComponent"],
                    _login_login_driver_login_driver_component__WEBPACK_IMPORTED_MODULE_22__["LoginDriverComponent"],
                    _profile_profile_driver_profile_driver_component__WEBPACK_IMPORTED_MODULE_23__["ProfileDriverComponent"],
                    _profile_profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_24__["ProfileCompanyComponent"],
                    _admin_master_admin_master_component__WEBPACK_IMPORTED_MODULE_26__["AdminMasterComponent"],
                    _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_27__["DashboardUserComponent"],
                    _dashboard_dashboard_company_dashboard_company_component__WEBPACK_IMPORTED_MODULE_28__["DashboardCompanyComponent"],
                    _dashboard_dashboard_driver_dashboard_driver_component__WEBPACK_IMPORTED_MODULE_29__["DashboardDriverComponent"],
                    _profile_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_25__["ProfileUserComponent"],
                    _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_30__["MainLayoutComponent"],
                    _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_31__["LoginLayoutComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
                    _menu_registered_menu_registered_component__WEBPACK_IMPORTED_MODULE_35__["MenuRegisteredComponent"],
                    _forgot_forgot_company_forgot_company_component__WEBPACK_IMPORTED_MODULE_36__["ForgotCompanyComponent"],
                    _forgot_forgot_user_forgot_user_component__WEBPACK_IMPORTED_MODULE_37__["ForgotUserComponent"],
                    _forgot_forgot_driver_forgot_driver_component__WEBPACK_IMPORTED_MODULE_38__["ForgotDriverComponent"],
                    _reset_reset_company_reset_company_component__WEBPACK_IMPORTED_MODULE_39__["ResetCompanyComponent"],
                    _reset_reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_40__["ResetUserComponent"],
                    _reset_reset_driver_reset_driver_component__WEBPACK_IMPORTED_MODULE_41__["ResetDriverComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
                    _ng_idle_core__WEBPACK_IMPORTED_MODULE_7__["NgIdleModule"].forRoot(),
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            allowedDomains: ["localhos:8080", "foo.com", "bar.com"],
                        },
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                        apiKey: '',
                        libraries: ['places', 'geometry', 'weather']
                    }),
                    agm_direction__WEBPACK_IMPORTED_MODULE_5__["AgmDirectionModule"]
                ],
                providers: [_common_services_notification_service__WEBPACK_IMPORTED_MODULE_33__["NotificationService"], _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"], {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"]('637451349426-cboh4fm1lruorkdbhgr75jb584r05b8n.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"]('427713864913309')
                                }
                            ]
                        },
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
                //AIzaSyC6XvMo8SNV30Pylr97UwPP6EPi1LGn_9A   key para google maps
            }]
    }], null, null); })();


/***/ }),

/***/ "a+pX":
/*!****************************************************************!*\
  !*** ./src/app/login/login-company/login-company.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCompanyComponent", function() { return LoginCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_common_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/constants/constants */ "YJXT");
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginCompanyComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginCompanyComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginCompanyComponent_div_13_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
} }
function LoginCompanyComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginCompanyComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginCompanyComponent_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginCompanyComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ShowMsg);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/forgot-company"]; };
const _c2 = function () { return ["/register-company"]; };
class LoginCompanyComponent {
    constructor(companyService, formBuilder, router) {
        this.companyService = companyService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.hideMsg = false;
        this.timeSeconds = 6000;
        this.UserState = src_app_common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["UserState"];
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const company = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.companyService.authenticateCompany(company).subscribe(data => {
            if (data.success) {
                switch (data.company.userState) {
                    case 0:
                        this.router.navigate(['/admin']);
                        break;
                    case 1:
                        this.router.navigate(['/dashboard-user']);
                        break;
                    case 2:
                        this.router.navigate(['/dashboard-driver']);
                        break;
                    case 3:
                        this.router.navigate(['/dashboard-company']);
                        break;
                    default:
                        break;
                }
                this.companyService.storeUserData(data.token, data.company);
            }
            else {
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        });
    }
}
LoginCompanyComponent.ɵfac = function LoginCompanyComponent_Factory(t) { return new (t || LoginCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginCompanyComponent, selectors: [["app-login-company"]], decls: 30, vars: 14, consts: [[1, "homeBody", "homeInit", "container-fluid", "px-4", "px-md-4", "py-5", "mx-auto"], [1, "row", "d-flex", "justify-content-center", "align"], [1, "card", "p-0", "border-0", "rounded-0", "mb-5"], [1, "card", "card2", "border-0", "rounded-0", "card0"], [1, "mb-0", "text-center"], [1, "text-center"], [1, "form-signin", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "font-weight-bold", "mb-0"], ["type", "text", "name", "email", "formControlName", "email", "placeholder", "abc@xyz.com", 1, "mb-4", "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF", 1, "form-control", 3, "ngClass"], [1, "text-sm", "ml-auto", "text-dim", 3, "routerLink"], [1, "row", "mt-2"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-block", "btn-inverse", "btn-sm"], [1, "btn", "btn-block", "btn-yellow", "btn-sm", 3, "routerLink"], ["class", "row no-gutters alert alert-warning error-message text-center mt-2", "role", "alert", 4, "ngIf"], ["src", "https://i.imgur.com/nUR4zg3.jpg", 1, "mt-auto"], [1, "invalid-feedback"], [4, "ngIf"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center", "mt-2"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"]], template: function LoginCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inicie sesi\u00F3n aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginCompanyComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginCompanyComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginCompanyComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Olvid\u00F3 contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginCompanyComponent_div_28_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4tY29tcGFueS9sb2dpbi1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-company',
                templateUrl: './login-company.component.html',
                styleUrls: ['./login-company.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "axCH":
/*!********************************************************!*\
  !*** ./src/app/admin-master/admin-master.component.ts ***!
  \********************************************************/
/*! exports provided: AdminMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMasterComponent", function() { return AdminMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "pxUr");





class AdminMasterComponent {
    constructor(formBuilder, mapsAPILoader) {
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.markerArray = [];
        this.marker = null;
        this.polyline = null;
        this.poly2 = null;
        this.speed = 0.000005;
        this.wait = 1;
        this.infowindow = null;
        this.timerHandle = null;
        this.steps = [];
        this.step = 50; // 5; // metres
        this.tick = 100; // milliseconds
        this.k = 0;
        this.stepnum = 0;
        this.lastVertex = 1;
        this.car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
        this.mapsAPILoader.load().then(() => {
            var mapProp = {
                center: new google.maps.LatLng(9.93040049002793, -84.09062837772197),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.icon = {
                path: this.car,
                scale: .7,
                strokeColor: 'white',
                strokeWeight: .10,
                fillOpacity: 1,
                fillColor: '#404040',
                offset: '5%',
                // rotation: parseInt(heading[i]),
                anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
            };
        });
    }
    get f() { return this.loginForm.controls; }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    createMarker(latlng, label, html) {
        var contentString = '<b>' + label + '</b><br>' + html;
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: label,
            zIndex: Math.round(latlng.lat() * -100000) << 5
        });
        this.marker.myname = label;
        google.maps.event.addListener(marker, 'click', function () {
            this.infowindow.setContent(contentString);
            this.infowindow.open(this.map, marker);
        });
        return marker;
    }
    initialize() {
        this.infowindow = new google.maps.InfoWindow({
            size: new google.maps.Size(150, 50)
        });
        // Instantiate a directions service.
        this.directionsService = new google.maps.DirectionsService();
        // Create a map and center it on Manhattan.
        var myOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        this.address = 'new york';
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': this.address
        }, function (results, status) {
            this.map.setCenter(results[0].geometry.location);
        });
        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
            map: this.map
        };
        this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
        // Instantiate an info window to hold step text.
        this.stepDisplay = new google.maps.InfoWindow();
        this.polyline = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
        this.poly2 = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
    }
    calcRoute() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
        }
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.polyline.setMap(null);
        this.poly2.setMap(null);
        this.directionsDisplay.setMap(null);
        this.polyline = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
        this.poly2 = new google.maps.Polyline({
            path: [],
            strokeColor: '#FF0000',
            strokeWeight: 3
        });
        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
            map: this.map
        };
        this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
        var start = document.forms[0].elements[0].value = this.f.start.value;
        ;
        var end = document.forms[0].elements[1].value = this.f.end.value;
        ;
        var travelMode = google.maps.DirectionsTravelMode.DRIVING;
        var request = {
            origin: start,
            destination: end,
            travelMode: travelMode
        };
        // Route the directions and pass the response to a
        // function to create markers for each step.
        this.directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                this.directionsDisplay.setDirections(response);
                var bounds = new google.maps.LatLngBounds();
                var route = response.routes[0];
                this.startLocation = new Object();
                this.endLocation = new Object();
                // For each route, display summary information.
                var path = response.routes[0].overview_path;
                var legs = response.routes[0].legs;
                for (var i = 0; i < legs.length; i++) {
                    if (i === 0) {
                        this.startLocation.latlng = legs[i].start_location;
                        this.startLocation.address = legs[i].start_address;
                        //   marker = createMarker(legs[i].start_location, "start", legs[i].start_address, "green");
                    }
                    this.endLocation.latlng = legs[i].end_location;
                    this.endLocation.address = legs[i].end_address;
                    var steps = legs[i].steps;
                    for (var j = 0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (var k = 0; k < nextSegment.length; k++) {
                            this.polyline.getPath().push(nextSegment[k]);
                            bounds.extend(nextSegment[k]);
                        }
                    }
                }
                this.polyline.setMap(this.map);
                this.map.fitBounds(bounds);
                this.map.setZoom(18);
                this.startAnimation();
            }
        });
    }
    updatePoly(d) {
        // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
        if (this.poly2.getPath().getLength() > 20) {
            this.poly2 = new google.maps.Polyline([this.polyline.getPath().getAt(this.lastVertex - 1)]);
            // map.addOverlay(poly2)
        }
        if (this.polyline.GetIndexAtDistance(d) < this.lastVertex + 2) {
            if (this.poly2.getPath().getLength() > 1) {
                this.poly2.getPath().removeAt(this.poly2.getPath().getLength() - 1);
            }
            this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.polyline.GetPointAtDistance(d));
        }
        else {
            this.poly2.getPath().insertAt(this.poly2.getPath().getLength(), this.endLocation.latlng);
        }
    }
    animate(d) {
        if (d > this.eol) {
            this.map.panTo(this.endLocation.latlng);
            this.marker.setPosition(this.endLocation.latlng);
            return;
        }
        var p = this.polyline.GetPointAtDistance(d);
        this.map.panTo(p);
        var lastPosn = this.marker.getPosition();
        this.marker.setPosition(p);
        var heading = google.maps.geometry.spherical.computeHeading(lastPosn, p);
        this.icon.rotation = heading;
        this.marker.setIcon(this.icon);
        this.updatePoly(d);
        this.timerHandle = setTimeout("animate(" + (d + this.step) + ")", this.tick);
    }
    startAnimation() {
        this.eol = this.polyline.Distance();
        this.map.setCenter(this.polyline.getPath().getAt(0));
        this.marker = new google.maps.Marker({
            position: this.polyline.getPath().getAt(0),
            map: this.map,
            icon: this.icon
        });
        this.poly2 = new google.maps.Polyline({
            path: [this.polyline.getPath().getAt(0)],
            strokeColor: "#0000FF",
            strokeWeight: 10
        });
        // map.addOverlay(poly2);
        setTimeout("animate(50)", 2000); // Allow time for the initial map display
        google.maps.event.addDomListener(window, 'load', this.initialize);
        google.maps.LatLng.prototype.distanceFrom = (newLatLng) => {
            var EarthRadiusMeters = 6378137.0; // meters
            var lat1 = this.lat();
            var lon1 = this.lng();
            var lat2 = newLatLng.lat();
            var lon2 = newLatLng.lng();
            var dLat = (lat2 - lat1) * Math.PI / 180;
            var dLon = (lon2 - lon1) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = EarthRadiusMeters * c;
            return d;
        };
        google.maps.LatLng.prototype.latRadians = () => {
            return this.lat() * Math.PI / 180;
        };
        google.maps.LatLng.prototype.lngRadians = () => {
            return this.lng() * Math.PI / 180;
        };
        // === A method which returns the length of a path in metres ===
        google.maps.Polygon.prototype.Distance = () => {
            var dist = 0;
            for (var i = 1; i < this.getPath().getLength(); i++) {
                dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
            }
            return dist;
        };
        // === A method which returns a GLatLng of a point a given distance along the path ===
        // === Returns null if the path is shorter than the specified distance ===
        google.maps.Polygon.prototype.GetPointAtDistance = (metres) => {
            // some awkward special cases
            if (metres == 0)
                return this.getPath().getAt(0);
            if (metres < 0)
                return null;
            if (this.getPath().getLength() < 2)
                return null;
            var dist = 0;
            var olddist = 0;
            for (var i = 1; (i < this.getPath().getLength() && dist < metres); i++) {
                olddist = dist;
                dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
            }
            if (dist < metres) {
                return null;
            }
            var p1 = this.getPath().getAt(i - 2);
            var p2 = this.getPath().getAt(i - 1);
            var m = (metres - olddist) / (dist - olddist);
            return new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m);
        };
        // === A method which returns an array of GLatLngs of points a given interval along the path ===
        google.maps.Polygon.prototype.GetPointsAtDistance = (metres) => {
            var next = metres;
            var points = [];
            // some awkward special cases
            if (metres <= 0)
                return points;
            var dist = 0;
            var olddist = 0;
            for (var i = 1; (i < this.getPath().getLength()); i++) {
                olddist = dist;
                dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
                while (dist > next) {
                    var p1 = this.getPath().getAt(i - 1);
                    var p2 = this.getPath().getAt(i);
                    var m = (next - olddist) / (dist - olddist);
                    points.push(new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m));
                    next += metres;
                }
            }
            return points;
        };
        // === A method which returns the Vertex number at a given distance along the path ===
        // === Returns null if the path is shorter than the specified distance ===
        google.maps.Polygon.prototype.GetIndexAtDistance = (metres) => {
            // some awkward special cases
            if (metres == 0)
                return this.getPath().getAt(0);
            if (metres < 0)
                return null;
            var dist = 0;
            var olddist = 0;
            for (var i = 1; (i < this.getPath().getLength() && dist < metres); i++) {
                olddist = dist;
                dist += this.getPath().getAt(i).distanceFrom(this.getPath().getAt(i - 1));
            }
            if (dist < metres) {
                return null;
            }
            return i;
        };
        // === Copy all the above functions to GPolyline ===
        google.maps.Polyline.prototype.Distance = google.maps.Polygon.prototype.Distance;
        google.maps.Polyline.prototype.GetPointAtDistance = google.maps.Polygon.prototype.GetPointAtDistance;
        google.maps.Polyline.prototype.GetPointsAtDistance = google.maps.Polygon.prototype.GetPointsAtDistance;
        google.maps.Polyline.prototype.GetIndexAtDistance = google.maps.Polygon.prototype.GetIndexAtDistance;
    }
}
AdminMasterComponent.ɵfac = function AdminMasterComponent_Factory(t) { return new (t || AdminMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"])); };
AdminMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMasterComponent, selectors: [["app-admin-master"]], decls: 8, vars: 1, consts: [["id", "tools"], ["action", "", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "start", "name", "start", "id", "start", "value", "union square, NY", 1, "form-control"], ["type", "text", "formControlName", "end", "name", "end", "id", "end", "value", "times square, NY", 1, "form-control"], ["type", "submit"], ["id", "map_canvas", 2, "width", "100%", "height", "100%"]], template: function AdminMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "start: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminMasterComponent_Template_form_ngSubmit_2_listener() { return ctx.calcRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "end: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0px;\n  font-family: Helvetica, Arial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi1tYXN0ZXIvYWRtaW4tbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUVKIiwiZmlsZSI6ImFwcC9hZG1pbi1tYXN0ZXIvYWRtaW4tbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5ib2R5IHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBtYXJnaW46MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-master',
                templateUrl: './admin-master.component.html',
                styleUrls: ['./admin-master.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] }]; }, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/locations.service */ "uDEF");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MapComponent_agm_marker_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mi posicion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r0.lat)("longitude", ctx_r0.lng);
} }
const _c0 = function () { return { height: 15, width: 20 }; };
const _c1 = function (a0, a1) { return { url: a0, scaledSize: a1 }; };
function MapComponent_agm_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pais_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", pais_r2.latlng[0])("longitude", pais_r2.latlng[1])("agmFitBounds", true)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, pais_r2.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pais_r2.translations.es);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Capital: ", pais_r2.capital, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Poblacion: ", pais_r2.population, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Moneda: ", pais_r2.currencies[0].name, "");
} }
class MapComponent {
    constructor(locationsService) {
        this.locationsService = locationsService;
        this.lat = 40;
        this.lng = -3;
        this.zoom = 6;
        this.mapTypeId = 'roadmap';
        this.located = false;
    }
    ngOnInit() {
        this.locationsService.getAll()
            .then(paises => this.paises = paises)
            .catch(errr => console.log(errr));
    }
    getCurrentPosition() {
        //Esta funcion mantiene mi poosition actual
        navigator.geolocation.getCurrentPosition(position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.zoom = 17;
            this.located = true;
            console.log(this.lat, 'Latitud');
            console.log(this.lng, 'Longitud');
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 5, vars: 7, consts: [[3, "latitude", "longitude", "zoom", "mapTypeId", "fitBounds"], [3, "latitude", "longitude", 4, "ngIf"], [3, "latitude", "longitude", "agmFitBounds", "iconUrl", 4, "ngFor", "ngForOf"], [3, "click"], [3, "latitude", "longitude"], [3, "latitude", "longitude", "agmFitBounds", "iconUrl"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapComponent_agm_marker_1_Template, 3, 2, "agm-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_agm_marker_2_Template, 10, 12, "agm-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_3_listener() { return ctx.getCurrentPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get Current Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("mapTypeId", ctx.mapTypeId)("fitBounds", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.located);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paises);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmFitBounds"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImFwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: src_app_common_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"] }]; }, null); })();


/***/ }),

/***/ "eBy6":
/*!***************************************************!*\
  !*** ./src/app/common/services/tokens.service.ts ***!
  \***************************************************/
/*! exports provided: TokensService, TokenContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensService", function() { return TokensService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenContainer", function() { return TokenContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TokensService {
    constructor(router) {
        this.router = router;
        this.container = new TokenContainer();
        this.checkToken = true;
        this.checkToken = true;
    }
    setToken(token, expire) {
        this.container.Token = token;
        this.container.Expire = expire;
        if (this.container.TimerRef == undefined && this.container.Expire != undefined) {
            this.checkToken = true;
            this.container.TimerRef = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60 * 1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(() => this.checkToken))
                .subscribe(() => { this.processToken(false); });
        }
    }
    clearToken() {
        this.checkToken = false;
        if (this.container.TimerRef)
            this.container.TimerRef.unsubscribe();
        this.container = new TokenContainer();
        this.saveToken(null, null);
    }
    getToken() {
        if (this.container.Token === "") {
            if (sessionStorage.getItem("access_token") === null)
                window.location.href = "/";
            else
                this.setToken(sessionStorage.getItem("access_token"), Number(sessionStorage.getItem("access_expire")));
        }
        return this.container;
    }
    ;
    saveToken(token, expire) {
        this.setToken(token, expire);
        if (token != null && expire != null) {
            sessionStorage.setItem("access_token", token);
            sessionStorage.setItem("access_expire", expire.toString());
        }
        else {
            sessionStorage.removeItem("access_token");
            sessionStorage.removeItem("access_expire");
        }
    }
    getMinutesToExpire(expire) {
        let nowTime = new Date();
        let diff = expire - (nowTime.getTime() / 1000);
        return (diff / 60);
    }
    processToken(reload) {
        if (this.container.TimerRef != undefined && this.container.Expire) {
            let expirein = this.getMinutesToExpire(this.container.Expire);
            //console.log('token ex ' + expirein);
            if (expirein < 30) {
                // this.apiSrvc.renewToken(this.container.Token)
                // .subscribe(
                //     data => {
                //         //console.log("renewed: ", data);
                //         if (data && data.ErrorMessage == "")
                //             this.saveToken(data.AccessToken, data.ExpirationEpoch);
                //     },
                //     error => {
                //     },
                //     () => {
                //         if (reload)
                //             window.location.reload();
                //     }
                // );
            }
            else if (reload)
                window.location.reload();
        }
    }
}
TokensService.ɵfac = function TokensService_Factory(t) { return new (t || TokensService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TokensService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokensService, factory: TokensService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokensService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class TokenContainer {
    constructor() {
        this.Token = '';
        this.Expire = 0;
        this.TimerRef = undefined;
    }
}


/***/ }),

/***/ "fkS0":
/*!**************************************************!*\
  !*** ./src/app/common/services/media.service.ts ***!
  \**************************************************/
/*! exports provided: MediaService, MediaResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaResponse", function() { return MediaResponse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "YJXT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");





class MediaService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.activeBreakpoints = [];
    }
    isMobile() {
        return this.activeBreakpoints.findIndex(breakpoint => breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][0].Name || breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][1].Name || breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][2].Name) > -1;
    }
    isTablet() {
        return this.activeBreakpoints.findIndex(breakpoint => breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][2].Name) > -1;
    }
    isLandscape() {
        return this.activeBreakpoints.findIndex(breakpoint => breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][5].Name) > -1;
    }
    isSmallScreen() {
        return this.activeBreakpoints.findIndex(breakpoint => breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][0].Name || breakpoint === _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"][1].Name) > -1;
    }
    getBreakpoints() {
        this.breakpoints = [];
        for (let media of _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"])
            this.breakpoints.push(media.MediaQuery);
        return this.breakpoints;
    }
    getBreakpointName(breakpointValue) {
        return _constants_constants__WEBPACK_IMPORTED_MODULE_1__["BootstrapBreakpoints"].find(breakpoint => breakpoint.MediaQuery === breakpointValue).Name;
    }
    subscribeMedia() {
        return this.breakpointObserver
            .observe(this.getBreakpoints())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((observeResponse) => this.getBreakpointsResponse(observeResponse.breakpoints)));
    }
    getInitState() {
        let mediaInfo = new MediaResponse();
        mediaInfo.IsMobile = this.isMobile();
        mediaInfo.IsTablet = this.isTablet();
        mediaInfo.IsLandscape = this.isLandscape();
        mediaInfo.IsSmallScreen = this.isSmallScreen();
        return mediaInfo;
    }
    getBreakpointsResponse(breakpoints) {
        this.activeBreakpoints = [];
        Object.keys(breakpoints).map((key) => {
            if (breakpoints[key])
                this.activeBreakpoints.push(this.getBreakpointName(key));
        });
        let mediaInfo = new MediaResponse();
        mediaInfo.IsMobile = this.isMobile();
        mediaInfo.IsTablet = this.isTablet();
        mediaInfo.IsLandscape = this.isLandscape();
        mediaInfo.IsSmallScreen = this.isSmallScreen();
        return mediaInfo;
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
MediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }]; }, null); })();
class MediaResponse {
    constructor() {
        this.IsMobile = false;
        this.IsTablet = false;
        this.IsLandscape = false;
        this.IsSmallScreen = false;
    }
}


/***/ }),

/***/ "gdHf":
/*!*********************************************************!*\
  !*** ./src/app/common/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "YJXT");




class NotificationService {
    constructor() {
        this.getHttpError = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getCustOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showContinue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearSideOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getHomeOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearRelatedGames = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clickBetContinue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.unreadMailOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._idx = 0;
    }
    getObservable() {
        return this._subject.asObservable();
    }
    info(title, message, timeout = 3000) {
        this._subject.next(new _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Notification"](this._idx++, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].info, title, message, timeout));
    }
    success(title, message, timeout = 3000) {
        this._subject.next(new _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Notification"](this._idx++, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].success, title, message, timeout));
    }
    warning(title, message, timeout = 3000) {
        this._subject.next(new _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Notification"](this._idx++, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].warning, title, message, timeout));
    }
    error(title, message, timeout = 0) {
        this._subject.next(new _constants_constants__WEBPACK_IMPORTED_MODULE_2__["Notification"](this._idx++, _constants_constants__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].error, title, message, timeout));
    }
    init() {
        this.getHttpError = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getCustOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showContinue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearSideOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getHomeOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clearRelatedGames = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.clickBetContinue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.unreadMailOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    notifyCustOptions() {
        this.getCustOptions.next(true);
    }
    onCustOptions() {
        return this.getCustOptions.asObservable();
    }
    notifyHttpError(httpError) {
        this.getHttpError.next(httpError);
    }
    onHttpError() {
        return this.getHttpError.asObservable();
    }
    notifyShowNext(show) {
        this.showContinue.next(show);
    }
    onShowNext() {
        return this.showContinue.asObservable();
    }
    notifyShowLoading(show) {
        this.showLoading.next(show);
    }
    onShowLoading() {
        return this.showLoading.asObservable();
    }
    notifyClearSideOptions(show) {
        this.clearSideOptions.next(show);
    }
    onClearSideOptions() {
        return this.clearSideOptions.asObservable();
    }
    notifyHomeOptions(option) {
        this.getHomeOptions.next(option);
    }
    onHomeOptions() {
        return this.getHomeOptions.asObservable();
    }
    notifyUnreadMail(showUnread) {
        this.unreadMailOptions.next(showUnread);
    }
    onReadMailOptions() {
        return this.unreadMailOptions.asObservable();
    }
    clear() {
        this.getHttpError.complete();
        this.getCustOptions.complete();
        this.showContinue.complete();
        this.showLoading.complete();
        this.clearSideOptions.complete();
        this.getCustOptions.complete();
        this.clearRelatedGames.complete();
        this.clickBetContinue.complete();
        this.unreadMailOptions.complete();
        this.updateHeader.complete();
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hMFs":
/*!****************************************************************!*\
  !*** ./src/app/layouts/login-layout/login-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function LoginLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LoginLayoutComponent {
    constructor(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.showWebHeader = false;
        this.showWebsite = false;
        this.imageSrc = '';
        this.part = [];
        this.domain = '';
        this.user = {
            loginName: '',
            password: '',
            webSite: ''
        };
    }
    ngOnInit() { }
}
LoginLayoutComponent.ɵfac = function LoginLayoutComponent_Factory(t) { return new (t || LoginLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginLayoutComponent, selectors: [["app-login-layout"]], decls: 3, vars: 1, consts: [["id", "login-layout-component", 1, "container-fluid", "p-0"], ["class", "loginHeader text-center", "layout", "row", 4, "ngIf"], ["layout", "row", 1, "loginHeader", "text-center"], ["width", "142", "height", "50", 3, "src"]], template: function LoginLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginLayoutComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0cy9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-layout',
                templateUrl: './login-layout.component.html',
                styleUrls: ['./login-layout.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "hod3":
/*!****************************************************!*\
  !*** ./src/app/common/services/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");






let CompanyService = class CompanyService {
    constructor(httpClient, jwtHelper) {
        this.httpClient = httpClient;
        this.jwtHelper = jwtHelper;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.isDev = false;
        this.isDev = false; // Change to false when you're gonna deploy your app, true when is on develop 
    }
    registerCompany(company, photo) {
        const fd = new FormData();
        fd.append('companyName', company.companyName);
        fd.append('username', company.username);
        fd.append('phone', company.phone);
        fd.append('userState', company.userState);
        fd.append('email', company.email);
        fd.append('password', company.password);
        fd.append('lat', company.lat);
        fd.append('lng', company.lng);
        fd.append('bussinesSelected', company.bussinesSelected);
        fd.append('image', photo);
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/company/register/new-company', fd);
        }
        else {
            return this.httpClient.post('company/register/new-company', fd);
        }
    }
    authenticateCompany(company) {
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/company/authenticate', company, { headers: this.headers });
        }
        else {
            return this.httpClient.post('company/authenticate', company, { headers: this.headers });
        }
    }
    registerNewMenu(menu, photo) {
        const fd = new FormData();
        fd.append('foodName', menu.foodName);
        fd.append('description', menu.description);
        fd.append('cost', menu.cost);
        fd.append('idCompany', menu.idCompany);
        fd.append('image', photo);
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/company/register/newMenu', fd, { headers: this.headers });
        }
        else {
            return this.httpClient.post('company/register/newMenu', fd, { headers: this.headers });
        }
    }
    getMyMenuList(id) {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        if (this.isDev) {
            return this.httpClient.get('http://localhost:8080/company/getAllMenuList/' + id);
        }
        else {
            return this.httpClient.get('company/getAllMenuList/' + id);
        }
    }
    updateNewMenu(menu, photo) {
        const fd = new FormData();
        fd.append('foodName', menu.foodName);
        fd.append('description', menu.description);
        fd.append('cost', menu.cost);
        fd.append('_id', menu._id);
        fd.append('idCompany', menu.idCompany);
        fd.append('image', photo);
        if (this.isDev) {
            return this.httpClient.put('http://localhost:8080/company/update/updateMenuItemList', fd);
        }
        else {
            return this.httpClient.put('company/update/updateMenuItemList', fd);
        }
    }
    deleteMenuItem(item) {
        const fd = new FormData();
        fd.append('_id', item._id);
        fd.append('idCompany', item.idCompany);
        if (this.isDev) {
            return this.httpClient.put('http://localhost:8080/company/delete/deleteMenuItemList', fd);
        }
        else {
            return this.httpClient.put('company/delete/deleteMenuItemLis', fd);
        }
    }
    forgotPassword(email) {
        const fd = new FormData();
        fd.append('email', email.email);
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/company/forgot', fd);
        }
        else {
            return this.httpClient.post('company/forgot/', fd);
        }
    }
    resetPassword(reset) {
        if (this.isDev) {
            return this.httpClient.post('http://localhost:8080/company/reset/', reset);
        }
        else {
            return this.httpClient.post('company/reset', reset);
        }
    }
    //   getUsers() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   updateUsers(user) { 
    //     let headers = new Headers();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     const token = localStorage.getItem('id_token');
    //     this.authToken = token;
    //     this.storeUserData(token,user);
    //     if(this.isDev){
    //       return this.http.put('http://localhost:8080/users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.put('users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getProfile() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/profile', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getSettings() {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/settings', {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/settings', {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   getUserMessages(id) {
    //     let headers = new Headers();
    //     this.loadToken();
    //     headers.append('Authorization', this.authToken);
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev){
    //       return this.http.get('http://localhost:8080/users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.get('users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   //New message 
    //   sendMessage(message) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   forgotPassword(email) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/forgot', email, {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/forgot', email, {headers: headers}).map(res => res.json());
    //     }
    //   }
    //   resetPassword(reset) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     if(this.isDev) {
    //       return this.http.post('http://localhost:8080/users/reset/', reset,  {headers: headers}).map(res => res.json());
    //     }else{
    //       return this.http.post('users/reset', reset, {headers: headers}).map(res => res.json());
    //     }
    //   }
    storeUserData(token, company) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('company', JSON.stringify(company));
        this.authToken = token;
        this.company = company;
    }
    getLocalCompany() {
        return localStorage.getItem("company");
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    loggedIn() {
        const token = localStorage.getItem('id_token');
        return token != null && !this.jwtHelper.isTokenExpired(token);
    }
    logout() {
        this.authToken = null;
        this.company = null;
        localStorage.clear();
    }
};
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CompanyService);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "i+Zk":
/*!*****************************************************************!*\
  !*** ./src/app/forgot/forgot-driver/forgot-driver.component.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotDriverComponent", function() { return ForgotDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ForgotDriverComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotDriverComponent.ɵfac = function ForgotDriverComponent_Factory(t) { return new (t || ForgotDriverComponent)(); };
ForgotDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotDriverComponent, selectors: [["app-forgot-driver"]], decls: 2, vars: 0, template: function ForgotDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forgot-driver works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZm9yZ290L2ZvcmdvdC1kcml2ZXIvZm9yZ290LWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-driver',
                templateUrl: './forgot-driver.component.html',
                styleUrls: ['./forgot-driver.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nWF4":
/*!**************************************************************!*\
  !*** ./src/app/reset/reset-driver/reset-driver.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetDriverComponent", function() { return ResetDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResetDriverComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetDriverComponent.ɵfac = function ResetDriverComponent_Factory(t) { return new (t || ResetDriverComponent)(); };
ResetDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetDriverComponent, selectors: [["app-reset-driver"]], decls: 2, vars: 0, template: function ResetDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reset-driver works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVzZXQvcmVzZXQtZHJpdmVyL3Jlc2V0LWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-driver',
                templateUrl: './reset-driver.component.html',
                styleUrls: ['./reset-driver.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
class NotFoundComponent {
    constructor(authService) {
        this.authService = authService;
        localStorage.clear();
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 15, vars: 2, consts: [[1, "page_404"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "col-sm-10", "col-sm-offset-1", "text-center"], [1, "four_zero_four_bg"], [1, "text-center"], [1, "contant_box_404"], [1, "h2"], [1, "btn", "link_404", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Oh no.. parece que te perdiste ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "La p\u00E1gina que buscas no est\u00E1 disponible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".page_404[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  background: #fff;\n  font-family: \"Arvo\", serif;\n}\n\n.page_404[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.four_zero_four_bg[_ngcontent-%COMP%] {\n  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);\n  height: 400px;\n  background-position: center;\n}\n\n.four_zero_four_bg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n\n.four_zero_four_bg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n\n.link_404[_ngcontent-%COMP%] {\n  color: #fff !important;\n  padding: 10px 20px;\n  background: #39ac31;\n  margin: 20px 0;\n  display: inline-block;\n}\n\n.contant_box_404[_ngcontent-%COMP%] {\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZUFBQTtFQUFnQixnQkFBQTtFQUFpQiwwQkFBQTtBQUk1Qzs7QUFEQTtFQUFnQixXQUFBO0FBS2hCOztBQUhBO0VBRUMsK0ZBQUE7RUFDRyxhQUFBO0VBQ0EsMkJBQUE7QUFLSjs7QUFEQztFQUNBLGVBQUE7QUFJRDs7QUFERTtFQUNELGVBQUE7QUFJRDs7QUFEQztFQUNELHNCQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUhBO0VBQWtCLGlCQUFBO0FBT2xCIiwiZmlsZSI6ImFwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VfNDA0eyBwYWRkaW5nOjQwcHggMDsgYmFja2dyb3VuZDojZmZmOyBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcbn1cblxuLnBhZ2VfNDA0ICBpbWd7IHdpZHRoOjEwMCU7fVxuXG4uZm91cl96ZXJvX2ZvdXJfYmd7XG4gXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2Vycy8yODU0NzUvc2NyZWVuc2hvdHMvMjA4MzA4Ni9kcmliYmJsZV8xLmdpZik7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gfVxuIFxuIFxuIC5mb3VyX3plcm9fZm91cl9iZyBoMXtcbiBmb250LXNpemU6ODBweDtcbiB9XG4gXG4gIC5mb3VyX3plcm9fZm91cl9iZyBoM3tcbiBmb250LXNpemU6ODBweDtcbiB9XG4gXG4gLmxpbmtfNDA0eyBcbmNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzM5YWMzMTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxuLmNvbnRhbnRfYm94XzQwNHsgbWFyZ2luLXRvcDotNTBweDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return [{ type: _common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"] }]; }, null); })();


/***/ }),

/***/ "rQ7a":
/*!**************************************************************!*\
  !*** ./src/app/layouts/main-layout/main-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/core */ "+lv+");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/constants/constants */ "YJXT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/services/company.service */ "hod3");
/* harmony import */ var src_app_common_services_media_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/media.service */ "fkS0");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/notification.service */ "gdHf");
/* harmony import */ var _common_services_tokens_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/tokens.service */ "eBy6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../notification/notification.component */ "4a+M");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../toolbar/toolbar.component */ "4zdL");
















function MainLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.hideMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function MainLayoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/menu-registered"]; };
function MainLayoutComponent_div_4_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comprar comida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mis Compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Eventos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configuracion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Servicio al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Acerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_4_ul_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", ctx_r3.usernameLogged, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function MainLayoutComponent_div_4_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mis Viajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mis Compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Eventos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configuracion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Servicio al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Acerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_4_ul_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", ctx_r4.usernameLogged, " ");
} }
function MainLayoutComponent_div_4_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Configuracion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Eventos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servicio al cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_div_4_ul_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", ctx_r5.usernameLogged, " ");
} }
function MainLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_4_ul_1_Template, 27, 3, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_4_ul_2_Template, 27, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainLayoutComponent_div_4_ul_3_Template, 21, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user.userState === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user.userState === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user.userState === 3);
} }
const _c1 = function (a0) { return { "page-content-wrapper": a0 }; };
const _c2 = function (a0) { return { "width": a0 }; };
class MainLayoutComponent {
    constructor(router, authService, companyService, idle, media, notification, tokenSvc) {
        this.router = router;
        this.authService = authService;
        this.companyService = companyService;
        this.idle = idle;
        this.media = media;
        this.notification = notification;
        this.tokenSvc = tokenSvc;
        this.isWarning = false;
        this.errMsg = "Please click HOME to refresh.";
        this.hideMsg = true;
        this.countdown = 0;
        this.countPct = 100;
        this.loading = false;
        this.httpSubscription = this.notification.onHttpError().subscribe((result) => {
            this.onAuthRequired(result);
        });
        this.showLoadingSubscription = this.notification.onShowLoading().subscribe((result) => {
            this.loading = result;
        });
        this.mediaSubscription = this.media.subscribeMedia().subscribe(media => {
            this.Media = media;
            if (media.IsMobile) {
                setTimeout(() => { $("#wrapper").removeClass("toggled"); }, 1);
            }
        });
        this.userLogged = this.authService.getLocalUser();
        if (this.userLogged == null) {
            this.userLogged = this.companyService.getLocalCompany();
        }
        this.user = JSON.parse(this.userLogged);
        this.usernameLogged = (this.user.username == null) ? this.user.companyName : this.user.username;
        $(function () {
            $("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        });
        setInterval(() => { this.detectWakeFromSleep(), 800; });
        idle.setIdle(_common_constants_constants__WEBPACK_IMPORTED_MODULE_4__["TimeoutSeconds"]);
        idle.setTimeout(30);
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTERRUPTSOURCES"]);
        this.countPct = 100;
        /*this.idleStartSubscription = idle.onIdleStart.subscribe(() => {
            console.log('You\'ve gone idle!');
        });*/
        this.idleEndSubscription = idle.onIdleEnd.subscribe(() => {
            this.isWarning = false;
            this.countPct = 100;
            $('#TimeOut-Modal').modal('hide');
            //console.log('No longer idle.');
        });
        this.warningSubscription = idle.onTimeoutWarning.subscribe((countTimer) => {
            this.countdown = countTimer;
            this.isWarning = true;
            if (countTimer == this.idle.getTimeout())
                this.barPercentage();
            $('#TimeOut-Modal').modal('show');
            //console.log('You will time out in ' + countdown + ' seconds!');
        });
        this.timeoutSubscription = idle.onTimeout.subscribe(() => {
            $('#TimeOut-Modal').modal('hide');
            $('.modal').modal('hide');
            this.isWarning = false;
            //console.log('Timed out!');
            this.logout();
        });
        this.idle.watch();
    }
    ngOnInit() {
        if (this.Media.IsMobile) {
            $("#wrapper").removeClass("toggled");
        }
    }
    onAuthRequired(result) {
        if (result == 200)
            this.hideMsg = true;
        else
            this.hideMsg = false;
        if (result == 401) {
            this.errMsg = 'Your session has expired!';
            setTimeout(() => { this.logout(); }, 1500);
        }
    }
    detectWakeFromSleep() {
        let now = new Date().getTime();
        let delta = now - this.lastTick;
        if (delta > 60 * 1000) {
            $('#TimeOut-Modal').modal('hide');
            $('.modal').modal('hide');
            this.idle.stop();
            this.tokenSvc.processToken(true);
        }
        this.lastTick = now;
    }
    barPercentage() {
        let count = this.idle.getTimeout();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(() => this.isWarning))
            .subscribe(() => {
            count -= .5;
            this.countPct = (100 * count) / this.idle.getTimeout();
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/home']);
    }
    ngOnDestroy() {
        this.idle.stop();
        if (this.httpSubscription)
            this.httpSubscription.unsubscribe();
        if (this.idleEndSubscription)
            this.idleEndSubscription.unsubscribe();
        if (this.timeoutSubscription)
            this.timeoutSubscription.unsubscribe();
        if (this.warningSubscription)
            this.warningSubscription.unsubscribe();
        if (this.showLoadingSubscription)
            this.showLoadingSubscription.unsubscribe();
        if (this.mediaSubscription)
            this.mediaSubscription.unsubscribe();
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["Idle"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_media_service__WEBPACK_IMPORTED_MODULE_8__["MediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_tokens_service__WEBPACK_IMPORTED_MODULE_10__["TokensService"])); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 22, vars: 11, consts: [[1, "container-fluid", 2, "padding-left", "0px", "padding-right", "0px"], ["class", "sticky-top", 4, "ngIf"], ["class", "progress", "style", "height: 6px;", 4, "ngIf"], ["id", "wrapper"], ["id", "sidebar-wrapper", 4, "ngIf"], [3, "ngClass"], ["tabindex", "-1", "role", "dialog", "id", "TimeOut-Modal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header", "text-center", "d-block"], [1, "modal-title", "font-weight-bold"], [1, "modal-body", "ml-1", "mr-1"], [1, "text-center"], [1, "progress", "mt-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 3, "ngStyle"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-sm", "btn-info", "mr-auto"], [1, "sticky-top"], ["role", "alert", 1, "alert", "alert-danger", "error-message", 3, "hidden"], [1, "d-flex", "flex-row", "align-items-center"], [1, "fas", "fa-arrow-circle-down"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "100%"], ["id", "sidebar-wrapper"], ["class", "sidebar-nav", 4, "ngIf"], [1, "sidebar-nav"], [1, "sidebar-brand"], ["href", "#"], [3, "routerLink"], [1, "sidebar-body", "d-flex", "flex-column", "flex-grow-1"], [1, "mt-auto"], ["type", "button", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_1_Template, 9, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainLayoutComponent_div_4_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Session is about to end!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stay Logged In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.userLogged));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You'll be logged out in ", ctx.countdown, " sec(s)...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.countPct + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.countPct);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["#wrapper[_ngcontent-%COMP%] {\n  padding-left: 0;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%] {\n  padding-right: 250px;\n}\n\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: fixed;\n  right: 250px;\n  width: 0;\n  height: 100%;\n  margin-right: -250px;\n  overflow-y: auto;\n  background: #193239;\n  transition: all 0.5s ease;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.page-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#wrapper.toggled[_ngcontent-%COMP%]   .page-content-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-right: 0px;\n}\n\n\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]    > .sidebar-brand[_ngcontent-%COMP%] {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]    > .sidebar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]    > .sidebar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: none;\n}\n\n@media (min-width: 768px) {\n  #wrapper[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%] {\n    padding-right: 250px;\n  }\n\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 0;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n\n  .page-content-wrapper[_ngcontent-%COMP%] {\n    padding: 20px;\n    position: relative;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   .page-content-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXRzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUlBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFJQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBS0EsbUJBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGOztFQUtBO0lBQ0Usb0JBQUE7RUFGRjs7RUFJQTtJQUNFLFFBQUE7RUFERjs7RUFHQTtJQUNFLFlBQUE7RUFBRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQUNGOztFQUNBO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJhcHAvbGF5b3V0cy9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1MHB4O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjUwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTI1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMTkzMjM5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ucGFnZS1jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBwYWRkaW5nOiAxNXB4O1xufVxuXG4jd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cblxuLyogU2lkZWJhciBTdHlsZXMgKi9cblxuLnNpZGViYXItbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc2lkZWJhci1uYXYgbGkge1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCBhIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAjd3JhcHBlci50b2dnbGVkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcbiAgfVxuICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAucGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN3cmFwcGVyLnRvZ2dsZWQgLnBhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthServices"] }, { type: src_app_common_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"] }, { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["Idle"] }, { type: src_app_common_services_media_service__WEBPACK_IMPORTED_MODULE_8__["MediaService"] }, { type: _common_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }, { type: _common_services_tokens_service__WEBPACK_IMPORTED_MODULE_10__["TokensService"] }]; }, null); })();


/***/ }),

/***/ "uDEF":
/*!******************************************************!*\
  !*** ./src/app/common/services/locations.service.ts ***!
  \******************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LocationsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
    }
    getAll() {
        return this.httpClient.get(this.baseUrl).toPromise();
    }
}
LocationsService.ɵfac = function LocationsService_Factory(t) { return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationsService, factory: LocationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uSMz":
/*!**************************************************************!*\
  !*** ./src/app/login/login-driver/login-driver.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDriverComponent", function() { return LoginDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constants/constants */ "YJXT");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginDriverComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginDriverComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginDriverComponent_div_13_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
} }
function LoginDriverComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginDriverComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginDriverComponent_div_18_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginDriverComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ShowMsg);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return ["/forgot-driver"]; };
const _c2 = function () { return ["/register-user"]; };
class LoginDriverComponent {
    constructor(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.hideMsg = false;
        this.timeSeconds = 3000;
        this.UserState = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["UserState"];
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const user = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.authenticateUser(user).subscribe(data => {
            console.log(data.user.userState);
            if (data.success) {
                switch (data.user.userState) {
                    case 0:
                        this.router.navigate(['/admin']);
                        break;
                    case 1:
                        this.router.navigate(['/dashboard-user']);
                        break;
                    case 2:
                        this.router.navigate(['/dashboard-driver']);
                        break;
                    case 3:
                        this.router.navigate(['/dashboard-company']);
                        break;
                    default:
                        break;
                }
                this.authService.storeUserData(data.token, data.user);
            }
            else {
                this.hideMsg = true;
                this.ShowMsg = data.msg;
                setTimeout(() => { this.hideMsg = false; }, this.timeSeconds);
            }
        });
    }
}
LoginDriverComponent.ɵfac = function LoginDriverComponent_Factory(t) { return new (t || LoginDriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginDriverComponent, selectors: [["app-login-driver"]], decls: 30, vars: 14, consts: [[1, "homeBody", "homeInit", "container-fluid", "px-4", "px-md-4", "py-5", "mx-auto"], [1, "row", "d-flex", "justify-content-center", "align"], [1, "card", "p-0", "border-0", "rounded-0", "mb-5"], [1, "card", "card2", "border-0", "rounded-0", "card0"], [1, "mb-0", "text-center"], [1, "text-center"], [1, "form-signin", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "font-weight-bold", "mb-0"], ["type", "text", "name", "email", "formControlName", "email", "placeholder", "abc@xyz.com", 1, "mb-4", "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF", 1, "form-control", 3, "ngClass"], [1, "text-sm", "ml-auto", "text-dim", 3, "routerLink"], [1, "row", "mt-2"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-block", "btn-inverse", "btn-sm"], [1, "btn", "btn-block", "btn-yellow", "btn-sm", 3, "routerLink"], ["class", "row no-gutters alert alert-warning error-message text-center", "role", "alert", 4, "ngIf"], ["src", "https://i.imgur.com/nUR4zg3.jpg", 1, "mt-auto"], [1, "invalid-feedback"], [4, "ngIf"], ["role", "alert", 1, "row", "no-gutters", "alert", "alert-warning", "error-message", "text-center"], [1, "fas", "fa-times-circle", "mt-1", "mr-3"]], template: function LoginDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inicie sesi\u00F3n aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginDriverComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginDriverComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginDriverComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Olvid\u00F3 contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginDriverComponent_div_28_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4tZHJpdmVyL2xvZ2luLWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-driver',
                templateUrl: './login-driver.component.html',
                styleUrls: ['./login-driver.component.scss']
            }]
    }], function () { return [{ type: _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthServices"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "vFmH":
/*!***********************************************************************!*\
  !*** ./src/app/register/register-driver/register-driver.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDriverComponent", function() { return RegisterDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegisterDriverComponent {
    constructor() { }
    ngOnInit() {
        $(function () {
            $('#datetimepicker1').datetimepicker();
        });
    }
}
RegisterDriverComponent.ɵfac = function RegisterDriverComponent_Factory(t) { return new (t || RegisterDriverComponent)(); };
RegisterDriverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterDriverComponent, selectors: [["app-register-driver"]], decls: 43, vars: 0, consts: [[1, "container-fluid", "homeBody", "px-4", "px-md-4", "py-5", "mx-auto"], [1, "row", "d-flex", "justify-content-center", "align"], [1, "card", "border-0", "rounded-0", "mb-5"], [1, "mb-2"], [1, "mb-3"], [1, "font-weight-bold", "mb-0"], ["type", "text", "name", "name", "placeholder", "John Harry", 1, "mb-4"], ["type", "text", "name", "username", "placeholder", "JohnyHarry", 1, "mb-4"], ["type", "text", "name", "email", "placeholder", "abc@xyz.com", 1, "mb-4"], ["type", "number", "name", "phone", "placeholder", "(506) 1234567890", 1, "mb-4"], ["type", "text", "name", "phone", "placeholder", "(506) 1234567890", 1, "mb-4"], ["id", "datetimepicker1", 1, "input-group", "date"], ["type", "date", 1, "form-control"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-calendar"], ["type", "password", "name", "password", "placeholder", "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", "minlength", "8"], [1, "text-muted"], ["name", "address", 1, "mb-4"], [1, "custom-control", "custom-checkbox", "custom-control-inline", "mt-4"], ["id", "chk1", "type", "checkbox", "name", "chk", "checked", "", 1, "custom-control-input"], ["for", "chk1", 1, "custom-control-label", "text-sm"], [1, "row", "px-3", "mt-5", "mx-auto", "justify-content-center"], ["type", "submit", 1, "btn", "btn-yellow", "px-3", "mr-3"]], template: function RegisterDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Complete los espacios siguientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre Usurario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Placa de la moto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fecha de nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Minimo is 8 characteres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Direccion Domicilio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Estoy de acuerdo a los t\u00E9rminos y servicos, t\u00E9rminos de pagos y pol\u00EDtica de privacidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVnaXN0ZXIvcmVnaXN0ZXItZHJpdmVyL3JlZ2lzdGVyLWRyaXZlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterDriverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-driver',
                templateUrl: './register-driver.component.html',
                styleUrls: ['./register-driver.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register-user/register-user.component */ "JsUi");
/* harmony import */ var _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-company/register-company.component */ "1Sm8");
/* harmony import */ var _register_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register-driver/register-driver.component */ "vFmH");
/* harmony import */ var _login_login_company_login_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-company/login-company.component */ "a+pX");
/* harmony import */ var _login_login_driver_login_driver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login-driver/login-driver.component */ "uSMz");
/* harmony import */ var _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard-user/dashboard-user.component */ "JpYt");
/* harmony import */ var _dashboard_dashboard_company_dashboard_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard-company/dashboard-company.component */ "8kWL");
/* harmony import */ var _dashboard_dashboard_driver_dashboard_driver_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard-driver/dashboard-driver.component */ "MSoh");
/* harmony import */ var _profile_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile-user/profile-user.component */ "//7u");
/* harmony import */ var _profile_profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile-company/profile-company.component */ "E5Ig");
/* harmony import */ var _profile_profile_driver_profile_driver_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile-driver/profile-driver.component */ "WWIH");
/* harmony import */ var _admin_master_admin_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-master/admin-master.component */ "axCH");
/* harmony import */ var _common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/admin/admin.guard */ "FEVr");
/* harmony import */ var _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/login-layout/login-layout.component */ "hMFs");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _menu_registered_menu_registered_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu-registered/menu-registered.component */ "STdi");
/* harmony import */ var _forgot_forgot_company_forgot_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot/forgot-company/forgot-company.component */ "PhYt");
/* harmony import */ var _forgot_forgot_user_forgot_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forgot/forgot-user/forgot-user.component */ "GNjL");
/* harmony import */ var _forgot_forgot_driver_forgot_driver_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forgot/forgot-driver/forgot-driver.component */ "i+Zk");
/* harmony import */ var _reset_reset_company_reset_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reset/reset-company/reset-company.component */ "JvrC");
/* harmony import */ var _reset_reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reset/reset-user/reset-user.component */ "LkwM");
/* harmony import */ var _reset_reset_driver_reset_driver_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reset/reset-driver/reset-driver.component */ "nWF4");





























const routes = [
    {
        path: '',
        component: _layouts_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_17__["LoginLayoutComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'forgot-company', component: _forgot_forgot_company_forgot_company_component__WEBPACK_IMPORTED_MODULE_21__["ForgotCompanyComponent"] },
            { path: 'forgot-user', component: _forgot_forgot_user_forgot_user_component__WEBPACK_IMPORTED_MODULE_22__["ForgotUserComponent"] },
            { path: 'forgot-driver', component: _forgot_forgot_driver_forgot_driver_component__WEBPACK_IMPORTED_MODULE_23__["ForgotDriverComponent"] },
            { path: 'reset-company/:token', component: _reset_reset_company_reset_company_component__WEBPACK_IMPORTED_MODULE_24__["ResetCompanyComponent"] },
            { path: 'reset-user/:token', component: _reset_reset_user_reset_user_component__WEBPACK_IMPORTED_MODULE_25__["ResetUserComponent"] },
            { path: 'reset-driver/:token', component: _reset_reset_driver_reset_driver_component__WEBPACK_IMPORTED_MODULE_26__["ResetDriverComponent"] },
            { path: 'login-company', component: _login_login_company_login_company_component__WEBPACK_IMPORTED_MODULE_7__["LoginCompanyComponent"] },
            { path: 'login-driver', component: _login_login_driver_login_driver_component__WEBPACK_IMPORTED_MODULE_8__["LoginDriverComponent"] },
            { path: 'register-user', component: _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"] },
            { path: 'register-company', component: _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_5__["RegisterCompanyComponent"] },
            { path: 'register-driver', component: _register_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_6__["RegisterDriverComponent"] }
            // { path: 'maintenance', component: MaintenanceComponent },
        ]
    },
    {
        path: '',
        component: _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_18__["MainLayoutComponent"],
        children: [
            { path: 'admin', component: _admin_master_admin_master_component__WEBPACK_IMPORTED_MODULE_15__["AdminMasterComponent"] },
            { path: 'dashboard-user', component: _dashboard_dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_9__["DashboardUserComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'dashboard-company', component: _dashboard_dashboard_company_dashboard_company_component__WEBPACK_IMPORTED_MODULE_10__["DashboardCompanyComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'dashboard-driver', component: _dashboard_dashboard_driver_dashboard_driver_component__WEBPACK_IMPORTED_MODULE_11__["DashboardDriverComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'profile-user', component: _profile_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_12__["ProfileUserComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'profile-company', component: _profile_profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_13__["ProfileCompanyComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'profile-driver', component: _profile_profile_driver_profile_driver_component__WEBPACK_IMPORTED_MODULE_14__["ProfileDriverComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'menu-registered', component: _menu_registered_menu_registered_component__WEBPACK_IMPORTED_MODULE_20__["MenuRegisteredComponent"], canActivate: [_common_admin_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
            { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"] },
            { path: '**', redirectTo: '/404' }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload", scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload", scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map