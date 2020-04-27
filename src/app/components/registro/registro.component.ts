import {Component} from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  public user: User;

  constructor(private router: Router, private service: UserService) {
    this.user = new User();
  }

  signUp() {
    this.service.signUp(this.user).subscribe((res: any) => {
      if (res.statusCode === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Usuario registrado satisfactoriamente: ' + this.user.name,
        });
        this.router.navigate(['login']);
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Usuario no se pudo registrar.',
        });
      }
    }, () => {
      Swal.fire({
        icon: 'error',
        text: 'Usuario no se pudo registrar.',
      });
    });
  }
}
