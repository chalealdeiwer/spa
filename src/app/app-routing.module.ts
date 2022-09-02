import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetalleComponent } from './components/hero-detalle/hero-detalle.component';
import { SearchComponent } from './components/search/search.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'usuario', component: UsuarioComponent,canActivate:[AuthGuard]},
  {path: 'heroeD/:id', component: HeroDetalleComponent},
  {path: 'buscar/:termino',component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
