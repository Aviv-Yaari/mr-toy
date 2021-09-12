import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/app-header.css';

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header flex">
        <Button size="large">
          <NavLink className="logo" to="/">
            Mr.Toy
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/toy/add">Add Toy</NavLink>
        </Button>
        <Button>
          <NavLink to="/toy/dashboard">Dashboard</NavLink>
        </Button>
      </header>
    );
  }
}
