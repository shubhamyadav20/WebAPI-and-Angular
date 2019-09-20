import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProductComponent } from './products/list-product/list-product.component';


const routes: Routes = [
  {path: 'listproducts', component: ListProductComponent},
  {path: '', redirectTo:'listproducts', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
