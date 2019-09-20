import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './productfilter.pipe';
import { ProductService } from './product.service';
//import {} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AddProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ListProductComponent,
    ProductDetailsComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
