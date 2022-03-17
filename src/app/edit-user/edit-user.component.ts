import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  LOGGED_IN_USER_ID: string = this.UtilsService.getFromLocalStorage("LOGGED_IN_USER_ID");
  users = this.UtilsService.getFromLocalStorage("users");
  userToEdit: any;

  constructor(
    private fb: FormBuilder,
    private UtilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // prevent access 
    this.UtilsService.allowOnlyAuthUser();

    // user to edit
    const id = this.route.snapshot.paramMap.get('id');
    this.userToEdit = this.UtilsService.getUserById(id);


    this.editUserForm = this.fb.group({
      fullName: [this.userToEdit.fullName, [Validators.required, Validators.minLength(3)]],
      email: [this.userToEdit.email, [Validators.required, Validators.email]]
    })

  }


  editUserSave() {
    let fullName = this.editUserForm.get('fullName').value;
    let email = this.editUserForm.get('email').value;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.userToEdit.id) {
        this.users[i].fullName = fullName;
        this.users[i].email = email;
        break;
      }
    }

    this.UtilsService.setToLocalStorage("users", this.users);

    this.router.navigate(['/users-management']);
  }

  
}
