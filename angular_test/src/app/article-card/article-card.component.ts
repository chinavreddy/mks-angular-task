import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { decrement } from '../article.actions';
import { Store } from '@ngrx/store';

export interface Articles {
  id: number;
  title: string;
  author: string;
  description: string;
  thump_img: string;
  poster_img: string;
}

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  thump_img_new!: any;
  constructor(
    private store: Store<{ count: any }>,
    private sanitizer: DomSanitizer
  ) {}
  @Input() articles: Articles | null | undefined;
  ngOnInit() {
    this.thump_img_new = this.articles?.thump_img
      ? this.sanitizer.bypassSecurityTrustUrl(`${this.articles?.thump_img}`)
      : 'assets/default.jpg';
  }

  removeArticle(id: any) {
    this.store.dispatch(decrement(id));
  }
}
