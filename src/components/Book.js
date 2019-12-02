import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => {
  Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};


export default Book;
