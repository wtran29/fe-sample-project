import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Product } from '../product/product';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ActivatedRoute, Router } from '@angular/router'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;
  cart: Product[] = [];
  item: Product;
  product: Product;
  // display = 'none';
  // backdrop;
  cartItems$: Observable<Product[]>;

  constructor(
  	private _authService: UserService,
  	private _router: Router,
  	private _activatedRouter: ActivatedRoute,
  	private _productService: ProductService

  	) {
  		this.cartItems$ = this._productService.getItems();
		this.cartItems$.subscribe((items)=>{
			items;
		})
  	// this._productService.productObservable.subscribe((products)=>{
  	// 	console.log(this.products);
  	// 	this.products = products;
  	// });

  }

  // openModal(){
  // 	console.log('open modal');
  // 	this.display = 'block';
  // 	this.backdrop = 'static';
  // }

  // closeModal(){
  // 	this.display = 'none';
  // }
  
  ngOnInit() {
  	this.index();
  }

  index(){
  	console.log('retrieving collection')
  	this._productService.collection()
  	.then((collection)=>{
  		console.log('retrieved the collection from db', collection);
  		this.products = collection;
  	})
  }

  // create(){
  // 	this._productService.createProduct(this.newProduct)
  // 	.then((product)=>{
  // 		if(product.errors){
  // 			console.log(product.errors);
  // 		}
  // 		else{
  // 			console.log('created product');
  // 			this.index();
  // 		}
  // 	})
  // }

  // addProduct(product){
  // 	console.log('adding item to cart', product);
  // 	product = this.product;
  // 	this.cart.push(product);
  // 	this._productService.update(product);
  // 	console.log('items in cart', this.cart);

  // }

 // openModal(){
 //  	console.log('open modal');
 //  	this.display = 'block';
 //  	this.backdrop = 'static';
 //  }

}
