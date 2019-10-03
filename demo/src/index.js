import React from 'react';
import { render } from 'react-dom';

import CvssV3 from 'cvss-v3.1-react';

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <CvssV3/>
  </div>, 
  document.getElementById('app')
);