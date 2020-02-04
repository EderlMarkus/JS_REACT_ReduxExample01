import React, { Component } from 'react';
import * as ACTION_TYPES from '../store/actions/actions_type';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class Container3 extends Component {
  style = {
    border: 'solid 1px #41E0FD',
    width: '98%',
    margin: 'auto'
  };

  render() {
    return (
      <div style={this.style}>
        <h3>Container3</h3>
        <p>This is a seperate Container that reads from the Global State</p>

        <p>The current State is: {this.props.user_input}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state1: state.state1,
    user_input: state.user_reducer.user_input
  };
}

export default connect(mapStateToProps)(Container3);
