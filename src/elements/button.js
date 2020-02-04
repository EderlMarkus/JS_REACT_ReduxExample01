import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class MyButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          variant="outline-primary"
          style={this.props.style}
          onClick={this.props.onClickFunction}
        >
          {this.props.textValue}
        </Button>
      </React.Fragment>
    );
  }
}
