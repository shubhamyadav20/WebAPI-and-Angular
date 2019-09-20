import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
//import { Product } from '../Entities/Product.Entity';
//import { ProductInMemDataService } from '../product-in-mem-data.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Entities/Product';


import { ProductService } from 'src/app/Product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  

  title="Add Product Form";
 
  addProductForm:FormGroup;
 // producttoedit:Product;
  constructor(private route :ActivatedRoute,private serviceproduct:ProductService, private fb:FormBuilder, private router:Router) {  }

  ngOnInit() {
    

    //this.producttoedit=this.sc.getProductsById(this.productidtoedit);
   // console.log(this.producttoedit);
    this.addProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Details:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageURL:new FormControl(),
      inStock:new FormControl(Boolean),
      Rating:new FormControl()
    })
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      inStock:"",
      Rating:""
        })
  }

  setDefault(){
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      inStock:"",
      Rating:""
        })

  }

  prod:Product;
  addProduct(){
    console.log(this.addProductForm.value);
    this.addProductForm.value
    this.serviceproduct.addProduct(this.addProductForm.value).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    this.router.navigate(['Home']);
  }
  Goback():void{
    this.router.navigate(['Home'])
  }
}