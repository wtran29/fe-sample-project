import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListService {
  getProductList(): Array<Product>{
  	return this.productList();
  }

  productList(): Array<Product> {
  	return [
	    <Product>{
	    	 "id": 1,	
	      "image": "../assets/618328744.png",
	      "price": 51.27,
	      "title": "Mens Fashion Shirts"
	    },
	    <Product>{
	    	 "id": 2,
	      "image": "../assets/619521178.png",
	      "price": 3.97,
	      "title": "Mens Work Shirt"
	    },
	    <Product>{
	    	 "id": 3,
	      "image": "../assets/806813490.png",
	      "price": 22.46,
	      "title": "Longsleeve Workout Shirt"
	    },
	    <Product>{
	      "image": "../assets/618323876.png",
	      "price": 22.46,
	      "title": "Outdoors Jacket"
	    },
	    <Product>{
	      "image": "../assets/656678076.png",
	      "price": 90.12,
	      "title": "Mens Fashion Shirts"
	    },
	    <Product>{
	      "image": "../assets/666666252.png",
	      "price": 88.83,
	      "title": "Womens White Sweater"
	    },
	    <Product>{
	      "image": "../assets/666666466.png",
	      "price": 77.67,
	      "title": "Womens Red Jacket"
	    },
	    <Product>{
	      "image": "../assets/618842634.png",
	      "price": 57.04,
	      "title": "Casual Jacket"
	    },
	    <Product>{
	      "image": "../assets/675606742.png",
	      "price": 70.57,
	      "title": "Pastel Everyday Wear"
	    },
	    <Product>{
	      "image": "../assets/623270836.png",
	      "price": 32.37,
	      "title": "Running Shoes"
	    },
	    <Product>{
	      "image": "../assets/649597850.png",
	      "price": 87.45,
	      "title": "Snow Boots"
	    },
	    <Product>{
	      "image": "../assets/638571516.png",
	      "price": 57.74,
	      "title": "Leather Jacket"
	    }
  	]
  }
  constructor() { }

}
