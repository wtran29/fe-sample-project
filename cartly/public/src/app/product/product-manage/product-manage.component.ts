import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Product } from './../product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListService } from '../../product/list.service';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {
	products: Array<Product> = [];
	// product: Product = new Product();
	item: Product;
	// cart: Product[] = [];
	cartItems$: Observable<Product[]>;
	cartItems: Array<Product> = [];
	

  constructor(
  	private _router: Router,
  	private _activatedRouter: ActivatedRoute,
  	private _productService: ProductService,
    private _listService: ListService
  	) {
  		this.cartItems$ = this._productService.getItems();
  		this.cartItems$.subscribe((items)=>{
  			items;
  		})


		// this._activatedRouter.params
  // 		.subscribe( param => {
  // 			const id = +param['id'];
  // 			this._productService.getProduct(id)
  		
  // 		})
  		
  	}

  ngOnInit() {
  	// this.index();
  	// this._productService.productObservable.subscribe((products)=>{
  	// 	console.log(this.products);
  	// 	this.products = products;
  	// });
    this.products = this._listService.getProductList();
    
  // index(){
  // 	console.log('retrieving collection')
  // 	this._productService.collection()
  // 	.then((collection)=>{
  // 		console.log('retrieved the collection from db', collection);
  // 		this.products = collection;
  // 	})
  }

  addProduct(item){
  	console.log('adding item to cart', item);
  	this._productService.update(item);
  	console.log('items in cart', this.cartItems);

  	// this.index();
  }

  //  openModal(){
  // 	console.log('open modal');
  // 	this.display = 'block';
  // 	this.backdrop = 'static';
  // }

  // closeModal(){
  // 	this.display = 'none';
  // }

  
}
