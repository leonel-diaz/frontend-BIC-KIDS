import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url_api} from '../components/globals/api';

@Injectable()
export class VideosService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(url_api + '/videos').pipe(res => res);
  }
}
