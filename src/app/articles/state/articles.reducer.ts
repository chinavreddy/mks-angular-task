import * as fromActions from "./articles.actions";
import { Action, INIT } from "@ngrx/store";
import { Article } from "../models/article.model";
import {REMOVE_ARTICLE} from "./articles.actions";
import * as fromRoot  from "../../state/app.state";

export interface ArticleState {
    articles: Article[]
}

export interface AppState extends fromRoot.AppState {
    articles: ArticleState;
}
const initialState: ArticleState = {
    "articles": [
      { id: "1", title: "Who Segregated America?  ", author: "Colin Gordon", description: "Federal housing policies contributed to the segregation of American cities in the twentieth century. But it was private interests that led the way.", thumbnail_image: "assets/images/1656512434666_stlouiscopy2.jpeg", poster_image: "assets/images/1656512434666_stlouiscopy2.jpg" },
      { id: "2", title: "Know Your Enemy: Overturning Roe, Part Three", author: "Matthew Sitman and Sam Adler-Bel", description: "Conservative intellectuals helped bridge the gap between the religious right and the institutional Republican Party in order to end the right to abortion.", thumbnail_image: "assets/images/1656599895666_GettyImages57346133copy2.jpeg", poster_image: "assets/images/1656599895666_GettyImages57346133copy2.jpeg" },
      { id: "3", title: "Belabored: What’s Up With Inflation, with J.W. Mason", author: "Sarah Jaffe and Michelle Chen", description: "Economist J.W. Mason joins the podcast to talk about inflation and how to organize around price increases.", thumbnail_image: "assets/images/1651853604MAINSITEInflation.jpg", poster_image: "1651853604MAINSITEInflation.jpg" },
      { id: "4", title: "A New Cold War?", author: "E. Karl", description: "Six short pieces on conflict between China and the United States, from Tobita Chow, Patrick Iber, Yangyang Cheng, Brian Hioe, Rebecca E. Karl, and Ted Fertik.", thumbnail_image: "", poster_image: "assets/images/1656512434666_stlouiscopy2.jpeg" }

    ]
};

export function articlesReducers(state= initialState, action: fromActions.ArticlesActions){
    switch (action.type){
        case fromActions.POST_ARTICLE: {
            console.log(action);
            let article = action.article;
            return {
                ...state,
                articles: [...state.articles, article]
            }
        }
        case fromActions.REMOVE_ARTICLE:{
            const articles = state.articles.filter(
                article => article.id !== action.id
            );
            return {
                ...state,
                articles,
            };
        }
        default: {
            if(state){
                return state
            }else {
                return initialState;
            }
        }
    }
}


