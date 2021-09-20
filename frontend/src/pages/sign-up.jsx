import * as React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { authService } from '../services/auth.service';
import { showUserMsg } from '../store/actions/general.actions';
import { setUser } from '../store/actions/user.actions';
import { useHistory } from 'react-router';

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async ev => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
    };
    dispatch(showUserMsg('Signing up...'));
    try {
      const loggedInUser = await authService.signup(user);
      await dispatch(setUser(loggedInUser));
      dispatch(showUserMsg('Signed up successfuly'));
      history.push('/toy');
    } catch (err) {
      dispatch(showUserMsg(err, true));
    }
  };

  return (
    <main className="sign-up container">
      <section className="heading flex column align-center justify-center">
        <Avatar style={{ backgroundColor: '#dc004e' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </section>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          autoComplete="fname"
          name="firstName"
          required
          fullWidth
          label="First Name"
          autoFocus
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        />
        <TextField
          className="full"
          variant="outlined"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          className="full"
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
        />
        <Button
          className="btn-signup full"
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Sign Up
        </Button>
      </form>
    </main>
  );
};
