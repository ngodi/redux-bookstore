/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './booksList.css';

import Book from '../components/Book';


const BooksList = ({ books }) => (
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
         books.map(book => <Book key={book.id} id={book.id} title={book.title} category={book.category} />)
        }
      </tbody>
    </table>
  </div>
);
const mapStateToProps = state => ({
  books: state.books.books,
});

BooksList.propTypes = {
  books: PropTypes.string.isRequired,
};
export default connect(
  mapStateToProps,
)(BooksList);
