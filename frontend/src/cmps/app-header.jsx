import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppHeaderUser } from './app-header-user';

export const AppHeader = props => {
  const { onLogout } = props;
  const user = useSelector(state => state.userModule.user);
  return (
    <header className="app-header full flex align-center">
      <NavLink className="logo" to="/toy">
        <Button size="large">Mr.Toy</Button>
      </NavLink>
      <div>
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
    </header>
  );
};
