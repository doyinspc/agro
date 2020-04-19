import React from "react";

// sections for this page
import Welcomes from "../index-sections/Welcomes";
import Contacts from "../index-sections/Contacts";



function Contact() {
  return (
    <>
     <div className="main">
          <Welcomes title='Our Contacts'/>
          <Contacts />
     </div>
    </>
  );
}

export default Contact;
