#CVSSV3.1 React

CVSS (Common Vulnerability Scoring System) Calculator in react js

<a href="https://habilelabs.github.io/cvss-v3.1-react/demo/dist/">
    CVSS V3.1 Standalone Calculator Demo
</a>

## Installation

```sh
npm install cvss-v3.1-react
```

## Usage:

**Using NPM**

1 . Require cvss-v3.1-react after installation

```js
import CvssV3 from 'cvss-v3.1-react'
```

2 . Include cvss-v3.1-react component


```js
const severityVector = "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:L";
//severityVector is optional variable. It can be used initialize the calculator. 
<CvssV3 severityVector={severityVector} onChange={(data)=>{
        console.log('data-----------', data);
}}/>
```

3 . By default styles are listed below. You can customize the styles based on your requirements. 
 You can pass styles prop to override these styles. You need to pass on onChange prop to get the selected severity string. 
 

    
    const defaultProps = {
        styles: {
            matricesTitle: {
                minWidth: 200,
                font: '400 16px Arial',
                marginRight: 15
            },
            matricesItem: {
                display: 'flex',
                alignItems: 'center',
                font: '400 13.3333px Arial'
            },
            severityBtn: {
                background: 'none',
                border: 'solid 1px #ccc',
                borderRadius: 3,
                padding: '0 20px',
                height: 36,
                marginRight: 15,
                cursor: 'pointer'
            },
            selected: {
                background: 'blue',
                color: 'white'
            },
            scoreTextColor: {
                color: 'blue'
            },
            scoreBar: {
                background: '#f7f8f9',
                padding: '1px 10px 15px'
            },
            None: {
                background: 'rgb(162, 213, 114)'
            },
            Low: {
                background: 'rgb(208, 212, 134)'
            },
            Medium: {
                background: 'rgb(250, 230, 120)'
            },
            High: {
                background: 'rgb(240, 170, 83)'
            },
            Critical: {
                background: 'rgb(240, 130, 120)'
            }
        }
    }

4 . To make it read only you can pass on optional prop readOnly=true. If you pass this then user will not be able to update the CVSS calculator. 


```js
const severityVector = "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:L";
const readOnly = true;
//severityVector is optional variable. It can be used initialize the calculator. 
<CvssV3 severityVector={severityVector} readOnly={readOnly} onChange={(data)=>{
        console.log('data-----------', data);
}}/>
```

Copyright (c) 2015-2019, Shankar Morwal.

Copyright (c) 2019, <a href="http://habilelabs.io">
                        Habilelabs Private limited 
                    </a>
