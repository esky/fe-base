import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Module from './module';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <Module />
  </div>
);

render(<App />, document.getElementById('root'));
