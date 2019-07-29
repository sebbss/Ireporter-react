import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginComponent';
import loginAction from '../actions/loginAction';


export class LoginView extends Component {
    state = {
      data: {
        username: '',
        password: '',
      },
    };

    componentWillMount() {
      if (sessionStorage.getItem('token')) {
        const { history } = this.props;
        history.push('/redflags');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loginState.loggedIn) {
        const { history } = this.props;
        history.push('/redflags');
      }
    }

    handleOnChange = (e) => {
      const { data } = this.state;
      const newData = {
        ...data,
        [e.target.name]: e.target.value,
      };
      this.setState({
        data: newData,
      });
    }

     handleOnSubmit = (e) => {
       e.preventDefault();
       const { login } = this.props;
       const { data: { username, password } } = this.state;
       const formData = {
         username,
         password,
       };
       login(formData);
     }

     render() {
       const { data: { username, password } } = this.state;
       return (
         <div className="signin">
           <LoginForm
             username={username}
             password={password}
             onChange={this.handleOnChange}
             onSubmit={this.handleOnSubmit}
           />
         </div>
       );
     }
}
export const mapStateToProps = state => ({
  loginState: state.loginReducer,
});
LoginView.propTypes = {
  history: PropTypes.shape().isRequired,
  loginState: PropTypes.shape().isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login: loginAction })(LoginView);
