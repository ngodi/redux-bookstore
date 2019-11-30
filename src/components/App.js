import React from 'react';
import {connect} from 'react-redux';

import { createBook, removeBook } from '../actions/index';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = (props) => {
    return (
        <div>
          <BooksForm />
          <BooksList />
        </div>
    )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: (book)=> dispatch(createBook(book)),
    removeBook: (book)=>dispatch(removeBook(book))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);