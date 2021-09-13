import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header full flex align-center">
        <NavLink className="logo" to="/">
          <Button size="large">Mr.Toy</Button>
        </NavLink>
        <NavLink to="/toy/add">
          <Button>Add Toy</Button>
        </NavLink>
        <NavLink to="/toy/dashboard">
          <Button>Dashboard</Button>
        </NavLink>
        <NavLink to="/toy/about">
          <Button>About</Button>
        </NavLink>
      </header>
    );
  }
}
