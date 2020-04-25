import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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


// Rutas
const appRoutes: Routes = [
  {path: 'index', component: InicioComponent},
  {path: 'sign-up', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePeliculaComponent},
  {path: 'profile', component: UpdateUserComponent},
  {
    path: '**',
    redirectTo: 'index',
  }
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
