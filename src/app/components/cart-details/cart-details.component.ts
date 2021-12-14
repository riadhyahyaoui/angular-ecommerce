import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../comman/cart-item";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems : CartItem[]=[];
  totalQuantity:number=0;
  totalPrice : number=0.0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }


   listCartDetails() {
    this.cartItems=this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data=>this.totalPrice=data);
    this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data);
    this.cartService.computeCartTotals();
  }

  incrementQuantity(tempCartItem: CartItem) {
    this.cartService.addToCart(tempCartItem);
  }

  decrementQuantity(tempCartItem: CartItem) {
    this.cartService.decrementQuantity(tempCartItem);

  }

  remove(tempCartItem: CartItem) {
    this.cartService.remove(tempCartItem);
  }
}
