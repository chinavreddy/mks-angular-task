import { createReducer, on } from "@ngrx/store";
import { AddArticle, deleteArticle } from "./article.actions";
import { ArticleInitialState } from "./article.state";

const _articleStateReducer = createReducer(
    ArticleInitialState,
    on(AddArticle, (state, action) => {
        let article = { ...action.article }
        article.id = state.articles.length + 1
        return {
            ...state,
            articles : [...state.articles, article]
        }
    })
    ,
    on(deleteArticle, (state, {id}) => {
        const delArticle = state.articles.filter((a) => {
            return a.id !== id
        })
        return {
            ...state,
            articles: delArticle
        }
    })
)

export function articleStateReducer(state: any, action: any) {
    return _articleStateReducer(state, action)
}