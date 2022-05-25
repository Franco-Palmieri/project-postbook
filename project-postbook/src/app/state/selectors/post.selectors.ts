import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostState } from 'src/app/model/post.states';


//è il selector che ha relazione con la proprietà "posts";
export const selectPostsFeature = (state: AppState) => state.posts; //Padre
 //posts si riferisce a posts dichiarato dentro ROOT_REDUCERS dentro AppState


//qui dentro posso aggiungere piu selettori
export const selectListPosts = createSelector(
  selectPostsFeature,

  //se esistessero piu selectors
  //il primo selector farebbe riferimento ad a, il secondo a b e cosi successivamente.
  //(a, b) => state.counter
  (state: PostState) => state.posts //Figlio
);

//se volessi sapere lo stato di loading:
export const selectLoading = createSelector(
    selectPostsFeature,
    (state: PostState) => state.loading //Figlio
);

export const selectPost = createSelector(
  selectPostsFeature,
  (state: PostState) => state.post
);
