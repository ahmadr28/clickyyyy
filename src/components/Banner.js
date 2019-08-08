import React from "react";

function Banner() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Rules</h1>
        <p className="lead">1. Try to click on each image only once.</p>
        <p className="lead">2. After each click, the images will reposition.</p>
        <p className="lead">
          3. If you click on same image a second time, game over.
        </p>
      </div>
    </div>
  );
}

export default Banner;
