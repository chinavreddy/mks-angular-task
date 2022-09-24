import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
export interface ArticlesObj {
  id: number;
  title: string;
  author: string;
  description: string;
  thump_img: string;
  poster_img: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  count$: any;
  constructor(private store: Store<{ count: any }>) {}
  public sampleArticles: ArticlesObj[] = [];
  title = 'angular_test';
  ngOnInit() {
    this.store.select('count').subscribe((val) => {
      this.sampleArticles = val;
      console.log(this.sampleArticles);
    });
  }
}
