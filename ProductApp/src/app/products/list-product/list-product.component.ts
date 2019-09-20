import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Entities/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit,AfterViewInit {

  //title: string = "PRODUCT APP";
  products: Product[];
  //developerName: string= 'Shubham Yadav';
  searchText: string = "";
  ImageWidth: number=100;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data)=>{
      this.products= data;
    });
  }
  ngAfterViewInit(){
    setTimeout(()=>
    this.productService.getProducts().subscribe((data)=>{
      this.products= data;
      console.log(data);
    }),200)
  }

  editProduct(id): void{
    this.router.navigate(['editproducts',id])
  }
  
  deleteProduct(id): void{
    this.router.navigate(['deleteproduct',id])
  }

  detailedProduct(id): void{
    this.router.navigate(['productdetails',id])
  }

}
