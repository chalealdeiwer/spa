import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:any={};
  constructor(
    private _ActivatedRouted:ActivatedRoute,
    private _heroServices:HeroesService,
    private _router:Router,
  ) {this._ActivatedRouted.params.subscribe(params=>{
    this.heroes=this._heroServices.SearchHeroe(params['termino']);
    console.log(this.heroes);
  })}
  

  ngOnInit(): void {
  }

}
