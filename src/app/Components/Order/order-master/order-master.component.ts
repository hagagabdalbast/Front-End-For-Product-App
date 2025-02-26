import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements AfterViewInit, OnInit, OnChanges {
  CategoryList: ICategory[] = [];
  selectedCategoryId: number = 0;
  receivedOrderTotalPrice: number = 0;

  @ViewChild('ClientNameInp') ClientNameInpElem!: ElementRef;
  @ViewChild(ProductListComponent) ProductListCompObj!: ProductListComponent;

  constructor() {
    this.CategoryList = [
      { id: 0, name: 'All' },
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Mobile Phones' },
      { id: 3, name: 'Tablets' },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Implement change detection logic here if needed
  }

  ngOnInit(): void {
    // Initialization logic here if needed
  }

  ngAfterViewInit(): void {
    if (this.ClientNameInpElem) {
      this.ClientNameInpElem.nativeElement.value = 'your name here';
      this.ClientNameInpElem.nativeElement.style.border = '2px solid red';
    }

    // Uncomment if you need to log or manipulate the ProductListComponent
    // console.log(this.ProductListCompObj?.prdList);
  }

  CompleteOrder(): void {
    // Ensure ProductListCompObj is defined before accessing
    if (this.ProductListCompObj) {
      // Example logic to modify product list
      // this.ProductListCompObj.prdList[0].quantity -= 1;
    }
  }

  OnTotalPriceChanged(totalprice: number): void {
    this.receivedOrderTotalPrice = totalprice;
  }
}
