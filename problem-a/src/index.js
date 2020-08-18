import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import {App} from './App';
import Senators from './senators.json';

console.log(Senators);
let appElem = <App senators={Senators} />;
ReactDOM.render(appElem, document.getElementById('root'));
