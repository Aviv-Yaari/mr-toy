import Typography from '@material-ui/core/Typography';
import { ReviewCmp } from './review-cmp';

export const ToyReviewList = props => {
  const { reviews } = props;
  return (
    <section className="toy-review-list flex column container">
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
        Reviews
      </Typography>
      {!reviews.length && <div>No reviews yet - be the first to add a review!</div>}
      {reviews.map(review => (
        <ReviewCmp key={review._id} review={review} showAvatar />
      ))}
    </section>
  );
};
