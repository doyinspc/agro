import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
    let numz = require("assets/img/A3.jpg");
    if(props.numz === 2)
    {
        numz = require("assets/img/A17.jpg");
    }
    if(props.numz === 3)
    {
        numz = require("assets/img/A3.jpg");
    }
    if(props.numz === 4)
    {
        numz = require("assets/img/A13.jpg");
    }
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + numz + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
        <h1 className="title">{props.titl ? props.titl : ''}</h1>
        </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
