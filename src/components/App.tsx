import { Component } from 'react';
import * as React from 'react';

export class App extends Component<React.Props<App>, void> {
    render() {
        return <div>
            <h1>Hello world!</h1>
            {this.props.children}
        </div>;
    }
}
