import React, { Component } from 'react';
import * as ACTION_TYPES from '../store/actions/actions_type';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';
import MyButton from '../elements/button';

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReduxState: false
    };
  }

  toggleState() {
    this.setState({ showReduxState: !this.state.showReduxState });
  }

  style = {
    border: 'solid 1px #41E0FD',
    width: '98%',
    margin: '2% auto 2% auto'
  };

  buttonStyle = {
    margin: '2%'
  };

  render() {
    const user_text1 = 'lorem';
    const user_text2 = 'ipsum';
    const user_text3 = 'lorem ipsum';

    const button_text = 'Change State to ';

    return (
      <div style={this.style}>
        <h3>Container1</h3>
        <p>This Container changes the Global State with Buttons</p>
        <MyButton
          onClickFunction={() => this.toggleState()}
          textValue={
            this.state.showReduxState
              ? 'Hide Current State'
              : 'Show Current State'
          }
          style={this.buttonStyle}
        ></MyButton>

        <MyButton
          onClickFunction={() => this.props.action(user_text1)}
          textValue={button_text + user_text1}
          style={this.buttonStyle}
        ></MyButton>

        <MyButton
          onClickFunction={() => this.props.action(user_text2)}
          textValue={button_text + user_text2}
          style={this.buttonStyle}
        ></MyButton>

        <MyButton
          onClickFunction={() => this.props.action(user_text3)}
          textValue={button_text + user_text3}
          style={this.buttonStyle}
        ></MyButton>

        <p>
          {this.state.showReduxState
            ? 'The current State is: ' + this.props.state1
            : null}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state1: state.user_reducer.user_input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: text => dispatch(ACTIONS.user_input(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
