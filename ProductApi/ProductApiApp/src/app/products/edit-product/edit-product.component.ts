import { Component, OnInit } from '@angular/core';
import { Product } from '../Entities/Product';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Product.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {tap,catchError,map} from 'rxjs/operators';
import {observable, throwError, Observable} from 'rxjs';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  title="Edit Product Form";
  productidtoedit:any;
  editProductForm:FormGroup;
  producttoedit;
  constructor(private route :ActivatedRoute,private serviceProduct,  private fb:FormBuilder, private router:Router)
   {  
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    })
    this.editProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(null),
      Price: new FormControl(null),
      Color:new FormControl(null),
      Quantity:new FormControl(null),
      inStock:new FormControl(null),
      Details:new FormControl(null),
      Rating:new FormControl(null),
      ExpiryDate:new FormControl(null),
      ImageURL:new FormControl(null)
    })
   }

  ngOnInit() {
    this.productbyid();
  }
    
prod;
  updateProduct()
  {
      this.serviceProduct.putProduct(this.editProductForm.value).subscribe(data=>{
        this.prod=data;
        console.log(this.prod);
      })

  }
  productbyid(){
    this.serviceProduct.getproductbyid(this.productidtoedit).subscribe(data=>{
      this.producttoedit=data;
      this.editProd(this.producttoedit);
    })
  }
  editProd(element){
    this.editProductForm=this.fb.group({
      ProductID:[element.ProductID],
      Title:[element.Title],
      Price: [element.Price],
      Color:[element.Color],
      Quantity:[element.Quantity],
      inStock:[element.InStock],
      Details:[element.Details],
      Rating:[element.Rating],
      ExpiryDate:[element.ExpiryDate],
      ImageURL:[element.ImageURL]
    })
  }
  setDefault(){
    this.editProductForm.setValue({
      ProductID:this.producttoedit.ProductID,
      Title:this.producttoedit.Title,
      Price:this.producttoedit.Price,
      Color:this.producttoedit.Color,
      Quantity:this.producttoedit.Quantity,
      Details:this.producttoedit.Details,
      ExpiryDate:this.producttoedit.ExpiryDate,
      ImageURL:this.producttoedit.ImageURL,
      inStock:this.producttoedit.InStock,
      Rating:this.producttoedit.Rating
        })

  }
  Goback():void{
    this.router.navigate(['home'])
  }
  
}
