import { Article, ArticleList } from "./article.state";
import { articleStateReducer } from "./article.reducer";

export interface AppState {
    articles : ArticleList
}

export const appReducer = {
    articles : articleStateReducer
}