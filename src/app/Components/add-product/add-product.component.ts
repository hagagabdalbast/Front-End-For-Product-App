import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ICategory } from '../../Models/icategory';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule], // Add CommonModule, FormsModule if needed
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  CategoryList:ICategory[]
  newProduct:IProduct={} as IProduct
  constructor(private prdService: ProductsService,private router:Router) {

    this.CategoryList = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Mobile Phones' },
      { id: 3, name: 'Tablets' },
    ];
   }

  addProduct(): void {
    /* const prd: IProduct = {
      id: 100,
      name: 'New Tablet',
      price: 100,
      quantity: 5,
      imgURL: 'https://fakeimg.pl/250x100', // Update this with an actual URL if needed
      categoryID: 2 */
    

    const observer = {
      next: (prd: IProduct) => {
        alert('Product added successfully:');
        this.router.navigateByUrl('/Products'); // Ensure `router` is injected in the constructor
      },
      error: (err: Error) => {
        alert('Error adding product: ' + err.message);
      }
    }
    
    // Make sure to move the subscription call outside of the observer declaration
    this.prdService.addProduct(this.newProduct).subscribe(observer);
  };
   
}
