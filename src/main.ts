import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {Material2AppAppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';



if (environment.production) {
  enableProdMode();
}

bootstrap(Material2AppAppComponent, [
   disableDeprecatedForms(),
   provideForms(),
  HTTP_PROVIDERS,
]);
