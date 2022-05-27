import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSinglePost } from 'src/app/state/actions/post.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListPosts, selectPost } from 'src/app/state/selectors/post.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  posts$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(selectListPosts);
  }

  getPost(id: any){
    this.store.dispatch({type: loadSinglePost.type, payload:{id: id}});

    // this.store.dispatch(loadSinglePost({id: id}));

    // this.postService.getPost(id).subscribe(res=> {
    //   this.store.dispatch(loadedPost( //invio i dati all'action
    //     {post: res}
    //   ));
    // })
  }
}
