import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private usersService: UserService) {
  }

  ngOnInit(): void {


  }
}
