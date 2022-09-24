import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { articlesReducers } from "./state/articles.reducer";
import {ArticlelistComponent} from "./articlelist/articlelist.component";
import { PostarticleComponent } from './postarticle/postarticle.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { TruncatePipe } from './pipes/truncate.pipe';



const articleRoutes: Routes = [
  { path: "", component: ArticlelistComponent },
  { path: "post-articles", component: PostarticleComponent},
  /*{
    path: 'articles/:id',
    component: ArticleDisplayComponent,
  },*/
];

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(articleRoutes),
    StoreModule.forFeature("articles", articlesReducers),
  ],
  declarations: [
    ArticlelistComponent,
      PostarticleComponent,
      ViewarticleComponent,
      TruncatePipe

  ]


})
export class ArticlesModule {}
