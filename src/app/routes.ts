import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostArticlesComponent } from './post-articles/post-articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'post-articles', component: PostArticlesComponent },
    { path: 'article-detail', component: ArticleDetailComponent },
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];