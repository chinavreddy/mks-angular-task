import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from "../../models/article.model";

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input()
  article!: Article;
  @Output()
  remove: EventEmitter<Article> = new EventEmitter<Article>();

  onRemove(article: Article){
    this.remove.emit(article)
  }
}
