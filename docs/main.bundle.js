webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".ui {\n  width: 300px;\n  height: 340px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: rgba(0, 0, 0, 0.65);\n  opacity: 0.85;\n  color: white;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.7);\n  padding: 3em 1em 2em 1em;\n  border: 2px solid black;\n  overflow: hidden;\n  font-size: 0.75em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.2s ease;\n  background-image: url(/assets/bg1.png), url(/assets/bg2.png);\n  background-position: 0 0, 250px 250px;\n  background-repeat: repeat;\n  -webkit-animation: anim 60s linear infinite; }\n\n@-webkit-keyframes anim {\n  from {\n    background-position: 0 0, 0 0; }\n  to {\n    background-position: -500px -500px, 1000px 0px; } }\n  .ui > * {\n    transition: all 0.3s ease; }\n  .ui.closed {\n    width: 64px;\n    height: 64px;\n    border-radius: 64px;\n    padding: 0;\n    cursor: pointer; }\n    .ui.closed > * {\n      opacity: 0; }\n  .ui i {\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    right: 0.25em;\n    padding: 0.15em;\n    color: black; }\n  .ui > div {\n    border-top: 1px solid black;\n    padding: 1em 0; }\n    .ui > div::last-child {\n      margin-bottom: 2em; }\n  .ui h1 {\n    font-size: 2.25em;\n    color: #FD3809;\n    margin: 0 0 0.5em;\n    text-align: center; }\n  .ui p {\n    text-align: center;\n    margin: 0; }\n    .ui p.credits {\n      color: #D46A6A;\n      margin-bottom: 1em; }\n      .ui p.credits a {\n        color: #D46A6A;\n        text-decoration: none; }\n        .ui p.credits a:hover {\n          color: #FD3809;\n          text-decoration: none; }\n    .ui p.instructions {\n      color: #ccc; }\n  .ui button, .ui input {\n    background-color: #333;\n    color: white;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.8); }\n  .ui button {\n    padding: 0.25em 0.5em;\n    margin-right: 0.5em; }\n  .ui label {\n    clear: both;\n    display: block;\n    margin-bottom: 0.75em; }\n    .ui label label {\n      display: inline;\n      margin-left: 0.5em; }\n    .ui label span {\n      display: inline-block;\n      width: 10em; }\n  .ui input {\n    width: 50px; }\n    .ui input[type=checkbox] {\n      width: auto; }\n  .ui form {\n    margin-bottom: 2em; }\n\n.coordinates {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 0 1em;\n  color: white;\n  background-color: black;\n  transition: opacity .15s ease-in-out; }\n  .coordinates p {\n    float: left;\n    width: 50%; }\n    .coordinates p:last-child {\n      float: right;\n      text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<section class=\"ui\" [class.closed]=\"!showMenu\" (click)=\"onOpenMenu($event)\">\n    <i (click)=\"onCloseMenu($event)\" class=\"fa fa-window-close fa-2x\"></i>\n\n    <div>\n        <h1>Fractal Fun</h1>\n        <p>With Angular4, HTML5 Canvas, and Typescript</p>\n    </div>\n\n    <div>\n        <form novalidate [formGroup]=\"_form\">\n            <label><span>Render Time:</span> {{(renderTime / 1000).toFixed(2)}} secs</label>\n            <label><span>iterations ({{calculatedIterations}})</span>\n                <input type=\"number\" formControlName=\"iterations\" min=\"50\" step=\"10\" />\n\n                <label>\n                    <input type=\"checkbox\" formControlName=\"autoIteration\" />&nbsp;\n                    Auto?\n                </label>\n            </label>\n\n            <label><span>Escape Radius</span>\n                <input type=\"number\" formControlName=\"escapeRadius\" min=\"1\" step=\"1\" />\n            </label>\n\n            <label>\n                <input type=\"checkbox\" formControlName=\"showCoordinates\" />&nbsp;\n                Show Coordinates?\n            </label>\n        </form>\n\n        <button (click)=\"onClickRender($event)\">Render</button>\n        <button (click)=\"onReset($event)\">Reset</button>\n    </div>\n\n    <div>\n        <p class=\"credits\">Written by Justin, <a target=\"_blank\" href=\"https://github.com/thelim3y/fractal-fun\">code on github</a></p>\n        <br />\n        <p class=\"instructions\">Left click to zoom and center at cursor, shift+left click to zoom out and center at cursor</p>\n    </div>    \n</section>\n\n<!--(contextmenu)=\"onZoom($event)\"-->\n<canvas #fractal (click)=\"onZoom($event)\"></canvas>\n\n<div class=\"coordinates\" [style.opacity]=\"!!form.value.showCoordinates == true ? 0.35 : 0\">\n    <p>Screen : {{_mousePos.x}}, {{_mousePos.y}}</p>\n    <p>Complex: {{_mousePos.cx}}, {{_mousePos.cy}}</p>\n</div>"

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchmap__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromevent__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromevent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromevent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_sample__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_sample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_sample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_complex_roi__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_mandelbrot__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FractalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FractalComponent = (function () {
    function FractalComponent(_router, _route, _fb) {
        this._router = _router;
        this._route = _route;
        this._fb = _fb;
        this._drawSpace = {
            width: 900,
            height: 900,
            aspect: 1
        };
    }
    Object.defineProperty(FractalComponent.prototype, "form", {
        get: function () {
            return this._form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FractalComponent.prototype, "calculatedIterations", {
        get: function () {
            return this._calculatedIterations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FractalComponent.prototype, "renderTime", {
        get: function () {
            return this._renderTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FractalComponent.prototype, "showMenu", {
        get: function () {
            return this._showMenu;
        },
        enumerable: true,
        configurable: true
    });
    FractalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._reset();
        var _mouseMove$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(this._canvas.nativeElement, 'mousemove');
        _mouseMove$
            .sample(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(50))
            .subscribe(function (ev) {
            var c = _this._getComplexView();
            var fv = c.drawSpaceToComplex(ev.offsetX, ev.offsetY, _this._drawSpace.width, _this._drawSpace.height);
            _this._mousePos = {
                cx: fv.x,
                cy: fv.y,
                x: ev.offsetX,
                y: ev.offsetY
            };
        });
    };
    FractalComponent.prototype.ngOnDestroy = function () {
    };
    FractalComponent.prototype.ngAfterViewInit = function () {
        this._canvas.nativeElement.width = this._drawSpace.width;
        this._canvas.nativeElement.height = this._drawSpace.height;
        this._mandelbrot = new __WEBPACK_IMPORTED_MODULE_9__shared_mandelbrot__["a" /* Mandelbrot */](this._canvas.nativeElement);
        this._form.setValue(Object.assign({}, this._form.value, this._getRouteQuery()));
        this._renderMandelbrot();
    };
    FractalComponent.prototype._getRouteQuery = function () {
        return {
            autoIteration: JSON.parse(this._route.snapshot.queryParams.autoIteration),
            escapeRadius: +this._route.snapshot.queryParams.escapeRadius,
            iterations: +this._route.snapshot.queryParams.iterations,
            showCoordinates: JSON.parse(this._route.snapshot.queryParams.showCoordinates),
            x: +this._route.snapshot.queryParams.x,
            y: +this._route.snapshot.queryParams.y,
            zoomFactor: +this._route.snapshot.queryParams.zoomFactor,
            zoomStep: +this._route.snapshot.queryParams.zoomStep
        };
    };
    FractalComponent.prototype._reset = function () {
        var _this = this;
        this._rendering = false;
        this._showMenu = true;
        this._drawSpace.width = window.innerWidth;
        this._drawSpace.height = window.innerHeight;
        this._drawSpace.aspect = window.innerHeight / window.innerWidth;
        this._mousePos = {
            cx: 'n/a',
            cy: 'n/a',
            x: 'n/a',
            y: 'n/a'
        };
        // this._zoomFactor = 1;
        // this._zoomStep = 2;
        // this._complexRoi = new ComplexRoi(-1, 0, 4, 4);
        // this._complexRoi.zoom(this._zoomFactor);
        // this._complexRoi.aspect(this._drawSpace.aspect);
        this._form = this._fb.group({
            'iterations': [100, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(2)]],
            'autoIteration': [true],
            'escapeRadius': [4, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* Validators */].minLength(1)]],
            'showCoordinates': [false],
            'zoomFactor': [1],
            'zoomStep': [2],
            'x': [-1],
            'y': [0]
        });
        this._form.valueChanges.subscribe(function (vals) {
            _this._router.navigate(['/'], { queryParams: _this._form.value });
        });
    };
    FractalComponent.prototype.onCloseMenu = function (ev) {
        ev.stopPropagation();
        this._showMenu = false;
    };
    FractalComponent.prototype.onOpenMenu = function (ev) {
        this._showMenu = true;
    };
    FractalComponent.prototype.onZoom = function (ev) {
        if (this._rendering) {
            return;
        }
        var c = this._getComplexView();
        var fv = c.drawSpaceToComplex(ev.offsetX, ev.offsetY, this._drawSpace.width, this._drawSpace.height);
        if (ev.shiftKey) {
            fv.zoomFactor = this._form.value.zoomFactor / this._form.value.zoomStep;
            // this._zoomFactor /= this._zoomStep;
        }
        else if (ev.ctrlKey) {
            // Just recenter for now
        }
        else {
            fv.zoomFactor = this._form.value.zoomFactor * this._form.value.zoomStep;
            // this._zoomFactor *= this._zoomStep;
        }
        this._form.setValue(Object.assign({}, this._form.value, fv));
        // this._complexRoi.zoom(this._zoomFactor);
        this._renderMandelbrot();
    };
    FractalComponent.prototype.onClickRender = function (ev) {
        this._renderMandelbrot();
    };
    FractalComponent.prototype.onReset = function (ev) {
        this._reset();
        this._renderMandelbrot();
    };
    FractalComponent.prototype._getComplexView = function () {
        return new __WEBPACK_IMPORTED_MODULE_8__shared_complex_roi__["a" /* ComplexRoi */](+this._form.value.x, +this._form.value.y, 4, 4, +this._form.value.zoomFactor, +this._drawSpace.aspect);
    };
    FractalComponent.prototype._renderMandelbrot = function () {
        this._rendering = true;
        var ts = performance.now();
        var complexRoi = this._getComplexView();
        this._calculatedIterations = Math.floor(223 / Math.sqrt(0.001 + 2 * Math.min(complexRoi.width, complexRoi.height)));
        this._router.navigate(['/'], { queryParams: this._form.value });
        console.log(this._form.value);
        this._mandelbrot.generate(complexRoi.left, complexRoi.right, complexRoi.top, complexRoi.bottom, this._form.value.autoIteration ? this._calculatedIterations : this._form.value.iterations, this._form.value.escapeRadius);
        this._renderTime = performance.now() - ts;
        this._rendering = false;
    };
    return FractalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fractal'),
    __metadata("design:type", Object)
], FractalComponent.prototype, "_canvas", void 0);
FractalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-fractal',
        template: __webpack_require__(155),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], FractalComponent);

