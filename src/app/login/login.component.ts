import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup ;
  name : string ;

  constructor(private fb: FormBuilder) {
    this.name = "demo";
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  login() {
    console.log(this.loginForm);
    console.log(JSON.stringify(this.loginForm.value));
    alert("Login clicked!");
  }

}
