import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: any
  eMsg:string =""

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      // success
      (data: any) => {
        this.wishList = data.result
     
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
        alert(result.message)
        this.route.navigateByUrl('wishlist')
      },
      (result:any)=>{
        alert(result.error.message)

      }
    )
  }

}
