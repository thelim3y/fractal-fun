webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "*, *::before, *::after {\n  box-sizing: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "canvas {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".fractal-ui {\n  width: 300px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: rgba(0, 0, 0, 0.65);\n  opacity: 0.85;\n  color: white;\n  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.7);\n  padding: 2em 1em;\n  border: 2px solid black;\n  font-size: 0.75em; }\n  .fractal-ui > div {\n    border-top: 3px solid black;\n    padding: 1em 0; }\n    .fractal-ui > div::last-child {\n      margin-bottom: 2em; }\n\nh1 {\n  font-size: 2.25em;\n  color: #FD3809;\n  margin: 0 0 0.5em;\n  text-align: center; }\n\np {\n  text-align: center;\n  margin: 0; }\n  p.credits {\n    color: #D46A6A; }\n\nbutton {\n  background-color: #333;\n  color: white;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<canvas #fractal (click)=\"onClick($event)\"></canvas>\n<ui (onRender)=\"_renderMandelbrot($event)\"></ui>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<section class=\"fractal-ui\">\n    <div>\n        <h1>Fractal Fun</h1>\n        <p>With Angular4, HTML5 Canvas, and Typescript</p>\n    </div>\n\n    <div>\n        <button (click)=\"_onRender.emit(true)\">Render</button>\n        <button (click)=\"_onReset($event)\">Reset</button>\n    </div>\n\n    <div>\n        <p class=\"credits\">Written using Angular4, HTML5 Canvas</p>\n    </div>    \n</section>\n\n<!--<p>Screen : {{_mousePos.x}}, {{_mousePos.y}}</p>\n<p>Complex: {{_mousePos._a}}, {{_mousePos._b}}</p>\n<input type=\"number\" value={{_iterations}} (change)=\"onIterationChanged($event)\">\n<input type=\"number\" value={{_complexRadius}} (change)=\"onComplexRadiusChanged($event)\">-->\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromevent__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromevent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromevent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_sample__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_sample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_sample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_complex__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_complex_roi__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_mandelbrot__ = __webpack_require__(98);
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
    function FractalComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
        this._drawSpace = {
            width: 900,
            height: 900,
            aspect: 1
        };
    }
    FractalComponent.prototype.ngOnInit = function () {
        this._iterations = 500;
        this._escapeRadius = 4;
        this._mousePos = {
            x: 0,
            y: 0
        };
        this._zoomFactor = 1;
        this._zoomStep = 2;
    };
    FractalComponent.prototype.ngOnDestroy = function () {
    };
    FractalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._drawSpace.width = window.innerWidth;
        this._drawSpace.height = window.innerHeight;
        this._drawSpace.aspect = window.innerHeight / window.innerWidth;
        this._complexRoi = new __WEBPACK_IMPORTED_MODULE_7__shared_complex_roi__["a" /* ComplexRoi */](-1, 0, 4, 4);
        this._complexRoi.zoom(this._zoomFactor);
        this._complexRoi.aspect(this._drawSpace.aspect);
        this._canvas.nativeElement.width = this._drawSpace.width;
        this._canvas.nativeElement.height = this._drawSpace.height;
        this._mandelbrot = new __WEBPACK_IMPORTED_MODULE_8__shared_mandelbrot__["a" /* Mandelbrot */](this._canvas.nativeElement);
        this._mouseMove$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._canvas.nativeElement, 'mousemove');
        this._mouseMove$
            .sample(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].interval(100))
            .subscribe(function (ev) {
            _this._mousePos = Object.assign({}, _this._drawSpaceToComplexPlane(ev.offsetX, ev.offsetY), {
                x: ev.offsetX,
                y: ev.offsetY
            });
        });
        this._renderMandelbrot();
    };
    FractalComponent.prototype._calcComplexRoiAspect = function () {
    };
    FractalComponent.prototype.onIterationChanged = function (ev) {
        this._iterations = +ev.target.value;
        this._renderMandelbrot();
    };
    FractalComponent.prototype.onComplexRadiusChanged = function (ev) {
        this._escapeRadius = +ev.target.value;
        this._renderMandelbrot();
    };
    FractalComponent.prototype.onClick = function (ev) {
        var c = this._drawSpaceToComplexPlane(ev.offsetX, ev.offsetY);
        this._complexRoi.position(c.a, c.b);
        this._zoomFactor *= this._zoomStep;
        this._complexRoi.zoom(this._zoomFactor);
        this._renderMandelbrot();
    };
    FractalComponent.prototype._drawSpaceToComplexPlane = function (x, y) {
        var nx = x / this._drawSpace.width;
        var ny = y / this._drawSpace.height;
        return new __WEBPACK_IMPORTED_MODULE_6__shared_complex__["a" /* ComplexNumber */](nx * this._complexRoi.width + this._complexRoi.left, ny * this._complexRoi.height + this._complexRoi.top);
    };
    FractalComponent.prototype.onClickRender = function (ev) {
        this._renderMandelbrot();
    };
    FractalComponent.prototype._renderMandelbrot = function () {
        this._calculatedIterations = Math.floor(243 / Math.sqrt(0.001 + 2 * Math.min(this._complexRoi.width, this._complexRoi.heightSquared)));
        var ts = performance.now();
        this._mandelbrot.generate(this._complexRoi.left, this._complexRoi.right, this._complexRoi.top, this._complexRoi.bottom, this._calculatedIterations, this._escapeRadius);
        console.log('Render time: ' + (performance.now() - ts).toFixed(2) + 'ms');
    };
    return FractalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('fractal'),
    __metadata("design:type", Object)
], FractalComponent.prototype, "_canvas", void 0);
FractalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-fractal',
        template: __webpack_require__(158),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], FractalComponent);

