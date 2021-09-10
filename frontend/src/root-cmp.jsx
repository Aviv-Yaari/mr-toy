import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppHeader } from './cmps/app-header';
import { UserMsg } from './cmps/user-msg';
import { hideUserMsg } from './store/actions/general.actions';
import { ToyApp } from './pages/toy-app';
import { ToyDetails } from './pages/toy-details';
import { ToyEdit } from './pages/toy-edit';

export class _RootCmp extends Component {
  render() {
    const { userMsg, hideUserMsg } = this.props;
    return (
      <>
        <Router>
          <AppHeader />
          <UserMsg userMsg={userMsg} hideUserMsg={hideUserMsg} />
          <Switch>
            <Route path="/toy/:id/edit" component={ToyEdit} />
            <Route path="/toy/:id" component={ToyDetails} />
            <Route path="/" component={ToyApp} />
          </Switch>
        </Router>
      </>
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
