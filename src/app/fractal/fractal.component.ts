import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchmap';
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

    private _form: FormGroup;
    private _rendering: boolean;
    private _calculatedIterations: number;

    private _mousePos: any;
    private _renderTime: number;
    private _showMenu: boolean;

    @ViewChild('fractal') private _canvas;

    private _mandelbrot: Mandelbrot;


    public get form(): FormGroup {
        return this._form;
    }

    public get calculatedIterations(): number {
        return this._calculatedIterations;
    }

    public get renderTime() : number {
        return this._renderTime;
    }
    
    public get showMenu() : boolean {
        return this._showMenu;
    }


    constructor(
        private _router: Router, 
        private _route: ActivatedRoute,
        private _fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this._reset();

        const _mouseMove$: Observable<MouseEvent> = Observable.fromEvent(this._canvas.nativeElement, 'mousemove');
        _mouseMove$
            .sample(Observable.interval(50))
            .subscribe((ev) => {
                let c = this._getComplexView();
                let fv: any = c.drawSpaceToComplex(ev.offsetX, ev.offsetY, this._drawSpace.width, this._drawSpace.height);

                this._mousePos = {
                    cx: fv.x,
                    cy: fv.y,
                    x: ev.offsetX,
                    y: ev.offsetY
                }
            });
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        this._canvas.nativeElement.width = this._drawSpace.width;
        this._canvas.nativeElement.height = this._drawSpace.height;

        this._mandelbrot = new Mandelbrot(this._canvas.nativeElement);

        this._form.setValue(Object.assign({}, this._form.value, this._getRouteQuery()));

        this._renderMandelbrot();
    }

    private _getRouteQuery() {
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
    }

    private _reset() {
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
            'iterations': [100, [Validators.required, Validators.minLength(2)]],
            'autoIteration': [true],
            'escapeRadius': [4, [Validators.required, Validators.minLength(1)]],
            'showCoordinates': [false],
            'zoomFactor': [1],
            'zoomStep': [2],
            'x': [-1],
            'y': [0]
        });

        this._form.valueChanges.subscribe((vals: any) => {
            this._router.navigate([], {queryParams: this._form.value});
        });
    }

    public onCloseMenu(ev: MouseEvent) {
        ev.stopPropagation();
        this._showMenu = false;
    }

    public onOpenMenu(ev: MouseEvent) {
        this._showMenu = true;
    }

    public onZoom(ev: MouseEvent) {
        if(this._rendering) {
            return;
        }

        let c = this._getComplexView();
        let fv: any = c.drawSpaceToComplex(ev.offsetX, ev.offsetY, this._drawSpace.width, this._drawSpace.height);

        if(ev.shiftKey) {
            fv.zoomFactor = this._form.value.zoomFactor / this._form.value.zoomStep;
            // this._zoomFactor /= this._zoomStep;
        }
        else if(ev.ctrlKey) {
            // Just recenter for now
        }
        else {
            fv.zoomFactor = this._form.value.zoomFactor * this._form.value.zoomStep;
            // this._zoomFactor *= this._zoomStep;
        }     

        this._form.setValue(Object.assign({}, this._form.value, fv));

        // this._complexRoi.zoom(this._zoomFactor);

        this._renderMandelbrot();
    }

    public onClickRender(ev: MouseEvent) {
        this._renderMandelbrot();
    }

    public onReset(ev: MouseEvent) {
        this._reset();
        this._renderMandelbrot();
    }

    private _getComplexView(): ComplexRoi {
        return new ComplexRoi(+this._form.value.x, +this._form.value.y, 4, 4, +this._form.value.zoomFactor, +this._drawSpace.aspect);
    }

    private _renderMandelbrot() {
        this._rendering = true;

        let ts = performance.now();

        let complexRoi = this._getComplexView();

        this._calculatedIterations = Math.floor(223 / Math.sqrt(0.001 + 2 * Math.min(complexRoi.width, complexRoi.height)));        

        this._router.navigate([], {queryParams: this._form.value});

        console.log(this._form.value);

        this._mandelbrot.generate(
            complexRoi.left,
            complexRoi.right,
            complexRoi.top,
            complexRoi.bottom,
            this._form.value.autoIteration ? this._calculatedIterations : this._form.value.iterations,
            this._form.value.escapeRadius);

        this._renderTime = performance.now() - ts;

        this._rendering = false;
    }
}
