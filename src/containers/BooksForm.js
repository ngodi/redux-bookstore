import React from 'react';
import './bookForm.css';


const BooksForm = () => {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    const categoryList = categories.map(category => {
       return  <option className='selectOption'>{category}</option>
    });
    return (
        <div className='bookForm'>
          <form>
              <h2>Add book to store</h2>
              <div class='formInput'>
                  <label>Enter book title:</label><input type='text' /><br />
              </div>
              <div className='formSelect'>
                  <label>Select category: </label><select name='category'>{categoryList}</select>
              </div><br />
              
              <button type='submit'>submit</button>
          </form>
          
        </div>
    );
};

export default BooksForm;