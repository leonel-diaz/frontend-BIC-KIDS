import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../service/videos.service';

// @ts-ignore
@Component({
  selector: 'app-ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.css']
})
export class VerPeliculasComponent implements OnInit {

  constructor(public service: VideosService) {
  }

  ngOnInit(): void {

    const video: HTMLMediaElement = document.querySelector('#bickids') as HTMLMediaElement;
    setInterval(() => {
      this.updateDuration(video);
    }, 1000);
  }

  currentvideo = {
    _id: this.service.playingvideo._id,
    name: this.service.playingvideo.name,
    video: ''
  };

  playvideo() {
    this.service.playvideo();
  }

  /**
   * Esta funcion verifica cual es el tiempo actual de la etiqueta video y llama al decorador
   * @param video Como parametro recibe la etiqueta audio que tiene que tener el tipo HTMLMediaElement
   * @constant duracion Esta variable almacena la etiqueta de tiempo, la cual se va a mostrar al usuario
   * @var tiempo video.currentTime nos devuelve la duracion como un flotante, lo aproximo a un entero
   */
  updateDuration(video) {
    if (video.currentTime != 0) {
      const duracion = document.querySelector('#time');
      let tiempo = Math.round(video.currentTime);
      duracion.textContent = this.convertTime(tiempo);
    }
  }

  /**
   * Esta funcion toma los segundos y lo convierte al formato min:sec
   * @param secs Los segundos de la cancion como entero
   * @var deco Estos son decoradores verifican que min y sec tengan dos digitos, si no los tienen agrega un 0
   */
  convertTime(secs) {
    let min: Number = Math.floor(secs / 60);
    let sec: Number = secs % 60;
    let deco1 = (min < 10) ? '0' : '';
    let deco2 = (sec < 10) ? '0' : '';
    return (`${deco1}${min}:${deco2}${sec}`)
  }
}
