import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection, ApplicationConfig } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './src/app.component';

console.log('[DEBUG] index.tsx - Starting to import modules');

const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};

console.log('[DEBUG] index.tsx - AppConfig created, about to bootstrap');

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('[DEBUG] Angular bootstrapped successfully');
  })
  .catch(err => {
    console.error('[ERROR] Bootstrap failed:', err);
    console.error('[ERROR] Error stack:', err.stack);
  });

// AI Studio always uses an `index.tsx` file for all project types.
