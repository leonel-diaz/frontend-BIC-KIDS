import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url_api} from '../components/globals/api';

@Injectable()
export class VideosService {
  private _token;

  playingvideo = {
    _id: '',
    name: 'Nombre del video',
    video: './assets/peliculas/shrek.mp4'
  };

  constructor(private http: HttpClient) {
    if (localStorage.token) {
      this._token = localStorage.getItem('token') || '';
    }
  }

  all() {
    return this.http.get(url_api + '/videos').pipe(res => res);
  }

  /**
   * Esta funcion permite reproducir o pausar un video  y cambia la imagen
   * @param video Como parametro recibe un elemento HTMLMediaElement
   * @constant image La imagen que va a mostrar el icono de play/pause
   */
  playvideo() {
    const video: HTMLMediaElement = document.querySelector('#bickids') as HTMLMediaElement;
    const image = document.querySelector('#playImage');
    if (video.paused) {
      video.play();
      image.setAttribute('src', './assets/images/pause.svg');
    } else {
      video.pause();
    image.setAttribute( 'src', './assets/images/play.png');
    }
  }
}
