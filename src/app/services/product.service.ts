import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../comman/product";
import {ProductCategory} from "../comman/product-category";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

 private baseUrl ='http://localhost:8080/api'   //Url REST API by SpringBoot
  constructor(private httpClient:HttpClient) {

  }

  // Service get product by id
  getProductsList(theCategoryId:number) :Observable<Product[]> {
   return  this.httpClient.get<Product[]>('http://localhost:8080/api/productCategory/'+theCategoryId);
  }
  //Service get category list
  getProductCategoriesList():Observable<ProductCategory[]>{
   return  this.httpClient.get<ProductCategory[]>(this.baseUrl+"/product-categories")
  }
//Service Searching product by name
  getProductsByName(name:string):Observable<Product[]>{
   return this.httpClient.get<Product[]>("http://localhost:8080/api/search/productName/"+name);
  }
}
