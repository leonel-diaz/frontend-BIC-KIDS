import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable, pipe} from 'rxjs';



@Injectable()
export class UserService {
  apiURL = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) {}
  //registrar un nuevo usuaario
  signUp(userParams) {
    const params = JSON.stringify(userParams);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post(
      this.apiURL + '/createUser',
      params,
      options
    ).pipe( res => res );
  }

/**
   * Funcion para registrar un nuevo usuario
   * @param userParams Datos del usuario.
   */
  login(userParams) {
    const params = JSON.stringify(userParams);
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(this.apiURL + "/user/login", params, options)
      .pipe(res => res);
  }
}