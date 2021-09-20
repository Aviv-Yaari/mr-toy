import { useDispatch } from 'react-redux';
import { ToyAddEditForm } from '../cmps/toy-add-edit-form';
import { showUserMsg } from '../store/actions/general.actions';
import { addToy } from '../store/actions/toy.actions';

const initialValues = {
  name: 'The cool doll',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere iusto sapiente ad, est animi quidem ex numquam? Quis quibusdam ratione qui provident sequi quasi voluptate, velit commodi illo minima?',
  price: 150,
  inStock: true,
  labels: [],
};

export const ToyAdd = props => {
  const dispatch = useDispatch();

  const onAddToy = async toy => {
    try {
      console.log(toy);
      dispatch(showUserMsg('Adding..'));
      await dispatch(addToy(toy));
      dispatch(showUserMsg('Toy Added'));
      props.history.push('/toy');
    } catch (err) {
      dispatch(showUserMsg(err, true));
      console.error(err);
    }
  };
  return <ToyAddEditForm isEdit={false} initialValues={initialValues} onSubmit={onAddToy} />;
};
