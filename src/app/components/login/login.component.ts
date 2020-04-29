import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public lastUser = null;

  constructor(
    private router: Router,
    private service: UserService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.getLastUser();
  }

  getLastUser() {
    this.lastUser = localStorage.getItem('lastUser');
    console.log('El último usuario registrado: ' + this.lastUser);
  }

  login() {
    this.service.login(this.user).subscribe((res: any) => {
      switch (res.statusCode) {
        case 400:
          Swal.fire({
            icon: 'error',
            text: 'El usuario no esta registrado ',
          });
          break;
        case 401:
          Swal.fire({
            icon: 'error',
            text: 'El usuario no esta registrado ',
            
          });
          break;
        case 200:
          Swal.fire({
            icon: 'success',
            text: 'Los datos son correctos ',
          });
          localStorage.setItem('user', JSON.stringify(res.dataUser));
          localStorage.setItem('lastUser', this.lastUser);

          this.router.navigate(['/associates']);
          break;
        default:
          alert('Error de conexion');
      }
    });
  }
}



