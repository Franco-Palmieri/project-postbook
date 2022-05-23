import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(public auth: AuthService) { }

  intercept(req : HttpRequest<unknown>, next: HttpHandler){
  
    const tokenizeReq = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.auth.getToken()}`,
      }
    })
    console.log(tokenizeReq)
    return next.handle(tokenizeReq)
  }
}

// 'Content-Type': 'application/json',
// 'Accept': 'application/json',
// 'Access-Control-Allow-Origin': '*',
// "Access-Control-Allow-Methods": "DELETE, POST, GET, PUT",
// "Access-Control-Allow-Headers": "Content-Type,*",
