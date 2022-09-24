import { Action } from "@ngrx/store";
import { Article } from "../models/article.model";
export const POST_ARTICLE = '[Article] Post Article';
export const REMOVE_ARTICLE = '[Article] Remove Article'

export class PostArticle implements Action{
    readonly type = POST_ARTICLE;
    constructor(public article: Article) {}
}

export class RemoveArticle implements Action {
    readonly type = REMOVE_ARTICLE;
    constructor(public id: string) {}
}

export type ArticlesActions = PostArticle | RemoveArticle;
