import {url_api} from '../globals/api';
import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';
import {Form} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: User;
  public isError = false;
  public messageError = null;
  public formLogin: Form;
  public lastUser = null;
  public url;
  public nombre = null;


  constructor(private service: UserService, private router: Router) {
    this.url = url_api;
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  updateUser() {
    this.service.updateUser(this.user).subscribe((res: any) => {
      switch (res.statusCode) {
        case 500:
          Swal.fire({
            icon: 'error',
            text: 'Error en el servidor',
          });
          break;
        case 400:
          Swal.fire({
            icon: 'error',
            text: 'Error al modificar el usuario',
          });
          break;
        case 200:
          Swal.fire({
            icon: 'success',
            text: 'Datos actualizados correctamente',
          });
          // console.log('----> ', res.dataUser);
          localStorage.setItem('user', JSON.stringify(res.dataUser));
          this.router.navigate(['dashboard']);
          break;
        default:
          Swal.fire({
            icon: 'error',
            text: 'Algo salió mal :(',
          });
      }
    });
  }
}
