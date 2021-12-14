import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockListComponent} from "./stock-list/stock-list.component";
import {AddStockComponent} from "./add-stock/add-stock.component";


const routes: Routes = [
  {path:'stocks', component:StockListComponent},
  {path:'addstock',component:AddStockComponent},
  {path:'edit-stock/:id',component:AddStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
