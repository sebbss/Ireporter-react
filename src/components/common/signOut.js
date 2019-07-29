import React, { Component } from 'react';

export class signOut extends Component {
  render() {
    sessionStorage.clear();
    return (
      window.location.replace('/login')
    );
  }
}

export default signOut;
