import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToyAddEditForm } from '../cmps/toy-add-edit-form';
import { showUserMsg } from '../store/actions/general.actions';
import { getToyById, updateToy } from '../store/actions/toy.actions';

export const ToyEdit = props => {
  const dispatch = useDispatch();
  const toy = useSelector(state => state.toyModule.currToy);

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getToyById(id));
  }, [dispatch, props.match.params]);

  const onSaveChanges = async toy => {
    try {
      dispatch(showUserMsg('Updating..'));
      await dispatch(updateToy(toy));
      dispatch(showUserMsg('Toy details updated'));
      props.history.push(`/toy/${toy._id}`);
    } catch (err) {
      dispatch(showUserMsg('Could not update toy. ' + err.response.data.err, true));
      console.error(err);
      console.dir(err);
    }
  };

  if (!toy) return <CircularProgress />;
  return <ToyAddEditForm isEdit={true} initialValues={toy} onSubmit={onSaveChanges} />;
};
