import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Button from '@material-ui/core/Button';
import { Component } from 'react';

import '../css/toy-sort.css';

export class ToySort extends Component {
  render() {
    const { onSortField, sort } = this.props;
    return (
      <section className="toy-sort">
        <Button onClick={() => onSortField('name')}>
          {sort.field === 'name' && sort.type === 1 && <ArrowDownwardIcon />}
          {sort.field === 'name' && sort.type === -1 && <ArrowUpwardIcon />}
          Name
        </Button>
        <Button onClick={() => onSortField('price')}>
          {sort.field === 'price' && sort.type === 1 && <ArrowDownwardIcon />}
          {sort.field === 'price' && sort.type === -1 && <ArrowUpwardIcon />}
          Price
        </Button>
        <Button onClick={() => onSortField('createdAt')}>
          {sort.field === 'createdAt' && sort.type === 1 && <ArrowDownwardIcon />}
          {sort.field === 'createdAt' && sort.type === -1 && <ArrowUpwardIcon />}
          Created At
        </Button>
      </section>
    );
  }
}
