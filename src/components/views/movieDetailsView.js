import React, { Component } from 'react';
import PropTypes from 'prop-types';

class movieDetailsView extends Component {
    render() {
        return (
            <div>
                { this.props.match.params.id }
            </div>
        );
    }
}

movieDetailsView.propTypes = {

};

export default movieDetailsView;