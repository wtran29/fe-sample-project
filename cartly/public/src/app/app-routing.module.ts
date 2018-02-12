import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductManageComponent } from './product/product-manage/product-manage.component';
import { ProductCartComponent } from './product/product-cart/product-cart.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard/shop',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: ProductComponent,
		children: [
			{ path: 'shop', component: ProductManageComponent },
			{ path: 'cart', component: ProductCartComponent}]	
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
