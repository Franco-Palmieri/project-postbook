import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';


//Action per far partire la richiesta GetPosts
export const loadPosts = createAction(
    '[Post List] Load posts', 
);

export const loadedPosts = createAction(
    '[Post List] Loaded success',
    props<{ posts: Post[] }>()
);

//Action per far partire la richiesta GetPost
export const loadSinglePost = createAction(
    '[SinglePost] Load SinglePost',
    props<{id: String}>()
);

export const loadedSinglePost = createAction(
    '[SinglePost] Loaded success',
    props<{ post: Post }>()
);

//Action per far partire la richiesta GetMyPosts
export const loadMyPosts = createAction(
    '[Post List] Load Myposts', 
);

export const loadedMyPosts = createAction(
    '[MyPost List] Loaded success',
    props<{ posts: Post[] }>()
);

//Action per far partire la richiesta PostNewPost
export const postNewPost = createAction(
    '[Post Add] Add NewPosts', 
    props<{ post: Post }>()
);

export const retrievedPostList = createAction(
    '[Post Added] Retrieve Post success',
    props<{ posts: Post[] }>()
);