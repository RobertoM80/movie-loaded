import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/Overlay.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeOverlay } from '../../config/actions/overlayActions';
import Close from '../../assets/images/close.png';

class Overlay extends Component {

    componentWillMount() {
        this.overlayContainer = document.createElement('div');
        this.overlayContainer.className = 'overlay-container d-flex justify-content-center align-items-center';
        this.overlayContainer.addEventListener('click', (e) => {
            this.shouldOverlayClose(e);
        });
        document.body.appendChild(this.overlayContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.overlayContainer);
    }

    shouldOverlayClose(e) {
        if (e.target.className.indexOf('overlay-container') > -1) this.props.closeOverlay();
    }

    render() {
        return ReactDOM.createPortal(
            <div className={ 'overlay animated ' + this.props.wichAnimation }>
                <div className="card-header">
                    <span onClick={ (e) => this.props.closeOverlay() } className="float-right">
                        <img src={ Close } alt="close button" className="img-fluid cose-btn" />
                    </span>
                </div>
                <div className="card-body">
                    { this.props.children }
                </div>
            </div>,
            this.overlayContainer
        );
    }
}

Overlay.propTypes = {
    closeOverlay: PropTypes.func.isRequired,
    wichAnimation: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        wichAnimation: state.overlay.wichAnimation
    }
}

export default connect(mapStateToProps, { closeOverlay })(Overlay);
