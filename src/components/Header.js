import React from "react";

function Header(props) {
  return (
    <div className="py-5 container-fluid bg-dark text-white-50 sticky-top">
      <div className="row">
        <div className="text-center font-weight-bold h1 col-3">Clicky Game</div>
        <div className="text-center font-weight-light h2 col-4">
          {props.feedback}
        </div>
        <div className="text-center font-weight-bold h1 col-2">
          Score: {props.score}
        </div>
        <div className="text-center font-weight-bold h1 col-3">
          Top Score: {props.topScore}
        </div>
      </div>
    </div>
  );
}

export default Header;
