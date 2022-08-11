import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';


//Action per far partire la richiesta GetPosts
export const loadPosts = createAction(
    '[Post List] Load posts', 
);

export const loadPostsSuccess = createAction(
    '[Post List] Loaded success',
    props<{ posts: Post[] }>()
);

//Action per far partire la richiesta GetPost
export const loadSinglePost = createAction(
    '[Post List] Load SinglePost',
    props<{id: String}>()
);

export const loadSinglePostSuccess = createAction(
    '[Post List] Loaded success',
    props<{ post: Post }>()
);

//Action per far partire la richiesta GetMyPosts
export const loadMyPosts = createAction(
    '[Post List] Load Myposts', 
);

export const loadMyPostsSuccess = createAction(
    '[Post List] Loaded success',
    props<{ posts: Post[] }>()
);

//Action per far partire la richiesta AddNewPost
export const addNewPost = createAction(
    '[Post List] Add NewPosts', 
    props<{ post: Post }>()
);

export const addNewPostSuccess = createAction(
    '[Post List] Retrieve Post success',
    props<{ posts: Post[] }>()
);