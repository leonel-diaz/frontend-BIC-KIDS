import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  userName: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  exit() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
