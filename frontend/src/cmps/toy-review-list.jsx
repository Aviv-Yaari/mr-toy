import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import '../css/toy-review-list.css';
import moment from 'moment';

export const ToyReviewList = props => {
  const { reviews } = props;
  return (
    <section className="flex toy-review-list">
      {reviews.map(review => (
        <ToyReview key={review._id} review={review} />
      ))}
    </section>
  );
};

function ToyReview(props) {
  const { author, title, body, createdAt } = props.review;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{author.charAt(0).toUpperCase()}</Avatar>}
        title={title}
        subheader={moment(createdAt).format('MMMM Do YYYY')}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
