import React from "react";
import axios from "axios";

function App() {
  const fileUpLoad = () => {
    // Post Url
    let url = "....";

    //Body Form Data
    let myFormData = new FormData();
    myFormData.append("file1", "fileObj1");
    myFormData.append("file2", "fileObj2");
    myFormData.append("file3", "fileObj3");

    // Header Configuration
    let headerConfig = {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };

    axios
      .post()
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
        } else {
          //Something wrong
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
}

export default App;
