import ReactDOM from "react-dom";
import { useOverlay } from "hooks/overlay";
import Close from "assets/images/close.png";
import "css/Overlay.css";

function Overlay({ children }) {
  const { wichAnimation, overlayContainer, closeDialog } = useOverlay();

  return ReactDOM.createPortal(
    <div className={"overlay animated " + wichAnimation}>
      <div className="card-header">
        <span onClick={(e) => closeDialog()} className="float-right">
          <img src={Close} alt="close button" className="img-fluid cose-btn" />
        </span>
      </div>
      <div className="card-body">{children}</div>
    </div>,
    overlayContainer.current
  );
}

export default Overlay;
