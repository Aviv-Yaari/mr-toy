import { CircularProgress, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ReviewExploreList } from '../cmps/review-explore-list';
import { reviewService } from '../services/review.service';
import { showUserMsg } from '../store/actions/general.actions';
import { loadReviews } from '../store/actions/review.actions';

export const ReviewExplore = props => {
  const reviews = useSelector(state => state.reviewModule.reviews);
  const dispatch = useDispatch();

  const onRemoveReview = async review => {
    try {
      dispatch(showUserMsg('Deleting review...'));
      await reviewService.remove(review._id);
      dispatch(showUserMsg('Review deleted'));
      dispatch(loadReviews());
    } catch (err) {
      console.error(err);
      dispatch(showUserMsg(err, true));
    }
  };

  useEffect(() => {
    dispatch(loadReviews());
  }, [dispatch]);

  if (!reviews) return <CircularProgress />;
  return (
    <main className="review-explore container" style={{ backgroundColor: 'unset' }}>
      <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
        Explore Reviews
      </Typography>

      <ReviewExploreList reviews={reviews} onRemoveReview={onRemoveReview} />
    </main>
  );
};
