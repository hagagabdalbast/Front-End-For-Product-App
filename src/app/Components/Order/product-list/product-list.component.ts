import {
  Component,
  EventEmitter,
  Input,
  input,
  OnChanges,
  OnInit,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { parse } from 'path';
import { ICategory } from '../../../Models/icategory';
import { FormsModule } from '@angular/forms';// Update the path accordingly
import { USDtoEGPPipe } from '../../Pipes/usdto-egp.pipe';
import { StaticProductsService } from '../../../services/static-products.service';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Import RouterLink and RouterLinkActive
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    USDtoEGPPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'], // Corrected property name
})
export class ProductListComponent implements OnInit, OnChanges {
  orderTotalPrice: number = 0;
  @Input() sentCategoryId: number = 0; //@input to take value from the parent
  @Output() TotalPriceChanged: EventEmitter<number>;
  // prdList: IProduct[];
  OrderDate: Date;
  PrdListofCat: IProduct[] = [];

  constructor(
    private staticProductService: StaticProductsService,
    private router: Router,
    private PrdService: ProductsService
  ) {
    this.TotalPriceChanged = new EventEmitter<number>();

    /*  this.prdList = [
      {
        id: 100,
        name: 'Lenovo ThinkPad Laptop',
        price: 100,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook Laptop',
        price: 200,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tab 2',
        price: 300,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'Samsung Tab',
        price: 400,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 2,
      },
      {
        id: 500,
        name: 'Samsung Note 10',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/250x100',
        categoryID: 3,
      },
    ]; */

    this.OrderDate = new Date();
    // this.PrdListofCat = this.prdList;
  }
  ngOnInit(): void {
    this.PrdService.getAllProducts().subscribe((products) => {
      this.PrdListofCat = products;
    });
  }
  ngOnChanges(): void {
    //this.filterProductsbyCatId();

    /* this.PrdListofCat = this.staticProductService.getProductsbyCatId(
      this.sentCategoryId
    ); */

    this.PrdService.getProductByCatID(this.sentCategoryId).subscribe(
      (products) => {
        this.PrdListofCat = products;
      }
    );
  }

  buy(PrdPrice: number, count: any) {
    /* casting in angular */
    //let itemsCount=+count;
    //let itemsCount=Number(count);
    //let itemsCount =count as number;
    this.orderTotalPrice += parseInt(count) * PrdPrice;
    //Excute the event
    this.TotalPriceChanged.emit(this.orderTotalPrice);
  }

  /*  change(){
    this.selectedCategoryId=0;
  } */

  /* private filterProductsbyCatId() {
    if (this.sentCategoryId == 0) 
      this.PrdListofCat = this.prdList;
    else
      this.PrdListofCat = this.prdList.filter(prd => prd.categoryID == this.sentCategoryId );
     
  } */

  prdTrackByFunction(index: number, prd: IProduct): number {
    return prd.id;
  }
  openPrdDetails(PrdId: number) {
    this.router.navigate(['/Products', PrdId]);
  }
}
