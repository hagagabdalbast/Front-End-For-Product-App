import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GenericAPIHandlerService } from '../services/generic-apihandler.service';
import { APIResponseVM } from './../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = `${environment.APIURL}/Products`;
  
  // Explicitly typed httpOptions
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient,private genericApihandler:GenericAPIHandlerService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred
      console.error('A client-side or network error occurred:', error.error.message);
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return a user-facing error message
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
  
  getAllProducts(): Observable<IProduct[]> {

   /*  return this.genericApihandler.getAll('/Products')
    .pipe(
      map((APIResponseVM:APIResponseVM) =>{
      APIResponseVM.data
    })
  ); */
    return this.http.get<IProduct[]>(this.baseUrl).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }

  getProductByCatID(CatId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}?categoryID=${CatId}`).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }

  getProductByID(PrId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${PrId}`).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }

  addProduct(newProduct: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      this.baseUrl,
      JSON.stringify(newProduct),
      this.httpOptions
    ).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }

  updateProduct(PrId: number, updatedProduct: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `${this.baseUrl}/${PrId}`,
      JSON.stringify(updatedProduct),
      this.httpOptions // Add httpOptions for headers
    ).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }

  deleteProduct(PrId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${PrId}`).pipe(
      retry(2), // Retry up to 2 times in case of failure
      catchError(this.handleError) // Use the reusable handleError function
    );
  }
}
