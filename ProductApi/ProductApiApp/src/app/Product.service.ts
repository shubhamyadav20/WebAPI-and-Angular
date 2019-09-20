import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

import {Observable,throwError} from 'rxjs';

import{tap,catchError,map} from 'rxjs/operators';
import { Product } from './products/Entities/Product';

@Injectable()
export class ProductService {

// product:Product;

  // readonly rootURL="https://localhost:44349/api";

  apiurl='https://localhost:44349/api/products';

  headers =new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');

  httpOptions={
    headers:this.headers
    
  };
  constructor(private http : HttpClient) {
    
  }

  
  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }
  Postproducts(prod:Product){
    this.http.post<Product>(this.apiurl,prod,this.httpOptions).pipe(catchError(this.handleError))
  }

  addProduct(prod:Product): Observable<Product>{
    return this.http.post<Product>(this.apiurl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  updateProduct(prod:Product):Observable<null | Product>{
    return this.http.put<Product>(this.apiurl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

  urlcreater(id)
  {
    return "https://localhost:44385/api/product/"+id
  }


  putProduct(Prod:Product):Observable<null|Product>{
    let id=Prod.ProductID
    console.log(id)
    console.log(Prod)
    return this.http.put<Product>(this.urlcreater(id),Prod,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError))
 
  }
  getproductbyid(id){
    return this.http.get<Product[]>(this.apiurl+"/"+id).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }
}
