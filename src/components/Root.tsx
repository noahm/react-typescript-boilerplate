import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from '../globals';
import { App } from './App';

export class Root extends React.Component<{}, void> {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                    </Route>
                </Router>
            </Provider>
        );
    }
}
