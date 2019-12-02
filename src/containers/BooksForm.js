/* eslint-disable arrow-parens */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getId } from '../reducers/books';
import './bookForm.css';
import { createBook } from '../actions/index';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: getId(),
      title: '',
      category: '',
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
};

render() {
  const categories = ['Select', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((category, i) => <option key={i} className="selectOption">{category}</option>);
  return (
    <div className="bookForm">
      <form>
        <h2>Add book to store</h2>
        <div className="formInput">
          <label htmlFor="title">
Enter book title:
            <input id="title" name="title" type="text" onChange={this.handleChange.bind(this)} />
          </label>

          <br />
        </div>
        <div className="formSelect">
          <label htmlFor="category">
Select category:
            <select id="category" name="category" onChange={this.handleChange.bind(this)}>{categoryList}</select>
          </label>
        </div>
        <br />

        <button onClick={this.handleSubmit.bind(this)} type="submit">submit</button>
      </form>

    </div>
  );
}
}
BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  createBook: () => dispatch(createBook()),
});

export default connect(null, mapDispatchToProps)(BooksForm);
