import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection, ApplicationConfig } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './src/app.component';

const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
