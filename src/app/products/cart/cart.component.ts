import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  total:any =0
  totaldec=0
  updatedTotal:any =0

  constructor(private cart:CartService, private route:Router) { }

  ngOnInit(): void {
    this.cart.cartItemsList.subscribe(
      (data)=>{
        console.log(data);
        this.cartItems = data        
      }
      )
      this.totaldec=this.cart.getTotal()
      this.total =  this.totaldec. toFixed (2)
  }


  // removeItem each
  removeItem(product:any){
    this.cart.removeCartItem(product)
    this.totaldec=this.cart.getTotal()
    this.total =  this.totaldec. toFixed (2)
  }


  // removeAllItems
  removeAllItems(){
    this.cart.removeAllItems()
  }


  // discount3per
  discount3per(){
    let discount = (this.total*3/100)
    let dis =this.total - discount
    this.updatedTotal = dis.toFixed(2)
  }

  // discount10per
  discount10per(){
    let discount = (this.total*10/100)
    let dis =this.total - discount
    this.updatedTotal = dis.toFixed(2)
  }

  // discount50per
  discount50per(){
    let discount = (this.total*50/100)
    let dis =this.total - discount
    this.updatedTotal = dis.toFixed(2)
  }

  // discount25per
  discount25per(){
    let discount = (this.total*25/100)
    let dis =this.total - discount
    this.updatedTotal = dis.toFixed(2)
  }

  // proceed
  proceed(){
  alert("Your Order Placed Successfully")
  this.removeAllItems()
    this.route.navigateByUrl('')
  }



}
