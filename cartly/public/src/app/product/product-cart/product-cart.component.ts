import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Product } from './../product';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  
  cartItems$: Observable<Product[]> = of([]);
  cartItems: Product[] = [];
  item: Product;
  display = 'none';
  backdrop;

  constructor(private _productService: ProductService) { 
  	this.cartItems$ = this._productService.getItems();
  	this.cartItems$.subscribe((items)=>{
  		this.cartItems = items;
  	})
  }

  ngOnInit() {

  }

  total() {
  	return this._productService.getTotal();
  }

  delete(item){
  	const idx = this._productService.cartItems.indexOf(item);
  	this._productService.cartItems.splice(idx, 1);
  	this._productService.getItems();
  	
  }


  openModal(){
  	console.log('open modal');
  	this.display = 'block';
  	this.backdrop = 'static';
  }

  closeModal(){
  	this.display = 'none';
  }
}
