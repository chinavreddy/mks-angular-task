import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[PostArticles Component] Increment',
  (prop: Object = {}) => ({ prop })
);

export const decrement = createAction('[ArticleListComponent Component] Decrement', (id: any = 0) => ({ id }));