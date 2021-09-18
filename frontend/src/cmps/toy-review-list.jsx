import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

export const ToyReviewList = props => {
  const { reviews } = props;
  return (
    <section className="toy-review-list flex column container">
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
        Reviews
      </Typography>
      {!reviews.length && <div>No reviews yet - be the first to add a review!</div>}
      {reviews.map(review => (
        <ToyReview key={review._id} review={review} />
      ))}
    </section>
  );
};

export const ToyReview = props => {
  const { user, title, details, createdAt, rating } = props.review;

  return (
    <Card className="toy-review">
      <CardHeader
        avatar={
          <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}>
            <Avatar className="avatar">{user.firstName.charAt(0).toUpperCase()}</Avatar>
          </Link>
        }
        title={`${user.firstName} ${user.lastName}: ${title}`}
        subheader={moment(createdAt).format('MMMM Do YYYY')}
      />
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
