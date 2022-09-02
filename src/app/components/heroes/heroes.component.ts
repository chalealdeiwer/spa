import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes:any=[];
  heroes:heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.heroes= this._heroesService.getHeroe();
    console.log(this.heroes)
  }
  verMas(id:number){
    console.log(id);
    this.router.navigate(['/heroeD',id])
    
  }

}
