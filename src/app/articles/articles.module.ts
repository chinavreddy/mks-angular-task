import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { articlesReducers } from "./state/articles.reducer";

//Custom Components
import { ArticleListComponent } from "./containers/article-list/article-list.component";
import { ArticleItemComponent } from "./components/article-item/article-item.component";
import { ArticleAddComponent } from "./components/article-add/article-add.component";
import { ArticleDisplayComponent } from "./components/article-display/article-display.component";

// Custom Pipe
import { StringSlicePipe } from "./string-slice.pipe";
import { ReversePipe } from "./array-reverse.pipe";

const articleRoutes: Routes = [
  { path: "", component: ArticleListComponent },
  { path: "post-articles", component: ArticleAddComponent},
  {
    path: 'articles/:id',
    component: ArticleDisplayComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(articleRoutes),
    StoreModule.forFeature("articles", articlesReducers),
  ],
  declarations: [
    ArticleListComponent,
    ArticleItemComponent,
    ArticleAddComponent,
    ArticleDisplayComponent,
    StringSlicePipe,
    ReversePipe
  ]
})
export class ArticlesModule {}
