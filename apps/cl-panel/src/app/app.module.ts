import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLibModule, NewComponentModule } from '@my-lib';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MyLibModule,
        NewComponentModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }