import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doSearching(keyword:string){

       console.log('value= '+ keyword)
      this.router.navigateByUrl('/search/'+keyword)
  }
}
