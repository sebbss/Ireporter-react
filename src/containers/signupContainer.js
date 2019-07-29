import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../components/signupComponent';
import signupAction from '../actions/signupAction';


export class SignupView extends Component {
    state = {
      data: {
        email: '',
        username: '',
        password: '',
      },
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.signUpState.signIn) {
        const { history } = this.props;
        history.push('/login');
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
       const { signup } = this.props;
       const {
         data: {
           email, username, password,
         },
       } = this.state;
       const formData = {
         firstname: 'anonymus',
         lastname: 'anonymus',
         isAdmin: 'False',
         phoneNumber: '0779556964',
         email,
         username,
         password,
       };
       signup(formData);
     }

     render() {
       const {
         data: {
           username, password, email,
         },
       } = this.state;
       return (
         <div className="signup">
           <SignupForm
             username={username}
             password={password}
             onChange={this.handleOnChange}
             onSubmit={this.handleOnSubmit}
             email={email}
           />
         </div>
       );
     }
}
export const mapStateToProps = state => ({
  signUpState: state.loginReducer,
});
SignupView.propTypes = {
  history: PropTypes.shape().isRequired,
  signUpState: PropTypes.shape().isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signup: signupAction })(SignupView);
