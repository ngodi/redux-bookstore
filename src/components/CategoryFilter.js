/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CategoryFilter.css';


const filterCategories = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const filterCategoryList = filterCategories.map((category, i) => <option key={i}>{category}</option>);
const CategoryFilter = ({ handleFilterChange, filter }) => {
  const handleFilter = (e) => {
    handleFilterChange(e.target.value);
  };
  const bookFilter = (filter === 'ALL')?
  return (
    <div className="categoryFilter">
      <label htmlFor="filter">
      Filter by category:
        <select id="filter" onChange={handleFilter}>{filterCategoryList}</select>
      </label>
    </div>

  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter.filter,
});
export default connect(
  mapStateToProps,
)(CategoryFilter);
