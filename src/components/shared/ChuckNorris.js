import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_chuck } from "../../config/actions/chuckActions";

function ChuckNorris() {
  const chuck_body = useSelector((state) => state.chuckNorris.value);
  const chuck_image = useSelector((state) => state.chuckNorris.image);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_chuck());
  }, []);

  return (
    <div className="chuck__container">
      <div className="chuck__header d-flex justify-content-between align-items-center mb-3">
        <h2>Chuck Norris Rules</h2>
        <img className="" src={this.props.chuck_image} alt="chuck icon" />
      </div>
      <div className="chuck__body">
        <p className="text-justify">{this.props.chuck_body}</p>
      </div>
    </div>
  );
}

export default ChuckNorris;
