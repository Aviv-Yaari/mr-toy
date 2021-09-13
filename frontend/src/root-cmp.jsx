import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppHeader } from './cmps/app-header';
import { UserMsg } from './cmps/user-msg';
import { hideUserMsg } from './store/actions/general.actions';
import { ToyApp } from './pages/toy-app';
import { ToyDetails } from './pages/toy-details';
import { ToyDashboard } from './pages/toy-dashboard';
import { ToyAddEdit } from './pages/toy-add-edit';
import { About } from './pages/about';
import './styles/styles.scss';

export class _RootCmp extends Component {
  render() {
    const { userMsg, hideUserMsg } = this.props;
    return (
      <main className="main-container">
        <Router>
          <AppHeader />
          <UserMsg userMsg={userMsg} hideUserMsg={hideUserMsg} />
          <Switch>
            <Route path="/toy/about" component={About} />
            <Route path="/toy/dashboard" component={ToyDashboard} />
            <Route path="/toy/add" component={ToyAddEdit} />
            <Route path="/toy/:id/edit" component={ToyAddEdit} />
            <Route path="/toy/:id" component={ToyDetails} />
            <Route path="/" component={ToyApp} />
          </Switch>
        </Router>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { userMsg } = state.generalModule;
  return { userMsg };
};

const mapDispatchToProps = {
  hideUserMsg,
};

export const RootCmp = connect(mapStateToProps, mapDispatchToProps)(_RootCmp);
