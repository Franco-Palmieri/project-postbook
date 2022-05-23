import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-homeprivate',
  templateUrl: './homeprivate.component.html',
  styleUrls: ['./homeprivate.component.scss']
})
export class HomeprivateComponent implements OnInit {

  posts: any = [];
  post: any;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.downloadPosts();
  }

  downloadPosts(){
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
      console.log(this.posts)
    })
  }

  getPost(id: any){
    console.log(id)
    this.postService.getPost(id).subscribe(res=> {
      this.post = res;
    })
  }

}
