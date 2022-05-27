import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import * as postActions from './../actions/post.actions';
@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[Post List] Load posts'),
    mergeMap(() => this.postService.getPosts()
      .pipe(
        map(posts => ({ type: '[Post List] Loaded success', posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadSinglePosts$ = createEffect(() => this.actions$.pipe(
    ofType('[SinglePost] Load SinglePost'),
    mergeMap((action: {payload: Post}) => this.postService.getPost(action.payload.id)
      .pipe(
        map(post => ({ type: postActions.loadedSinglePost.type, post })),
        catchError(() => EMPTY)
      ))
    )
  );
  
  loadMyPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[Post List] Load Myposts'),
    mergeMap(() => this.postService.getMyPosts()
      .pipe(
        map(posts => ({ type:  '[MyPost List] Loaded success', posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  addNewPost$ = createEffect(() => this.actions$.pipe(
    ofType('[Post Add] Add NewPosts'),
    mergeMap((action: {payload:Post}) => this.postService.postNewPost(action.payload)
      .pipe(
        map(posts => ({ type:  '[Post Added] Retrieve Post success', posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    public postService: PostService
  ) {}
}

