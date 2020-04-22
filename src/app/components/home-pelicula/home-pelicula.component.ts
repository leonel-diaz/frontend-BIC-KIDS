import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../service/home.service';

@Component({
  selector: 'app-home-pelicula',
  templateUrl: './home-pelicula.component.html',
  styleUrls: ['./home-pelicula.component.css']
})
export class HomePeliculaComponent implements OnInit {
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
 
  }

}
