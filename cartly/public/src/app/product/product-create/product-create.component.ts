import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ActivatedRoute, Router } from '@angular/router'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;
  cart: Product[] = [];
  item: Product;
  product: Product;
  cartItems$: Observable<Product[]>;
  constructor(

  	private _router: Router,
  	private _activatedRouter: ActivatedRoute,
  	private _productService: ProductService
  
    ) {
  		this.cartItems$ = this._productService.getItems();
		this.cartItems$.subscribe((items)=>{
			items;
		})
	  	



     }

  ngOnInit() {
  	

  }

  // index(){
  // 	console.log('retrieving collection')
  // 	this._productService.collection()
  // 	.then((collection)=>{
  // 		console.log('retrieved the collection from db', collection);
  // 		this.products = collection;
  // 	})
  // }
  
}
