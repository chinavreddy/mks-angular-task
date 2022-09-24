import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ArticlesObj } from '../home/home.component';

export interface Articles {
  id: any;
  title: any;
  author: any;
  description: any;
  thumbnail: any;
  largeImage: any;
}

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  public article: ArticlesObj | undefined;
  id: any = 0;
  poster_img_new: any;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ count: any }>,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      this.id = parseFloat(this.id);
    });
  }

  ngOnInit() {
    this.store.select('count').subscribe((val) => {
      this.article = val.filter(
        (currentArticle: any) => {
          return currentArticle.id === this.id;
        }
      )[0];
    });
    
    this.poster_img_new = this.article?.thumbnail
      ? this.sanitizer.bypassSecurityTrustUrl(`${this.article?.thumbnail}`)
      : 'assets/placeholder.png';
  }

}
