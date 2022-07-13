import { Fragment, useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./draw.css";
import { exportComponentAsJPEG } from "react-component-export-image";

const Draw = () => {
  const [brushRadius, setBrushRadius] = useState(8);
  const [lazyRadius, setLazyRadius] = useState(1);
  const [hideUI, setHideUI] = useState(true);
  const refCanvas = useRef();

  const clearCanvasHandle = () => {
    if (refCanvas.current) {
      refCanvas.current.clear();
    }
  };
  const undoCanvasHandle = () => {
    if (refCanvas.current) {
      refCanvas.current.undo();
    }
  };

  const hideUIHandle = () => {
    setHideUI(!hideUI);
  };
  const defaultWidth = 1630;
  const defaultHeight = 500;
  return (
    <Fragment>
      <button
        onClick={clearCanvasHandle}
        className="btn"
        style={{
          margin: "2rem",
        }}
      >
        clear
      </button>
      <button
        onClick={undoCanvasHandle}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        undo
      </button>
      <button
        onClick={hideUIHandle}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        UI Element
      </button>
      <button
        onClick={() => exportComponentAsJPEG(refCanvas, { fileName: "result" })}
        className="btn"
        style={{
          marginRight: "2rem",
        }}
      >
        Export As JPEG
      </button>

      <label
        style={{
          marginRight: "1rem",
        }}
      >
        Brush-Radius:
      </label>
      <input
        type="number"
        value={brushRadius}
        onChange={(e) => setBrushRadius(parseInt(e.target.value, 10))}
      />

      <label
        style={{
          margin: "0rem 1rem 0rem 1rem",
        }}
      >
        Lazy-Radius:
      </label>
      <input
        type="number"
        value={lazyRadius}
        onChange={(e) => setLazyRadius(parseInt(e.target.value, 10))}
      />

      <div className="canvas">
        <CanvasDraw
          brushColor="black"
          hideGrid
          hideInterface={hideUI}
          lazyRadius={lazyRadius}
          brushRadius={brushRadius}
          ref={refCanvas}
          canvasWidth={defaultWidth}
          canvasHeight={defaultHeight}
        />
      </div>
    </Fragment>
  );
};

export default Draw;
