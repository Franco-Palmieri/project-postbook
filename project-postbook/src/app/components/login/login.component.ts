import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public route: Router) { }

  user = {
    email: '',
    password: '',
  }
  ngOnInit(): void {

  }

  signIn(){
    this.auth.signIn(this.user).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.route.navigate(['/homeprivate']);
    })
  }
  
}
