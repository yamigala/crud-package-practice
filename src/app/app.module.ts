import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddOrderModule } from './add-order';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddOrderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
