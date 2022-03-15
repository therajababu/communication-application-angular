import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {
  LOGGED_IN_USER_ID: any;
  userEmail: string;
  constructor(
    private UtilsService: UtilsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.LOGGED_IN_USER_ID = this.UtilsService.loggedInUserId();
    console.log("Login Successful: LOGGED_IN_USER_ID - ", this.LOGGED_IN_USER_ID);
    if(this.LOGGED_IN_USER_ID === null){
      this.router.navigateByUrl('/welcome');
    } else{
      this.userEmail = this.UtilsService.getUserById(this.LOGGED_IN_USER_ID).email;
    }
  }
}
