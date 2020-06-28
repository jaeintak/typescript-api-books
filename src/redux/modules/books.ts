import { BookResType } from '../../types';

export interface BooksState {
  books: BookResType[] | null;
  loading: boolean;
  error: Error | null;
}

const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState) => {
  return state;
};

export default reducer;

export function* sagas() {}
