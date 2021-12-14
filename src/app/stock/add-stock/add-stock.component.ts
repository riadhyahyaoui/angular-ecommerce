import { Component, OnInit } from '@angular/core';
import {Stock} from "../../comman/stock";
import {StockService} from "../../services/stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  stock : Stock = new Stock();
  constructor(private stockservice : StockService,
              private router :Router,
              private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const state = this.activateRouter.snapshot.paramMap.has('id');
    const id = Number(this.activateRouter.snapshot.paramMap.get('id'));

    if (state) {
      this.stockservice.getOneStock(id).subscribe(data=>this.stock=data);
      console.log(this.stock.idStock);
    }
  }
  saveStock(){
    if(this.stock.quantite>5) {
      this.stock.etatStock='disponible';
    }
    if (this.stock.quantite<=5 && this.stock.quantite>0){
      this.stock.etatStock='insuffisant';
    }
    if (this.stock.quantite==0){
      this.stock.etatStock='expiré';
    }
    this.stockservice.saveStock(this.stock).subscribe(
      data=>{this.router.navigateByUrl("/stock/stocks");
        console.log('data :' +data)}
    )

  }

}
