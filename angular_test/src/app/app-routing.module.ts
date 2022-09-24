import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostArticlesComponent } from './post-articles/post-articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'post-article', component: PostArticlesComponent},
  { path: 'view-article', component: ArticleViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
