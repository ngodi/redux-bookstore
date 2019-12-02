/* eslint-disable consistent-return */
/* eslint-disable max-len */
export const getId = () => Math.floor(Math.random() * 100);
const initialState = {
  books: [
    {
      title: 'Getting started with redux',
      category: 'Action',
    },
    {
      title: 'Introduction to Reactjs',
      category: 'Action',
    },
    {
      title: 'Microvers TSE position',
      category: 'Action',
    },
  ],
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state.books, action.payload] };
    case 'REMOVE_BOOK': return {
      books: [action.payload],
    };
    default: return state;
  }
};

export default booksReducer;
