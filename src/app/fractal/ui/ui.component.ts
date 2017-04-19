import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui',
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
    @Output('onRender') private _onRender: EventEmitter<any>;

    constructor() {
        this._onRender = new EventEmitter<any>();
    }

    ngOnInit() {
    }

    private _onReset() {
        
    }
}
