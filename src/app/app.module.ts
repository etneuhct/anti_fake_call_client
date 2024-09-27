import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InitialModule} from './initial.module';
import {MaterialModule} from './material.module';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitialModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ], bootstrap: [AppComponent]
})
export class AppModule {
}
