import { createReducer, on } from '@ngrx/store';
import { PostState } from 'src/app/model/post.states';
import { loadSinglePost, loadedSinglePost, loadedPosts, loadPosts } from '../actions/post.actions';


//Stato Iniziale
export const initialState: PostState = {loading: false, posts: [], post: { id:'',_userId: '', title: '', body: ''} }

//lo state fa riferimento allo stato iniziale
//Il postsReducer si vincolerà con lo store nell'appModule
export const postsReducer = createReducer( 
    initialState,
    on(loadPosts, (state) => {
        return {...state, loading: true} //...state crea un nuovo stato clonato
    }),

    on(loadedPosts, (state, {posts}) => {//loadedPosts (action) invia delle props (posts)
        return {...state, loading: false, posts} //...state crea un nuovo stato clonato
    }),

    on(loadSinglePost, (state) => {
        return {...state}
    }),

    on(loadedSinglePost, (state, {post}) => {
        return {...state, post}
    }),
    
);

