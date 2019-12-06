const initialState = {
  filter: 'CATEGORY',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': return {
      filter: action.category,
    };
    default: return state;
  }
};

export default filterReducer;
