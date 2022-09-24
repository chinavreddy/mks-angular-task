import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { decrement } from '../article.actions';
import { Store } from '@ngrx/store';

export interface Articles {
  id?:any | null,
  title?:any | null,
  author?:any | null,
  description?:any | null,
  thumbnail?:any | null,
  largeImage?:any | null,
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  thump_img_new!: any;

  constructor(private store: Store<{ count: any }>,
    private sanitizer: DomSanitizer
  ) {}

  @Input() articles: Articles | null | undefined;

  ngOnInit() {
    this.thump_img_new = this.articles?.thumbnail
      ? this.sanitizer.bypassSecurityTrustUrl(`${this.articles?.thumbnail}`)
      : 'assets/placeholder.png';
  }

  removeArticle(id: any) {
    this.store.dispatch(decrement(id));
  }

}

