import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppHeaderUser } from './app-header-user';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';

export const AppHeader = props => {
  const { onLogout } = props;
  const user = useSelector(state => state.userModule.user);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className={'app-header full' + (isExpanded ? ' expanded' : '')}>
      <div className="menu-and-logo">
        <IconButton onClick={() => setIsExpanded(prevState => !prevState)}>
          <MenuIcon />
        </IconButton>
        <NavLink className="logo" to="/toy">
          <Button size="large">Mr.Toy</Button>
        </NavLink>
      </div>
      {isExpanded && (
        <div className="items flex column" onClick={() => setIsExpanded(false)}>
          <div className="pages">
            <NavLink to="/toy/add">
              <Button>Add Toy</Button>
            </NavLink>
            <NavLink to="/toy/dashboard">
              <Button>Dashboard</Button>
            </NavLink>
            <NavLink to="/review">
              <Button>Reviews</Button>
            </NavLink>
            <NavLink to="/toy/about">
              <Button>About</Button>
            </NavLink>
          </div>
          <AppHeaderUser user={user} onLogout={onLogout} />
        </div>
      )}
    </header>
  );
};
