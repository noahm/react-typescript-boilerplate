import { Component } from 'react';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

@hot(module)
export class App extends Component<{}> {
    render() {
        return <div id="App">
            <h1>Hello world!</h1>
            {this.props.children}
        </div>;
    }
}
