import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SecondHeader from "components/Headers/SecondHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


import Main from "./Pages/Main.js";
import About from "./Pages/About.js";
import Service from "./Pages/Service.js";
import Contact from "./Pages/Contact.js";

function Index(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  let act = <Main />;
  let head = <IndexHeader />;
  if(props.num === 1)
  {
      act = <Main />;
      head = <IndexHeader numz={props.num} />;
  }
  else if(props.num === 2)
  {
      act = <About />;
      head = <SecondHeader numz={props.num} titl={props.title}/>;  
  }
  else if(props.num === 3)
  {
      act = <Service />;
      head = <SecondHeader numz={props.num} titl={props.title}/>;
  }
  else if(props.num === 4)
  {
      act = <Contact />;
      head = <SecondHeader numz={props.num} titl={props.title}/>;
  }else{
      act = <Main />;
      head = <IndexHeader />;
  }
  return (
    <>
      <IndexNavbar />
        <div className="wrapper">
          {head}
        <div className="main">
          {act}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
