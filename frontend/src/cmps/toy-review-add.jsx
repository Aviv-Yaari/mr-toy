import { Button, TextField, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Settings:

const validationSchema = yup.object({
  rating: yup.number('Enter rating'),
  title: yup.string('Enter title').required('Enter review title'),
  details: yup
    .string('Enter details')
    .required('Enter review details')
    .min(5, 'Your review is too short'),
});

// Actual Component:

export const ToyReviewAdd = props => {
  const initialValues = { title: '', details: '', rating: 2.5 };

  const formik = useFormik({
    initialValues,
    onSubmit: async review => {
      await props.onSubmit(review);
      formik.resetForm();
    },
    validationSchema,
  });

  return (
    <form className="toy-review-add container" onSubmit={formik.handleSubmit}>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
        Add Review
      </Typography>
      <Rating
        size="large"
        name="rating"
        precision={0.5}
        {...formik.getFieldProps('rating')}
        onChange={ev => formik.setFieldValue('rating', +ev.target.value)}
      />
      <TextField
        label="Title"
        name="title"
        variant="outlined"
        margin="normal"
        fullWidth
        {...formik.getFieldProps('title')}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        label="Details"
        name="details"
        variant="outlined"
        margin="normal"
        multiline
        rows={5}
        fullWidth
        {...formik.getFieldProps('details')}
        error={formik.touched.details && Boolean(formik.errors.details)}
        helperText={formik.touched.details && formik.errors.details}
      />
      <Button type="submit">Add Review</Button>
    </form>
  );
};
