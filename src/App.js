import React from "react";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

function App() {
  const downLoadImage = () => {
    var myClassTable = document.getElementById("classTable");

    htmlToImage
      .toPng(myClassTable)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div>
      <div id="classTable" className="container">
        <div className="row">
          <div className="col">
            <table>
              <tr>
                <td>Name</td>
                <td>Roll</td>
                <td>Class</td>
                <td>City</td>
              </tr>
              <tr>
                <td>Reazul</td>
                <td>01</td>
                <td>15</td>
                <td>Khulna</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button onClick={downLoadImage} className="btn btn-success">
        Download Image
      </button>
    </div>
  );
}

export default App;
