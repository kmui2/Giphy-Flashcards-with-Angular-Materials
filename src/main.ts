import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {Material2AppAppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(Material2AppAppComponent, [
  HTTP_PROVIDERS,
]);
