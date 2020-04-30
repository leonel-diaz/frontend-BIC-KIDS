import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../service/videos.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

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
  urlGetImage =  "http://localhost:3000/api/videos/getImage/"; 

  constructor(private videosServices: VideosService, private router: Router) { }

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
  
  showMovie(data = null) {
    console.log(data);
    if (data) {
      this.videosServices.setPlayingVideo(data);
    }
    this.router.navigate(['/movie']);
  }


}
