import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DisplayMediaComponent} from './display-media/display-media.component';
import {InputMediaComponent} from './input-media/input-media.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayMediaComponent,
    InputMediaComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
