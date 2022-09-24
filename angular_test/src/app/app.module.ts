import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostArticlesComponent } from './post-articles/post-articles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './article.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostArticlesComponent,
    AboutUsComponent,
    ArticleViewComponent,
    HeaderComponent,
    FooterComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
