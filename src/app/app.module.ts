import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent],
  entryComponents: [Material2AppAppComponent],
})
export class MaterialAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(Material2AppAppComponent);
  }
}
