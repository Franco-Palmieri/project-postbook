import { createReducer, on } from '@ngrx/store';
import { PostState } from 'src/app/model/post.states';
import * as PostActions from '../actions/post.actions';


//Stato Iniziale
export const initialState: PostState = {loading: false, posts: [], post: { id:'',_userId: '', title: '', body: ''} }

//lo state fa riferimento allo stato iniziale
//Il postsReducer si vincolerà con lo store nell'appModule
export const postsReducer = createReducer( 
    initialState,
    //Reducers per caricare la lista di posts
    on(PostActions.loadPosts, (state) => {
        return {...state, loading: true} //...state crea un nuovo stato clonato
    }),

    on(PostActions.loadPostsSuccess, (state, {posts}) => {//loadedPosts (action) invia delle props (posts)
        return {...state, loading: false, posts} //...state crea un nuovo stato clonato
    }),
    
    //Reducers per caricare il signolo Post
    on(PostActions.loadSinglePost, (state) => {
        return {...state}
    }),

    on(PostActions.loadSinglePostSuccess, (state, {post}) => {
        return {...state, post}
    }),
    
    //Reducer per caricare la mia lista Post
    on(PostActions.loadMyPosts, (state) => {
        return {...state} //...state crea un nuovo stato clonato
    }),

    on(PostActions.loadMyPostsSuccess, (state, {posts}) => {//loadedPosts (action) invia delle props (posts)
        return {...state, posts} //...state crea un nuovo stato clonato
    }),
    
    //Reducers per aggiungere un nuovo Post
    on(PostActions.addNewPost, (state, {post}) => {
        return {...state, post}
    }),

    on(PostActions.addNewPostSuccess, (state, {posts}) => {
        return {...state, posts}
    }),
);

