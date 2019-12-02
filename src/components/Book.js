import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, category }) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  return (
    <tr>
      <td></td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};


export default Book;
