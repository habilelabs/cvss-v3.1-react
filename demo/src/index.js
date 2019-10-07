import React from 'react';
import { render } from 'react-dom';
import CvssV3 from '../../src/CvssV3.jsx';
const severityVector = "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:L";
let readOnly = true;
render(
  <div>
    <h2>React CVSS V3.1 Demo</h2>
    <CvssV3 severityVector={severityVector} readOnly={readOnly} onChange={(data)=>{
        console.log('data-----------', data);
    }}/>
  </div>, 
  document.getElementById('app')
);