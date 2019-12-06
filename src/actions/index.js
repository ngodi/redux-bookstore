/* eslint-disable arrow-parens */

export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
