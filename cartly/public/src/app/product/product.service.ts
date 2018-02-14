import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProductService {
  
  productObservable: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  cartItems: Product[] = [];
  
  constructor(private _http: Http) {
  	this.productObservable.subscribe((items) =>{
  		this.cartItems = items;
  	})
  }
  
  update(item: Product){
  	this.productObservable.next([...this.cartItems, item]);
  }
  
  getItems(): Observable<Product[]>{
  	return this.productObservable;
  }

  getTotal(): Observable<Number>{
  	return this.productObservable
  	.map((cartItems: Product[])=>{
  		return cartItems.reduce((prev, curr: Product)=>{
  			return prev + curr.price;
  		},0);
  	})
  }
  // createProduct(product){
  // 	return this._http.post('/products/create', product)
  // 	.map((res)=> res.json())
  // 	.toPromise();
  // }

  // collection(){
  // 	return this._http.get('/products/index')
  // 	.map((res)=> res.json())
  // 	.toPromise();
  // }
    

}
