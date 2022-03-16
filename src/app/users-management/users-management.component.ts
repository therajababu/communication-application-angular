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

  constructor(
    private UtilsService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users = this.UtilsService.getFromLocalStorage("users");
  }

}
