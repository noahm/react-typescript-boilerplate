import { Component } from 'react';
import * as React from 'react';
import './App.scss';

export class App extends Component<React.Props<App>, void> {
    render() {
        return <div id="App">
            <h1>Hello world!</h1>
            {this.props.children}
        </div>;
    }
}
