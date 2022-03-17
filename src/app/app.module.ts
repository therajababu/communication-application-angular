import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [ // we need to add all components
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginSuccessfulComponent,
    RegisterSuccessfulComponent,
    UsersManagementComponent,
    ManageDocumentsComponent,
    GroupChatComponent,
    NavbarComponent,
    LogoutComponent,
    UserDetailComponent,
    EditUserComponent,
    ShareComponent
  ],
  imports: [  // importing all modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // default component
})
export class AppModule { }
