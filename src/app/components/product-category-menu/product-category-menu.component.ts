import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../comman/product-category";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {
 productCategories:ProductCategory[]=[];
  constructor(private productservice : ProductService) {   }

  ngOnInit(): void {

    this.productservice.getProductCategoriesList().subscribe(

      (data)=>this.productCategories=data
    )
    console.log(this.productCategories)
  }

}
