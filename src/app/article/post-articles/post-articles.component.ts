import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddArticle } from '../store/article.actions';
import { Article } from '../store/article.state';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';


@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.scss']
})
export class PostArticlesComponent implements OnInit {

  thumbUrl?: string = "";
  posterUrl?: string = "";
  registeredSuccess: string = "";
  constructor(private store:Store<AppState>) { }

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

  closeAlert(){
    this.registeredSuccess = ""
  }

  submit(event : any){
    const article : Article = {
      title: event.value.title,
      author: event.value.author,
      description: event.value.description,
      thumb: this.thumbUrl,
      poster: this.posterUrl
    }
    // this.articleForm.reset();
    this.store.dispatch(AddArticle({article}))
    this.registeredSuccess = "Article added successfully"
    console.log("form ", event.value.title)
  }
}
