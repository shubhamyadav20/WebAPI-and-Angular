import { Component, OnInit } from '@angular/core';
import { Product } from '../Entities/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProductById: string;
  productEdit: Product;
  editableProductForm: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router, private serviceProduct: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data) => {
        this.editProductById = data.id;
      }
    )
    // this.editProductById = this.route.snapshot.params["id"];
    this.serviceProduct.getProductsById(this.editProductById).subscribe(data=>{
      this.productEdit = data;
      //console.log(this.productEdit);
    
    
      this.editableProductForm = new FormGroup(
        {
          productId: new FormControl(this.productEdit.ProductID),
          title: new FormControl(this.productEdit.Title, [Validators.required]),
          price: new FormControl(this.productEdit.Price),
          color: new FormControl(this.productEdit.Color),
          inStock: new FormControl(this.productEdit.inStock),
          details: new FormControl(this.productEdit.Details),
          quantity: new FormControl(this.productEdit.Quantity),
          rating: new FormControl(this.productEdit.Rating),
          expiryDate: new FormControl(this.productEdit.ExpiryDate),
          imageUrl: new FormControl(this.productEdit.ImageUrl)
        }
      )
    });

  }

  setDefault(){
    this.editableProductForm.setValue({
      productId: this.productEdit.ProductID,
      title: this.productEdit.Title,
      price: this.productEdit.Price,
      color: this.productEdit.Color,
      inStock: this.productEdit.inStock,
      details: this.productEdit.Details,
      quantity: this.productEdit.Quantity,
      rating: this.productEdit.Rating,
      expiryDate: this.productEdit.ExpiryDate,
      imageUrl: this.productEdit.ImageUrl
    });
    console.log(this.productEdit);

  }

  goBack() : void{
    this.router.navigate(['listproducts'])
  }

  update(){    
    console.log(this.editableProductForm.value);

      this.serviceProduct.updateProduct(this.editProductById, this.editableProductForm.value).subscribe(data=>{
        console.log(data);
      });
    alert("Updated");
    console.log(this.editableProductForm.value)
    this.goBack();
  }

}
