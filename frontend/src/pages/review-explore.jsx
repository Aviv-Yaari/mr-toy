import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadReviews } from '../store/actions/review.actions';

export const ReviewExplore = props => {
  const reviews = useSelector(state => state.reviewModule.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    const getReviews = async () => {
      await dispatch(loadReviews());
    };
    getReviews();
  }, [dispatch]);

  if (!reviews) return <CircularProgress />;
  return <main className="review-explore container">{JSON.stringify(reviews)}</main>;
};
