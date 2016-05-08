// var name = require('./name');
// require('./style.css');
// document.getElementById('app').textContent = 'hello ~' + name;

// import name from './name';
//
// let input = document.createElement('input');
// document.getElementById('app').textContent =  'hello ~' + name;
// document.getElementById('app').appendChild(input);

'use strict';

require('./style.css');
import React from "react";
import ReactDOM from 'react-dom';
import Name from "./name";

 ReactDOM.render(
     <Name />,
     document.getElementById('app')
 )
