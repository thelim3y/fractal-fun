export class ComplexRoi {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _defWidth: number;
    private _defHeight: number;
    private _zoom: number;
    private _aspect: number;


    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;

        this._zoom = 1
    }

    public get top() : number {
        return this._aspect <= 1 ?
            this._y - this._height * this._zoom / 2 :
            this._y - this._height * this._aspect * this._zoom / 2;
    }

    public get left() : number {
        return this._aspect <= 1 ?
            this._x - this._width / this._aspect * this._zoom / 2 :
            this._x - this._width * this._zoom / 2;
    }

    public get width() : number {
        return this._aspect <= 1 ?
            this._width / this._aspect * this._zoom :
            this._width * this._zoom;
    }

    public get widthSquared() : number {
        return this.width * this.width;
    }

    public get height() : number {
        return this._aspect <= 1 ?
            this._height * this._zoom :
            this._height * this._aspect * this._zoom;
    }

    public get heightSquared() : number {
        return this.height * this.height;
    }

    public get right(): number {
        return this._aspect <= 1 ?
            this._x + this._width / this._aspect * this._zoom / 2 :
            this._x + this._width * this._zoom / 2
    }

    public get bottom(): number {
        return this._aspect <= 1 ?
            this._y + this._height * this._zoom / 2 :
            this._y + this._height * this._aspect * this._zoom / 2
    }

    public aspect(a) {
        this._aspect = a;
    }

    public position(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public zoom(zoomFactor: number) {
        this._zoom = 1 / zoomFactor;
    }
}