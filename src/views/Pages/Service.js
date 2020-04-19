import React from "react";

// sections for this page
import Welcomes from "../index-sections/Welcomes";
import Services from "../index-sections/Services";



function Service() {
  return (
    <>
     <div className="main">
          <Welcomes title='Our Services'/>
          <Services />
     </div>
    </>
  );
}

export default Service;
