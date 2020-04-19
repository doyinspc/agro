import React from "react";

// sections for this page
import Welcomes from "../index-sections/Welcomes";
import AboutData from "../index-sections/AboutData";
import Mission from "../index-sections/Mission";
import Vision from "../index-sections/Vision";
import Values from "../index-sections/Values";

function About() {
  return (
    <>
     <div className="main">
          <Welcomes title='About Awa Agro-allied Nigeria Limited'/>
          <AboutData />
          <Mission />
          <Vision />
          <Values />
     </div>
    </>
  );
}

export default About;
