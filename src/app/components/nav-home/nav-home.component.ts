import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  userName: string;

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  exit() {
    console.log('salir');
  }

}
