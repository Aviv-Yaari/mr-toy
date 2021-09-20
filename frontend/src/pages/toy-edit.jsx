import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToyAddEditForm } from '../cmps/toy-add-edit-form';
import { toyService } from '../services/toy.service';
import { showUserMsg } from '../store/actions/general.actions';

export const ToyEdit = props => {
  const [toy, setToy] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadToy = async () => {
      const { id } = props.match.params;
      const toy = await toyService.getToyById(id);
      setToy(toy);
    };
    loadToy();
  }, [props.match.params]);

  const onSaveChanges = async toy => {
    try {
      dispatch(showUserMsg('Updating..'));
      await toyService.update(toy);
      dispatch(showUserMsg('Toy details updated'));
      props.history.push(`/toy/${toy._id}`);
    } catch (err) {
      dispatch(showUserMsg(err, true));
      console.error(err);
      console.dir(err);
    }
  };

  if (!toy) return <CircularProgress />;
  return <ToyAddEditForm isEdit={true} initialValues={toy} onSubmit={onSaveChanges} />;
};
