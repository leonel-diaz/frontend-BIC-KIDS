import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../service/videos.service';

// @ts-ignore
@Component({
  selector: 'app-ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.css']
})
export class VerPeliculasComponent implements OnInit {
  movies: any[] = [];
  urlGetVideo =  "http://localhost:3000/api/videos/getVideo/:video"; 
  constructor(public service: VideosService) {
  }

  ngOnInit(): void {


  }

  currentvideo = {
    _id: this.service.playingvideo._id,
    name: this.service.playingvideo.name,
    video: ''
  };

  setCurrenVideo(video) {
    this.currentvideo._id = video._id;
    this.currentvideo.name = video.name;
    this.currentvideo.video = video._video;

  }


}
