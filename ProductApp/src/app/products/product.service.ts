import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import{Observable, throwError} from "rxjs";
import {tap, catchError, map} from 'rxjs/operators';
import { Product } from './Entities/Product';

@Injectable()
export class ProductService {
  
  apiurl = 'https://localhost:44349/api/products';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');

  httpOptions = {
    headers : this.headers
  };

  constructor(private http: HttpClient) {
   }

  private handleError(error : any){
    console.error(error);
    return throwError(error);
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    );
  }

  
  getProductsById(id) : Observable<Product>{
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError (this.handleError)
    );
  }
  
  updateProduct(id, prod: Product): Observable<null | Product>{
    const url = `${this.apiurl}/${id}`;
    return this.http.put<Product>(url, prod, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  addProduct(prod : Product): Observable<Product>{
    return this.http.post<Product>(this.apiurl ,prod, this.httpOptions).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: string):Observable<Product>{
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
}
