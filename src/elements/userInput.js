import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';

class UserInput extends Component {
  style = { width: '94%', textAlign: 'center', margin: '0 auto 3% auto' };

  handleChange(event) {
    let fleldVal = event.target.value;
    this.props.action(fleldVal);
  }

  render() {
    return (
      <div style={this.style}>
        <InputGroup>
          <InputGroup.Prepend></InputGroup.Prepend>
          <FormControl
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.currentState}
            value={this.props.currentState}
          />
        </InputGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentState: state.user_reducer.user_input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: text => dispatch(ACTIONS.user_input(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
