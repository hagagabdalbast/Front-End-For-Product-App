import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private prdList: IProduct[];
 
  constructor() {
    this.prdList = [
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
    ];
  }

  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductsbyCatId(CatId: number): IProduct[] {
    if (CatId == 0) return this.prdList;
    else return this.prdList.filter((prd) => prd.categoryID == CatId);
  }

  getProductById(prdId: number): IProduct | null {
    let foundProduct = this.prdList.find((prd) => prd.id == prdId);

    return foundProduct ? foundProduct : null;
  }
  getProductIDs():number[]
  {
    let PrdIds:number[]=this.prdList.map(prd=>prd.id);
    return PrdIds;
  }
}
