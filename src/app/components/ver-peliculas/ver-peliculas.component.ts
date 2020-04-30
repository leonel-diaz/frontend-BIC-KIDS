import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../service/videos.service';

// @ts-ignore
@Component({
  selector: 'app-ver-peliculas',
  templateUrl: './ver-peliculas.component.html',
  styleUrls: ['./ver-peliculas.component.css']
})
export class VerPeliculasComponent implements OnInit {
  
  urlGetVideo =  "http://localhost:3000/api/videos/getVideo/"; 
  movies: any[] = [];
  documentaries: any[] = [];
  series: any[] = [];

  constructor(private videosServices: VideosService) { }

  setCategory(movie) {
    switch (movie.type) {
      case 'movie':
        return this.movies.push(movie);
      case 'documentary':
        return this.documentaries.push(movie);
      case 'serie':
        return this.series.push(movie);
      default:
        return this.movies.push(movie);
    }
  }

  ngOnInit() {
    this.videosServices.all()
      .subscribe((response: any) => response.map(item => this.setCategory(item)));
  }

}
  



