import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Article } from "../models/article.model";
import * as fromRoot from "../../state/app.state";
import {ArticleState} from "./articles.reducer";

const getArticleFeatureState = createFeatureSelector<ArticleState>(
    "articles"
);
export const getArticles = createSelector(
    getArticleFeatureState,
    (state) => {
        console.log(state);
        return state.articles
    }
);


