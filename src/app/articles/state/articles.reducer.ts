import * as fromActions from "./articles.actions";
import { Article } from "../models/article.model";
import * as fromRoot  from "../../state/app.state";

export interface ArticleState {
    articles: Article[]
}

export interface AppState extends fromRoot.AppState {
    articles: ArticleState;
}
const initialState: ArticleState = {
    "articles": [
        { id: "1", title: "Article 1", author: "Author Name 1", description: "Description 1", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "assets/img/default-poster-image.jpg" },
        { id: "2", title: "Article 2", author: "Author Name 2", description: "Description 2", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "3", title: "Article 3", author: "Author Name 3", description: "Description 3", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "4", title: "Article 4", author: "Author Name 4", description: "Description 4", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "5", title: "Article 5", author: "Author Name 5", description: "Description 5", thumbnail_image: "", poster_image: "" },
        { id: "6", title: "Article 6", author: "Author Name 6", description: "Description 6", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "7", title: "Article 7", author: "Author Name 7", description: "Description 7", thumbnail_image: "", poster_image: "" },
        { id: "8", title: "Article 8", author: "Author Name 8", description: "Description 8", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "9", title: "Article 9", author: "Author Name 9", description: "Description 9", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
        { id: "10", title: "Article 10", author: "Author Name 10", description: "Description 10", thumbnail_image: "assets/img/default-thumbnail-image.jpg", poster_image: "" },
    ]
};

export function articlesReducers(state= initialState, action: fromActions.ArticlesActions){
    switch (action.type){
        case fromActions.ADD_ARTICLE: {
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
        case fromActions.LOAD_ARTICLES:{
            return {
                ...state
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


