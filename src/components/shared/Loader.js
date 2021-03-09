import React from "react";
import heartLoader from "assets/images/heartLoader.svg";

const Loader = (props) => {
  if (props.loading) {
    return (
      <div className="showLoader d-flex flex-column justify-content-center align-items-center">
        <img style={{ width: "100px" }} src={heartLoader} />
      </div>
    );
  }

  return <div className="noLoader"></div>;
};

export default Loader;
