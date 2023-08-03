import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'Loki'
  password = ''
  errorMessage = 'Invalid Credintial'
  invalidLogIn = false

  constructor(private router: Router, public authService: AuthenticationService){}

  handleLogin(){
    //console.log(this.username)
    if(this.authService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogIn = false;
    } else{
      this.invalidLogIn = true;
    }
  }
}
