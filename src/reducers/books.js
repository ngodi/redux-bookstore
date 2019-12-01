/* eslint-disable max-len */
const getId = () => Math.floor(Math.random() * 100);
const initialState = {
  books: [
    {
      id: getId(),
      title: 'Getting started with redux',
      category: 'Action',
    },
    {
      id: getId(),
      title: 'Introduction to Reactjs',
      category: 'Action',
    },
    {
      id: getId(),
      title: 'Microvers TSE position',
      category: 'Action',
    },
  ],
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': return {
      books: [...state, action.payload],
    };
    case 'REMOVE_BOOK': return {
      books: [action.payload],
    };
    default: return state;
  }
};

export default booksReducer;
