#CVSSV3.1 React

CVSS (Common Vulnerability Scoring System) Calculator

<a href="http://cvssjs.github.io/cvssjs">Standalone Calculator</a>

CVSSjs Version 0.9.1 beta

Usage:
    // set a vector
    c.set('CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:C/C:N/I:N/A:L');
    
    // it is also backwards compatible with CVSS v2 vectors, 
    // buts only sets the parameters that can be set without ambiguity.
    c.set('AV:L/AC:L/Au:N/C:P/I:P/A:C');
    
    //get the value
    c.get() returns an object like:
      {
        score: 4.3,
        vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:C/C:N/I:N/A:L'
      }


Copyright (c) 2015-2019, Shankar Morwal.

Copyright (c) 2019, Habilelabs.io
