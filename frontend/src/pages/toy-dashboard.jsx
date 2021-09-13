import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { loadToys } from '../store/actions/toy.actions';
import { toyService } from '../services/toy.service';
import { utilService } from '../services/util.service';

class _ToyDashboard extends Component {
  state = { labelChartData: null, yearChartData: null };

  async componentDidMount() {
    await this.props.loadToys();
    const { toys } = this.props;
    const labelChartData = this.createChartData(toyService.getToysLabelMap(toys));
    const yearChartData = this.createChartData(toyService.getToysYearMap(toys));
    this.setState({ labelChartData, yearChartData });
  }

  createChartData = map => {
    const chartData = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
    for (const key in map) {
      const data = map[key];
      chartData.labels.push(key);
      chartData.datasets[0].data.push(data);
      chartData.datasets[0].backgroundColor.push(utilService.getRandomColor());
    }
    return chartData;
  };

  render() {
    const { labelChartData, yearChartData } = this.state;
    return (
      <main className="toy-dashboard container">
        <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
          Dashboard
        </Typography>
        <div className="charts-container flex wrap">
          <section className="chart">
            <Typography variant="h5" gutterBottom align="center">
              Toy Labels
            </Typography>
            <Pie data={labelChartData} />
          </section>
          <section className="chart">
            <Typography variant="h5" gutterBottom align="center">
              Toy Years
            </Typography>
            <Pie data={yearChartData} />
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { toys } = state.toyModule;
  return { toys };
};

const mapDispatchToProps = {
  loadToys,
};

export const ToyDashboard = connect(mapStateToProps, mapDispatchToProps)(_ToyDashboard);
