import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-detalle',
  templateUrl: './hero-detalle.component.html',
  styleUrls: ['./hero-detalle.component.css']
})
export class HeroDetalleComponent implements OnInit {
  heroe:any;
  constructor(private activateRoute: ActivatedRoute,
              private _heroeD: HeroesService) {
    this.activateRoute.params.subscribe(params =>{
      console.log(params)
      this.heroe = _heroeD.getHeroeDetalle(params['id'])

    })
   }

  ngOnInit(): void {
  }

}
