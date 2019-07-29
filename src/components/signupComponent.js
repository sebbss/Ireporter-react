/* eslint-disable  jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
} from 'mdbreact';

const SigninForm = ({
  username,
  password,
  email,
  onChange,
  onSubmit,
}) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol className="container fls" md="4">
        <form onSubmit={onSubmit}>
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
          </label>
          <input
            type="email"
            name="email"
            id="defaultFormLoginEmailEx"
            required
            className="form-control"
            value={email}
            onChange={onChange}
          />
          <br />
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your username
          </label>
          <input
            type="username"
            name="username"
            id="defaultFormLoginEmailEx2"
            required
            className="form-control"
            value={username}
            onChange={onChange}
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            required
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
          />
          <div className="text-center mt-4">
            <MDBBtn color="indigo" type="submit">Sign Up</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);
SigninForm.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SigninForm;
