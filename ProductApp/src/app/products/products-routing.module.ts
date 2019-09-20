import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const productroutes: Routes=[
  {path: 'listproducts', component: ListProductComponent},
  {path: 'addproducts', component: AddProductComponent},
  {path: 'editproducts/:id', component: EditProductComponent},
  {path: 'deleteproduct/:id', component: DeleteProductComponent},
  {path: 'productdetails/:id', component: ProductDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(productroutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
