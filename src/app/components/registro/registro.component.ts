import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user:User;

  constructor(
    private service: UserService,
  ) { 
    this.user = new User('','','','','',);
  }

  ngOnInit(): void {
  }

  //metodo registrar usuario
  signUp() {
    // alert('registro correcto');
    this.service.signUp(this.user).subscribe(( res: any ) => {
       if(res.statusCode != 200){
         alert('error al crear el usuario');
       } else {
         alert('usuario creado correctamente');
       }
    });
  }


}
