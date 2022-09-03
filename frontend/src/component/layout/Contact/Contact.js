import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        {/* <h3>Our team will replay soon. Thanks</h3> */}
        <a className="mailBtn" href="mailto:codesorcerers@gmail.com">
          <Button>Contact: codesorcerers@gmail.com</Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
