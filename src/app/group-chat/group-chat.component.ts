import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  LOGGED_IN_USER_ID: any;
  fullName: string;
  messages: any[];
  displayMessages: any[];
  messageForm: FormGroup;

  constructor(
    private UtilsService: UtilsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.UtilsService.allowOnlyAuthUser();

    this.LOGGED_IN_USER_ID = this.UtilsService.loggedInUserId();
    this.fullName = this.UtilsService.getUserById(this.LOGGED_IN_USER_ID).fullName;
    this.messages = this.UtilsService.getFromLocalStorage("messages");
    // console.log(this.messages);

    // convert to string
    this.displayMessages = this.messages.map(msg => {
      let thisMsg = `[ ${msg.timestamp} ] ${this.UtilsService.getUserById(msg.senderId).fullName} : ${msg.msg}`;
      return thisMsg;
    })

    this.messageForm = this.fb.group({
      message: ['', [Validators.required]]
    })
  }

  onSend() {
    this.messages = this.UtilsService.getFromLocalStorage("messages");
    let newMsgObj = {
      id: "M" + Number(new Date()),
      timestamp: new Date().toLocaleString(),
      senderId: this.LOGGED_IN_USER_ID,
      msg: this.messageForm.get('message')?.value.trim()
    }
    this.messages.push(newMsgObj);
    this.UtilsService.setToLocalStorage("messages", this.messages);

    this.messageForm.patchValue({
      message: ""
    })
    this.ngOnInit();
  }

  onRefresh() {
    this.ngOnInit();
  }

}
