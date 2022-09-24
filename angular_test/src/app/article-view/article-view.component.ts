import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';

export interface ArticlesObj {
  id: number;
  title: string;
  author: string;
  description: string;
  thump_img: string;
  poster_img: string;
}
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  public article: ArticlesObj | undefined;
  id: number = 0;
  poster_img_new!: any;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ count: any }>,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
  }
  ngOnInit() {
    this.store.select('count').subscribe((val) => {
      this.article = val.filter(
        (currentArticle: { id: number | undefined }) => {
          console.log(currentArticle.id === this.id);
          return currentArticle.id === this.id;
        }
      )[0];
    });
    this.poster_img_new = this.article?.poster_img
      ? this.sanitizer.bypassSecurityTrustUrl(`${this.article?.poster_img}`)
      : 'assets/default.jpg';
  }
}
