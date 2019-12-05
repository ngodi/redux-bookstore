/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  handleRemoveBook, book,
}) => {
  const newhandleRemoveBook = () => {
    handleRemoveBook(book);
  };
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleRemoveBook: PropTypes.func.isRequired,
  };

  return (
    <ul className="book">
      <li>{book.id}</li>
      <li>{book.title}</li>
      <li>{book.category}</li>
      <li><button onClick={newhandleRemoveBook} type="button">remove</button></li>
    </ul>
  );
};


export default Book;
