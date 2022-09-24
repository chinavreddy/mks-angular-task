import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[PostArticles Component] Increment',
  (prop: Object = {}) => ({ prop })
);
export const decrement = createAction('[ArticleCardComponent Component] Decrement', (id: number = 0) => ({ id }));
