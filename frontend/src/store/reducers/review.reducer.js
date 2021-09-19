export const initialState = {
  reviews: [],
  filter: {},
  sort: { field: 'createdAt', type: 1 },
};

export function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_REVIEWS':
      return { ...state, reviews: action.reviews };
    case 'REMOVE_REVIEW':
      return { ...state, reviews: state.reviews.filter(review => review._id !== action.id) };
    case 'UPDATE_REVIEW':
      const reviews = state.reviews.map(review =>
        review._id === action.review._id ? action.review : review
      );
      return { ...state, reviews };
    case 'SET_FILTER':
      const filter = { ...state.filter, ...action.filter };
      return { ...state, filter };
    case 'SORT_FIELD':
      const newSortType = Object.values(state.sort)[0] === 1 ? -1 : 1;
      return { ...state, sort: { [action.field]: newSortType } };
    default:
      return state;
  }
}
