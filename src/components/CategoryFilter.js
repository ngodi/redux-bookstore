/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CategoryFilter.css';

import { categories } from '../containers/BooksForm';

const filterCategories = ['ALL', ...categories];
const filterCategoryList = filterCategories.map((category, i) => <option key={i}>{category}</option>);
const CategoryFilter = () => (
  <div className="categoryFilter">
    <label htmlFor="filter">
    Filter by category:
      <select id="filter" name="filter">{filterCategoryList}</select>
    </label>
  </div>

);

export default CategoryFilter;
