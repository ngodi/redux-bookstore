import booksreducer from './books';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: booksreducer()
});

export default rootReducer;