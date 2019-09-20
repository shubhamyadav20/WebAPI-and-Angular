import { Component, OnInit } from '@angular/core';
import { Product } from '../Entities/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  idForProduct : string;
  productDesc : Product;
  ImageHeight : number = 200;
  ImageWidth : number = 200;

  constructor(private route: ActivatedRoute,private router: Router, private serviceProduct: ProductService){

  }
  ngOnChanges(): void {
  }

  goBack() : void{
    this.router.navigate(['listproducts'])
  }

  ngOnInit() : void {
    this.route.params.subscribe(
      (data) => {
        this.idForProduct = data.id;
      }
    );

    this.serviceProduct.getProductsById(this.idForProduct).subscribe(data=>{
      this.productDesc=data;
    });

    console.log(this.productDesc);
    
  }
}
