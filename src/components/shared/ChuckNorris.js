import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_chuck } from '../../config/actions/chuckActions';

class ChuckNorris extends Component {
    componentDidMount() {
        this.props.fetch_chuck();
    }

    render() {
        return (
            <div className="chuck__container">
                <div className="chuck__header d-flex justify-content-between align-items-center mb-3">
                    <h2>Chuck Norris Rules</h2>
                    <img className="" src={ this.props.chuck_image } alt="chuck icon" />
                </div>
                <div className="chuck__body">
                    <p className="text-justify">{ this.props.chuck_body }</p>
                </div>
            </div>
        );
    }
}

const mapStateToProp = state => {
    console.log(state);

    return {
        chuck_body: state.chuckNorris.value,
        chuck_image: state.chuckNorris.image
    }
}

export default connect(mapStateToProp, { fetch_chuck })(ChuckNorris);