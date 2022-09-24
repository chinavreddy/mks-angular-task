import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteArticle } from '../home/state/articles.ctions';
import { Article } from '../models/article.model';
import { AppState } from '../store/app.state';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article!: Article;
  successMsg: string ="";
  constructor(private _store: Store<AppState>, private _router: Router, private _activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
  }

  onDeleteArticle(id: any) {
    if(confirm('Are you sure do you want to delete?')) {
        this._store.dispatch(deleteArticle({ id }));
        this.successMsg = "Article Deleted Successfully";
        setTimeout(() => {
          this.successMsg = "";
        }, 3000);
    }
  }

  postDetails(id: any) {
    this._router.navigate([id], {relativeTo: this._activatedRoute});
  }

}
