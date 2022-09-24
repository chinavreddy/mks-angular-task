import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './article.actions';
export const initialState: Array<Object> = [];
export let arrObject: any = [];
export const counterReducer = createReducer(
  initialState,
  on(increment, (state: Object[], profileData: any) => {
    arrObject = Object.assign([], arrObject);
    arrObject.push(profileData.prop);
    state = arrObject;
    return state;
  }),
  on(decrement, (state: Object[], id: any) => {
    state = state.filter((obj: any, index: any) => {
      return parseInt(obj?.id) !== parseInt(id.id);
    });
    //console.log(state);
    return state;
  })
);
