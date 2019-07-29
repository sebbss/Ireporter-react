import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NavBar extends Component {
  state ={
    loggedIn: false,
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps;
    if (loggedIn) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
          <a className="navbar-brand" href="/">iReporter</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            {loggedIn || sessionStorage.getItem('token')
              ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/redflags">
Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">
Signout
                    </a>
                  </li>
                </ul>
              )
              : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
Signup
                    </a>
                  </li>
                </ul>
              )
}

          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
});
export default connect(mapStateToProps)(NavBar);
