import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import {Iuser} from '../iuser'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  users: Iuser[];

  constructor(
    private UtilsService: UtilsService,
  ) { }

  ngOnInit(): void {
    this.UtilsService.allowOnlyAuthUser();
  }

}
