import React, { Component } from 'react';
import UserInput from '../elements/userInput';

class Container2 extends Component {
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

  render() {
    const user_text1 = 'lorem';
    const user_text2 = 'ipsum';
    const user_text3 = 'lorem ipsum';

    const button_text = 'Change State to ';

    return (
      <div style={this.style}>
        <h3>Container2</h3>
        <p>In this Container you can set the Global State manually.</p>
        <UserInput></UserInput>
      </div>
    );
  }
}

export default Container2;
