import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  //create an array to hold cart items
  cartItemsListArray:any=[]

  // create behaviour subject
  cartItemsList = new BehaviorSubject([])

  constructor() { }


  // add to cart
  addToCart(product:any){
    this.cartItemsListArray.push(product)
    this.cartItemsList.next(this.cartItemsListArray)
    console.log(this.cartItemsList);
    
  }
}
