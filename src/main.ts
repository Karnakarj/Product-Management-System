import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Application bootstrap
// Simple ga direct component load chestunnam
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
