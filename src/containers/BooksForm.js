/* eslint-disable arrow-parens */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getId } from '../reducers/books';
import './bookForm.css';
import { createBook } from '../actions/index';

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
export const categoryList = categories.map((category, i) => <option key={i} className="selectOption">{category}</option>);

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: getId(),
      title: '',
      category: categories[0],
    };
  }


handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};

handleSubmit = event => {
  event.preventDefault();
  const newbook = this.state;

  if (newbook.title !== '' && newbook.category !== '') {
    this.props.createBook(newbook);
  }
  this.setState({
    id: getId(),
    title: '',
    category: categories[0],
  });
};

render() {
  return (
    <div className="bookForm">
    <h1>BookTracker CMS</h1>
     
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="formInput">
          <label>ADD NEW BOOK</label>
          <input id="title" placeHolder="Book Title" className="title" name="title" value={this.state.title} type="text" onChange={this.handleChange.bind(this)} />
          <select id="category" className="selectCategory" onChange={this.handleChange.bind(this)} name="category">{categoryList}</select>
          <button className="btn" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}
}
BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  createBook: newbook => dispatch(createBook(newbook)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
