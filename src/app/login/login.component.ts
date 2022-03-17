import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  LOGGED_IN_USER_ID : string ;

  constructor(
    private fb: FormBuilder,
    private UtilsService: UtilsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const LOGGED_IN_USER_ID = this.UtilsService.getFromLocalStorage("LOGGED_IN_USER_ID");
    // if(LOGGED_IN_USER_ID !== null){
    //   alert(LOGGED_IN_USER_ID);
    //   this.router.navigateByUrl('/login-successful');
    // }
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  login(): void {
    // Getting user data
    let users = this.UtilsService.getFromLocalStorage("users");

    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        // user is found in database
        this.LOGGED_IN_USER_ID = users[i].id;

        // saving to local storage
        this.UtilsService.setToLocalStorage("LOGGED_IN_USER_ID", this.LOGGED_IN_USER_ID);

        // allow to be redirected to login successful page
        this.router.navigate(['/login-successful']);
        return;
      }
    }
    // user dont exist
    alert("Enter correct email & password!");
  }
}
