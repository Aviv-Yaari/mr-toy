import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export const UserMsg = props => {
  const { msg, type, isOpen } = props.userMsg;
  const { hideUserMsg } = props;
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={hideUserMsg}>
      <MuiAlert elevation={6} variant="filled" onClose={hideUserMsg} severity={type}>
        {msg}
      </MuiAlert>
    </Snackbar>
  );
};
