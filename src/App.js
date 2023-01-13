import React from "react";
import { AiFillHome, AiFillAccountBook, AiFillAlert } from "react-icons/ai";

function App() {
  return (
    <div>
      <button className="btn btn-success">
        <AiFillHome /> Set Data
      </button>
      <button className="btn btn-primary m-5">
        <AiFillAccountBook /> Get Data
      </button>
      <button className="btn btn-danger ">
        <AiFillAlert />
        Remove Data
      </button>
    </div>
  );
}

export default App;
