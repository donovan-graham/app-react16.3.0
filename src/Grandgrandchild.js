import React from 'react';
import Theme from './Context';

const Grandgrandchild = () => (
  <Theme.Consumer>
    {({theme, toggleTheme}) => (
      <div id="grandgrandchild">
        <span>Grandgrandchild</span>
        <br />
        <br />
        Theme: <b>{theme}</b>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    )}
  </Theme.Consumer>
);

export default Grandgrandchild;
