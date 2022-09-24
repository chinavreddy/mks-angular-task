import { Component, OnInit } from '@angular/core';
import { Articles } from './article-card/article-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public sampleArticles: Articles[] = [];
  title = 'angular_test';
}
