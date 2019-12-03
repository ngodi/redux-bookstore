/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

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
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button onClick={newhandleRemoveBook} type="button">remove</button></td>
    </tr>
  );
};


export default Book;
