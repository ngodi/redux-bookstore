import React from 'react';
import './App.css';

import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="bookstoreCms">
    <div className="content">
      <div className="app">
      <BooksList />
      <BooksForm /> 
      </div>
    </div>
  </div>
);


export default App;
