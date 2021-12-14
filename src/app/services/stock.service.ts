import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stock} from "../comman/stock";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl ='http://localhost:8080/api/';
  constructor(private httpClient:HttpClient) { }


  getAllHTTP(): Observable<Stock[]>  {
    return this.httpClient.get<Stock[]>(this.baseUrl+"retrieve-all-stocks").pipe(
      map(result =>
        result.filter(one => one.state===0)
      )
    )
  }

  getStocks():Observable<Stock[]>{

    return this.httpClient.get<Stock[]>(this.baseUrl+"retrieve-all-stocks");
  }


  saveStock(stock:Stock):Observable<Stock> {
    return this.httpClient.post<Stock>(this.baseUrl+"add-stock",stock);
  }


  getOneStock (id:number):Observable<Stock> {

    return this.httpClient.get<Stock>(this.baseUrl+"retrieve-stock/"+id);

  }

  deleteStock (id : number):Observable<Stock[]> {

    return this.httpClient.delete<Stock[]>(this.baseUrl+"remove-stock/"+id);
  }


}
