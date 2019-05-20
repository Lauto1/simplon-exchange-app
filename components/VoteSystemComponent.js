import React, { Component } from 'react';
export default class VoteSystemComponent extends Component {
    constructor(props) {
        super(props);
        this.state({
            isConnected:false
        });
    }
    render() {
        return (
            <Provider store={store}>
                {this.state.isConnecte}
            </Provider>
        );
    }
}