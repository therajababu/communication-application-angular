import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private UtilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const LOGGED_IN_USER_ID = this.UtilsService.getFromLocalStorage("LOGGED_IN_USER_ID");
    if(LOGGED_IN_USER_ID !== null){
      // this.router.navigateByUrl('/login-successful');
    }
  }

}
