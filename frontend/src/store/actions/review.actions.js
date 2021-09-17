import { reviewService } from '../../services/review.service';
import { initialState } from '../reducers/review.reducer';

export const loadReviews = (filter = initialState.filter, sort) => {
  return async dispatch => {
    const reviews = await reviewService.getReviews(filter, sort);
    dispatch({ type: 'SET_REVIEWS', reviews });
  };
};

export const addReview = review => {
  return async dispatch => {
    await reviewService.create(review);
    dispatch({ type: 'ADD_REVIEW', review });
  };
};

export const removeReview = review => {
  return async dispatch => {
    await reviewService.remove(review._id);
    dispatch({ type: 'REMOVE_REVIEW', id: review._id });
  };
};

export const updateReview = review => {
  return async dispatch => {
    await reviewService.update(review);
    dispatch({ type: 'UPDATE_REVIEW', review });
  };
};

export const setFilter = filter => {
  return async dispatch => {
    dispatch({ type: 'SET_FILTER', filter });
  };
};

export const clearFilter = () => {
  return dispatch => {
    dispatch({ type: 'SET_FILTER', filter: initialState.filter });
  };
};

export const sortField = field => {
  return async dispatch => {
    dispatch({ type: 'SORT_FIELD', field });
  };
};
