export const getId = () => Math.floor(Math.random() * 100);
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
    case 'CREATE_BOOK':
      return { books: [...state.books, action.book] };
    case 'REMOVE_BOOK':
      [...state.books].splice([...state.books].indexOf(action.book), 1);
      return { books: [...state.books].filter((book) => book !== action.book) };
    default: return state;
  }
};

export default booksReducer;
