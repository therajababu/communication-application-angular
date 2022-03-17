import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  users: any[];
  LOGGED_IN_USER_ID : string ;
  DELETE_USER_ID: string = null;

  constructor(
    private UtilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.UtilsService.allowOnlyAuthUser();

    this.users = this.UtilsService.getFromLocalStorage("users");
    this.LOGGED_IN_USER_ID = this.UtilsService.getFromLocalStorage("LOGGED_IN_USER_ID");
  }

  delete(id) {
    this.DELETE_USER_ID = id;
  }

  userDeleteOk() {
    // delete user
    this.users = this.users.filter(user => user.id !== this.DELETE_USER_ID);
    this.UtilsService.setToLocalStorage("users", this.users);

    // delete messages
    let messages = this.UtilsService.getFromLocalStorage("messages");
    messages = messages.filter(msg => msg.senderId !== this.DELETE_USER_ID);
    this.UtilsService.setToLocalStorage("messages", messages);

    // delete documents

    // delete shared docuemnts
  }
}
