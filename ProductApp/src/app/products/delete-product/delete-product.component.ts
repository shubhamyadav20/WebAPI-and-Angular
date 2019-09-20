import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Entities/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
 
  idToDeleteProduct;
  productDelete : Product;
  ImageHeight : number = 200;
  ImageWidth : number = 200;

  constructor(private route: ActivatedRoute,private router: Router, private serviceProduct: ProductService){

  }
  ngOnChanges(): void {
  }

  goBack() : void{
    this.router.navigate(['listproducts'])
  }
  
  confirmDelete() : void{
    this.serviceProduct.deleteProduct(this.idToDeleteProduct).subscribe(data=>{
      console.log(data);
    });
    alert("Deletion Completed");
    this.goBack();
  }
  

  ngOnInit() : void {
    this.route.params.subscribe(
      (data) => {
        this.idToDeleteProduct = data.id;
      }
    );

    this.serviceProduct.getProductsById(this.idToDeleteProduct).subscribe(data=>{
      this.productDelete=data;
    });
    
  }
}
