export class ComplexNumber {
    private _a;     //Real
    private _b;     // Imaginary


    constructor(a: number, b: number) {
        this._a = a;
        this._b = b;
    }

    public get a() : number {
        return this._a;
    }
    
    public get b() : number {
        return this._b;
    }


    magnitude() {
        return Math.sqrt(this._a * this._a + this._b * this._b);
    }

    magnitudeSquared() {
        return this._a * this._a + this._b * this._b;
    }

    square() {
        let k = this._a * this.a - this._b * this._b;
        this._b = 2 * this._a * this._b;
        this._a = k;
    }

    add(c: ComplexNumber) {
        this._a += c.a;
        this._b += c.b;
    }
}