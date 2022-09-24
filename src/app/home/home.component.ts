import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { decrement } from '../article.actions';
import { Store } from '@ngrx/store';

export interface ArticlesObj {
  id: any;
  title: any;
  author: any;
  description: any;
  thumbnail: any;
  largeImage: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  count$: any;
  constructor(private store: Store<{ count: any }>) {}
  public sampleArticles: ArticlesObj[] = [];
  title = 'angular_test';
  ngOnInit() {
    this.store.select('count').subscribe((val) => {
      this.sampleArticles = val;
    });
  }
  removeArticle(id: any) {
    this.store.dispatch(decrement(id));
  }
}
