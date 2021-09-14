import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/user.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { useHistory } from 'react-router';

export const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async ev => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(showUserMsg('Logging in...'));
    try {
      await dispatch(login(email, password));
      dispatch(showUserMsg('Logged in'));
      history.push('/toy');
    } catch (err) {
      dispatch(showUserMsg(err.response.data.err, true));
    }
  };

  return (
    <main className="login container">
      <section className="heading flex column align-center justify-center">
        <Avatar style={{ backgroundColor: '#3f51b5' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
      </section>
      <form onSubmit={handleSubmit} className="flex column">
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
        <Button
          className="btn-signup full"
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Log In
        </Button>
      </form>
    </main>
  );
};
