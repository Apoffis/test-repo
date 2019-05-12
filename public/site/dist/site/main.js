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

/***/ "./src/app/admin/admin-about/admin-about.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-12 {\n    max-width: 97% !important;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tYWJvdXQvYWRtaW4tYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFib3V0L2FkbWluLWFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTEyIHtcbiAgICBtYXgtd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-admin-nav></app-admin-nav>\n\n    <div class=\"row\" *ngIf=\"message\">\n      <div class=\"col-12 text-white bg-success text-center m-auto\"><span>Post is update</span></div>\n    </div>\n    \n    <form [formGroup]=\"editeForm\" id=\"editeForm\" (ngSubmit)=\"OnSubmit(editeForm.value)\">\n      <div class=\"form-group mt-5\">\n        <label for=\"exampleInputEmail1\">Post Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"name\" aria-describedby=\"emailHelp\" >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Post Description</label>\n        <textarea class=\"form-control\"  name=\"description\" id=\"exampleInputPassword1\" formControlName=\"description\" cols=\"30\" rows=\"10\"></textarea>\n        <!-- <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"description\"> -->\n      </div>\n      <div class=\"form-group\">\n          <input type=\"file\" id=\"Image\" #proImg formControlName=\"proImg\">\n        </div>\n      <button type=\"submit\"  class=\"btn btn-primary float-right\">Send Post</button>\n    </form>"

/***/ }),

/***/ "./src/app/admin/admin-about/admin-about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-about/admin-about.component.ts ***!
  \************************************************************/
