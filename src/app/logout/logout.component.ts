import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private UtilsService: UtilsService,
  ) { }

  ngOnInit(): void {
    this.UtilsService.setToLocalStorage("LOGGED_IN_USER_ID", null);
  }
}
