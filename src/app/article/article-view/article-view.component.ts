import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getArticleById } from '../store/article.selector';
import { Article } from '../store/article.state';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  article : Article
  constructor(private route : ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id")
      // const actId = parseInt(id)
      this.store.select(getArticleById, { id }).subscribe((data) => {
        // data.find((a:Article) => {
        //   console.log('art ',typeof a.id)
        //   console.log('id ',typeof id)
        //   a.id === actId
        // })
        // console.log('data ',data)
        this.article = data
      })
    })
  }

}
