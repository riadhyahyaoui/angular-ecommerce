import { Component, OnInit } from '@angular/core';
import {Product} from "../../comman/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartItem} from "../../comman/cart-item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]=[]; //liste des livres
  filters:string="";
  constructor(private productservice : ProductService,
              private activateRouter:ActivatedRoute,
              private cartService: CartService) {

  }

  ngOnInit(): void {
    const key = this.activateRouter.snapshot.paramMap.has('keyword');
    if(!key) {
      this.listProduct();
    }
    else {

      this.filerKeyword();
    }


  }
listProduct(){
  const state = this.activateRouter.snapshot.paramMap.has('id');
  const id = Number(this.activateRouter.snapshot.paramMap.get('id'));
  console.log(id);
  if (state){

    this.productservice.getProductsList(id).subscribe(
      (data)=>this.products=data
    )
  }

}

  filerKeyword() {

    const keyword = (this.activateRouter.snapshot.paramMap.get('keyword'));
    console.log(keyword);
    if (keyword){

      this.productservice. getProductsByName(keyword).subscribe(
        (data)=>this.products=data
      )
    }
  }

  addToCart(tempProduct: Product) {
    console.log('Adding to cart :'+tempProduct.name + '   price :'+tempProduct.unitPrice);

    const  theCartItem= new CartItem(tempProduct);
    this.cartService.addToCart(theCartItem);

  }
}
