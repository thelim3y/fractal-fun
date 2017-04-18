export class Mandelbrot {
    private _canvas: any;
    private _canvasContext: any;
    private _canvasImage: any;
    private _canvasData: any;

    private _width: number;
    private _height: number;


    constructor(canvas: any) {
        this._canvas = canvas;

        this._width = canvas.width;
        this._height = canvas.height;

        this._canvasContext = canvas.getContext('2d');
        this._canvasImage = this._canvasContext.getImageData(0, 0, this._width, this._height);
        this._canvasData = this._canvasImage.data;
    }

    generate(cxMin: number, cxMax: number, cyMin: number, cyMax: number, iterations: number) {
        let curPx = 0;
        let rgba = [4];

        console.log(iterations);

        for(let y = 0; y < this._height; y++) {
            for(let x = 0; x < this._width; x++) {
                let nx = x / (this._width - 1);
                let ny = y / (this._height - 1);

                let cx = nx * (cxMax - cxMin) + cxMin;
                let cy = ny * (cyMax - cyMin) + cyMin;

                let iterRet = this._iterator(cx, cy, iterations);

                rgba = (iterRet[0] < iterations) ? this._getColor(iterations, iterRet[0], iterRet[1], iterRet[2]): [0, 0, 0, 255];

                this._canvasData[curPx++] = rgba[0];
                this._canvasData[curPx++] = rgba[1];
                this._canvasData[curPx++] = rgba[2];
                this._canvasData[curPx++] = rgba[3];
            }
        }

        this._canvasContext.putImageData(this._canvasImage, 0, 0);
    }

    _iterator(cr: number, ci: number, n: number) {
        let i = n;

        let zr = 0;
        let zi = 0;
        let zrr = 0;
        let zii = 0;
        let zri = 0;

        while(i-- && zrr + zii < 4) {
            zrr = zr * zr;
            zii = zi * zi;
            zri = zr * zi;

            zr = zrr - zii + cr;
            zi = zri + zri + ci;
        }

        return [n - i, zrr, zii];
    }

    _smoothColor(n, a, b): number {
        // Kindly borrowed from http://linas.org/art-gallery/escape/escape.html
        return n + 1 - Math.log(Math.log(Math.sqrt(a + b))) / Math.log(2.0);
    }

    _getColor(steps, n, Tr, Ti)
    {
        var v = this._smoothColor(n, Tr, Ti);
        var c = this._hsv2Rgb(360.0 * v / steps, 1.0, 1.0);
        c.push(255);

        return c;
    }

    _hsv2Rgb(h, s, v) {
        if(v > 1.0) {
            v = 1.0;
        }

        var hp = h / 60.0;
        var c = v * s;
        var x = c * (1 - Math.abs((hp % 2) - 1));
        var rgb = [0, 0, 0];

        if ( 0<=hp && hp<1 ) 
            rgb = [c, x, 0];
        
        if ( 1<=hp && hp<2 ) 
            rgb = [x, c, 0];
        
        if ( 2<=hp && hp<3 ) 
            rgb = [0, c, x];
        
        if ( 3<=hp && hp<4 ) 
            rgb = [0, x, c];
        
        if ( 4<=hp && hp<5 ) 
            rgb = [x, 0, c];
        
        if ( 5<=hp && hp<6 ) 
            rgb = [c, 0, x];

        var m = v - c;
        rgb[0] += m;
        rgb[1] += m;
        rgb[2] += m;

        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;

        return rgb;
    }    
}