import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './article/home/home.component';
import { PostArticlesComponent } from './article/post-articles/post-articles.component';
import { AboutUsComponent } from './article/about-us/about-us.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ArticleViewComponent },
  { path: 'post-articles', component: PostArticlesComponent },
  { path: 'about-us', component: AboutUsComponent },
  // { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
