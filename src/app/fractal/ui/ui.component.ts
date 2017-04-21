import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'ui',
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
    @Output('onRender') private _onRender: EventEmitter<any>;

    @Input() public calculatedIterations: number;

    

    constructor(private _fb: FormBuilder) {
        this._onRender = new EventEmitter<any>();
    }

    ngOnInit() {
    }

    private _onReset() {

    }
}
