import React from 'react';
import './App.css';

import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="app">
    <div className="left-sidebar">
      <BooksForm />
    </div>
    <div className="main-section">
      <BooksList />
    </div>
  </div>
);


export default App;
