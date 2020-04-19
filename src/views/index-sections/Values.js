import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function Values(props) {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
          <h3 className="title">Core Values</h3> 
          </Col>
            <Col className="text-left" lg="10" md="12"><h4>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary" type="button">
                        <i style={{fontSize:20}} className="now-ui-icons objects_diamond"></i> 
                    </Button> Profitability
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Integrity
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button> Continuity in entrepreneurship
                    
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Loyalty
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button> Efficiency in service delivery 
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Professionalism
                 </Col>
                 
              </Row>
              </h4>
            </Col>
          </Row>
          </Container>
      </div>
    </>
  );
}

export default Values;
