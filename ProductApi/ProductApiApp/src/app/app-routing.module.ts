import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ListProductComponent } from './products/list-product/list-product.component';


const routes: Routes = [
  {path: 'listproduct', component: ListProductComponent},
  {path: '', redirectTo:'listproduct', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
