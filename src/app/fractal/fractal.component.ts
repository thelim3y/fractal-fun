import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromevent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/sample';

import { ComplexNumber } from '../shared/complex';
import { ComplexRoi} from '../shared/complex-roi';
import { Mandelbrot } from '../shared/mandelbrot';


@Component({
    selector: 'app-fractal',
    templateUrl: './fractal.component.html',
    styleUrls: ['./fractal.component.scss']
})
export class FractalComponent implements OnInit, AfterViewInit {
    private _drawSpace: any = {
        width: 900,
        height: 900,
        aspect: 1
    };

    private _iterations: number;
    private _calculatedIterations: number;
    private _escapeRadius: number;

    private _complexRoi: ComplexRoi;
    private _zoomFactor: number;
    private _zoomStep;

    private _mouseMove$: Observable<MouseEvent>;
    private _mousePos: any;

    private _mouseWheel$: Observable<WheelEvent>;

    @ViewChild('fractal') private _canvas;

    private _mandelbrot: Mandelbrot;


    constructor(private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._iterations = 500;
        this._escapeRadius = 4;

        this._mousePos = {
            x: 0,
            y: 0
        };

        this._zoomFactor = 1;
        this._zoomStep = 2;
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        this._drawSpace.width = window.innerWidth;
        this._drawSpace.height = window.innerHeight;
        this._drawSpace.aspect = window.innerHeight / window.innerWidth;

        this._complexRoi = new ComplexRoi(-1, 0, 4, 4);
        this._complexRoi.zoom(this._zoomFactor);
        this._complexRoi.aspect(this._drawSpace.aspect);

        this._canvas.nativeElement.width = this._drawSpace.width;
        this._canvas.nativeElement.height = this._drawSpace.height;

        this._mandelbrot = new Mandelbrot(this._canvas.nativeElement);

        this._mouseMove$ = Observable.fromEvent(this._canvas.nativeElement, 'mousemove');
        this._mouseMove$
            .sample(Observable.interval(100))
            .subscribe((ev) => {
                this._mousePos = Object.assign({},
                    this._drawSpaceToComplexPlane(ev.offsetX, ev.offsetY),
                    {
                        x: ev.offsetX,
                        y: ev.offsetY
                    });
            });

        this._renderMandelbrot();
    }

    private _calcComplexRoiAspect() {

    }

    private onIterationChanged(ev) {
        this._iterations = +ev.target.value;
        this._renderMandelbrot();
    }

    private onComplexRadiusChanged(ev) {
        this._escapeRadius = +ev.target.value;
        this._renderMandelbrot();
    }

    public onZoom(ev: MouseEvent) {
        let c = this._drawSpaceToComplexPlane(ev.offsetX, ev.offsetY);
        this._complexRoi.position(c.a, c.b);

        if(!ev.shiftKey) {
            this._zoomFactor *= this._zoomStep;
        }
        else {
            this._zoomFactor /= this._zoomStep;
        }     

        this._complexRoi.zoom(this._zoomFactor);

        this._renderMandelbrot();
    }

    private _drawSpaceToComplexPlane(x, y) {
        let nx = x / this._drawSpace.width;
        let ny = y / this._drawSpace.height;

        return new ComplexNumber(
            nx * this._complexRoi.width + this._complexRoi.left,
            ny * this._complexRoi.height + this._complexRoi.top
        );
    }

    public onClickRender(ev) {
        this._renderMandelbrot();
    }

    private _renderMandelbrot() {
        this._calculatedIterations = Math.floor(243 / Math.sqrt(0.001 + 2 * Math.min(this._complexRoi.width, this._complexRoi.heightSquared)));

        let ts = performance.now();

        this._mandelbrot.generate(
            this._complexRoi.left,
            this._complexRoi.right,
            this._complexRoi.top,
            this._complexRoi.bottom,
            this._calculatedIterations,
            this._escapeRadius);

        console.log('Render time: ' + (performance.now() - ts).toFixed(2) + 'ms');
    }
}
