import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Article, ArticleList } from "./article.state";

export const selectArticle = createFeatureSelector<ArticleList>('articles')

export const getArticle = createSelector(selectArticle,
    (state) => { return state.articles })

export const getArticleById = createSelector(selectArticle, (state: any, props: any) => {
    // console.log("prop",props)
    // console.log("articles ", typeof props)
    const aid = parseInt(props.id)
    return state.articles.find((a: any) => {
        // console.log(typeof a.id +" --- "+ typeof aid )
        // console.log(a.id +" --- "+  aid )
        if (a.id === aid) {
            return a
        }
        // a.id === aid 
    })
    // return state.articles
})