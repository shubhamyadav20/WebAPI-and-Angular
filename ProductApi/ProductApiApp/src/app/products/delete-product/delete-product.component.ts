import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  

}
