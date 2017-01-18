import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { initGlobals } from './globals';
initGlobals();

import { Root } from './components/Root';

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<Root />, div);
