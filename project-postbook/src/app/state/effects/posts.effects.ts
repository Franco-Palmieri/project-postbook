import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import * as PostActions from './../actions/post.actions';
@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts.type),
    mergeMap(() => this.postService.getPosts()
      .pipe(
        map(posts => ({ type: PostActions.loadPostsSuccess.type, posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadSinglePosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadSinglePost.type),
    mergeMap((action: {payload: Post}) => this.postService.getPost(action.payload.id)
      .pipe(
        map(post => ({ type: PostActions.loadSinglePostSuccess.type, post })),
        catchError(() => EMPTY)
      ))
    )
  );
  
  loadMyPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadMyPosts.type),
    mergeMap(() => this.postService.getMyPosts()
      .pipe(
        map(posts => ({ type:  PostActions.loadMyPostsSuccess.type, posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  addNewPost$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.addNewPost.type),
    mergeMap((action: {payload:Post}) => this.postService.postNewPost(action.payload)
      .pipe(
        map(posts => ({ type:  PostActions.addNewPostSuccess.type, posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    public postService: PostService
  ) {}
}

