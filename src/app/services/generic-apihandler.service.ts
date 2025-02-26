import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root',
})
export class GenericAPIHandlerService {
  private httpOptions: { headers: HttpHeaders };

  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred
      console.error(
        'A client-side or network error occurred:',
        error.error.message
      );
    } else {
      // Backend error
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return a user-facing error message
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }

  getAll(APIRoute: string):Observable<APIResponseVM>
  {
    return this.httpclient.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}`)
    .pipe(retry(2), 
    catchError(this.handleError));
  }

  getById(id: number) {}

  post(newobject: any) {}

  put(id: number, newobject: any) {}

  delete(id: number) {}
}