/*! exports provided: AdminAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboutComponent", function() { return AdminAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/about.service */ "./src/app/services/about.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminAboutComponent = /** @class */ (function () {
    function AdminAboutComponent(abs, fb, router) {
        this.abs = abs;
        this.fb = fb;
        this.router = router;
        this.editeForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'proImg': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AdminAboutComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var img = this.proImg.nativeElement;
        if (img.files && img.files[0]) {
            this.ImageFile = img.files[0];
        }
        var formData = new FormData();
        formData.append('title', value.name);
        formData.append('description', value.description);
        if (img.files && img.files[0]) {
            this.ImageFile = img.files[0];
            formData.append('photo', img.files[0], img.files[0].name);
        }
        this.abs.editPost(this.editedId, formData).subscribe(function (data) {
            if (data) {
                _this.toggleMessage('Post is updated');
                _this.message = true;
            }
            else {
                _this.toggleMessage('Some error');
            }
        });
    };
    AdminAboutComponent.prototype.toggleMessage = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.message = false;
            _this.messageText = text;
        }, 4000);
    };
    AdminAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.abs.getPosts()
            .subscribe(function (data) {
            _this.editedId = data[0]._id;
            _this.editeForm = _this.fb.group({
                'name': [data[0].title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                'description': [data[0].description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                'proImg': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        });
        this.message = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminAboutComponent.prototype, "proImg", void 0);
    AdminAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-about',
            template: __webpack_require__(/*! ./admin-about.component.html */ "./src/app/admin/admin-about/admin-about.component.html"),
            styles: [__webpack_require__(/*! ./admin-about.component.css */ "./src/app/admin/admin-about/admin-about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminAboutComponent);
    return AdminAboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-animation/add-video/add-video.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-animation/add-video/add-video.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFuaW1hdGlvbi9hZGQtdmlkZW8vYWRkLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-animation/add-video/add-video.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-animation/add-video/add-video.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-admin-nav></app-admin-nav>\n    \n    <form [formGroup]=\"form\" id=\"form\" (ngSubmit)=\"OnSubmit(form.value)\">\n      <div class=\"form-group mt-5\">\n        <label for=\"exampleInputEmail1\">Image Video Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"video_name\" aria-describedby=\"emailHelp\" placeholder=\"Enter video name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Image Video Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"video_desc\" placeholder=\"Enter video description\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Image Video Link</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"video_url\" placeholder=\"Enter video link\">\n        </div>\n      <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary float-right\">Add</button>\n    </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-animation/add-video/add-video.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-animation/add-video/add-video.component.ts ***!
  \************************************************************************/
/*! exports provided: AddVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoComponent", function() { return AddVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddVideoComponent = /** @class */ (function () {
    function AddVideoComponent(vis, fb, router) {
        this.vis = vis;
        this.fb = fb;
        this.router = router;
        this.form = this.fb.group({
            'video_name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'video_desc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'video_url': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    AddVideoComponent.prototype.ngOnInit = function () {
    };
    AddVideoComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var video_for_save = {
            video_name: value.video_name,
            video_desc: value.video_desc,
            video_url: value.video_url
        };
        this.vis.addVideo(video_for_save).subscribe(function () {
            _this.router.navigate(['/admin-animation']);
        });
    };
    AddVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-video',
            template: __webpack_require__(/*! ./add-video.component.html */ "./src/app/admin/admin-animation/add-video/add-video.component.html"),
            styles: [__webpack_require__(/*! ./add-video.component.css */ "./src/app/admin/admin-animation/add-video/add-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddVideoComponent);
    return AddVideoComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-animation/admin-animation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-animation/admin-animation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFuaW1hdGlvbi9hZG1pbi1hbmltYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-animation/admin-animation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-animation/admin-animation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-admin-nav></app-admin-nav>\n    <div class=\"card mt-3\">\n        <a routerLink=\"/add-video\" class=\"btn\">Add Video</a>\n        <!-- <input type=\"button\" (class)=\"addNewImage()\" value=\"Add Image\" > -->\n    </div>\n    <div class=\"card mt-4\"  *ngFor=\"let vid of videos\">\n        <div class=\"row\">\n            <div class=\"col-md-4\" >\n                <div class=\"embed-responsive embed-responsive-16by9\">\n                  <iframe class=\"embed-responsive-item\" [src]=\"safeUrl(vid.video_url)\" allowfullscreen></iframe>\n                </div>\n            </div>\n            <div class=\"col-md-8 px-3\">\n                <div class=\"card-block px-3\">\n                <h4 class=\"card-title\">{{ vid.video_name }}</h4>\n                <p class=\"card-text\">{{ vid.video_desc }}</p>\n                <a routerLink=\"/edite-video/{{vid._id}}\" class=\"btn btn-success mr-3 mt-4\">Edit</a>\n                <input type=\"button\" (click)=\"deleteVideo(vid._id)\" value=\"Delete\" class=\"btn btn-danger mt-4\">\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-animation/admin-animation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-animation/admin-animation.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAnimationComponent", function() { return AdminAnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AdminAnimationComponent = /** @class */ (function () {
    function AdminAnimationComponent(vis, san) {
        this.vis = vis;
        this.san = san;
    }
    AdminAnimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vis.getVideos()
            .subscribe(function (video) {
            _this.videos = video;
        });
    };
    AdminAnimationComponent.prototype.deleteVideo = function (id) {
        var video = this.videos;
        this.vis.deleteVideo(id)
            .subscribe(function (data) {
            if (data) {
                for (var i = 0; i < video.length; i++) {
                    if (video[i]._id === id) {
                        video.splice(i, 1);
                    }
                }
            }
        });
    };
    AdminAnimationComponent.prototype.safeUrl = function (video) {
        return this.san.bypassSecurityTrustResourceUrl(video);
    };
    AdminAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-animation',
            template: __webpack_require__(/*! ./admin-animation.component.html */ "./src/app/admin/admin-animation/admin-animation.component.html"),
            styles: [__webpack_require__(/*! ./admin-animation.component.css */ "./src/app/admin/admin-animation/admin-animation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AdminAnimationComponent);
    return AdminAnimationComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-animation/edit-video/edit-video.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-animation/edit-video/edit-video.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFuaW1hdGlvbi9lZGl0LXZpZGVvL2VkaXQtdmlkZW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-animation/edit-video/edit-video.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-animation/edit-video/edit-video.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-admin-nav></app-admin-nav>\n    \n    <form [formGroup]=\"editeForm\" id=\"editeForm\" (ngSubmit)=\"OnSubmit(editeForm.value)\">\n      <div class=\"form-group mt-5\">\n        <label for=\"exampleInputEmail1\">Video Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"name\" aria-describedby=\"emailHelp\" >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Video Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"description\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Video Link</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"url\">\n        </div>\n      <button type=\"submit\"  class=\"btn btn-primary float-right\">Updata</button>\n    </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-animation/edit-video/edit-video.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-animation/edit-video/edit-video.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVideoComponent", function() { return EditVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditVideoComponent = /** @class */ (function () {
    function EditVideoComponent(vis, ar, fb, router) {
        this.vis = vis;
        this.ar = ar;
        this.fb = fb;
        this.router = router;
        this.editeForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'url': ['']
        });
    }
    EditVideoComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var formData = new FormData();
        formData.append('video_name', value.name);
        formData.append('video_desc', value.description);
        formData.append('video_url', value.isSlider);
        var editedVideo = {
            video_name: value.name,
            video_desc: value.description,
            video_url: value.url
        };
        this.vis.editVideo(this.editedId, editedVideo).subscribe(function () {
            _this.router.navigate(['/admin-animation']);
        });
    };
    EditVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editedId = this.ar.snapshot.paramMap.get('id');
        this.vis.getVideo(this.ar.snapshot.paramMap.get('id'))
            .subscribe(function (data) {
            _this.editeForm = _this.fb.group({
                'name': [data.video_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'description': [data.video_desc, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'url': [data.video_url]
            });
        });
    };
    EditVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-video',
            template: __webpack_require__(/*! ./edit-video.component.html */ "./src/app/admin/admin-animation/edit-video/edit-video.component.html"),
            styles: [__webpack_require__(/*! ./edit-video.component.css */ "./src/app/admin/admin-animation/edit-video/edit-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditVideoComponent);
    return EditVideoComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-contact/admin-contact.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-contact/admin-contact.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbnRhY3QvYWRtaW4tY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-contact/admin-contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-contact/admin-contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-admin-nav></app-admin-nav>\n    <div class=\"row\" *ngIf=\"message\">\n        <div class=\"col-12 text-white bg-success text-center m-auto\"><span>{{messageText}}</span></div>\n      </div>\n    \n    <form [formGroup]=\"contactForm\" id=\"contactForm\" (ngSubmit)=\"OnSubmit(contactForm.value)\">\n      <div class=\"form-group mt-5\">\n        <label for=\"exampleInputEmail1\">Input Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"fullName\" aria-describedby=\"emailHelp\" >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Input Phone Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"phone\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Input Addres</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"addres\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Input Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"email\">\n          </div>\n      <button type=\"submit\"  class=\"btn btn-primary float-right\">Updata</button>\n    </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/admin-contact/admin-contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-contact/admin-contact.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminContactComponent", function() { return AdminContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AdminContactComponent = /** @class */ (function () {
    function AdminContactComponent(cs, ar, fb) {
        this.cs = cs;
        this.ar = ar;
        this.fb = fb;
        this.contactForm = this.fb.group({
            'fullName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'addres': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    AdminContactComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var fData = {
            fullName: value.fullName,
            phone: value.phone,
            addres: value.addres,
            email: value.email
        };
        this.cs.editContact(this.contactId, fData).subscribe(function (data) {
            if (data) {
                _this.toggleMessage('Contact info is updated');
                _this.message = true;
            }
            else {
                _this.toggleMessage('Some error');
            }
        });
    };
    AdminContactComponent.prototype.toggleMessage = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.message = false;
            _this.messageText = text;
        }, 4000);
    };
    AdminContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getContacts()
            .subscribe(function (data) {
            _this.contactId = data[0]._id;
            _this.contactForm = _this.fb.group({
                'fullName': [data[0].fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'phone': [data[0].phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'addres': [data[0].addres, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'email': [data[0].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        });
    };
    AdminContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-contact',
            template: __webpack_require__(/*! ./admin-contact.component.html */ "./src/app/admin/admin-contact/admin-contact.component.html"),
            styles: [__webpack_require__(/*! ./admin-contact.component.css */ "./src/app/admin/admin-contact/admin-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AdminContactComponent);
    return AdminContactComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-illustration/add-image/add-image.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/add-image/add-image.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWlsbHVzdHJhdGlvbi9hZGQtaW1hZ2UvYWRkLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-illustration/add-image/add-image.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/add-image/add-image.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-admin-nav></app-admin-nav>\n  \n  <form [formGroup]=\"form\" id=\"form\" (ngSubmit)=\"OnSubmit(form.value)\">\n    <div class=\"form-group mt-5\">\n      <label for=\"exampleInputEmail1\">Image Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"name\" aria-describedby=\"emailHelp\" placeholder=\"Enter name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Image Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"description\" placeholder=\"Enter description\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"file\" class=\"\" id=\"Image\" #proImg formControlName=\"proImg\">\n      </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"isSlider\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Add image to slider</label>\n    </div>\n    <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary float-right\">Add</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-illustration/add-image/add-image.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/add-image/add-image.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddImageComponent = /** @class */ (function () {
    function AddImageComponent(ims, fb, router) {
        this.ims = ims;
        this.fb = fb;
        this.router = router;
        this.form = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'isSlider': [''],
            'proImg': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddImageComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var img = this.proImg.nativeElement;
        if (img.files && img.files[0]) {
            this.ImageFile = img.files[0];
        }
        var imgFile = this.ImageFile;
        var formData = new FormData();
        formData.append('name', value.name);
        formData.append('description', value.description);
        formData.append('isSlider', value.isSlider);
        formData.append('proImg', imgFile, imgFile.name);
        this.ims.addImage(formData).subscribe(function () {
            _this.router.navigate(['/admin-illustration']);
        });
    };
    AddImageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddImageComponent.prototype, "proImg", void 0);
    AddImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__(/*! ./add-image.component.html */ "./src/app/admin/admin-illustration/add-image/add-image.component.html"),
            styles: [__webpack_require__(/*! ./add-image.component.css */ "./src/app/admin/admin-illustration/add-image/add-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-illustration/admin-illustration.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/admin-illustration.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iim {\n    width: 300px !important;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4taWxsdXN0cmF0aW9uL2FkbWluLWlsbHVzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1pbGx1c3RyYXRpb24vYWRtaW4taWxsdXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWltIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-illustration/admin-illustration.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/admin-illustration.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-admin-nav></app-admin-nav>\n  <div class=\"card mt-3\">\n      <a routerLink=\"/add-image\" class=\"btn\">Add Image</a>\n      <!-- <input type=\"button\" (class)=\"addNewImage()\" value=\"Add Image\" > -->\n  </div>\n  <div class=\"card mt-4\"  *ngFor=\"let img of images\">\n      <div class=\"row\">\n          <div class=\"col-md-4\" >\n              <img src=\"{{ uri + img.uri }}\" class=\"w-100 iim\">\n          </div>\n          <div class=\"col-md-8 px-3\">\n              <div class=\"card-block px-3\">\n              <h4 class=\"card-title\">{{ img.name }}</h4>\n              <p class=\"card-text\">{{ img.description }}</p>\n              <p class=\"card-text\">{{ img.date }}</p>\n              <a routerLink=\"/edite-image/{{img._id}}\" class=\"btn btn-success mr-3 mt-4\">Edit</a>\n              <input type=\"button\" (click)=\"deleteImg(img._id)\" value=\"Delete\" class=\"btn btn-danger mt-4\">\n              <!-- <a class=\"btn btn-danger mt-4\" (click)=\"deleteImg(img._id)\">Delete</a> -->\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-illustration/admin-illustration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/admin-illustration.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminIllustrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminIllustrationComponent", function() { return AdminIllustrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AdminIllustrationComponent = /** @class */ (function () {
    function AdminIllustrationComponent(ims) {
        this.ims = ims;
        //  before building mast be deleted
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    AdminIllustrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ims.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    AdminIllustrationComponent.prototype.deleteImg = function (id) {
        var img = this.images;
        this.ims.deleteImage(id)
            .subscribe(function (data) {
            if (data) {
                for (var i = 0; i < img.length; i++) {
                    if (img[i]._id === id) {
                        img.splice(i, 1);
                    }
                }
            }
        });
    };
    AdminIllustrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-illustration',
            template: __webpack_require__(/*! ./admin-illustration.component.html */ "./src/app/admin/admin-illustration/admin-illustration.component.html"),
            styles: [__webpack_require__(/*! ./admin-illustration.component.css */ "./src/app/admin/admin-illustration/admin-illustration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]])
    ], AdminIllustrationComponent);
    return AdminIllustrationComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-illustration/edite-image/edite-image.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/edite-image/edite-image.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWlsbHVzdHJhdGlvbi9lZGl0ZS1pbWFnZS9lZGl0ZS1pbWFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-illustration/edite-image/edite-image.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/edite-image/edite-image.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-admin-nav></app-admin-nav>\n  \n  <form [formGroup]=\"editeForm\" id=\"editeForm\" (ngSubmit)=\"OnSubmit(editeForm.value)\">\n    <div class=\"form-group mt-5\">\n      <label for=\"exampleInputEmail1\">Image Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"name\" aria-describedby=\"emailHelp\" >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Image Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"description\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"file\" id=\"Image\" #proImg formControlName=\"proImg\">\n      </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"isSlider\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Add image to slider</label>\n    </div>\n    <button type=\"submit\"  class=\"btn btn-primary float-right\">Updata</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-illustration/edite-image/edite-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-illustration/edite-image/edite-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeImageComponent", function() { return EditeImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var EditeImageComponent = /** @class */ (function () {
    function EditeImageComponent(ism, ar, fb, router) {
        this.ism = ism;
        this.ar = ar;
        this.fb = fb;
        this.router = router;
        this.editeForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'isSlider': [''],
            'proImg': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    EditeImageComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var img = this.proImg.nativeElement;
        if (img.files && img.files[0]) {
            this.ImageFile = img.files[0];
        }
        var formData = new FormData();
        formData.append('name', value.name);
        formData.append('description', value.description);
        formData.append('isSlider', value.isSlider);
        if (img.files && img.files[0]) {
            this.ImageFile = img.files[0];
            formData.append('proImg', img.files[0], img.files[0].name);
        }
        this.ism.editImage(this.editedId, formData).subscribe(function () {
            _this.router.navigate(['/admin-illustration']);
        });
    };
    EditeImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editedId = this.ar.snapshot.paramMap.get('id');
        this.ism.getImage(this.ar.snapshot.paramMap.get('id'))
            .subscribe(function (data) {
            _this.editeForm = _this.fb.group({
                'name': [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'description': [data.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'isSlider': [data.isSlider],
                'proImg': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proImg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditeImageComponent.prototype, "proImg", void 0);
    EditeImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edite-image',
            template: __webpack_require__(/*! ./edite-image.component.html */ "./src/app/admin/admin-illustration/edite-image/edite-image.component.html"),
            styles: [__webpack_require__(/*! ./edite-image.component.css */ "./src/app/admin/admin-illustration/edite-image/edite-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditeImageComponent);
    return EditeImageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-nav/admin-nav.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/admin-nav/admin-nav.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW5hdi9hZG1pbi1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-nav/admin-nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-nav/admin-nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/administrator']\" routerLinkActive=\"active\" >Administration</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav  mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-slider']\" routerLinkActive=\"active\" >Slider <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-illustration']\" routerLinkActive=\"active\" >Illustration</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-animation']\" routerLinkActive=\"active\" >Animation</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-about']\" routerLinkActive=\"active\" >About Me</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/admin-contact']\" routerLinkActive=\"active\" >Contact</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/admin-soc']\" routerLinkActive=\"active\" >Soc</a>\n          </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <a [routerLink]=\"['/change-pass']\" routerLinkActive=\"active\" class=\"nav-link\">Change Password</a>\n      <a class=\"nav-link\" style=\"cursor: pointer\" *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Logout</a>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/admin/admin-nav/admin-nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-nav/admin-nav.component.ts ***!
  \********************************************************/
/*! exports provided: AdminNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavComponent", function() { return AdminNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var AdminNavComponent = /** @class */ (function () {
    function AdminNavComponent(_authService) {
        this._authService = _authService;
    }
    AdminNavComponent.prototype.ngOnInit = function () {
    };
    AdminNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-nav',
            template: __webpack_require__(/*! ./admin-nav.component.html */ "./src/app/admin/admin-nav/admin-nav.component.html"),
            styles: [__webpack_require__(/*! ./admin-nav.component.css */ "./src/app/admin/admin-nav/admin-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminNavComponent);
    return AdminNavComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-slider/admin-slider.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-slider/admin-slider.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row img {\n    width: 200px;\n    height: auto;\n}\nlabel input {\n    position: absolute;\n}\n.check {\n    background: rgba(150, 150, 150, .5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2xpZGVyL2FkbWluLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tc2xpZGVyL2FkbWluLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5sYWJlbCBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2hlY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUwLCAxNTAsIDE1MCwgLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-slider/admin-slider.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-slider/admin-slider.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-admin-nav></app-admin-nav>\n  <form (submit)=\"upload()\">\n      <div class=\"row\">\n            <label class=\"col-3 btn\" *ngFor=\"let img of images\">\n                <input type=\"checkbox\" (change)=\"log(img, $event.target.checked)\" [checked]=\"img.isSlider\">\n                <img src=\"{{ uri + img.uri }}\"  class=\"card-img-top\" alt=\"...\">\n            </label>\n        </div>\n      <button>submit</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-slider/admin-slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-slider/admin-slider.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSliderComponent", function() { return AdminSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AdminSliderComponent = /** @class */ (function () {
    function AdminSliderComponent(ism, el) {
        this.ism = ism;
        this.el = el;
        //  before building mast be deleted
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.selected = [];
    }
    AdminSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ism.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    AdminSliderComponent.prototype.log = function (img, checked) {
        this.selected.push({ _id: img._id, isSlider: checked });
    };
    AdminSliderComponent.prototype.upload = function () {
        var _this = this;
        this.selected.forEach(function (item) {
            _this.ism.editImage(item._id, item)
                .subscribe(function (i) {
            });
        });
    };
    AdminSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-slider',
            template: __webpack_require__(/*! ./admin-slider.component.html */ "./src/app/admin/admin-slider/admin-slider.component.html"),
            styles: [__webpack_require__(/*! ./admin-slider.component.css */ "./src/app/admin/admin-slider/admin-slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AdminSliderComponent);
    return AdminSliderComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-soc/admin-soc.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/admin-soc/admin-soc.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNvYy9hZG1pbi1zb2MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-soc/admin-soc.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-soc/admin-soc.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-admin-nav></app-admin-nav>\n  <div class=\"row\" *ngIf=\"message\">\n    <div class=\"col-12 text-white bg-success text-center m-auto\"><span>{{ messageText }}</span></div>\n  </div>\n  <form [formGroup]=\"socForm\" id=\"form\" (ngSubmit)=\"OnSubmit(socForm.value)\">\n    <div class=\"form-group mt-5\">\n      <label for=\"exampleInputEmail1\">Facebooke link</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"urlB\" aria-describedby=\"emailHelp\" placeholder=\"Facebook\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Image Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"urlI\" placeholder=\"Enter link\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Enter Link</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"urlB\" placeholder=\"Enter link\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Enter link</label>\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"urlA\" placeholder=\"Enter link\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary float-right\">Add</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-soc/admin-soc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin-soc/admin-soc.component.ts ***!
  \********************************************************/
/*! exports provided: AdminSocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSocComponent", function() { return AdminSocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/soc.service */ "./src/app/services/soc.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var AdminSocComponent = /** @class */ (function () {
    function AdminSocComponent(ss, as, ar, fb, router) {
        this.ss = ss;
        this.as = as;
        this.ar = ar;
        this.fb = fb;
        this.router = router;
        this.socForm = this.fb.group({
            'urlF': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'urlI': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'urlB': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'urlA': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    AdminSocComponent.prototype.OnSubmit = function (value) {
        var _this = this;
        var data = {
            urlF: value.urlF,
            urlI: value.urlI,
            urlB: value.urlB,
            urlA: value.urlA
        };
        this.ss.editSoc(this.socId, data).subscribe(function () {
            if (data) {
                _this.toggleMessage('Post is updated');
                _this.message = true;
            }
            else {
                _this.toggleMessage('Some error');
            }
        });
    };
    AdminSocComponent.prototype.toggleMessage = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.message = false;
            _this.messageText = text;
        }, 4000);
    };
    AdminSocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getSocs()
            .subscribe(function (data) {
            _this.socId = data[0]._id;
            _this.socForm = _this.fb.group({
                'urlF': [data[0].urlF, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'urlI': [data[0].urlI, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'urlB': [data[0].urlB, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                'urlA': [data[0].urlA, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
        });
    };
    AdminSocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-soc',
            template: __webpack_require__(/*! ./admin-soc.component.html */ "./src/app/admin/admin-soc/admin-soc.component.html"),
            styles: [__webpack_require__(/*! ./admin-soc.component.css */ "./src/app/admin/admin-soc/admin-soc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_2__["SocService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminSocComponent);
    return AdminSocComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_nav_nav_lighter_nav_lighter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav-lighter/nav-lighter.component */ "./src/app/components/nav/nav-lighter/nav-lighter.component.ts");
/* harmony import */ var _components_nav_nav_dark_nav_dark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav/nav-dark/nav-dark.component */ "./src/app/components/nav/nav-dark/nav-dark.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _components_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/illustration/illustration.component */ "./src/app/components/illustration/illustration.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_animation_animation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/animation/animation.component */ "./src/app/components/animation/animation.component.ts");
/* harmony import */ var _admin_admin_illustration_admin_illustration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-illustration/admin-illustration.component */ "./src/app/admin/admin-illustration/admin-illustration.component.ts");
/* harmony import */ var _admin_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin-nav/admin-nav.component */ "./src/app/admin/admin-nav/admin-nav.component.ts");
/* harmony import */ var _admin_admin_slider_admin_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-slider/admin-slider.component */ "./src/app/admin/admin-slider/admin-slider.component.ts");
/* harmony import */ var _admin_admin_soc_admin_soc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-soc/admin-soc.component */ "./src/app/admin/admin-soc/admin-soc.component.ts");
/* harmony import */ var _admin_admin_contact_admin_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin-contact/admin-contact.component */ "./src/app/admin/admin-contact/admin-contact.component.ts");
/* harmony import */ var _admin_admin_animation_admin_animation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-animation/admin-animation.component */ "./src/app/admin/admin-animation/admin-animation.component.ts");
/* harmony import */ var _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-about/admin-about.component */ "./src/app/admin/admin-about/admin-about.component.ts");
/* harmony import */ var _admin_admin_illustration_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-illustration/add-image/add-image.component */ "./src/app/admin/admin-illustration/add-image/add-image.component.ts");
/* harmony import */ var _admin_admin_illustration_edite_image_edite_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-illustration/edite-image/edite-image.component */ "./src/app/admin/admin-illustration/edite-image/edite-image.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _admin_admin_animation_add_video_add_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-animation/add-video/add-video.component */ "./src/app/admin/admin-animation/add-video/add-video.component.ts");
/* harmony import */ var _admin_admin_animation_edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-animation/edit-video/edit-video.component */ "./src/app/admin/admin-animation/edit-video/edit-video.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"] },
    { path: 'illustration', component: _components_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_6__["IllustrationComponent"] },
    { path: 'animation', component: _components_animation_animation_component__WEBPACK_IMPORTED_MODULE_8__["AnimationComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    { path: 'change-pass', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"] },
    { path: 'administrator', redirectTo: '/admin-slider', pathMatch: 'full' },
    { path: 'admin-slider', component: _admin_admin_slider_admin_slider_component__WEBPACK_IMPORTED_MODULE_11__["AdminSliderComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-illustration', component: _admin_admin_illustration_admin_illustration_component__WEBPACK_IMPORTED_MODULE_9__["AdminIllustrationComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-animation', component: _admin_admin_animation_admin_animation_component__WEBPACK_IMPORTED_MODULE_14__["AdminAnimationComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-about', component: _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_15__["AdminAboutComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-contact', component: _admin_admin_contact_admin_contact_component__WEBPACK_IMPORTED_MODULE_13__["AdminContactComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-soc', component: _admin_admin_soc_admin_soc_component__WEBPACK_IMPORTED_MODULE_12__["AdminSocComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'edite-image/:id', component: _admin_admin_illustration_edite_image_edite_image_component__WEBPACK_IMPORTED_MODULE_17__["EditeImageComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'add-image', component: _admin_admin_illustration_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_16__["AddImageComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'edite-video/:id', component: _admin_admin_animation_edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_20__["EditVideoComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'add-video', component: _admin_admin_animation_add_video_add_video_component__WEBPACK_IMPORTED_MODULE_19__["AddVideoComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _components_nav_nav_lighter_nav_lighter_component__WEBPACK_IMPORTED_MODULE_3__["NavLighterComponent"], _components_nav_nav_dark_nav_dark_component__WEBPACK_IMPORTED_MODULE_4__["NavDarkComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
    _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"], _components_illustration_illustration_component__WEBPACK_IMPORTED_MODULE_6__["IllustrationComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
    _components_animation_animation_component__WEBPACK_IMPORTED_MODULE_8__["AnimationComponent"], _admin_admin_illustration_admin_illustration_component__WEBPACK_IMPORTED_MODULE_9__["AdminIllustrationComponent"], _admin_admin_nav_admin_nav_component__WEBPACK_IMPORTED_MODULE_10__["AdminNavComponent"],
    _admin_admin_slider_admin_slider_component__WEBPACK_IMPORTED_MODULE_11__["AdminSliderComponent"], _admin_admin_soc_admin_soc_component__WEBPACK_IMPORTED_MODULE_12__["AdminSocComponent"], _admin_admin_contact_admin_contact_component__WEBPACK_IMPORTED_MODULE_13__["AdminContactComponent"],
    _admin_admin_animation_admin_animation_component__WEBPACK_IMPORTED_MODULE_14__["AdminAnimationComponent"], _admin_admin_about_admin_about_component__WEBPACK_IMPORTED_MODULE_15__["AdminAboutComponent"], _admin_admin_illustration_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_16__["AddImageComponent"],
    _admin_admin_illustration_edite_image_edite_image_component__WEBPACK_IMPORTED_MODULE_17__["EditeImageComponent"], _admin_admin_animation_add_video_add_video_component__WEBPACK_IMPORTED_MODULE_19__["AddVideoComponent"], _admin_admin_animation_edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_20__["EditVideoComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
    _auth_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"md-0\">Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"\">Username</label>\n            <input [(ngModel)]=\"loginUserData.username\" name=\"username\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Password</label>\n            <input [(ngModel)]=\"loginUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n          </div>\n          <button (click)=\"loginUser()\" class=\"brn btn-success float-right\" type=\"button\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        // console.log(this.loginUserData.username);
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('username', _this.loginUserData.username);
            _this._router.navigate(['/administrator']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"md-0\">Change Password</h3>\n      </div>\n      <div class=\"card-body\">\n        <form class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"\">Username</label>\n            <input [(ngModel)]=\"registerUserData.username\" name=\"username\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Password</label>\n            <input [(ngModel)]=\"registerUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n          </div>\n          <button (click)=\"changeUser()\" class=\"brn btn-primary float-right\" type=\"button\">Cnahge</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router, ar) {
        this._auth = _auth;
        this._router = _router;
        this.ar = ar;
        this.registerUserData = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
    };
    RegisterComponent.prototype.changeUser = function () {
        var _this = this;
        this._auth.changeUser(this.username, this.registerUserData)
            .subscribe(function (res) {
            _this._auth.logoutUser();
            // this._router.navigate(['/login']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 90%;\n    margin: 0 auto;\n}\n\n.card {\n    border: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-lighter></app-nav-lighter>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 up-line\"></div>\n    </div>\n    <div class=\"row\" *ngFor=\"let post of about\">\n        <div class=\"card mb-3 m-auto\" style=\"max-width: 95%;\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-4\">\n                    <img src=\"{{ uri + post.uri }}\" class=\"card-img\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">{{ post.title }}</h5>\n                        <p class=\"card-text\">{{ post.description }}</p>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/about.service */ "./src/app/services/about.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(abs) {
        this.abs = abs;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.uriM = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'uploads';
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.abs.getPosts()
            .subscribe(function (post) {
            _this.about = post;
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/animation/animation.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/animation/animation.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 90%;\n    margin: 0 auto;\n}\n\n.up-line {\n    padding-left:0 !important;\n    padding-right:0 !important;\n    padding-bottom: 2px;\n    margin-bottom:15px;\n    background-color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmltYXRpb24vYW5pbWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udXAtbGluZSB7XG4gICAgcGFkZGluZy1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OjAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/animation/animation.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/animation/animation.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-lighter></app-nav-lighter>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 up-line\"></div>\n      <div\n      *ngFor=\"let video of videos\"\n      class=\"col-lg-4 col-md-6 col-sm-6 \">\n        <div class=\"card m-auto\" style=\"width: 20rem;\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe class=\"embed-responsive-item\" [src]=\"safeUrl(video.video_url)\" allowfullscreen></iframe>\n            </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ video.video_name }}</h5>\n            <p class=\"card-text\">{{ video.video_desc }}</p>\n          </div>\n        </div>\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/animation/animation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/animation/animation.component.ts ***!
  \*************************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var AnimationComponent = /** @class */ (function () {
    function AnimationComponent(vis, san) {
        this.vis = vis;
        this.san = san;
    }
    AnimationComponent.prototype.safeUrl = function (video) {
        return this.san.bypassSecurityTrustResourceUrl(video);
    };
    AnimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vis.getVideos()
            .subscribe(function (video) {
            _this.videos = video;
        });
    };
    AnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animation',
            template: __webpack_require__(/*! ./animation.component.html */ "./src/app/components/animation/animation.component.html"),
            styles: [__webpack_require__(/*! ./animation.component.css */ "./src/app/components/animation/animation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AnimationComponent);
    return AnimationComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 90%;\n    margin: 0 auto;\n}\n\n.up-line {\n    padding-left:0 !important;\n    padding-right:0 !important;\n    padding-bottom: 2px;\n    margin-bottom:15px;\n    background-color: #424242;\n}\n\na {\n    color: blue !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnVwLWxpbmUge1xuICAgIHBhZGRpbmctbGVmdDowICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDowICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cblxuYSB7XG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-lighter></app-nav-lighter>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 up-line\"></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-8\">\n            <form #contactForm=\"ngForm\" (submit)=\"send(contactForm.value)\">\n                \n            </form>\n        </div>\n        <!--\n        <div class=\"col-8\">\n            <form #contactForm=\"ngForm\" (submit)=\"send(contactForm.value)\">\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Name</label>\n                    <input name=\"name\" [(ngModel)]=\"contactForm.name\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name\">\n                </div>\n        \n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Email address</label>\n                    <input name=\"email\" [(ngModel)]=\"contactForm.email\" type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlTextarea1\">Message</label>\n                    <textarea name=\"message\" [(ngModel)]=\"contactForm.message\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                </div>\n                <button type=\"submit\">Send</button>\n            </form>\n        </div>\n        -->\n        <div class=\"col-4 mt-4\">\n                <div class=\"find-widget\">\n                    Name: <a>{{ fullName }}</a>\n                </div>\n                \n                <div class=\"find-widget\">\n                    Email:  <a>{{ email }}</a>\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(cs) {
        this.cs = cs;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getContacts()
            .subscribe(function (data) {
            _this.fullName = data[0].fullName;
            _this.addres = data[0].addres;
            _this.phone = data[0].phone;
            _this.email = data[0].email;
        });
    };
    ContactComponent.prototype.send = function (value) {
        console.log(value);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/illustration/illustration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/illustration/illustration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 90%;\n    margin: 0 auto;\n} \n\n.image-resize {\n    max-width:100%;\n    height:auto;\n    transition: -webkit-transform .3s linear;\n    transition: transform .3s linear;\n    transition: transform .3s linear, -webkit-transform .3s linear;\n} \n\n.image-resize:hover {\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n} \n\n.image-ilustrate {\n    cursor: pointer;\n} \n\n.up-line {\n    padding-left:0 !important;\n    padding-right:0 !important;\n    padding-bottom: 2px;\n    margin-bottom:15px;\n    background-color: #424242;\n} \n\n/* Style the Image Used to Trigger the Modal */ \n\n#myImg {\n    border-radius: 5px;\n    cursor: pointer;\n    transition: 0.3s;\n  } \n\n#myImg:hover {opacity: 0.7;} \n\n/* The Modal (background) */ \n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n  } \n\n/* Modal Content (Image) */ \n\n.modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 800px;\n  } \n\n/* Caption of Modal Image (Image Text) - Same Width as the Image */ \n\n#caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  } \n\n/* Add Animation - Zoom in the Modal */ \n\n.modal-content, #caption { \n    -webkit-animation-name: zoom; \n            animation-name: zoom;\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n  } \n\n@-webkit-keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n  } \n\n@keyframes zoom {\n    from {-webkit-transform:scale(0);transform:scale(0)} \n    to {-webkit-transform:scale(1);transform:scale(1)}\n  } \n\n/* The Close Button */ \n\n.close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  } \n\n.close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\n/* 100% Image Width on Smaller Screens */ \n\n@media only screen and (max-width: 700px){\n    .modal-content {\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbGx1c3RyYXRpb24vaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBR1gsd0NBQWdDO0lBQWhDLGdDQUFnQztJQUFoQyw4REFBZ0M7QUFDcEM7O0FBRUE7SUFDSSw4QkFBOEI7SUFFOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBSUEsOENBQThDOztBQUM5QztJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBLGNBQWMsWUFBWSxDQUFDOztBQUUzQiwyQkFBMkI7O0FBQzNCO0lBQ0UsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztBQUVBLDBCQUEwQjs7QUFDMUI7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUEsa0VBQWtFOztBQUNsRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLE1BQU0sMEJBQWlCLENBQWpCLGtCQUFrQjtJQUN4QixJQUFJLDBCQUFpQixDQUFqQixrQkFBa0I7RUFDeEI7O0FBSEE7SUFDRSxNQUFNLDBCQUFpQixDQUFqQixrQkFBa0I7SUFDeEIsSUFBSSwwQkFBaUIsQ0FBakIsa0JBQWtCO0VBQ3hCOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUVBLHdDQUF3Qzs7QUFDeEM7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbGx1c3RyYXRpb24vaWxsdXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn0gXG5cbi5pbWFnZS1yZXNpemUge1xuICAgIG1heC13aWR0aDoxMDAlO1xuICAgIGhlaWdodDphdXRvO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBsaW5lYXI7XG59XG5cbi5pbWFnZS1yZXNpemU6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbn1cblxuLmltYWdlLWlsdXN0cmF0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXAtbGluZSB7XG4gICAgcGFkZGluZy1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OjAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuXG5cblxuLyogU3R5bGUgdGhlIEltYWdlIFVzZWQgdG8gVHJpZ2dlciB0aGUgTW9kYWwgKi9cbiNteUltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICAjbXlJbWc6aG92ZXIge29wYWNpdHk6IDAuNzt9XG4gIFxuICAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4gIC5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuICBcbiAgLyogTW9kYWwgQ29udGVudCAoSW1hZ2UpICovXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG4gIFxuICAvKiBDYXB0aW9uIG9mIE1vZGFsIEltYWdlIChJbWFnZSBUZXh0KSAtIFNhbWUgV2lkdGggYXMgdGhlIEltYWdlICovXG4gICNjYXB0aW9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2NjYztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICBcbiAgLyogQWRkIEFuaW1hdGlvbiAtIFpvb20gaW4gdGhlIE1vZGFsICovXG4gIC5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7IFxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyB6b29tIHtcbiAgICBmcm9tIHt0cmFuc2Zvcm06c2NhbGUoMCl9IFxuICAgIHRvIHt0cmFuc2Zvcm06c2NhbGUoMSl9XG4gIH1cbiAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICAuY2xvc2U6aG92ZXIsXG4gIC5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6ICNiYmI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/illustration/illustration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/illustration/illustration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-lighter *ngIf=\"navToggle\"></app-nav-lighter>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 up-line\"></div>\n      <div\n      *ngFor=\"let img of images\"\n      class=\"col-lg-3 col-md-6 col-sm-6 img-card\">\n\n        <div class=\"image-ilustrate mt-3\">\n        \t<!-- Trigger the Modal -->\n          <img class=\"image-resize\" id=\"img{{ img._id }}\" (click)=\"openSlider(img._id, img.name)\" src=\"{{ uri + img.uri }}\" alt=\"{{ img.name }}\" style=\"max-width:100%;height:auto\">\n\n          <!-- The Modal -->\n          <div id=\"model{{ img._id }}\" class=\"modal\">\n\n            <!-- The Close Button -->\n            <span class=\"close mt-5\" (click)=\"close(img._id)\"><img src=\"../../../assets/icons/zoom_out.png\" alt=\"\"></span>\n\n            <!-- Modal Content (The Image) -->\n            <img src=\"{{ uri + img.uri }}\" class=\"modal-content\" id=\"img01{{ img._id }}\">\n\n            <!-- Modal Caption (Image Text) -->\n            <div id=\"caption\">{{img.name}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/illustration/illustration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/illustration/illustration.component.ts ***!
  \*******************************************************************/
/*! exports provided: IllustrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IllustrationComponent", function() { return IllustrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _nav_nav_lighter_nav_lighter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav-lighter/nav-lighter.component */ "./src/app/components/nav/nav-lighter/nav-lighter.component.ts");





var IllustrationComponent = /** @class */ (function () {
    function IllustrationComponent(ims) {
        this.ims = ims;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.navToggle = true;
    }
    IllustrationComponent.prototype.openSlider = function (id, alt) {
        this.navToggle = false;
        var model = document.getElementById('model' + id);
        var captionText = document.getElementById('caption');
        model.style.display = 'block';
        captionText.innerHTML = alt;
    };
    IllustrationComponent.prototype.close = function (id) {
        this.navToggle = true;
        var model = document.getElementById('model' + id);
        model.style.display = 'none';
    };
    IllustrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.screenHeight = window.innerWidth;
        this.screenWidth = window.innerWidth;
        this.ims.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nav_nav_lighter_nav_lighter_component__WEBPACK_IMPORTED_MODULE_4__["NavLighterComponent"])
    ], IllustrationComponent.prototype, "navingbar", void 0);
    IllustrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-illustration',
            template: __webpack_require__(/*! ./illustration.component.html */ "./src/app/components/illustration/illustration.component.html"),
            styles: [__webpack_require__(/*! ./illustration.component.css */ "./src/app/components/illustration/illustration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]])
    ], IllustrationComponent);
    return IllustrationComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav-dark/nav-dark.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/nav/nav-dark/nav-dark.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dd {\n    background-color: rgba(0, 0, 0, .6);\n}\n\n.no-column {\n    flex-direction: unset !important;\n}\n\n.navbar-collapse {\n    flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LWRhcmsvbmF2LWRhcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYtZGFyay9uYXYtZGFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbn1cblxuLm5vLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBmbGV4LWdyb3c6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/nav/nav-dark/nav-dark.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/nav/nav-dark/nav-dark.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top nav-position navbar-dark dd\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/home\"  ><img src=\"{{uri}}/icons/logo_white.png\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\" ></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/illustration\" >Illustration</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/animation\" >Animation</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\" >About</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"false\">\n          <a class=\"nav-link\" routerLink=\"/contact\" >Contact</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto no-column\">\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlF }}\"><img class=\"soc\" src=\"{{uri}}/icons/01fbW.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlI }}\"><img class=\"soc\" src=\"{{uri}}/icons/02instaW.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlB }}\"><img class=\"soc\" src=\"{{uri}}/icons/03beW.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlA }}\"><img class=\"soc\" src=\"{{uri}}/icons/04artstW.png\"></a>\n          </li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav-dark/nav-dark.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/nav/nav-dark/nav-dark.component.ts ***!
  \***************************************************************/
/*! exports provided: NavDarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDarkComponent", function() { return NavDarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/soc.service */ "./src/app/services/soc.service.ts");




var NavDarkComponent = /** @class */ (function () {
    function NavDarkComponent(ss) {
        this.ss = ss;
        //  before building mast be deleted
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'uploads';
    }
    NavDarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getSocs()
            .subscribe(function (data) {
            _this.urlF = data[0].urlF;
            _this.urlI = data[0].urlI;
            _this.urlB = data[0].urlB;
            _this.urlA = data[0].urlA;
        });
    };
    NavDarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-dark',
            template: __webpack_require__(/*! ./nav-dark.component.html */ "./src/app/components/nav/nav-dark/nav-dark.component.html"),
            styles: [__webpack_require__(/*! ./nav-dark.component.css */ "./src/app/components/nav/nav-dark/nav-dark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_3__["SocService"]])
    ], NavDarkComponent);
    return NavDarkComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav-lighter/nav-lighter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/nav/nav-lighter/nav-lighter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-column {\n    flex-direction: unset !important;\n}\n\n.navbar-collapse {\n    flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LWxpZ2h0ZXIvbmF2LWxpZ2h0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYtbGlnaHRlci9uYXYtbGlnaHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICAgIGZsZXgtZ3JvdzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav-lighter/nav-lighter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/nav/nav-lighter/nav-lighter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg nav-position navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/home\"  ><img src=\"{{uri}}/icons/logo_color.png\" alt=\"\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\" ></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/illustration\" >Illustration</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/animation\" >Animation</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/about\" >About</a>\n        </li>\n        <li class=\"nav-item\"  *ngIf=\"false\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/contact\" >Contact</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto no-column\">\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlF }}\"><img class=\"soc\" src=\"{{uri}}/icons/01fb.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlI }}\"><img class=\"soc\" src=\"{{uri}}/icons/02insta.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlB }}\"><img class=\"soc\" src=\"{{uri}}/icons/03be.png\"></a>\n          </li>\n          <li class=\"nav-item m-1\">\n            <a class=\"nav-link\" href=\"{{ urlA }}\"><img class=\"soc\" src=\"{{uri}}/icons/04artst.png\"></a>\n          </li>\n        </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav-lighter/nav-lighter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nav/nav-lighter/nav-lighter.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavLighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLighterComponent", function() { return NavLighterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/soc.service */ "./src/app/services/soc.service.ts");




var NavLighterComponent = /** @class */ (function () {
    function NavLighterComponent(ss) {
        this.ss = ss;
        //  before building mast be deleted
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'uploads';
    }
    NavLighterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getSocs()
            .subscribe(function (data) {
            _this.urlF = data[0].urlF;
            _this.urlI = data[0].urlI;
            _this.urlB = data[0].urlB;
            _this.urlA = data[0].urlA;
        });
    };
    NavLighterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-lighter',
            template: __webpack_require__(/*! ./nav-lighter.component.html */ "./src/app/components/nav/nav-lighter/nav-lighter.component.html"),
            styles: [__webpack_require__(/*! ./nav-lighter.component.css */ "./src/app/components/nav/nav-lighter/nav-lighter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_soc_service__WEBPACK_IMPORTED_MODULE_3__["SocService"]])
    ], NavLighterComponent);
    return NavLighterComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner {\n    background-color: rgba(0, 0, 0, .8);\n  }\n  \n  .carousel-item {\n    text-align: center;\n  }\n  \n  /* .w-100 {\n    margin: 0 auto;\n    max-height: 100vh;\n    width: auto !important;\n  } */\n  \n  .aaa {\n  margin: 0 auto;\n  width: auto;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7Ozs7S0FJRzs7RUFFTDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICB9XG4gIFxuICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiAudy0xMDAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH0gKi9cbiAgXG4uYWFhIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-dark></app-nav-dark>\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li\n          *ngFor=\"let image of images; let first = first; let i = index\" [ngClass]=\"{active: first}\"\n          data-target=\"#carouselExampleIndicators\" data-slide-to=\"i\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let image of images; let first = first\" [ngClass]=\"{active: first}\"\n           class=\"carousel-item\">\n        <img class=\"d-block aaa\" src=\"{{uri + image.uri}}\" alt=\"First slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/images.service */ "./src/app/services/images.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SliderComponent = /** @class */ (function () {
    function SliderComponent(ims) {
        this.ims = ims;
        //  before building mast be deleted
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var imag = [];
        this.ims.getImages()
            .subscribe(function (data) {
            data.forEach(function (img) {
                if (img.isSlider === true) {
                    imag.push(img);
                }
            });
            _this.images = imag;
        });
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/components/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_images_service__WEBPACK_IMPORTED_MODULE_2__["ImagesService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/services/about.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AboutService = /** @class */ (function () {
    function AboutService(http) {
        this.http = http;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'abouts';
    }
    // Get all Images
    AboutService.prototype.getPosts = function () {
        return this.http.get(this.uri + "/");
    };
    // Get on Post
    AboutService.prototype.getPost = function (id, post) {
        return this.http.post(this.uri + "/data/" + id, post);
    };
    // Add image
    AboutService.prototype.addPost = function (post) {
        return this.http.post(this.uri + "/add", post);
    };
    // Edite selected image
    AboutService.prototype.editPost = function (id, post) {
        return this.http.put(this.uri + "/edite/" + id, post);
    };
    // Delete selected image
    AboutService.prototype.deletePost = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    AboutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.getUser = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'get-us');
    };
    AuthService.prototype.changeUser = function (name, user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "users/change-pass/" + name, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "users/login", user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'contacts';
    }
    // Get all contact
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.uri + "/");
    };
    // Get selected contact
    ContactService.prototype.getContact = function (id) {
        return this.http.get(this.uri + "/contact/" + id);
    };
    // Add image
    ContactService.prototype.addContact = function (post) {
        return this.http.post(this.uri + "/add", post);
    };
    // Edite selected image
    ContactService.prototype.editContact = function (id, post) {
        return this.http.put(this.uri + "/edite/" + id, post);
    };
    // Delete selected image
    ContactService.prototype.deleteContact = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/images.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ImagesService = /** @class */ (function () {
    function ImagesService(http) {
        this.http = http;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'images';
    }
    // Get all Images
    ImagesService.prototype.getImages = function () {
        return this.http.get(this.uri + "/");
    };
    // Get selected image
    ImagesService.prototype.getImage = function (id) {
        return this.http.get(this.uri + "/image/" + id);
    };
    // Add image
    ImagesService.prototype.addImage = function (img) {
        console.log("services");
        return this.http.post(this.uri + "/add", img);
    };
    // Edite selected image
    ImagesService.prototype.editImage = function (id, img) {
        // const updated: Images = <Images>{
        //   name: img.name,
        //   description: img.description,
        //   isSlider: img.isSlider
        // };
        return this.http.put(this.uri + "/edite/" + id, img);
    };
    // Delete selected image
    ImagesService.prototype.deleteImage = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/services/soc.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/soc.service.ts ***!
  \*****************************************/
/*! exports provided: SocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocService", function() { return SocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SocService = /** @class */ (function () {
    function SocService(http) {
        this.http = http;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'soc';
    }
    // Get all contact
    SocService.prototype.getSocs = function () {
        return this.http.get(this.uri + "/");
    };
    // Get selected contact
    SocService.prototype.getSoc = function (id) {
        return this.http.get(this.uri + "/soc/" + id);
    };
    // Add image
    SocService.prototype.addSoc = function (post) {
        return this.http.post(this.uri + "/add", post);
    };
    // Edite selected image
    SocService.prototype.editSoc = function (id, post) {
        return this.http.put(this.uri + "/edite/" + id, post);
    };
    // Delete selected image
    SocService.prototype.deleteSoc = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    SocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocService);
    return SocService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'videos';
    }
    // Get all Videos
    VideoService.prototype.getVideos = function () {
        return this.http.get(this.uri + "/");
    };
    // Get selected Video
    VideoService.prototype.getVideo = function (id) {
        return this.http.get(this.uri + "/video/" + id);
    };
    // Add Video
    VideoService.prototype.addVideo = function (video) {
        return this.http.post(this.uri + "/add", video);
    };
    // Edite selected Video
    VideoService.prototype.editVideo = function (id, video) {
        return this.http.put(this.uri + "/edite/" + id, video);
    };
    // Delete selected Video
    VideoService.prototype.deleteVideo = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VideoService);
    return VideoService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: ''
};
// http://localhost:8080/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\server\public\site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map