var _a, _b;
//# sourceMappingURL=fractal.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fractal_fractal_component__ = __webpack_require__(60);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(157),
        styles: [__webpack_require__(153)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fractal_fractal_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fractal_ui_ui_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__fractal_fractal_component__["a" /* FractalComponent */],
            __WEBPACK_IMPORTED_MODULE_7__fractal_ui_ui_component__["a" /* UiComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiComponent = (function () {
    function UiComponent() {
        this._onRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    UiComponent.prototype._onReset = function () {
    };
    return UiComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])('onRender'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], UiComponent.prototype, "_onRender", void 0);
UiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'ui',
        template: __webpack_require__(159),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [])
], UiComponent);

var _a;
//# sourceMappingURL=ui.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexRoi; });
var ComplexRoi = (function () {
    function ComplexRoi(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._zoom = 1;
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
    return ComplexRoi;
}());

//# sourceMappingURL=complex-roi.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexNumber; });
var ComplexNumber = (function () {
    function ComplexNumber(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(ComplexNumber.prototype, "a", {
        get: function () {
            return this._a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "b", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    ComplexNumber.prototype.magnitude = function () {
        return Math.sqrt(this._a * this._a + this._b * this._b);
    };
    ComplexNumber.prototype.magnitudeSquared = function () {
        return this._a * this._a + this._b * this._b;
    };
    ComplexNumber.prototype.square = function () {
        var k = this._a * this.a - this._b * this._b;
        this._b = 2 * this._a * this._b;
        this._a = k;
    };
    ComplexNumber.prototype.add = function (c) {
        this._a += c.a;
        this._b += c.b;
    };
    return ComplexNumber;
}());

//# sourceMappingURL=complex.js.map

/***/ }),

/***/ 98:
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
        var rgba = [4];
        console.log('Iterations: ' + iterations);
        for (var y = 0; y < this._height; y++) {
            for (var x = 0; x < this._width; x++) {
                var nx = x / (this._width - 1);
                var ny = y / (this._height - 1);
                var cx = nx * (cxMax - cxMin) + cxMin;
                var cy = ny * (cyMax - cyMin) + cyMin;
                var iterRet = this._iterator(cx, cy, iterations, radius);
                rgba = (iterRet[0] < iterations) ? this._getColor(iterations, iterRet[0], iterRet[1], iterRet[2]) : [0, 0, 0, 255];
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
        var c = this._hsv2Rgb(360.0 * v / steps, 1.0, 1.0);
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

/***/ 99:
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

},[203]);
//# sourceMappingURL=main.bundle.js.map