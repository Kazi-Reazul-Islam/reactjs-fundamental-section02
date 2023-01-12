import React from "react";
import exportFromJSON from "export-from-json";

function App() {
  const downLoadCSV = () => {
    const data = [
      { Name: "Reazul", Age: "23", Occupation: "Student", City: "Khulna" },
      { Name: "Nazim", Age: "25", Occupation: "Teacher", City: "Dhaka" },
      {
        Name: "Shakib",
        Age: "21",
        Occupation: "Cricket Player",
        City: "Barishal",
      },
      {
        Name: "Dhony",
        Age: "25",
        Occupation: "Cricket Player",
        City: "Dinajpur",
      },
      { Name: "Rubel", Age: "26", Occupation: "Student", City: "Others" },
    ];
    const fileName = "mycsv";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div>
      <button onClick={downLoadCSV}>Download CSV</button>
    </div>
  );
}

export default App;
