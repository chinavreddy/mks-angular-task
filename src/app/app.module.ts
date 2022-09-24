import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesModule } from "./articles/articles.module";
import { StoreModule } from "@ngrx/store";

import {StoreRouterConnectingModule,routerReducer,RouterStateSerializer} from "@ngrx/router-store";
import {RouterModule, Routes} from "@angular/router";

// Custom Components
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutUsComponent } from "./about-us.component"
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { path: "about-us", component: AboutUsComponent},
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    ArticlesModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
