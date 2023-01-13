import localforage from "localforage";
import React from "react";

function App() {
  const setData = () => {
    localforage.setItem("name", "Reazul Islam", (err) => {
      if (err) {
        alert(err);
      } else {
        alert("Data Save Success");
      }
    });
  };
  const getData = () => {
    localforage.getItem("name", (err, value) => {
      if (err) {
        alert(err);
      } else {
        alert(value);
      }
    });
  };
  const removeData = () => {
    localforage.removeItem("name", (err) => {
      if (err) {
        alert(err);
      } else {
        alert("Data Remove Success");
      }
    });
  };
  return (
    <div>
      <button onClick={setData} className="btn btn-success">
        Set Data
      </button>
      <button onClick={getData} className="btn btn-primary m-5">
        Get Data
      </button>
      <button onClick={removeData} className="btn btn-danger ">
        Remove Data
      </button>
    </div>
  );
}

export default App;
