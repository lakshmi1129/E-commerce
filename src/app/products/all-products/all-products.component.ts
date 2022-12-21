import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: any = []
  // to hold search term
  searchTerm = ""

  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data: any) => {
        this.allProducts = data.result
        console.log(this.allProducts);

      }
    )

    // to get search term from api service
    this.api.search.subscribe((data: any) => {
      console.log(data);
      this.searchTerm = data
    })
  }


  addToWishlist(product: any) {
    this.api.addToWishlist(product).subscribe(
      (result: any) => {
        alert(result.message)
      },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }


  // addToCart
  addToCart(product:any){
    this.cart.addToCart(product)

  }
}
