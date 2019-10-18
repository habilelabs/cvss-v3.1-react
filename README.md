![React CVSS Calculator](https://raw.githubusercontent.com/habilelabs/cvss-v3.1-react/master/cvss-calculator.jpg)


## CVSS Calculator

The CVSS (Common Vulnerability Scoring System) is an open framework that calculates the severity of software vulnerabilities in the form of a numerical value (called Base Score), ranging from 0 to 10. 
The score value reflects whether the vulnerabilities present in the software are low, medium, high or critical in nature. 

## CVSS Calculator: Introduction

What we are providing here is the npm package of the CVSS calculator which was not available before. 
There were no plugin available for this calculator in react js so we have created this plugin for reactjs users. 
<a href="https://habilelabs.github.io/cvss-v3.1-react/demo/dist/">
    CVSS V3.1 Standalone Calculator Demo
</a>

This calculator directly calculates the severity level of the vulnerabilities by determining the base score. Let’s check out the procedure below-

## Installation

The very first step is to install the npm package with the following command on the Command Prompt-

```sh
npm install cvss-v3.1-react
```

## Usage:

1 . After installation, you need to import cvss-v3.1-react-

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

3 . By default, styles are listed below. You can customize the styles based on your requirements. You can pass styles prop to override these styles. You need to pass on onChange prop to get the selected severity string.
 

    
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


## Base Matrix Group/ Base Parameters
The base score will be calculated by the CVSS calculator based upon the eight metrics, or you can say Base Parameters, that are as follows- 
####Attack Vector (AV) 
This metric evaluates the context by which the vulnerability can be exploited. More remote the attacker is, the larger will be the base score. Instead of writing the whole string, you can just select the metric value from the available options i.e. Network<Value 0.85>, Adjacent <Value 0.62>, Local <Value 0.55> and Physical <Value 0.2>. 
####Attack Complexity (AC)
 This metric reflects how complex/easy it is to exploit the vulnerability i.e. the base score will be greatest for the least complex attacks. You need to select one of the values from ‘Low’ <Value 0.77> and ‘High’ <Value 0.44>.
####Privileges Required (PR)
 It determines the privilege level the attacker must possess for successful exploitation of the vulnerability. The base score will be highest in case of no privileges. The possible values are None <Value 0.85>, Low <Value 0.62> and High <Value 0.27>.
####User Interaction (UI)
It describes whether a vulnerability can be exploited without the participation of a separate user or not. The values it contains are: None <Value 0.85> and Required <Value 0.62>. 
####Scope (S)
It captures whether a vulnerability has any impact upon the components beyond its security scope. The base score is lowest when no change occurs. There are two values basically i.e. Changed and Unchanged.   
####Impact Metrics
The impact metrics i.e. Confidentiality (C), Availability (A) and Integrity (I) determine the impact level of the exploited vulnerability on the component. The final impact is defined by the combined effect of all the three metrics together. The values for the impact metrics are as follows: High <Value 0.56>, Low <Value 0.22> and None <Value 0>.

####How to Calculate the Base Score??
The ISS (Impact Sub Score) is defined as-
<ISS= 1- [(1-C) *(1-I) *(1-A)]>
Where, C= Confidentiality, I= Integrity and A= Availability.
Impact can be determined as-
* If Scope is Changed, Impact= [7.52 *(ISS-0.029)- 3.25 *[(ISS-0.02) ^15]]
* If Scope is Unchanged, Impact= [6.45 *ISS]
The Base Score is defined as-
* If ISS <=0, the Base Score will be 0.

Else,

* Score Unchanged= <Roundup (Minimum [(Impact + Exploitability), 10)]>
* Score Unchanged= <Roundup (Minimum [1.08 *(Impact + Exploitability), 10)]>

## CVSS Score
The final CVSS Base Score range and ratings has been mentioned below:
* None: <0>
* Low: <0.1 to 3.9>
* Medium: <4 to 6.9>
* High: <7 to 8.9>
* Critical: <9 to 10>


Copyright (c) 2015-2019, Shankar Morwal.

Copyright (c) 2019, <a href="http://habilelabs.io">
                        Habilelabs Private limited 
                    </a>
