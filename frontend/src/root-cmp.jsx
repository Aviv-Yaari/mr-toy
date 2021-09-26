import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppHeader } from './cmps/app-header';
import { UserMsg } from './cmps/user-msg';
import { hideUserMsg } from './store/actions/general.actions';
import { showUserMsg } from './store/actions/general.actions';
import { loadUserFromStorage, logout } from './store/actions/user.actions';
import { ToyApp } from './pages/toy-app';
import { ToyDetails } from './pages/toy-details';
import { ToyDashboard } from './pages/toy-dashboard';
import { About } from './pages/about';
import './styles/styles.scss';
import { SignUp } from './pages/sign-up';
import { LogIn } from './pages/login';
import { ToyAdd } from './pages/toy-add';
import { ToyEdit } from './pages/toy-edit';
import { UserDetails } from './pages/user-details';
import { ReviewExplore } from './pages/review-explore';
import { socketService } from './services/socket.service';

export class _RootCmp extends Component {
  async componentDidMount() {
    await this.props.loadUserFromStorage();
  }

  componentWillUnmount() {
    socketService.terminate();
  }

  onLogout = () => {
    this.props.logout();
    this.props.showUserMsg('Logged out');

    window.location.href = '/toy';
  };

  render() {
    const { userMsg, hideUserMsg } = this.props;
    return (
      <main className="main-container">
        <Router>
          <UserMsg userMsg={userMsg} hideUserMsg={hideUserMsg} />
          <AppHeader onLogout={this.onLogout} />
          <Switch>
            <Route path="/toy/about" component={About} />
            <Route path="/toy/dashboard" component={ToyDashboard} />
            <Route path="/toy/add" component={ToyAdd} />
            <Route path="/toy/:id/edit" component={ToyEdit} />
            <Route path="/toy/:id" component={ToyDetails} />
            <Route path="/toy" component={ToyApp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/review" component={ReviewExplore} />
          </Switch>
        </Router>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.userModule;
  const { userMsg } = state.generalModule;
  return { userMsg, user };
};

const mapDispatchToProps = {
  hideUserMsg,
  loadUserFromStorage,
  logout,
  showUserMsg,
};

export const RootCmp = connect(mapStateToProps, mapDispatchToProps)(_RootCmp);
