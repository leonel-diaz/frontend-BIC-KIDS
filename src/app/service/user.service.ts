import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  apiURL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {
    
  }

  //registrar un nuevo usuaario
  signUp(userParams) {
    const params = JSON.stringify(userParams);
    const options = {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
    };
    return this.http
      .post(this.apiURL + "/users/create", params, options)
      .pipe((res) => res);
  }

  login(userParams) {
    const params = JSON.stringify(userParams);
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http
      .post(this.apiURL + "/users/login", params, options)   
      .pipe(res => res);
  }
}



