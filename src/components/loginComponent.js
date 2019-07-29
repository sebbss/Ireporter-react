/* eslint-disable  jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
} from 'mdbreact';

const loginForm = ({
  username,
  password,
  onChange,
  onSubmit,
}) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol className="container fls" md="4">
        <form onSubmit={onSubmit}>
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your username
          </label>
          <input
            type="username"
            name="username"
            id="defaultFormLoginEmailEx"
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
            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default loginForm;
