import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as PostActions  from 'src/app/state/actions/post.actions';
import { selectListPosts, selectPost } from 'src/app/state/selectors/post.selectors';
import { Form, FormBuilder, FormGroup } from '@angular/forms'
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/state/app.state';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  newPost: Post = {} as Post;

  myPosts$ = this.store.select(selectListPosts);
  postForm: FormGroup;
  status: boolean = false;
  currentPost$: Observable<any> = new Observable();
  coso: any;

  constructor(
      public auth: AuthService,
      public store: Store<AppState>,
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
    console.log(this.myPosts$)
  }

  modaleStatus(){
    this.status = !this.status
  }

  downloadMyPosts(){
    this.store.dispatch({type: PostActions.loadMyPosts.type});

  }

  getPost(post: any){
    console.log(post._id)
    this.store.dispatch({type: PostActions.loadSinglePost.type, payload: {id: post._id}});
    this.currentPost$ = this.store.select(selectPost);
    this.modaleStatus();
  }

  addPost(){
    this.newPost.title = this.postForm.value.title,
    this.newPost.body = this.postForm.value.body,
    this.store.dispatch({type: PostActions.addNewPost.type, payload: {post: this.newPost}});
    this.downloadMyPosts();
    this.postForm.reset();
  }


  downloadPost(){
    // return this.currentPost$ = this.store.select(selectPost);
  }
  
  editPost(post: any){

  }

}
