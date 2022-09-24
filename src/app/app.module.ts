import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// app components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Article components
import { HomeComponent } from './article/home/home.component';
import { PostArticlesComponent } from './article/post-articles/post-articles.component'; 
import { AboutUsComponent } from './article/about-us/about-us.component';

// store reducer
import { appReducer } from './article/store/app.state';
import { FooterComponent } from './article/footer/footer.component';
import { HeaderComponent } from './article/header/header.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostArticlesComponent,
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(appReducer)
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
