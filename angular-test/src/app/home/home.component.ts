import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { AppState } from '../store/app.state';
import { getArticles } from './state/articles.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  // articles?: Observable<Article[]>;
  haveArticles: boolean = true;
  
  constructor(private _store: Store<AppState> ) { }

  ngOnInit(): void {
    // this.articles = this._store.select(getArticles);
    this._store.select(getArticles).subscribe(data => {
      this.articles = data;
      this.haveArticles = data.length > 0 ? true : false;
    });
  }

  

}
