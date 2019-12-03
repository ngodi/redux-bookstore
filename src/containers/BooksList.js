/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/index';
import './booksList.css';

import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  return (
    <div className="bookList">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {
       books.map(book => <Book handleRemoveBook={handleRemoveBook} key={book.id} book={book} />)
      }
        </tbody>
      </table>
    </div>
  );
};
BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
