import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private UtilsService: UtilsService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  register() {
    let users = this.UtilsService.getFromLocalStorage("users");

    let fullName = this.registerForm.get('fullName')?.value;
    let email = this.registerForm.get('email')?.value;
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      alert("Both password should match!");
      return false;
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
      return true;
    } else {
      // checking for existing record
      let isUserExist = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
          isUserExist = true;
          break; // user is found
        }
      }
      if (isUserExist) {
        //alert
        alert("This email/user already exists!");
        return false;
      } else {
        // save user
        users.push(userObj);
        this.UtilsService.setToLocalStorage("users", users);
        // user will be redirected to register successful page
        return true;
      }
    }
  }

}
