import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private UtilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  register() : void{
    let users = this.UtilsService.getFromLocalStorage("users");

    let fullName = this.registerForm.get('fullName')?.value;
    let email = this.registerForm.get('email')?.value;
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if(!this.UtilsService.isEmailValid(email)){
      // email is invalid
      alert("Email is invalid!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Both password should match!");
      return;
    }

    let userObj = {
      id: "U" + Number(new Date()), // Epoch as unique ID
      fullName: fullName,
      email: email,
      password: password
    }

    if (users.length == 0) {
      // handling first user
      users.push(userObj);
      this.UtilsService.setToLocalStorage("users", users);
      // user will be redirected to register successful page
      this.router.navigateByUrl('register-successful');
    } else {
      // checking for existing record
      let isUserExist: boolean = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
          isUserExist = true;
          break; // user is found
        }
      }
      if (isUserExist) {
        //alert
        alert("This email/user already exists!");
      } else {
        // save user
        users.push(userObj);
        this.UtilsService.setToLocalStorage("users", users);
        // user will be redirected to register successful page
        this.router.navigateByUrl('register-successful');
      }
    }
  }

}
