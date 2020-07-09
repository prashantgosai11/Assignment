import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './_shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCurrencyComponent } from './Addcurrency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OnlynumberDirective } from './_shared/numberOnlyDirective';


@NgModule({
  declarations: [
    AppComponent,
    AddCurrencyComponent,
    OnlynumberDirective

  ],
  imports: [
    CustomMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AddCurrencyComponent
],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
