import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { ToyLabelList } from './toy-label-list';
import { ToyActions } from './toy-actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ToyPreview = props => {
  const { toy, onToyClick, onRemoveToy, onToyEdit } = props;
  const { name, price, labels, inStock } = toy;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onToyClick(toy)}>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
            {!inStock && ' - Out of Stock!'}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit debitis aliquid
            voluptatem, harum laudantium culpa fuga earum blanditiis facilis inventore quaerat
            recusandae ab, nulla quasi exercitationem ipsa! Hic, provident?
          </Typography>
          <Typography variant="h6" component="h3">
            {price}$
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
