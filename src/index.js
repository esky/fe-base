import React from 'react';
import { render } from 'react-dom';
import Module from './module';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <h1>fego大前端</h1>
    <Module />
  </div>
);

render(<App />, document.getElementById('root'));
