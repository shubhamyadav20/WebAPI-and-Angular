import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Entities/Product';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/Product.service';
 

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];
  imageWidth=100;
  imageMargin=2;
  
  title: string = "PRODUCT APP";
   developerName: string= 'Shubham Yadav';
  searchText: string = "";


  constructor(private productservice:ProductService ,private router:Router){

  }
  

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data)=>{
      this.products=data;
    });
  }
 


 
  // editProduct(id): void{
  //   this.router.navigate(['editproducts',id])
  // }
  
  // deleteProduct(id): void{
  //   this.router.navigate(['deleteproduct',id])
  // }
}