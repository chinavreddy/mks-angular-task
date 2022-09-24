import { createReducer, on } from "@ngrx/store"
import { addArticle, deleteArticle} from "./articles.ctions"
import { initialState } from "./articles.state"

const _articlesReducer = createReducer(initialState, 
    on(addArticle, (state, action) => {
        let article = {...action.article}
        article.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, article],
        }
    }),
    on(deleteArticle,  (state, action) => {
        const updatedArticles = state.posts.filter(post => {
            return post.id!= action.id;
        })
        return {
            ...state,
            posts: updatedArticles,
        }
    })
)

export function articlesReducer(state: any, action: any) {
    return _articlesReducer(state, action)
}