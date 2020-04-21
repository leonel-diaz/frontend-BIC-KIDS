import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  public lastUser = null;
  public placeHolder = null;

  constructor(
    private router: Router,
    private service: UserService) {
      this.user = new User('','','','','',);
    }

  ngOnInit(): void {
    this.getLastUser();
  }
   
  getLastUser() {
    this.lastUser = localStorage.getItem("lastUser");
    console.log("El último usuario registrado: " + this.lastUser);
  }
  login() {
        this.service.login(this.user).subscribe((res: any) => {
          switch (res.statusCode) {
            case 400:
              alert("El usuario no esta registrado");
              break;
            case 401:
              alert("Los datos no son correctos");
              break;
            case 200:
              alert("Bienvenido");
              localStorage.setItem("user", JSON.stringify(res.user));
              localStorage.setItem("lastUser", this.lastUser);
              // this.router.navigate(["dashboard"]);
              break;
            default:
              alert("Error de conexion");
          }
        });
      }
    }

