import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFilterPipe } from './ProductPipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import{HttpClient, HttpHeaders,HttpParams, HttpClientModule} from '@angular/common/http';
import { ProductService } from '../Product.service';

const productroutes: Routes=[
  {path: 'listproducts', component: ListProductComponent},
  {path: 'addproducts', component: AddProductComponent},
  {path: 'editproducts/:id', component: EditProductComponent},
  {path: 'deleteproducts/:id', component: DeleteProductComponent},
  {path: 'productdetails', component: ProductDetailsComponent}
]

@NgModule({
  declarations: [DeleteProductComponent, ListProductComponent, ProductDetailsComponent, EditProductComponent, AddProductComponent, ProductFilterPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forChild(productroutes)
  ],
  providers:[ProductService]
})
export class ProductsModule { }
