import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { RouterStateUrl } from "src/app/custom-serializer";
import { getCurrentRoute} from "src/app/router.selector";
import { ArticlesState } from "./articles.state";

const getArticlesState = createFeatureSelector<ArticlesState>('articles');

export const getArticles = createSelector(getArticlesState, (state) => {
    return state.posts;
})

export const getArticlebyId = createSelector(
    getArticles,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
    return posts.find((post) => post.id === route.params['id']);
})