import React from 'react';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
// import {parse, format, isToday} from 'date-fns/esm' <-- upcoming release v2.0.0

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
    const date = '2018-03-08T00:30:30' || new Date();
    const dateStr = format(date, 'DD MMM YYYY');
    const todayStr = isToday(date) ? 'Today' : 'Not today';

    return (
      <Theme.Provider value={this.state.theme}>
        <span>
          {dateStr} ? {todayStr}
        </span>
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
