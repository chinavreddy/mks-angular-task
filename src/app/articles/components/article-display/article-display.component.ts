import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import * as fromArticle from "../../state/articles.reducer";
import { Article } from "../../models/article.model";
import { getArticles} from "../../state/articles.selector";

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {
  article?: Article = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromArticle.AppState>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getArticles).subscribe(articles => {
        this.article  = articles.find((article) => article.id === id);
      });
    })
  }
}
