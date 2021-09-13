import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, MenuItem, TextField, Typography } from '@material-ui/core';
import * as yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';

import { toyService } from '../services/toy.service';
import { getToyById, addToy, updateToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';

class _ToyAddEdit extends Component {
  initialState = {
    isEdit: false,
    allLabels: [],
    formInit: {
      name: 'The cool doll',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere iusto sapiente ad, est animi quidem ex numquam? Quis quibusdam ratione qui provident sequi quasi voluptate, velit commodi illo minima?',
      price: 150,
      inStock: true,
    },
    labels: [],
  };
  state = this.initialState;

  componentDidMount() {
    this.loadPageData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.path !== prevProps.match.path) this.loadPageData();
  }

  loadPageData = async () => {
    const { path } = this.props.match;
    this.loadLabels();
    if (path.includes('/edit')) {
      this.loadToy();
      this.setState({ isEdit: true }, this.formSettings());
    } else {
      this.setState(this.initialState, this.formSettings());
    }
  };

  loadToy = async () => {
    const { id } = this.props.match.params;
    await this.props.getToyById(id);
    const { name, description, price, inStock, labels } = this.props.toys[0];
    this.setState({ formInit: { name, description, price, inStock }, labels });
  };

  loadLabels = async () => {
    const allLabels = (await toyService.getLabels()).map(label => ({ label, value: label }));
    this.setState({ allLabels });
  };

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
  };

  handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    this.setState({ labels });
  };

  onAddToy = async values => {
    const { labels } = this.state;
    const toy = { ...values, labels };
    this.props.showUserMsg('Adding..');
    await this.props.addToy(toy);
    this.props.showUserMsg('Toy Added');
    setTimeout(() => this.props.history.push('/toy'), 500); // simulate delay
  };

  onSaveChanges = async values => {
    const { labels } = this.state;
    let toy = this.props.toys[0];
    toy = { ...toy, ...values, labels };
    this.props.showUserMsg('Updating..');
    await this.props.updateToy(toy);
    this.props.showUserMsg('Toy details updated');
    setTimeout(() => this.props.history.push(`/toy/${toy._id}`), 500); // simulate delay
  };

  onSubmit = values => {
    this.state.isEdit ? this.onSaveChanges(values) : this.onAddToy(values);
  };

  render() {
    const { allLabels, isEdit, labels } = this.state;
    return (
      <>
        <main className="toy-add container">
          <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
            {isEdit ? 'Edit Toy' : 'Add Toy'}
          </Typography>
          <Formik
            enableReinitialize
            initialValues={this.state.formInit}
            validationSchema={this.validationSchema}
            onSubmit={this.onSubmit}>
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
                  {allLabels && labels.length ? (
                    <Select
                      placeholder="Labels"
                      options={allLabels}
                      isMulti
                      onChange={this.handleLabelChange}
                      defaultValue={labels.map(label => ({ label, value: label }))}
                    />
                  ) : (
                    <React.Fragment />
                  )}
                  {allLabels && !labels.length && (
                    <Select
                      placeholder="Labels"
                      options={allLabels}
                      isMulti
                      onChange={this.handleLabelChange}
                    />
                  )}
                </div>
                <Button type="submit">{isEdit ? 'Edit Toy' : 'Add Toy'}</Button>
              </form>
            )}
          </Formik>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { toys } = state.toyModule;
  return { toys };
};

const mapDispatchToProps = {
  getToyById,
  addToy,
  updateToy,
  showUserMsg,
};

export const ToyAddEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyAddEdit);
