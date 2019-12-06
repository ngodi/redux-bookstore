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
    <div className="book">
        <div className="boonInfo">
          <p className="bookCategory">{book.category}</p>
          <span className="bookId">BOOK ID: {book.id}</span>
          <h3 className="booktitle">{book.title}</h3>
          <button className="removeBtn" onClick={newhandleRemoveBook} type="button">remove</button>
        </div>
        <div className="percentage">
           <p>Completed</p>
        </div>
        <div className="currentChapter">
           <p>CURRENT CHAPTER</p>
        </div>
  </div>
  );
};


export default Book;
