import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, myRoutings } from './app-routing.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CustomSerializer } from './custom-serializer';
import { ContentLimitPipe } from './content-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    myRoutings,
    ReversePipe,
    ArticleCardComponent,
    ContentLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    FormsModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
