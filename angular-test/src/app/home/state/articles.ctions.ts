import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/models/article.model";

export const ADD_ARTICLE_ACTION = '[articles page] add article';
export const DELETE_ARTICLE_ACTION = '[articles page] delete article';

export const addArticle = createAction(ADD_ARTICLE_ACTION, props< {article: Article} >());
export const deleteArticle = createAction(DELETE_ARTICLE_ACTION, props< {id: string} >());