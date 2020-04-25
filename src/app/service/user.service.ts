import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {url_api} from '../components/globals/api';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  signUp(userParams) {
    const params = JSON.stringify(userParams);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this.http
      .post(url_api + '/users/create', params, options)
      .pipe((res) => res);
  }

  login(userParams) {
    const params = JSON.stringify(userParams);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };
    return this.http
      .post(url_api + '/users/login', params, options)
      .pipe((res) => res);
  }
}
