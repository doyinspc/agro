import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Logo from "assets/img/logo.png";
// core components

function Welcomes(props) {
  return (
    <>
      <div className="section" style={{padding:0, paddingTop:50}}>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
            <h2 className="text-primary">{props.title}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Welcomes;
