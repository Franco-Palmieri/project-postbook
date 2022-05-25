import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
 
export const loadPosts = createAction(
    '[Post List] Load posts', 

);

export const loadedPosts = createAction(
    '[Post List] Loaded success',
    props<{ posts: Post[] }>()
);

export const loadSinglePost = createAction(
    '[SinglePost] Load SinglePost',
    props<{id: String}>()

);

export const loadedSinglePost = createAction(
    '[SinglePost] Loaded success',
    props<{ post: Post }>()
);
