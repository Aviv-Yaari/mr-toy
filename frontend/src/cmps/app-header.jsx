import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header flex">
        <NavLink className="logo" to="/">
          Mr.Toy
        </NavLink>
      </header>
    );
  }
}
