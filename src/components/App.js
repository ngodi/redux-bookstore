import React from 'react';
import './App.css';

import NavBar from './NavBar';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="bookstoreCms">
    <div className="content">
      <NavBar />
      <div className="app">
      <BooksList />
      <BooksForm /> 
      </div>
    </div>
  </div>
);


export default App;
