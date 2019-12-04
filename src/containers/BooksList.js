/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../actions/index';
import './booksList.css';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = (e) => {
    changeFilter(e);
  };
  return (
    <div className="bookList">
      <CategoryFilter handleFilterChange={handleFilterChange} filter={filter} />
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
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books.books,
  filter: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
