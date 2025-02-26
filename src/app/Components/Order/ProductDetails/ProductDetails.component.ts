import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { StaticProductsService } from '../../../services/static-products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currPrid: number = 0;
  Prd: IProduct | null = null;
  ProductIDsList: number[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private staticPrd: StaticProductsService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit() {
    // Subscribe to route parameters to get the product ID (pid)
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // Retrieve the current product ID from the route parameters
      const pid = paramMap.get('pid');
      
      // Ensure pid is not null before converting to a number
      if (pid) {
        this.currPrid = Number(pid);
        
        // Fetch the product details using the ID
        this.Prd = this.staticPrd.getProductById(this.currPrid);
      }
    });
    
    // Get the list of all product IDs
    this.ProductIDsList = this.staticPrd.getProductIDs();
  }
  

  goBack() {
    this.location.back();
  }
  PrevProduct() {
    let currIndex = this.ProductIDsList.findIndex(
      (element, index) => element == this.currPrid
    );
   // console.log(currIndex);
   let prevPrdId;
   if(currIndex>0){
    let prevPrdId=this.ProductIDsList[currIndex-1];
    this.router.navigate(['/Products',prevPrdId]);
   }
  }

  NextProduct() {
    let currIndex = this.ProductIDsList.findIndex( (element, index) => element == this.currPrid );
   // console.log(currIndex);
   let nextPrdId;
   if(currIndex<this.ProductIDsList.length){
    let nextPrdId=this.ProductIDsList[currIndex+1];
    this.router.navigate(['/Products',nextPrdId]);
   }
  }
}
