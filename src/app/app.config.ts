import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module'; // Import the routes array
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes), // Provide the router with routes
    importProvidersFrom(BrowserModule, FormsModule), // Import necessary modules
    provideHttpClient() // Provide HttpClient separately
  ],
};
