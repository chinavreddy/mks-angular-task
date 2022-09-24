import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Store } from "@ngrx/store";

import * as articleActions from "../../state/articles.actions";
import * as fromArticle from "../../state/articles.reducer";
import { Article } from "../../models/article.model";
import { getArticles } from "../../state/articles.selector";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private _sanitizer: DomSanitizer, private store: Store<fromArticle.AppState>) {}

  ngOnInit() {
    this.store.select(getArticles).subscribe(data => {
      this.articles = data;
    });
  }

  deleteArticle(article: Article) {
    if(article.id) {
      if (confirm("Are You Sure You want to Delete the Article?")) {
        this.store.dispatch(new articleActions.RemoveArticle(article.id));
      }
    }
  }

  getImagePath(toReturnImage:any){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + toReturnImage.base64string);
  }
}
