import { CircularProgress, Typography } from '@material-ui/core';
import { ReviewCmp } from './review-cmp';

export const UserReviewList = props => {
  const { reviews } = props;
  if (!reviews) return <CircularProgress />;
  if (!reviews.length) return <div>No reviews written by this user</div>;
  return (
    <>
      <Typography gutterBottom variant="subtitle1">
        Toy reviews by this user:
      </Typography>
      <section className="user-review-list flex column">
        {reviews.map(review => (
          <ReviewCmp key={review._id} review={review} showToyLink />
        ))}
      </section>
    </>
  );
};
