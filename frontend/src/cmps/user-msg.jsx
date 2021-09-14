import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export const UserMsg = props => {
  const { msg, isError, isOpen } = props.userMsg;
  const { hideUserMsg } = props;
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={hideUserMsg}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={hideUserMsg}
        severity={isError ? 'error' : 'info'}>
        {msg}
      </MuiAlert>
    </Snackbar>
  );
};
