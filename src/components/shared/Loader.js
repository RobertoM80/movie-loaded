import React from 'react';
import heartLoader from '../../assets/images/heartLoader.svg';

const Loader = (props) => {
    if (props.loading) {
        return (
            <div className="showLoader d-flex flex-column justify-content-center"><img src={ heartLoader } /></div>
        )
    }

    return <div className="noLoader"></div>
};

export default Loader;


