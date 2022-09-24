import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as articleActions from "../state/articles.actions";
import * as fromArticle from "../state/articles.reducer";
import { Article } from "../models/article.model";
import {getArticles} from "../state/articles.selector";
import { AppState } from "../../state/app.state";
import { Observable } from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-postarticle',
  templateUrl: './postarticle.component.html',
  styleUrls: ['./postarticle.component.css']
})
export class PostarticleComponent implements OnInit {

  article: Article = {};
  thumbnail_image: string = '';
  poster_image: string = '';
  articleId: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromArticle.AppState>
  ) {}

  ngOnInit(): void {
  }


  onClickSubmit(data:any) {
  this.store.select(getArticles).subscribe(data => {
      let lastArticle = data.slice(-1)[0].id;
      if(lastArticle)
      {
        let intidval = parseInt(lastArticle);
        let newidval = intidval + 1;
        this.articleId = newidval.toString();

      } else {
        this.articleId = "1";
      }

    })

    this.article.id = this.articleId.toString();
    this.article.title = data.title;
    this.article.author = data.author;
    this.article.description = data.description;
    this.article.thumbnail_image = this.thumbnail_image;
    this.article.poster_image = this.poster_image;
    this.store.dispatch(new articleActions.PostArticle(this.article));
    this.router.navigate(['']);


  }
// get the tumnbanil image using file reader
  onThumbnailchange(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.thumbnail_image = imgBase64Path;
          this.isImageSaved = true;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  // get the poster image using file reader
  onPosterchange(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.poster_image = imgBase64Path;
          this.isImageSaved = true;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }


}
