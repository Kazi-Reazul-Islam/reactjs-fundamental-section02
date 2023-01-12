import React from "react";
import axios from "axios";

function App() {
  const getList = () => {
    let url = "";
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    let url = "...";
    let postBody = {
      name: "Reazul",
      city: "Khulna",
      age: "23",
    };

    axios
      .post(url, postBody)
      .then((res) => {
        if (res.status) {
          let data = res.data;
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
}

export default App;
