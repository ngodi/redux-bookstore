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
    <div className="bookInfo">
          <h3 className="bookTitle">{book.title}</h3>
          <p className="bookCategory">Category: {book.category}</p>
          <br />
         
    </div>
        <div className="readStatus">
          <div className="percentage">
            <p>Status: Completed</p>
          </div>
          <div className="currentChapter">
            <p>CURRENT CHAPTER: </p>
          </div>
        </div>
        <button className="removeBtn" onClick={newhandleRemoveBook} type="button">remove</button>
  </div>
  );
};


export default Book;
