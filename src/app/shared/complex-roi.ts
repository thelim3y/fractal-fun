export class ComplexRoi {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _zoom: number;


    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;

        this._zoom = 1
    }

    public get top() : number {
        return this._y - this._height * this._zoom / 2;
    }

    public get left() : number {
        return this._x - this._width * this._zoom / 2;
    }

    public get width() : number {
        return this._width * this._zoom;
    }

    public get height() : number {
        return this._height * this._zoom;
    }

    public get right(): number {
        return this._x + this._width * this._zoom / 2;
    }

    public get bottom(): number {
        return this._y + this._height * this._zoom / 2;
    }

    public position(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public zoom(zoomFactor: number) {
        this._zoom = 1 / zoomFactor;
    }
}