import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import {ActivatedRoute, Router} from "@angular/router";

import * as articleActions from "../../state/articles.actions";
import * as fromArticle from "../../state/articles.reducer";
import { Article } from "../../models/article.model";
import {getArticles} from "../../state/articles.selector";

@Component({
  selector: "app-article-add",
  templateUrl: "./article-add.component.html",
  styleUrls: ["./article-add.component.css"]
})
export class ArticleAddComponent implements OnInit {
  article: Article = {};
  thumbnail_image: string | ArrayBuffer | null = '';
  poster_image: string | ArrayBuffer | null = '';
  articleId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromArticle.AppState>
  ) {}

  ngOnInit() {
  }

  handleSubmit(event:Article, isValid:boolean | null){
    if(isValid){

      this.store.select(getArticles).subscribe(data => {
        let lastArticle = data.slice(-1);
        if(lastArticle)
        { // @ts-ignore
          this.articleId = +(lastArticle[0].id) + 1;
        }
        else
          this.articleId = "1";
      });
      this.article = Object.assign({}, this.article, event);
      this.article.id = this.articleId.toString();
      this.article.thumbnail_image = this.thumbnail_image;
      this.article.poster_image = this.poster_image;
      this.store.dispatch(new articleActions.AddArticle(this.article));
      this.router.navigate(['']);
    }
  }
  onFileChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      console.log(event.target.name);
      reader.onload = (_event) => {
        if(event.target.name == 'thumbnail_image')
          this.thumbnail_image = reader.result;
        if(event.target.name == 'poster_image')
          this.poster_image = reader.result;
      };
    }

  }
}
