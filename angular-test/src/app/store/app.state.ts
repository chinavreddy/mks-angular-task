import { articlesReducer } from "../home/state/articles.reducer";
import { ArticlesState } from "../home/state/articles.state";

export interface AppState {
    articles: ArticlesState
}


export const appReducer = {
    articles: articlesReducer
}