(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"email\"\r\n          name=\"email\"\r\n          placeholder=\"Email Address\"\r\n          #emailInput=\"ngModel\" ngModel required email >\r\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"password\" ngModel matInput name=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\" required>\r\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password.</mat-error>\r\n      </mat-form-field>\r\n      <button\r\n        mat-raised-button\r\n        color=\"accent\"  \r\n        type=\"submit\" *ngIf=\"!isLoading\">Login</button>\r\n    </form>\r\n  </mat-card>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"email\"\r\n          name=\"email\"\r\n          placeholder=\"Email Address\"\r\n          #emailInput=\"ngModel\" ngModel required email >\r\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email.</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"password\" ngModel matInput name=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\" required>\r\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password.</mat-error>\r\n      </mat-form-field>\r\n      <button\r\n        mat-raised-button\r\n        color=\"accent\"  \r\n        type=\"submit\" *ngIf=\"!isLoading\">Signup</button>\r\n    </form>\r\n  </mat-card>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An error occured!</h1>\n<div mat-dialog-content>\n    <p class=\"mat-body-1\">{{ data.message }}</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button mat-dialog-close>Close</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span><a routerLink=\"/\">MyMensages</a></span>\n    <span class=\"spacer\"></span>\n    <ul>\n        <li *ngIf=\"userIsAuthenticated\">\n            <a mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\">New Post</a>\n        </li>\n        <li *ngIf=\"!userIsAuthenticated\"> \n            <a mat-button routerLink=\"/login\" routerLinkActive=\"mat-accent\">Login</a>\n        </li>\n        <li *ngIf=\"!userIsAuthenticated\">\n            <a mat-button routerLink=\"/signup\" routerLinkActive=\"mat-accent\">Signup</a>\n        </li>\n        <li *ngIf=\"userIsAuthenticated\">\n            <button mat-button (click)=\"onLogout()\">Logout</button>\n        </li>\n    </ul>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input\n        matInput\n        type=\"text\"\n        name=\"title\"\n        placeholder=\"Post Title\"\n        formControlName=\"title\">\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\n      <input type=\"file\"  #filePicker (change)=\"onImagePicked($event)\"/>\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !=='' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\" />\n    </div>\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        name=\"content\"\n        placeholder=\"Post Content\"\n        formControlName=\"content\"></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <button\n      mat-raised-button\n      color=\"accent\"\n      type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let post of posts\">\n    <mat-expansion-panel-header>\n      {{ post.title }}\n    </mat-expansion-panel-header>\n    <div class=\"post-image\">\n      <img [src]=\"post.imagePath\" [alt]=\"title\" />\n    </div>\n    <p>{{ post.content }}</p>\n    <mat-action-row *ngIf=\"userIsAuthenticated && userId === post.creator\">\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPageChange($event)\" *ngIf=\"posts.length > 0\"></mat-paginator>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n"

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4iXX0= */"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.getAuthStatusListener();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _app_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app/error.interceptor */ "./src/app/app/error.interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _app_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/error.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/app/error.interceptor.ts ***!
  \******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            console.log(error);
            var errorMessage = "An Unknow error occured";
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            _this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(["/login"]);
        }
        return isAuth;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/user/signup", authData)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/user/login", authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationData = new Date(now.getTime() + expiresInDuration * 1000);
                _this.saveAuthData(token, expirationData, _this.userId);
                _this.router.navigate(["/"]);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    ;
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationData.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.userId = null;
        this.router.navigate(["/"]);
    };
    AuthService.prototype.saveAuthData = function (token, expirationData, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationData.toISOString());
        localStorage.setItem("userId", userId);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationData = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        if (!token || !expirationData) {
            return;
        }
        return {
            token: token,
            expirationData: new Date(expirationData),
            userId: userId
        };
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    SignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n}\r\n\r\n.spacer {\r\n    flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubs.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    fileReader.onloadend = function () { };
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5em;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route, authService) {
        this.postsService = postsService;
        this.route = route;
        this.authService = authService;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)],
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]],
            }),
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("postId")) {
                _this.mode = "edit";
                _this.postId = paramMap.get("postId");
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        creator: postData.creator
                    };
                    _this.form.setValue({
                        title: _this.post.title,
                        content: _this.post.content,
                        image: _this.post.imagePath,
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-create",
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner{\n  margin: auto;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.post-image {\n  width: 100%;\n}\n\n.post-image img {\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n.mat-paginator {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxubWF0LXNwaW5uZXJ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvc3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvc3QtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1hdC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, authService) {
        this.postsService = postsService;
        this.authService = authService;
        // posts = [
        //   { title: "First Post", content: "This is the first post's content" },
        //   { title: "Second Post", content: "This is the second post's content" },
        //   { title: "Third Post", content: "This is the third post's content" }
        // ];
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 2;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
        this.isLoading = true;
        this.userId = this.authService.getUserId();
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(function () {
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        }, function () {
            _this.isLoading = false;
        });
    };
    PostListComponent.prototype.onPageChange = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-list",
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PostsService.prototype.getPosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + postsPerPage + "&page=" + currentPage;
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/posts" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
                posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator,
                    };
                }),
                maxPosts: postData.maxPosts,
            };
        }))
            .subscribe(function (transformedPosts) {
            _this.posts = transformedPosts.posts;
            _this.postsUpdated.next({
                posts: _this.posts.slice(),
                postCount: transformedPosts.maxPosts,
            });
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/posts/" + id);
    };
    PostsService.prototype.addPost = function (title, content, image) {
        var _this = this;
        var postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/posts", postData)
            .subscribe(function (responseData) {
            // const post: Post = {
            //   id: responseData.post.id,
            //   title: title,
            //   content: content,
            //   imagePath: responseData.post.imagePath
            // };
            // this.posts.push(post);
            // this.postsUpdated.next([...this.posts]);
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.updatePost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image,
                creator: null,
            };
        }
        this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/posts/" + id, postData)
            .subscribe(function (response) {
            // const updatedPosts = [...this.posts];
            // const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
            // const post: Post = { id: id, title: title, content: content, imagePath: '' }
            // updatedPosts[oldPostIndex] = post;
            // this.posts = updatedPosts;
            // this.postsUpdated.next([...this.posts]);
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/posts/" + postId);
        // .subscribe(() => {
        //   const updatedPosts = this.posts.filter(post => post.id !== postId);
        //   this.posts = updatedPosts;
        //   this.postsUpdated.next([...this.posts]);
        // });
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostsService);
    return PostsService;
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
    production: false,
    apiUrl: "http://localhost:3000/api"
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

module.exports = __webpack_require__(/*! C:\Users\carlos.bastos\source\repos\mongodb-03-finished\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map