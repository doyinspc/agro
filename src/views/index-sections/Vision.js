import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function Vision(props) {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="orange"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Our Vision</h3>
              <i style={{fontSize:80}} className="fa fa-eye"></i>
              <h5 className="description">
              To be among the first 10 leading agro-allied and agribusiness industries in Nigeria in the year 2030.
              </h5>
            </Col>
          </Row>
          </Container>
      </div>
    </>
  );
}

export default Vision;
