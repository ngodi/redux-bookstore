import React from 'react';
import './App.css';

import BooksList from '../containers/BooksList';

const App = () => (
  <div className="bookstoreCms">
    <div className="content">
      <div className="app">
      <BooksList />
      </div>
    </div>
  </div>
);


export default App;
