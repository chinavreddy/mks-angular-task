import { createAction, props } from '@ngrx/store'

import { Article } from './article.state'

export const ADD_ARTICLE_ACTION = "[articles page] add article"
export const LOAD_ARTICLE = "[articles page] load article"
export const DELETE_ARTICLE_ACTION = "[articles page] delete article"

export const loadArticles = createAction(LOAD_ARTICLE, props<{articles : Article}>())
export const AddArticle = createAction(ADD_ARTICLE_ACTION, props<{article : Article}>())
export const deleteArticle = createAction(DELETE_ARTICLE_ACTION, props<{id : number | undefined}>())

