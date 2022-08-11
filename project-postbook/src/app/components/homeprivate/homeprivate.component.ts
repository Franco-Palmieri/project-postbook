import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from 'src/app/state/actions/post.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-homeprivate',
  templateUrl: './homeprivate.component.html',
  styleUrls: ['./homeprivate.component.scss']
})
export class HomeprivateComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor( 
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    //this.store.dispatch(loadPosts())//Qui comincia tutto, spara l'action
    // this.loading$ = this.store.select(postSelectors.selectLoading); //store ritorna l'info attraverso il selector
    this.downloadPosts();
  }

  // downloadPosts(){
  //   this.postService.getPosts().subscribe((res: Post[])=> {
  //     this.store.dispatch(loadedPosts( //invio i dati all'action
  //       {posts: res}
  //     ));
  //     // this.posts = res;
  //   }) 
  // }
  downloadPosts(){
    this.store.dispatch({type: PostActions.loadPosts.type});
  }

 

}
