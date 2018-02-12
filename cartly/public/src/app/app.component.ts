import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product/product.service';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	cartItems$: Observable<Product[]>;

	// public location: Location
	constructor(private _productService: ProductService) {
		this.cartItems$ = this._productService.getItems();
		this.cartItems$.subscribe((items)=>{
			items;
		})
	}
}
