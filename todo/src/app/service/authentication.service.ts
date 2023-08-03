import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string,password: string){

    console.log("before : " + this.isUserLoggedIn());
    

    if(username === "Loki" && password === "dummy"){
      sessionStorage.setItem('authenticateUser', username)
      console.log("after : " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('authenticateUser');
  }
}
