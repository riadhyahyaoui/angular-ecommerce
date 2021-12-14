import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockListComponent } from './stock-list/stock-list.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StockListComponent,
    AddStockComponent
  ],
    imports: [
        CommonModule,
        StockRoutingModule,
        FormsModule
    ]
})
export class StockModule { }
