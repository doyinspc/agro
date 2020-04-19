import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function Services(props) {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-left" lg="10" md="12"><h4>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary" type="button">
                        <i style={{fontSize:20}} className="now-ui-icons objects_diamond"></i> 
                    </Button> Sourcing  
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Procurement
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button> Purification
                    
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Packaging
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button> Branding 
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Logistics 
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button>  Agro-allied related legal services 
                 </Col>
                 <Col xs='12' md='6'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i>
                    </Button> Business services 
                 </Col>
              </Row>
              <Row>
                  <Col xs='12' md='12'>
                    <Button className="btn-round" color="primary"  type="button">
                        <i style={{fontSize:20}}  className="now-ui-icons objects_diamond"></i> 
                    </Button>  Supply chain management services
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

export default Services;
