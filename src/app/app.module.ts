import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FractalComponent } from './fractal/fractal.component';
import { UiComponent } from './fractal/ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    FractalComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
