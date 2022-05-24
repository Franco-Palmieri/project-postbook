import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { PostState } from 'src/app/model/post.states';
import { PostService } from 'src/app/services/post.service';
import { loadedPosts, loadPosts } from 'src/app/state/actions/post.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListPosts, selectLoading } from 'src/app/state/selectors/post.selectors';
import * as postSelectors from './../../state/selectors/post.selectors';
@Component({
  selector: 'app-homeprivate',
  templateUrl: './homeprivate.component.html',
  styleUrls: ['./homeprivate.component.scss']
})
export class HomeprivateComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor(public postService: PostService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts())//Qui comincia tutto, spara l'action
    
    this.loading$ = this.store.select(postSelectors.selectLoading); //store ritorna l'info attraverso il selector
    
    this.downloadPosts();
  }

  downloadPosts(){
    this.postService.getPosts().subscribe((res: Post[])=> {
      this.store.dispatch(loadedPosts( //invio i dati all'action
        {posts: res}
      ));
      // this.posts = res;
    }) 
  }

 

}
