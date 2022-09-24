import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from "./aboutus/aboutus.component";
import {PostarticleComponent} from "./articles/postarticle/postarticle.component";
import { ArticlelistComponent} from "./articles/articlelist/articlelist.component";
import {ViewarticleComponent} from "./articles/viewarticle/viewarticle.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArticlelistComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'postarticle', component: PostarticleComponent },
  { path: 'viewarticle/:articleid', component: ViewarticleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  PostarticleComponent,
  AboutusComponent,
  ViewarticleComponent

];
