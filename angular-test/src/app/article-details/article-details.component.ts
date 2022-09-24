import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getArticles } from '../home/state/articles.selector';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article?: Article;
  haveArticle: boolean = true;
  constructor( private _route: ActivatedRoute,  private _store: Store) { }
  
  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this._store.select(getArticles).subscribe(posts => {
        this.article  = posts.find((post) => post.id === id);
        this.haveArticle = this.article ? true : false;
      });
    })
  }

  

}
