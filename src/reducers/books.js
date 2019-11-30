
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
    books: [
        {ID:1, title:"Book1", category:"Actions"},
        {ID:2, title:"Book2", category:"Actions"},
    ]
};

const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_BOOK: return {
          books: [...state, action.payload],
        }
        case REMOVE_BOOK: return {
            books: state.books.slice(state.books.indexOf(action.payload), state.books.indexOf(action.payload)+1)
        }
        default: return state
    }
}

export default booksReducer;