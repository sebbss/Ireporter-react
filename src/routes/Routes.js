import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import LoginView from '../containers/loginContainer';
import NavBar from '../components/common/navBar';
import SignupView from '../containers/signupContainer';
import redFlagView from '../containers/redFlagContainer';
import SignOut from '../components/common/signOut';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={SignupView} />
            <Route path="/login" component={LoginView} />
            <Route path="/logout" component={SignOut} />
            <Route path="/redflags" component={redFlagView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
