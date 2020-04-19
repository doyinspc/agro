import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
// core components

function Mission(props) {
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
              <h3 className="title">Our Mission</h3>
              <i style={{fontSize:80}} className="now-ui-icons sport_user-run"></i>
              <h5 className="description">
              Our mission is to provide agribusiness supply chain services to consumer warehouses as well as to processing industries and buyers of agricultural farm produce in Nigeria as well as foreign markets thereby linking the Nigeria local farmers with the domestic and European markets for better economic returns. Studies have shown that African continent is most agrarian and also, poorest people in the world are in Africa with farming as their pre-dominant means of livelihood. Living largely in the remote villages, farmers carry outfarm operations on small and rarely medium scale by individual families. Awa Agro-allied Nigeria limited as a company is zealous of helping local farmers in the region earn better returns from their farm operations with improved living standard by linking them with urban as well as European markets through local purchase of farm produce and the supply of same as well as modern farm equipment.
              </h5>
            </Col>
          </Row>
          </Container>
      </div>
    </>
  );
}

export default Mission;
