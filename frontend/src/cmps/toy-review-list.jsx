import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import { Rating } from '@material-ui/lab';

export const ToyReviewList = props => {
  const { reviews } = props;
  return (
    <section className="toy-review-list flex column container">
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
        Reviews
      </Typography>
      {reviews.map(review => (
        <ToyReview key={review._id} review={review} />
      ))}
    </section>
  );
};

function ToyReview(props) {
  const { user, title, details, createdAt, rating } = props.review;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{user.firstName.charAt(0).toUpperCase()}</Avatar>}
        title={title}
        subheader={moment(createdAt).format('MMMM Do YYYY')}
      />
      <CardContent>
        <div className="rating">
          <Rating value={rating} precision={0.5} readOnly />
        </div>
        <Typography variant="body2" component="p">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
