import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user :User;
  constructor() { }

  ngOnInit(): void {
    this.user = new User('','','','','',);
  }
  updateUser() {
    console.log('usuario actualizado')
    alert('usuario actualizado')
  /*  this.service.updateUser(this.user).subscribe( (res: any) => {
      switch (res.statusCode) {
        case 500:
          alert('Error en el servidor');
          break;
        case 400:
          alert('Error al modificar el usuario');
          break;
        case 200:
          this.service.saveImage( this.image, this.user._id).subscribe( ( res: any ) => {
            this.user.image = res.image;
            const image = this.url + '/showImage/' + this.user.image;
            document.getElementById('imageUser').setAttribute('src', image);
            res.dataUser.image = this.user.image;
            localStorage.setItem('dataUser', JSON.stringify( res.dataUser ));
          } );
          alert('Datos actualizados correctamente');
          console.log('----> ', res.dataUser);
          break;
        default:
          alert('Algo salió mal :(');
      }
    } );*/
  }

}
