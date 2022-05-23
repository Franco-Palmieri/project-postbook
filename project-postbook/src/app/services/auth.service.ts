import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public URL = "http://localhost:3001/";
  constructor(public http: HttpClient, public route: Router) { }

  signUp(user: any){
   return this.http.post<any>( this.URL + 'api/signup', user);
  }

  signIn(user: any){
    return this.http.post<any>( this.URL + 'api/login', user);
  }

  //se trova il token restituisce true (l'utente è loggato)
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  //restituisce il token salvato in localStorage
  getToken(){
    return localStorage.getItem('token');
  }
  
  //elimina token
  logOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  getMyInfo(){
    return this.http.get<any>(this.URL + 'api/userInfo');
  }
  
}
