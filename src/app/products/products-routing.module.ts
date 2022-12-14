import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  // localhost:4200/products path - AllProductsComponent
  { path: '', component: AllProductsComponent },

    // localhost:4200/products/cart path - AllProductsComponent
  {path:'cart', component:CartComponent},

    // localhost:4200/products/wishlist path - AllProductsComponent
  { path:'wishlist', component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
