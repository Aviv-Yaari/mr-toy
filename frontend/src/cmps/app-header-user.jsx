import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const AppHeaderUser = props => {
  const { user, onLogout } = props;
  return (
    <div className="user flex align-center wrap justify-center">
      {!user ? (
        <>
          <NavLink to="/signup">
            <Button>Sign Up</Button>
          </NavLink>
          <NavLink to="/login">
            <Button>Log In</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={`/user/${user._id}`}>
            <Button>
              {user.firstName}
              {user.isAdmin ? ' (Admin)' : ''}
            </Button>
          </NavLink>
          <NavLink to="/logout">
            <Button onClick={onLogout}>Log Out</Button>
          </NavLink>
        </>
      )}
    </div>
  );
};
