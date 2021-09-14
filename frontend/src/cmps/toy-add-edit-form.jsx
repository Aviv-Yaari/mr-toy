import { Button, MenuItem, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { toyService } from '../services/toy.service';

// Settings:

const validationSchema = yup.object({
  name: yup
    .string('Enter Name')
    .required('Name is required')
    .min(2, 'Name must be 2 letters or longer'),
  description: yup
    .string('Enter Description')
    .required('Description is required')
    .min(10, 'Description must be 10 letters or longer'),
  price: yup.number('Enter Price').required('Price is required'),
});

const allLabels = toyService.getAllLabels().map(label => ({ label, value: label }));

const FormField = props => {
  const { name, formik } = props;
  return (
    <TextField
      {...props}
      fullWidth
      variant="outlined"
      value={formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onChange={formik.handleChange}
    />
  );
};

// Actual Component:

export const ToyAddEditForm = props => {
  const { isEdit, initialValues, onSubmit } = props;
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    formik.setFieldValue('labels', labels);
  };

  return (
    <form className="toy-add container" onSubmit={formik.handleSubmit}>
      <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
        {isEdit ? 'Edit Toy' : 'Add Toy'}
      </Typography>
      <FormField label="Toy Name" name="name" formik={formik} />
      <FormField label="Toy Description" name="description" multiline formik={formik} />
      <FormField label="Price" name="price" type="number" formik={formik} />
      <FormField label="Availability" name="inStock" select formik={formik}>
        <MenuItem value={true}>In stock</MenuItem>
        <MenuItem value={false}>Out of stock</MenuItem>
      </FormField>
      <div className="labels">
        <Select
          placeholder="Labels"
          options={allLabels}
          isMulti
          onChange={handleLabelChange}
          defaultValue={initialValues.labels.map(label => ({ label, value: label }))}
        />
      </div>
      <Button type="submit">{isEdit ? 'Save Changes' : 'Submit New Toy'}</Button>
    </form>
  );
};
