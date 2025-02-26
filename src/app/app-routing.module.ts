import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundPathComponent } from './Components/NotFoundPath/NotFoundPath.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { ProductDetailsComponent } from './Components/Order/ProductDetails/ProductDetails.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

// Define the routes
export const routes: Routes = [
  { 
    path: '', 
    component: MainLayoutComponent, 
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Default route to Home
      { path: 'Home', component: HomeComponent },
      { path: 'Products', component: ProductListComponent },
      { path: 'Products/:pid', component: ProductDetailsComponent },  // Dynamic Product Details
      { path: 'Product/AddProduct', component: AddProductComponent }, // Add new product
      { path: 'Order', component: OrderMasterComponent },  // Order page
    ] 
  },
  { path: '**', component: NotFoundPathComponent } // Wildcard route for 404 errors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
