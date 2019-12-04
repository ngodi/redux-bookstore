import React from 'react';
import './App.css';

import NavBar from './NavBar';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div>
    <NavBar />
    <div className="app">
      <div className="left-sidebar">
        <BooksForm />
        <CategoryFilter />
      </div>
      <div className="main-section">
        <BooksList />
      </div>
    </div>
  </div>
);


export default App;
