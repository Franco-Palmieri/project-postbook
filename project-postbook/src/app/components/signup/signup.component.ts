import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user : User = {
    name: '',
    surname: '',
    email: '',
    password: '',
    creationDate: new Date()
  }


  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.auth.signUp(this.user).subscribe(res=>{
      localStorage.setItem('token', res.token);
      this.route.navigate(['/homeprivate'])
    })
  }

}
