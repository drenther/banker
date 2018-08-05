import React from 'react';

const Indicator = ({ flag }) => (
  <div className=".flag">{!flag ? 'Connecting....' : 'Connected'}</div>
);

export default Indicator;
