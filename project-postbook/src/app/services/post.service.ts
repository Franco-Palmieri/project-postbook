import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public URL = "http://localhost:3001/api/posts/";
  constructor(public http: HttpClient, public auth: AuthService) { }
  
  getPosts(){
    return this.http.get<any>(this.URL);
  }

  getPost(id: any){
    return this.http.get<any>(this.URL + id);
  }

  getMyPosts(){
    return this.http.get<any>(this.URL +'myposts/');
  }

  postNewPost(post: any){
    return this.http.post<any>(this.URL, post);
  }

  putPost(post: any){
    return this.http.put<any>(this.URL + post.id, post);
  }

  deletePost(post: any){
    return this.http.delete<any>(this.URL + post.id);
  }
}
