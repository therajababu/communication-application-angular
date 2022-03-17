import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user : any;
 
  constructor(
    private UtilsService: UtilsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UtilsService.allowOnlyAuthUser();

    const id = this.route.snapshot.paramMap.get('id');
    this.user = this.UtilsService.getUserById(id);
  }

}
