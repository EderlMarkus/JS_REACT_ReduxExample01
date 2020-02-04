import React from 'react';

import Container1 from './containers/container1';
import Container2 from './containers/container2';
import Container3 from './containers/container3';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h3>Redux Example</h3>
      <p>Each of these 3 Containers is a seperate React-Class-Component.</p>
      <p>The State is being passed between those Components by Redux.</p>

      <Container1></Container1>
      <Container2></Container2>
      <Container3></Container3>
    </div>
  );
}

export default App;
