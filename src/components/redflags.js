import React from 'react';
import {
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,
} from 'mdbreact';

const RedFlag = ({
  flagType, description,
}) => (
  <MDBCol className="col-md-3 rfcard">
    <MDBCard>
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
      <MDBCardBody>
        <MDBCardTitle>{flagType}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <MDBBtn>ReadMore</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
);

export default RedFlag;
