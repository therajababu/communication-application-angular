import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {
  LOGGED_IN_USER_ID: number;
  userEmail: string;
  constructor(private UtilsService: UtilsService) { }

  ngOnInit(): void {
    this.LOGGED_IN_USER_ID = this.UtilsService.getFromLocalStorage("LOGGED_IN_USER_ID");
    this.userEmail = this.UtilsService.getUserById(this.LOGGED_IN_USER_ID).email;
  }

}
