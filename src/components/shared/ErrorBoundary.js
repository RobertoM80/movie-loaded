import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: '',
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState(state => ({ ...state, hasError: true }));
    }

    render() {
        if (this.state.hasError) {
            return <div>Sorry, something wasn't quite right in { this.state.place }! </div>;
        } else {
            return this.props.children;
        }
    }
}

ErrorBoundary.propTypes = {
    place: PropTypes.string.isRequired
}

export default ErrorBoundary;