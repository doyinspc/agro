import React from "react";

// sections for this page
import Cards from "./../index-sections/Cards.js";
import Welcome from "./../index-sections/Welcome.js";
function Main() {
  return (
    <>
     <div className="main"> 
          <Welcome />
          <Cards />
     </div>
    </>
  );
}

export default Main;
