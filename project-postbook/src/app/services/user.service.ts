import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL = "http://localhost:3001/api/users/";
  
  constructor(public http: HttpClient) { }

  
}
