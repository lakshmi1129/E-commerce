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
    let total = this.getTotal()
    console.log(total);
  }



  // total price
  getTotal(){
    let grantSum =0
    this.cartItemsListArray.map((item:any)=>{
      grantSum+=item.price
    
    })
    return grantSum
  }



  // removeCartItem
  removeCartItem(product:any){
    this.cartItemsListArray.map((item:any,index:any)=>{
      if(product.id == item.id){
        this.cartItemsListArray.splice(index,1)
      }
    })
    this.cartItemsList.next(this.cartItemsListArray)   
  }


  // removeAllItems
  removeAllItems(){
    this.cartItemsListArray =[]
    this.cartItemsList.next(this.cartItemsListArray)
  }
}
