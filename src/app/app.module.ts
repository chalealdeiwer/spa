import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetalleComponent } from './components/hero-detalle/hero-detalle.component';
import { SearchComponent } from './components/search/search.component';
import { AuthModule } from '@auth0/auth0-angular';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroDetalleComponent,
    SearchComponent,
    UsuarioComponent,
    

  ]
  ,
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-rozwrp8t.us.auth0.com',
      clientId: 'inxospX10VhoIAXAnNlPjjDDvefZ2nRT',
      useRefreshTokens: true
    }),
  
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
