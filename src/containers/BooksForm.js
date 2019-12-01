/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './bookForm.css';


const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((category, i) => <option key={i} className="selectOption">{category}</option>);
  return (
    <div className="bookForm">
      <form>
        <h2>Add book to store</h2>
        <div className="formInput">
          <label htmlFor="title">
Enter book title:
            <input id="title" type="text" />
          </label>

          <br />
        </div>
        <div className="formSelect">
          <label htmlFor="category">
Select category:
            <select id="category" name="category">{categoryList}</select>
          </label>
        </div>
        <br />

        <button type="submit">submit</button>
      </form>

    </div>
  );
};

export default BooksForm;
