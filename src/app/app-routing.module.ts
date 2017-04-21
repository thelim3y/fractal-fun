import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FractalComponent } from './fractal/fractal.component';



const _ROUTES_: Routes = [
    { path: '', component: FractalComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(_ROUTES_)],
    exports: [RouterModule],
    providers: []
})


export class AppRoutingModule { }
