import { Component, OnInit } from '@angular/core';
import {Stock} from "../../comman/stock";
import {StockService} from "../../services/stock.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stockList : Stock[]=[];
  // postsfilter: Stock[]=[];
  constructor(private stockservice : StockService, private router :Router) { }

  ngOnInit(): void {


    this.retrieveAllStock();



  }

  retrieveAllStock(){
    this.stockservice.getAllHTTP().subscribe((data)=>this.stockList=data)
  }


  deleteStock(stock: Stock) {
    stock.state=1;
    this.stockservice.saveStock(stock).subscribe(data=>console.log(data.state));






    window.location.reload();

  }

}
