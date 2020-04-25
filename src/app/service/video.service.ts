import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class videoService {

    apiURL = "http://localhost:3000/api";
    private _token = JSON.parse(localStorage.getItem('token'));

    playingvideo = {
        _id: "",
        name: "Nombre del video",
        video: "./assets/peliculas/amor-de-red-social.mp4"
    }

    constructor(private http: HttpClient) { }
    /**
      * Esta funcion permite reproducir o pausar un video  y cambia la imagen
      * @param video Como parametro recibe un elemento HTMLMediaElement
      * @constant image La imagen que va a mostrar el icono de play/pause
      */
    playvideo() {
        const video: HTMLMediaElement = document.querySelector('#bickids') as HTMLMediaElement
        const image = document.querySelector('#playImage');
        if (video.paused) {
            video.play();
            image.setAttribute('src', './assets/images/pause.png');
        } else {
            video.pause();
            image.setAttribute('src', './assets/images/play.png');
        }
    }
}