import CircularProgress from '@material-ui/core/CircularProgress';
import { ToyPreview } from './toy-preview';
import classes from '../css/toy-list.module.css';

export const ToyList = props => {
  const { toys, onRemoveToy, onToggleToy, onToyClick, onToyEdit } = props;
  if (!toys)
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress color="secondary" />
      </div>
    );
  return (
    <section className={classes['toy-list']}>
      {toys.map(toy => (
        <ToyPreview
          key={toy._id}
          toy={toy}
          onRemoveToy={onRemoveToy}
          onToggleToy={onToggleToy}
          onToyClick={onToyClick}
          onToyEdit={onToyEdit}
        />
      ))}
      {!toys.length && <p>No toys to show</p>}
    </section>
  );
};
