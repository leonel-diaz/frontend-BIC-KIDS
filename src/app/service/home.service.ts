import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class VideosService {
  url_api = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.url_api + "/videos").pipe(res => res);
  }
}
