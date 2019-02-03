import React, { Component } from 'react';

class Test extends Component {
    state = {
        test: 'test'
    };

    //! Lifecycle methods

    // After its Loaded, where Ajax would normally go
    componentDidMount() {
        console.log('ComponentDidMount...');
    }
    // Before its loaded - Being Deprecated
    componentWillMount() {
        console.log('ComponentWillMount...');
    }
    // When its updated IE The state has changed
    componentDidUpdate() {
        console.log('ComponentDidUpdate...');
    }

    // Being Deprecated
    componentWillUpdate() {
        console.log('ComponentWillUpdate...');
    }

    // Used with redux - Being Deprecated
    componentWillReceiveProps(nextProps, nextState) {
        console.log('ComponentWillReceiveProps...');
    }

    // return a state or null
    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate...');
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export default Test;
