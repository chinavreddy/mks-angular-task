import { Article } from "../models/article.model";
import { Action } from "@ngrx/store";

export const LOAD_ARTICLES = "[Article] Load Articles";
export const LOAD_ARTICLES_SUCCESS = "[Article] Load Articles Success";
export const LOAD_ARTICLES_FAIL = "[Article] Load Articles Fail";

export const ADD_ARTICLE = '[Article] Add Article';
export const REMOVE_ARTICLE = '[Article] Remove Article'

export class LoadArticles implements Action {
    readonly type = LOAD_ARTICLES;
}

export class LoadArticlesSuccess implements Action {
    readonly type = LOAD_ARTICLES_SUCCESS;

    constructor(public articles: Article[]) {}
}

export class LoadArticlesFail implements Action {
    readonly type = LOAD_ARTICLES_FAIL;

    constructor(public payload: string) {}
}
export class AddArticle implements Action{
    readonly type = ADD_ARTICLE;
    constructor(public article: Article) {}
}

export class RemoveArticle implements Action {
    readonly type = REMOVE_ARTICLE;
    constructor(public id: string) {}
}

export type ArticlesActions = LoadArticles | LoadArticlesSuccess | LoadArticlesFail | AddArticle | RemoveArticle;