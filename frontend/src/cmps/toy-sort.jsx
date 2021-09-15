import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

export const ToySort = props => {
  const { sort } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onSortField = field => {
    props.onSortField(field);
    setTimeout(onClose, 500);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="toy-sort">
      <Button endIcon={<SortIcon />} onClick={handleClick}>
        Sort
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}>
        <MenuItem onClick={() => onSortField('name')}>
          {sort.name === 1 && <ArrowDownwardIcon />}
          {sort.name === -1 && <ArrowUpwardIcon />}
          Name
        </MenuItem>
        <MenuItem onClick={() => onSortField('price')}>
          {sort.price === 1 && <ArrowDownwardIcon />}
          {sort.price === -1 && <ArrowUpwardIcon />}
          Price
        </MenuItem>
        <MenuItem onClick={() => onSortField('createdAt')}>
          {sort.createdAt === 1 && <ArrowDownwardIcon />}
          {sort.createdAt === -1 && <ArrowUpwardIcon />}
          Created At
        </MenuItem>
      </Menu>
    </section>
  );
};
