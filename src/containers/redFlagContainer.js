import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RedFlag from '../components/redflags';
import redFlagAction from '../actions/redFlagActions';
import { Authenticated } from '../routes/authenticated';

export class RedFlagView extends Component {
    state = {
      payload: [],
    }

    componentWillMount() {
      const { flags } = this.props;
      flags();
    }

    componentWillReceiveProps(nextProps) {
      const { redFlags: { payload } } = nextProps;
      this.setState({
        payload,
      });
    }

    render() {
      const { payload } = this.state;
      return (
        <div className="row container-fluid p-2">
          { payload ? payload.map(redFlag => (
            <RedFlag
              flagType={redFlag.flag_type}
              description={redFlag.description}
            />
          )) : <p className="payload">No Red-flags </p>}
        </div>

      );
    }
}
export const mapStateToProps = state => ({
  redFlags: state.redFlagReducer,
});

RedFlagView.propTypes = {
  flags: PropTypes.func.isRequired,
  redFlags: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, { flags: redFlagAction })(Authenticated(RedFlagView));
