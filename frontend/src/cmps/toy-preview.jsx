import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import { ToyLabelList } from './toy-label-list';
import { ToyActions } from './toy-actions';

export const ToyPreview = props => {
  const DEFAULT_IMG = 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg';
  const { toy, onToyClick, onRemoveToy, onToyEdit } = props;
  const { name, price, labels, inStock, createdAt, description, img } = toy;
  return (
    <Card className="toy-preview">
      <CardActionArea onClick={() => onToyClick(toy)}>
        <CardMedia className="media" image={img || DEFAULT_IMG} title="toy" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ textDecoration: !inStock ? 'line-through' : 'unset' }}>
            {name}
            {!inStock && ' - Out of Stock!'}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h6" component="h3">
            {price}$
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {moment(createdAt).format('MMMM Do YYYY')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ToyLabelList labels={labels} />
      <CardActions>
        <ToyActions
          toy={toy}
          onToyClick={onToyClick}
          onToyEdit={onToyEdit}
          onRemoveToy={onRemoveToy}
        />
      </CardActions>
    </Card>
  );
};
