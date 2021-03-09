import ErrorBoundary from "components/shared/ErrorBoundary";
import ChuckNorris from "components/shared/ChuckNorris";

import "css/NewsView.css";

function NewsView() {
  return (
    <ErrorBoundary place="News">
      <div className="newsView newsView__container mt-2">
        <div className="row">
          <div className="col-md-6 col col-one">ONE</div>
          <div className="col-md-3 col col-two">TWO</div>
          <div className="col-md-3 col chuck__col border-left border-dark">
            <ChuckNorris />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default NewsView;
