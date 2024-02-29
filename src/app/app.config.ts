import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterFeatures, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
const routerFeatures: Array<RouterFeatures> = [withComponentInputBinding()];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, ...routerFeatures),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(HttpClientModule),
  ]
};
