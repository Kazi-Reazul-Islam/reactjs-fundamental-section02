import React from "react";
import readXlsxFile from "read-excel-file";

function App() {
  const readExel = () => {
    const myFile = document.getElementById("input");
    readXlsxFile(myFile.files[0]).then((data) => {
      alert(data);
    });
  };
  return (
    <div>
      <input type="file" id="input" />
      <button onClick={readExel} className="btn btn-success">
        Read Excel File
      </button>
    </div>
  );
}

export default App;
