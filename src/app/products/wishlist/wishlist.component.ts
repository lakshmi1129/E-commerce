import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: any
  eMsg:string =""

  constructor(private api:ApiService, private route:Router, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      // success
      (data: any) => {
        this.wishList = data.result
        // auto refresh
       
     
      },
      // client error
      (data: any) => {
        this.eMsg = data.error.message
      }
    )
  }


  // deleteFromWish(product)

  deleteFromWish(product:any){
    this.api.deleteFromWish(product.id)
    .subscribe(
      (result:any)=>{
        // success case
       this.wishList =result.wishlist
       if(this.wishList.length==0){
        this.eMsg='empty wishlist'
      }
      },
      (result:any)=>{
        alert(result.error.message)

      }
    )
  }

  addToCart(product:any){
    this.cart.addToCart(product)
    this.deleteFromWish(product)

  }

}
