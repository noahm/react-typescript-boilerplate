import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { initGlobals } from './globals';
initGlobals();

import { Root } from './components/Root';

const div = document.createElement('div');
document.body.appendChild(div);
const render = (R: React.ComponentClass<any>) => {
  ReactDOM.render(<AppContainer><R /></AppContainer>, div);
};

render(Root);

declare var module: any;
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root);
  });
}
