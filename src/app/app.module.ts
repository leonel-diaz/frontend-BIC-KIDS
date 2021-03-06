import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./service/user.service";

import { AppComponent } from "./app.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { LoginComponent } from "./components/login/login.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";
import { NavComponent } from "./components/nav/nav.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { HomePeliculaComponent } from "./components/home-pelicula/home-pelicula.component";
import { VideosService } from "./service/videos.service";
import { VerPeliculasComponent } from "./components/ver-peliculas/ver-peliculas.component";
import { NavHomeComponent } from "./components/nav-home/nav-home.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { AssociatesComponent } from "./components/associates/associates.component";
import { NewUserComponent } from "./components/new-user/new-user.component";

// Rutas
const appRoutes: Routes = [
  { path: "index", component: InicioComponent },
  { path: "sign-up", component: RegistroComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomePeliculaComponent },
  { path: "profile", component: UpdateUserComponent },
  { path: "movie", component: VerPeliculasComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "associates", component: AssociatesComponent },
  { path: "new-user", component: NewUserComponent },
  {
    path: "**",
    redirectTo: "index",
  },
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    UpdateUserComponent,
    NavComponent,
    InicioComponent,
    HomePeliculaComponent,
    VerPeliculasComponent,
    NavHomeComponent,
    FavoritesComponent,
    AssociatesComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [UserService, VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
