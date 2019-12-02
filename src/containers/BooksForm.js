/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getId } from '../reducers/books';
import './bookForm.css';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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
  const categoryList = categories.map((category, i) => <option key={i} className="selectOption">{category}</option>);
  return (
    <div className="bookForm">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Add book to store</h2>
        <div className="formInput">
          <label htmlFor="title">
Enter book title:
            <input id="title" name="title" value={this.state.title} type="text" onChange={this.handleChange.bind(this)} />
          </label>

          <br />
        </div>
        <div className="formSelect">
          <label htmlFor="category">
Select category:
            <select id="category" onChange={this.handleChange.bind(this)} name="category">{categoryList}</select>
          </label>
        </div>
        <br />

        <button className="btn" type="submit">submit</button>
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
