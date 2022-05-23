import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myPosts: any = [];
  post: any;
  
  constructor(public postService: PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.downloadMyPosts();
  }


  getMyInfo(){
    this.auth.getMyInfo().subscribe(res => {
      console.log(res)
    })
  }

  downloadMyPosts(){
    this.postService.getMyPosts().subscribe(res => {
      this.myPosts = res;
    })
  }

  getPost(id: any){
    console.log(id)
    this.postService.getPost(id).subscribe(res=> {
      this.post = res;
    })
  }

}
