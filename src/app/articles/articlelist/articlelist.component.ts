import {Component, Input, OnInit} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { PipeTransform, Pipe  } from '@angular/core';

import * as articleActions from "../state/articles.actions";
import * as fromArticle from "../state/articles.reducer";
import { Article } from "../models/article.model";
import { getArticles } from "../state/articles.selector";
import { AppState } from "../../state/app.state";
@Component({
  selector: "app-article-list",
  templateUrl: "./articlelist.component.html",
  styleUrls: ["./articlelist.component.css"]
})

export class ArticlelistComponent implements OnInit {
  @Input() article!: Article;
  successMsg: string ="";

  articles: Article[] = [];
  constructor(private store: Store<fromArticle.AppState>,private router: Router, private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.store.select(getArticles).subscribe(data => {
      this.articles = data;
    });
  }
  //delete the article
  deleteArticle(article: Article) {
    if(article.id) {
      if (confirm("Are u sure u want to delete the article")) {
        this.store.dispatch(new articleActions.RemoveArticle(article.id));
      }
    }
  }
// view the detail of article
  viewDetail(url:any,id:any) {
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl);

  }
}
