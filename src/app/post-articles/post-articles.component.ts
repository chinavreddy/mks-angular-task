import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';
import { increment } from '../article.actions';

export interface Articles {
  id: any;
  title: any;
  author: any;
  description: any;
  thumbnail: any;
  largeImage: any;
}

@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.scss']
})

export class PostArticlesComponent implements OnInit {
  indexId = 10000;
  lastNumber = 0;
  count$:any;
  base64Image: any = "";
  largeBase64: any = "";
  
  model: Articles = {
    id:  this.lastNumber + Math.floor( Math.random() * (this.indexId - this.lastNumber) + 1 ),
    title: "",
    author: "",
    description: "",
    thumbnail: "",
    largeImage: ""
  }
  
  constructor (
    private store: Store<{ count: any }>,
    public DomSanitizer: DomSanitizer
  ) {
    this.count$ = store.select('count');
  }
  

  ngOnInit(): void { }

  handleUpload(event: Event) {
    const file = (event as any).target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64Image = reader.result;       
    };
  }

  handleUploadLargeImage(event: Event) {
    const file = (event as any).target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.largeBase64 = reader.result;   
    };
  }

  postSucess:boolean = false;

  onSubmit() {
    this.model.thumbnail = this.base64Image;
    this.model.largeImage = this.largeBase64;
    this.store.dispatch(increment(this.model));
    //this.router.navigate(['/']);
    this.postSucess = true;
  }

}