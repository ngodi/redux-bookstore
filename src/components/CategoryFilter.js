/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

const filterCategories = ['CATEGORY', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const filterCategoryList = filterCategories.map((category, i) => <option key={i}>{category}</option>);
const CategoryFilter = ({ handleFilterChange }) => {
  const handleFilter = (e) => {
    handleFilterChange(e.target.value);
  };
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <span className="books">Books</span>
      <div className="categoryFilter">
      <label htmlFor="filter">
        <select className="selectFilter" id="filter" onChange={handleFilter}>{filterCategoryList}</select>
      </label>
     </div>
    </nav>
   );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
