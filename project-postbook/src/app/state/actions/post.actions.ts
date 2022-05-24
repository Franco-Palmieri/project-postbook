import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
 
export const loadPosts = createAction(
    '[Post List] Load posts', 

);

export const loadedPosts = createAction(
    '[Post List] Loaded success',
    props<{ posts: Post[] }>()
);

export const loadedPost = createAction(
    '[Post] Loaded success',
    props<{ post: Post }>()
);
