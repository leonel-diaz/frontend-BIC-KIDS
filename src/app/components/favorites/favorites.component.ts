import {Component, OnInit} from '@angular/core';
import {VideosService} from '../../service/videos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any = [];
  getVideoUrl: string;

  constructor(private videosService: VideosService, private router: Router) { }

  showMovie(data = null) {
    if (data) {
      this.videosService.setPlayingVideo(data);
    }
    this.router.navigate(['/movie']);
  }

  ngOnInit() {
    this.getVideoUrl = 'http://localhost:3000/api/videos/getVideo/';
    this.videosService.getFavorites().subscribe(response => this.favorites = response);
  }
}
