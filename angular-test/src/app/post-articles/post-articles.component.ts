import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addArticle } from '../home/state/articles.ctions';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.css']
})
export class PostArticlesComponent implements OnInit {
  
  thumbUrl?: string = "";
  posterUrl?: string = "";
  successMsg: string = "";
  constructor(private _myFB: FormBuilder, private _store: Store) { }

  articleForm = this._myFB.group({
    title: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
    author: [''],
    description: ['', Validators.required],
    thumb: [''],
    poster: ['']
  })

  ngOnInit(): void {
  }

  onThumbSelect(e: any) {
    if(e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= (event: any) => {
        this.thumbUrl = event.target.result;
      }
    }
  }

  onPosterSelect(e: any) {
    if(e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= (event: any) => {
        this.posterUrl = event.target.result;
      }
    }
  }

  onAddPost() {
    if(this.articleForm.valid) {
      const article: Article = {
        title: this.articleForm.value.title,
        author: this.articleForm.value.author,
        description: this.articleForm.value.description,
        thumb: this.thumbUrl,
        poster: this.posterUrl
      }
      console.log('ArticleData: ', this.articleForm);
      this._store.dispatch(addArticle({ article }));
      this.articleForm.reset();
      this.successMsg = "Article added Succesfully";
      setTimeout(() => {
        this.successMsg = "";
      }, 3000);
    }
    
  } 

}
