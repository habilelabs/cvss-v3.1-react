import React from 'react';
import { render } from 'react-dom';
import CvssV3 from 'cvss-v3.1-react';
render(
  <div>
    <h2>React CVSS V3.1 Demo</h2>
    <CvssV3 onChange={(data)=>{
        console.log('data-----------', data);
    }}/>
  </div>, 
  document.getElementById('app')
);