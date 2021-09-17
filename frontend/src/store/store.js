import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { generalReducer } from './reducers/general.reducer';
import { toyReducer } from './reducers/toy.reducer';
import { userReducer } from './reducers/user.reducer';
import { reviewReducer } from './reducers/review.reducer';

const rootReducer = combineReducers({
  toyModule: toyReducer,
  reviewModule: reviewReducer,
  userModule: userReducer,
  generalModule: generalReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
