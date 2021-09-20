import { CircularProgress, Typography } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserReviewList } from '../cmps/user-review-list';
import { reviewService } from '../services/review.service';
import { userService } from '../services/user.service';
import { showUserMsg } from '../store/actions/general.actions';

export const UserDetails = props => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const loadUser = useCallback(async () => {
    const { id } = props.match.params;
    setUser(await userService.getUserById(id));
  }, [props.match.params]);

  const onRemoveReview = async review => {
    try {
      dispatch(showUserMsg('Deleting review...'));
      await reviewService.remove(review._id);
      dispatch(showUserMsg('Review deleted'));
      await loadUser();
    } catch (err) {
      console.error(err);
      dispatch(showUserMsg(err, true));
    }
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!user) return <CircularProgress />;
  const { firstName, lastName, reviews = [] } = user;
  return (
    <main className="user-details container">
      <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
        {firstName} {lastName}
      </Typography>
      <UserReviewList reviews={reviews} onRemoveReview={onRemoveReview} />
    </main>
  );
};
