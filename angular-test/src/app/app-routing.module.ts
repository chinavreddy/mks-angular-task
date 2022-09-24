import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostArticlesComponent } from './post-articles/post-articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ArticleDetailsComponent },
  { path: 'post-articles', component: PostArticlesComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  HomeComponent,
  PostArticlesComponent,
  AboutUsComponent,
  PageNotFoundComponent,
  ArticleDetailsComponent
];
