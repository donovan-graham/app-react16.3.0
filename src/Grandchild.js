import React from 'react';
import Grandgrandchild from './Grandgrandchild';

const Grandchild = () => (
  <div id="grandchild">
    <span>Grandchild</span>
    <br />
    <br />
    <Grandgrandchild />
  </div>
);

export default Grandchild;
