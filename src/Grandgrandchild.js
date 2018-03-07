// @flow
import React from 'react';
import type { Node } from 'react';

import { Theme } from './Context';

const Grandgrandchild = () => (
  <Theme.Consumer>
    {(theme: string) => (
      <div id="grandgrandchild">
        <span>Grandgrandchild</span>
        <br />
        <br />
        Theme: <b>{theme}</b>
      </div>
    )}
  </Theme.Consumer>
);

export default Grandgrandchild;
