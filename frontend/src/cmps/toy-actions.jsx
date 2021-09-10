import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';

export const ToyActions = props => {
  const { onToyClick, onToyEdit, onRemoveToy, toy } = props;
  return (
    <>
      {onToyClick && (
        <IconButton onClick={() => onToyClick(toy)} aria-label="view">
          <SearchIcon />
        </IconButton>
      )}
      <IconButton onClick={() => onToyEdit(toy)} aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onRemoveToy(toy)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
};
