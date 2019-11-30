
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
    books: []
};

const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_BOOK: return {
            ...state,
            books: state.books.push(action.payload)
        }
        case REMOVE_BOOK: return {
            books: state.books.slice(state.books.indexOf(book), state.books.indexOf(book)+1)
        }
        default: return state
    }
}

export default booksReducer;