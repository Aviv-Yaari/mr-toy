import { Button, IconButton, MenuItem, TextField, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select';
import { toyService } from '../services/toy.service';
import axios from 'axios';
import { useState } from 'react';

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

// Actual Component:

export const ToyAddEditForm = props => {
  const { isEdit, initialValues } = props;
  const [img, setImg] = useState(initialValues.img);

  const onUploadImg = async ev => {
    const CLOUD_NAME = 'avivyaari';
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const UPLOAD_PRESET = 'k9e87w7t';
    const formData = new FormData();
    formData.append('file', ev.target.files[0]);
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
      const res = await axios.post(UPLOAD_URL, formData);
      setImg(res.data.url);
    } catch (err) {
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: data => props.onSubmit({ ...data, img }),
    validationSchema,
  });

  const getFormikProps = field => {
    return {
      value: formik.values[field],
      error: formik.touched[field] && Boolean(formik.errors[field]),
      helperText: formik.touched[field] && formik.errors[field],
      onChange: formik.handleChange,
    };
  };

  const handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    formik.setFieldValue('labels', labels);
  };

  return (
    <div className="toy-add-edit">
      <div className="toy-img flex align-center justify-center">
        {img && <img alt="toy" src={img} />}
        <IconButton className="btn-upload">
          <PublishIcon />
          <input onChange={onUploadImg} type="file" />
        </IconButton>
      </div>
      <form className="toy-add container" onSubmit={formik.handleSubmit}>
        <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
          {isEdit ? 'Edit Toy' : 'Add Toy'}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Toy Name"
          name="name"
          {...getFormikProps('name')}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Toy Description"
          name="description"
          multiline
          {...getFormikProps('description')}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Price"
          name="price"
          type="number"
          {...getFormikProps('price')}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Availability"
          name="inStock"
          select
          {...getFormikProps('inStock')}>
          <MenuItem value={true}>In stock</MenuItem>
          <MenuItem value={false}>Out of stock</MenuItem>
        </TextField>
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
    </div>
  );
};