var _a, _b, _c;
//# sourceMappingURL=fractal.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fractal_fractal_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var _ROUTES_ = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__fractal_fractal_component__["a" /* FractalComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(_ROUTES_)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(151)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fractal_fractal_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { UiComponent } from './fractal/ui/ui.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__fractal_fractal_component__["a" /* FractalComponent */]
            // UiComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexRoi; });
var ComplexRoi = (function () {
    function ComplexRoi(x, y, width, height, z, a) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._zoom = 1 / z;
        this._aspect = a;
    }
    Object.defineProperty(ComplexRoi.prototype, "top", {
        get: function () {
            return this._aspect <= 1 ?
                this._y - this._height * this._zoom / 2 :
                this._y - this._height * this._aspect * this._zoom / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "left", {
        get: function () {
            return this._aspect <= 1 ?
                this._x - this._width / this._aspect * this._zoom / 2 :
                this._x - this._width * this._zoom / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "width", {
        get: function () {
            return this._aspect <= 1 ?
                this._width / this._aspect * this._zoom :
                this._width * this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "widthSquared", {
        get: function () {
            return this.width * this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "height", {
        get: function () {
            return this._aspect <= 1 ?
                this._height * this._zoom :
                this._height * this._aspect * this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "heightSquared", {
        get: function () {
            return this.height * this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "right", {
        get: function () {
            return this._aspect <= 1 ?
                this._x + this._width / this._aspect * this._zoom / 2 :
                this._x + this._width * this._zoom / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexRoi.prototype, "bottom", {
        get: function () {
            return this._aspect <= 1 ?
                this._y + this._height * this._zoom / 2 :
                this._y + this._height * this._aspect * this._zoom / 2;
        },
        enumerable: true,
        configurable: true
    });
    ComplexRoi.prototype.aspect = function (a) {
        this._aspect = a;
    };
    ComplexRoi.prototype.position = function (x, y) {
        this._x = x;
        this._y = y;
    };
    ComplexRoi.prototype.zoom = function (zoomFactor) {
        this._zoom = 1 / zoomFactor;
    };
    ComplexRoi.prototype.drawSpaceToComplex = function (x, y, w, h) {
        return {
            x: x / w * this.width + this.left,
            y: y / h * this.height + this.top
        };
    };
    return ComplexRoi;
}());

//# sourceMappingURL=complex-roi.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mandelbrot; });
var Mandelbrot = (function () {
    function Mandelbrot(canvas) {
        this._canvas = canvas;
        this._width = canvas.width;
        this._height = canvas.height;
        this._canvasContext = canvas.getContext('2d');
        this._canvasImage = this._canvasContext.getImageData(0, 0, this._width, this._height);
        this._canvasData = this._canvasImage.data;
    }
    Mandelbrot.prototype.generate = function (cxMin, cxMax, cyMin, cyMax, iterations, radius) {
        var curPx = 0;
        console.log(iterations, radius);
        for (var y = 0; y < this._height; y++) {
            for (var x = 0; x < this._width; x++) {
                var nx = x / (this._width - 1);
                var ny = y / (this._height - 1);
                var cr = nx * (cxMax - cxMin) + cxMin;
                var ci = ny * (cyMax - cyMin) + cyMin;
                var iterRet = this._iterator(cr, ci, iterations, radius);
                var rgba = (iterRet[0] < iterations) ? this._getColor(iterations, iterRet[0], iterRet[1], iterRet[2]) : [0, 0, 0, 255];
                this._canvasData[curPx++] = rgba[0];
                this._canvasData[curPx++] = rgba[1];
                this._canvasData[curPx++] = rgba[2];
                this._canvasData[curPx++] = rgba[3];
            }
        }
        this._canvasContext.putImageData(this._canvasImage, 0, 0);
    };
    Mandelbrot.prototype._iterator = function (cr, ci, n, r) {
        var i = n;
        var rr = r * r;
        var zr = 0;
        var zi = 0;
        var zr2 = 0;
        var zi2 = 0;
        var zri = 0;
        while (i-- && zr2 + zi2 < rr) {
            zr2 = zr * zr;
            zi2 = zi * zi;
            zri = zr * zi;
            zr = zr2 - zi2 + cr;
            zi = zri + zri + ci;
        }
        return [n - i, zr2, zi2];
    };
    Mandelbrot.prototype._smoothColor = function (n, a, b) {
        // Kindly borrowed from http://linas.org/art-gallery/escape/escape.html
        return n + 1 - Math.log(Math.log(Math.sqrt(a + b))) / Math.log(2.0);
    };
    Mandelbrot.prototype._getColor = function (steps, n, Tr, Ti) {
        var v = this._smoothColor(n, Tr, Ti);
        var c = this._hsv2Rgb(360.0 * v / steps, 1, 1);
        c.push(255);
        return c;
    };
    Mandelbrot.prototype._hsv2Rgb = function (h, s, v) {
        if (v > 1.0) {
            v = 1.0;
        }
        var hp = h / 60.0;
        var c = v * s;
        var x = c * (1 - Math.abs((hp % 2) - 1));
        var rgb = [0, 0, 0];
        if (0 <= hp && hp < 1)
            rgb = [c, x, 0];
        if (1 <= hp && hp < 2)
            rgb = [x, c, 0];
        if (2 <= hp && hp < 3)
            rgb = [0, c, x];
        if (3 <= hp && hp < 4)
            rgb = [0, x, c];
        if (4 <= hp && hp < 5)
            rgb = [x, 0, c];
        if (5 <= hp && hp < 6)
            rgb = [c, 0, x];
        var m = v - c;
        rgb[0] += m;
        rgb[1] += m;
        rgb[2] += m;
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };
    return Mandelbrot;
}());

//# sourceMappingURL=mandelbrot.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map