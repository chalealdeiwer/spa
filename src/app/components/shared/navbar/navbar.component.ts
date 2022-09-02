import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroService:HeroesService,
    private _router:Router,
    public auth: AuthService
  ) { }
  buscarHeroe(termino:string){
    console.log(termino);
    this._router.navigate(['buscar',termino]);
  }

  ngOnInit(): void {
  }
  //metodos autenticacion
  
  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }
  logout(){
    this.auth.logout();
  }

}
