import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DemoComponent, DemoDialogContent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoDialogContent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DemoDialogContent],
  bootstrap: [AppComponent]
})
export class AppModule {}
