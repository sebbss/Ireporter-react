import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/Routes';
import store from './store';

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ToastContainer />
          <Routes />
        </Provider>

      </div>
    );
  }
}

export default App;
