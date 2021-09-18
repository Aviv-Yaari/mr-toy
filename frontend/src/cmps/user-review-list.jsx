import { Card, CardContent, CardHeader, CircularProgress, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
          <UserReview key={review._id} review={review} />
        ))}
      </section>
    </>
  );
};

export const UserReview = props => {
  const { title, details, createdAt, rating, toy } = props.review;

  //   return <div className="user-review">{JSON.stringify(review)}</div>;
  return (
    <Card className="user-review">
      <CardHeader
        title={title}
        subheader={
          <div className="subheader" to={`/toy/${toy._id}`}>
            {moment(createdAt).format('MMMM Do YYYY')}
            <span> - Toy: </span>
            <Link to={'/toy/' + toy._id}>{toy.name}</Link>
          </div>
        }></CardHeader>

      <CardContent>
        <div className="rating">
          <Rating value={rating} precision={0.5} readOnly />
        </div>
        <Typography variant="body2" component="p" className="details">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};
