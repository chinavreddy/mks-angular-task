import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesModule } from "./articles/articles.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlelistComponent} from "./articles/articlelist/articlelist.component";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutusComponent,
        FooterComponent,
        ArticlesComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ArticlesModule,
        StoreModule.forRoot({}, {})
    ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
