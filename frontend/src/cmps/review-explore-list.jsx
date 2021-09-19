import { ReviewCmp } from './review-cmp';

export const ReviewExploreList = props => {
  return (
    <section className="review-explore-list justify-center">
      {props.reviews.map(review => (
        <ReviewCmp
          key={review._id}
          review={review}
          showAvatar
          showToyLink
          onRemoveReview={props.onRemoveReview}
        />
      ))}
    </section>
  );
};
