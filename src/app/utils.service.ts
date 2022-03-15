import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  setToLocalStorage(key: string, value: any) {
    // key is string and values is array of objects
    localStorage.setItem(key, JSON.stringify(value));
    // returns nothing
  }

  getFromLocalStorage(key: string): any {
    // Getting data from local storage
    let getFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let data = getFromLocalStorage ? getFromLocalStorage : [];
    return data; // returning array of object
  }

  loggedInUserId(): string {
    // return user id else null
    let getFromLocalStorage = JSON.parse(localStorage.getItem("LOGGED_IN_USER_ID"));
    if (getFromLocalStorage === undefined || getFromLocalStorage == null) {
      return null;
    } else {
      return getFromLocalStorage;
    }
  }

  isEmailValid(email: string): boolean {
    let aPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");

    if (aPos < 1 || dotPos - aPos < 2) {
      return false;
    } else {
      return true;
    }
  }

  getUserById(id: string) {
    let users = this.getFromLocalStorage("users");
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        let user = users[i];
        // deleting password
        delete user.password;
        return user;
      }
    }
  }


}
