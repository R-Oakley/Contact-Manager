import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    //! Lifecycle methods

    // After its Loaded, where Ajax would normally go
    componentDidMount() {
        // console.log('ComponentDidMount...');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    title: data.title,
                    body: data.body
                })
            );
    }
    // Before its loaded - Being Deprecated
    // componentWillMount() {
    //     console.log('ComponentWillMount...');
    // }
    // When its updated IE The state has changed
    // componentDidUpdate() {
    //     console.log('ComponentDidUpdate...');
    // }

    // Being Deprecated
    // componentWillUpdate() {
    //     console.log('ComponentWillUpdate...');
    // }

    // Used with redux - Being Deprecated
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('ComponentWillReceiveProps...');
    // }

    // return a state or null
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapShotBeforeUpdate...');
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
