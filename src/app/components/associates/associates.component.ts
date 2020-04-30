import { Component, OnInit } from "@angular/core";
import { url_api } from "../globals/api";
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import * as moment from "moment";
@Component({
  selector: "app-associates",
  templateUrl: "./associates.component.html",
  styleUrls: ["./associates.component.css"],
})
export class AssociatesComponent implements OnInit {
  public user: User;
  public url;
  public image: File;

  constructor(private service: UserService, private router: Router) {
    this.url = url_api;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  infoAsociado() {}
}
