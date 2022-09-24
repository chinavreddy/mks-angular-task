import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getArticles} from "../state/articles.selector";
import { Article } from '../models/article.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.css']
})
export class ViewarticleComponent implements OnInit {
  article?: Article;
  isArticle: boolean = true;
  constructor( private sanitizer: DomSanitizer,private route: ActivatedRoute,  private store: Store) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('articleid');
      this.store.select(getArticles).subscribe(articles => {
        this.article  = articles.find((article) => article.id === id);
        this.isArticle = this.article ? true : false;
      });
    })
  }
  sanitizeImageUrl(imageUrl: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
