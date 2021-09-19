import { CircularProgress, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReviewExploreList } from '../cmps/review-explore-list';
import { loadReviews } from '../store/actions/review.actions';

export const ReviewExplore = props => {
  const reviews = useSelector(state => state.reviewModule.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviews());
  }, [dispatch]);

  if (!reviews) return <CircularProgress />;
  return (
    <main className="review-explore container" style={{ backgroundColor: 'unset' }}>
      <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
        Explore Reviews
      </Typography>

      <ReviewExploreList reviews={reviews} />
    </main>
  );
};
