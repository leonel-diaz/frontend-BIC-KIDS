import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url_api } from "../components/globals/api";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Injectable()
export class VideosService {
  private _token;
  user: User;

  playingvideo = {
    _id: "",
    name: "Nombre del video",
    video: "",
  };

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.token) {
      this._token = localStorage.getItem("token") || "";
    }
    this.user = JSON.parse(localStorage.getItem("user"));
    if (!this.user) {
      this.router.navigate(["/"]);
    }
  }

  setPlayingVideo(data) {
    this.playingvideo = data;
  }

  getFavorites() {
    return this.http.get(`${url_api}/videos/favorites/${this.user._id}`);
  }

  all() {
    return this.http.get(url_api + "/videos");
  }

  /**
   * Esta funcion permite reproducir o pausar un video  y cambia la imagen
   * @param video Como parametro recibe un elemento HTMLMediaElement
   * @constant image La imagen que va a mostrar el icono de play/pause
   */
  playvideo() {
    const video: HTMLMediaElement = document.querySelector(
      "#bickids"
    ) as HTMLMediaElement;
    const image = document.querySelector("#playImage");

    if (video.paused) {
      video.play();
      image.setAttribute("src", "./assets/images/pause.svg");
    } else {
      video.pause();
      image.setAttribute("src", "./assets/images/play.png");
    }
  }
}
