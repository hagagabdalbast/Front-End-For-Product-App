import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './Components/Order/ProductDetails/ProductDetails.component';
import { HeaderComponent } from './Components/header/header.component'; // Import the standalone component
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { provideHttpClient } from '@angular/common/http'; // Import new HttpClient configuration

@NgModule({
  declarations: [
    // MainLayoutComponent,   // Declare MainLayoutComponent if needed
    
    ProductDetailsComponent, // Declare ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,       // Import HeaderComponent as a standalone component
  ],
  providers: [
    provideHttpClient(), // New configuration for HttpClient
  ],
})
export class AppModule { }
