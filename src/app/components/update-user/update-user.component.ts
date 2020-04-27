import {url_api} from '../globals/api';
import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: User;
  public url;


  constructor(private service: UserService, private router: Router) {
    this.url = url_api;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.fechaNacimiento = moment(this.user.fechaNacimiento).format('MM/DD/YYYY');
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
          localStorage.setItem('user', JSON.stringify(res.dataUser));
          this.router.navigate(['/home']);
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
