// @flow
import React from 'react';
import Grandchild from './Grandchild';

const Child = () => (
  <div id="child">
    <span>Child</span>
    <br />
    <br />
    <Grandchild />
  </div>
);

export default Child;
