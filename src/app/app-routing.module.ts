import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-successful', component: LoginSuccessfulComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-successful', component: RegisterSuccessfulComponent },
  { path: 'chat', component: GroupChatComponent },
  { path: 'users-management', component: UsersManagementComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'manage-documents', component: ManageDocumentsComponent },
  { path: 'share', redirectTo: 'manage-documents' },
  { path: 'share/:id', component: ShareComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
