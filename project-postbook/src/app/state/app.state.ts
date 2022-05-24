import { ActionReducerMap } from "@ngrx/store";
import { PostState } from "../model/post.states";
import { postsReducer } from "./reducers/post.reducers";

export interface AppState {
    //qui è come se aggiungessi le tabelle del db
    //ogni tabella aggiunta qui va aggiunta dentro ROOT_REDUCERS
    //con il suo reducer
    posts: PostState;
    //"posts":{
    //      "loading": false,
    //      "posts": []
    //}
}


// export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
//     statoDiPosts: postsReducer
// }
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    posts: postsReducer,
};