import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public auth: AuthService, public route: Router){}

  canActivate(): boolean{
    if(this.auth.loggedIn()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
}
