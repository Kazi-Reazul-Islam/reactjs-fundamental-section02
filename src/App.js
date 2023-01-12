import React from "react";
import cogoToast from "cogo-toast";

function App() {
  const successToast = () => {
    cogoToast.success("This is a success message!", {
      position: "top-right",
    });
  };
  const errorToast = () => {
    cogoToast.error("This is a error message!", { position: "top-right" });
  };
  return (
    <div>
      <button className="btn btn-success" onClick={successToast}>
        Success
      </button>
      <br />
      <button className="btn btn-danger " onClick={errorToast}>
        Error
      </button>
    </div>
  );
}

export default App;
