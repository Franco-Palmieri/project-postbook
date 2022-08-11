import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as PostActions  from 'src/app/state/actions/post.actions';
import { selectListPosts, selectPost } from 'src/app/state/selectors/post.selectors';
import { Form, FormBuilder, FormGroup } from '@angular/forms'
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // newPost: Post = {} as Post;
  
  myPosts$: Observable<any> = new Observable();
  postForm: FormGroup;
  status: boolean = false;
  currentPost$: Observable<any> = new Observable();
  coso: any;

  constructor(
      public auth: AuthService,
      public store: Store<any>,
      public fb: FormBuilder,
      public postService: PostService
  ) {  
      this.postForm = this.fb.group({
        title: [''],
        body: ['']
      })
    }

  ngOnInit(): void {
    this.downloadMyPosts();
  }

  modaleStatus(){
    this.status = !this.status
    
  }

  downloadMyPosts(){
    this.store.dispatch({type: PostActions.loadMyPosts.type});
    this.myPosts$ = this.store.select(selectListPosts);
  }

  getPost(id: any){
    this.store.dispatch({type: PostActions.loadSinglePost.type, payload: {id: id}});
    this.currentPost$ = this.store.select(selectPost);
    this.modaleStatus();
  }

  addPost(){
    const newPost: Post = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
    } as Post;
    // this.newPost.title = this.postForm.value.title;
    // this.newPost.body = this.postForm.value.body;
    this.store.dispatch({type: PostActions.addNewPost.type, payload: {post: newPost}});
    this.downloadMyPosts();
    this.postForm.reset();
    // this.postService.postNewPost(newPost).subscribe(res => {
    //   this.downloadMyPosts();
    //   this.postForm.reset();
    // })
  }


  downloadPost(){
    // return this.currentPost$ = this.store.select(selectPost);
  }
  
  editPost(post: any){

  }

}
