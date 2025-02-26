import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Import routes
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import withFetch

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the router with routes
    provideHttpClient(withFetch()), // Provide HttpClient with fetch configuration
    importProvidersFrom(BrowserModule, FormsModule), // Import necessary modules
  ],
}).catch(err => console.error(err));
