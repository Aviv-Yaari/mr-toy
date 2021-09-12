import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Button, Container, MenuItem, TextField, Typography } from '@material-ui/core';
import * as yup from 'yup';
import { Formik } from 'formik';

import { addToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import '../css/toy-add.css';
import { toyService } from '../services/toy.service';

class _ToyAdd extends Component {
  state = { form: { labels: [] } };
  async componentDidMount() {
    const allLabels = (await toyService.getLabels()).map(label => ({ label, value: label }));
    this.setState({ allLabels });
  }

  formSettings = () => {
    this.validationSchema = yup.object({
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

    this.initialValues = {
      name: 'The cool doll',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere iusto sapiente ad, est animi quidem ex numquam? Quis quibusdam ratione qui provident sequi quasi voluptate, velit commodi illo minima?',
      price: 150,
      inStock: true,
      labels: [],
    };
  };

  handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    this.setState(prevState => ({ form: { ...prevState.form, labels } }));
  };

  onAddToy = async values => {
    const toy = { ...values, labels: this.state.form.labels };
    this.props.showUserMsg('Adding..');
    await this.props.addToy(toy);
    this.props.showUserMsg('Toy Added');
    setTimeout(() => this.props.history.push('/toy'), 500); // simulate delay
  };

  render() {
    const { allLabels } = this.state;
    this.formSettings();
    return (
      <>
        <Container className="toy-add" maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Add Toy
          </Typography>
          <Formik
            initialValues={this.initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.onAddToy}>
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Toy Name"
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  name="name"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Toy Description"
                  multiline
                  value={values.description}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  name="description"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Price"
                  type="number"
                  value={values.price}
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  name="price"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  label="Availability"
                  value={values.inStock}
                  error={touched.inStock && Boolean(errors.inStock)}
                  helperText={touched.inStock && errors.inStock}
                  name="inStock"
                  onChange={handleChange}>
                  <MenuItem value={true}>In stock</MenuItem>
                  <MenuItem value={false}>Out of stock</MenuItem>
                </TextField>
                <div className="labels">
                  {allLabels && (
                    <Select
                      placeholder="Labels"
                      options={allLabels}
                      isMulti
                      onChange={this.handleLabelChange}
                    />
                  )}
                </div>
                <Button type="submit">Add Toy</Button>
              </form>
            )}
          </Formik>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { toys } = state.toyModule;
  return { toys };
};

const mapDispatchToProps = {
  addToy,
  showUserMsg,
};

export const ToyAdd = connect(mapStateToProps, mapDispatchToProps)(_ToyAdd);
