import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeOverlay } from "config/actions/overlayActions";

function useOverlay() {
  const wichAnimation = useSelector((state) => state.overlay.wichAnimation);
  const dispatch = useDispatch();
  const closeDialog = () => dispatch(closeOverlay());

  let overlayContainer = useRef(document.createElement("div"));
  useEffect(() => {
    overlayContainer.current.className =
      "overlay-container d-flex justify-content-center align-items-center";
    overlayContainer.current.addEventListener("click", (e) =>
      shouldOverlayClose(e)
    );
    document.body.appendChild(overlayContainer.current);

    return () => {
      overlayContainer.current.removeEventListener("click", (e) =>
        shouldOverlayClose(e)
      );
      document.body.removeChild(overlayContainer.current);
    };
  }, []);

  function shouldOverlayClose(e) {
    if (e.target.className.indexOf("overlay-container") > -1) closeDialog();
  }

  return { wichAnimation, overlayContainer, closeDialog };
}

export { useOverlay };
