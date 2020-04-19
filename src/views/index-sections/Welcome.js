import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Logo from "assets/img/logo.png";
// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
            <Row >
                <Col lg="3" md="3">
                    <img  src={Logo} width={160} height={140} />
                </Col>
                <Col>
                <h2 className="text-primary">Welcome to Awa Agro-Allied Nigeria Limited</h2>
                <h5 className="description">
                The company was duly registered and incorporated by the Nigeria Corporate Affairs Commission (CAC) on 26th day of March, 2019 with registration number RC 1571756...
                </h5>
                </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
