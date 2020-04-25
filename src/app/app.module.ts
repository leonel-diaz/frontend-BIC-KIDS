import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user.service';


import {AppComponent} from './app.component';
import {RegistroComponent} from './components/registro/registro.component';
import {LoginComponent} from './components/login/login.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {NavComponent} from './components/nav/nav.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {NavPeliculasComponent} from './components/nav-peliculas/nav-peliculas.component';
import {HomePeliculaComponent} from './components/home-pelicula/home-pelicula.component';
import {VideosService} from './service/home.service';
import { videoService } from './service/video.service';
import { VerPeliculasComponent } from './components/ver-peliculas/ver-peliculas.component';
import { UpdateCuentasComponent } from './components/update-cuentas/update-cuentas.component';


//rutas
const appRoutes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePeliculaComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    UpdateUserComponent,
    NavComponent,
    InicioComponent,
    NavPeliculasComponent,
    HomePeliculaComponent,
    VerPeliculasComponent,
    UpdateCuentasComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService,
    VideosService,
    videoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
