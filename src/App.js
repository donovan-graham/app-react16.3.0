import React from 'react';
import { Theme } from './Context';
import Child from './Child';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: Theme.defaultValue };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(state => ({
      theme: state.theme === 'dracula' ? 'monokai' : state.theme === 'monokai' ? Theme.defaultValue : 'dracula'
    }));
  }

  render() {
    // debugger;
    return (
      <Theme.Provider value={this.state.theme}>
        <span>App</span>
        <br />
        <button onClick={this.onClick}>Change Theme</button>
        <div id="parent">
          <span>Parent</span>
          <br />
          <br />
          <Child />
        </div>
      </Theme.Provider>
    );
  }
}

export default App;
