import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../service/videos.service';
import {map} from 'rxjs/operators';

// @ts-ignore
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
    this.videosServices.all()
      .subscribe((response: any) => response.map(item => this.setCategory(item)));
  }

}
