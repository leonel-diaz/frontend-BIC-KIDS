import { Component, OnInit } from "@angular/core";
import {url_api} from '../globals/api';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment';


interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"],
})
export class NewUserComponent implements OnInit {
  public user: User;
  public url;

  constructor(private service: UserService, private router: Router) {
    this.url = url_api;
  }

  ngOnInit(): void {    
      this.user = JSON.parse(localStorage.getItem('user'));
  }

  updateUserAssociate() {
    console.log(this.user);
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
          console.log(res.statusCode)
          break;
        case 200:
          Swal.fire({
            icon: 'success',
            text: 'Datos actualizados correctamente',
          });
         
        console.log('Aqui agrega la imagen al front');        
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

