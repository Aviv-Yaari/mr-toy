import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const ReviewCmp = props => {
  const { user, rating, details, title, createdAt, toy } = props.review;
  const { onRemoveReview, review } = props;
  return (
    <Card className="review-cmp">
      <CardHeader
        avatar={
          props.showAvatar && (
            <Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}>
              <Avatar className="avatar">{user.firstName.charAt(0).toUpperCase()}</Avatar>
            </Link>
          )
        }
        title={title}
        subheader={
          <div className="subheader">
            {moment(createdAt).format('MMMM Do YYYY')}
            {props.showToyLink && (
              <>
                <span> - Toy: </span>
                <Link to={'/toy/' + toy._id}>{toy.name}</Link>
              </>
            )}
          </div>
        }
      />
      <CardContent>
        <div className="rating">
          <Rating value={rating} precision={0.5} readOnly />
        </div>
        <Typography variant="body2" component="p" className="details">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onRemoveReview(review)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
