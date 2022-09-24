import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../store/article.state';
import { Store, select } from '@ngrx/store'
import { AppState } from '../store/app.state';
import { getArticle } from '../store/article.selector';
import { deleteArticle } from '../store/article.actions';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$ : Observable< Article []>
  constructor(private store: Store<AppState>, private _router: Router, private _activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.articles$  = this.store.pipe(select(getArticle))
  }
  onDeleteArticle(id:number | undefined){
    if(confirm("Are you sure you want to delete Article")){
    this.store.dispatch(deleteArticle({id}))

    }
  }

  articleDetails(id:number | undefined){
    this._router.navigate([id], {relativeTo: this._activatedRoute});
  }

}
