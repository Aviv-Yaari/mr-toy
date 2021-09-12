import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Button, Container, Typography } from '@material-ui/core';
import '../css/about.css';

const BranchMarker = ({ name }) => (
  <div className="branch-marker">
    <span>{name} Branch</span>
  </div>
);

export class About extends Component {
  branches = [
    {
      name: 'Tel Aviv',
      lat: 32.0853,
      lng: 34.7818,
    },
    {
      name: 'Beirut',
      lat: 33.8938,
      lng: 35.5018,
    },
    {
      name: 'Cairo',
      lat: 30.0444,
      lng: 31.2357,
    },
  ];

  state = {
    currBranch: this.branches[0],
  };

  render() {
    const { name, lat, lng } = this.state.currBranch;
    return (
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          We are proud to be announced as the best toy store in the middle east for the third year
          in a row.
        </Typography>
        <Typography variant="h5" gutterBottom align="center" style={{ marginTop: '40px' }}>
          Our Branches
        </Typography>
        <section className="branches flex justify-center" style={{ marginBottom: '40px' }}>
          {this.branches.map(branch => (
            <Button key={branch.name} onClick={() => this.setState({ currBranch: branch })}>
              {branch.name}
            </Button>
          ))}
        </section>
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: '' }} center={{ lat, lng }} defaultZoom={7}>
            {this.branches.map(branch => (
              <BranchMarker
                key={branch.name}
                lat={branch.lat}
                lng={branch.lng}
                name={branch.name}
              />
            ))}
          </GoogleMapReact>
        </div>
      </Container>
    );
  }
}
