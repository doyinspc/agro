import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup } from "reactstrap";
// core components
import Logo from "assets/img/logo.png";

function Contacts(props) {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row >
              <Col xs='12' md='6' className="text-center">
              <h3>Address</h3>
              <img className="text-center" center src={Logo} width={120} height={120} align='center' style={{padding:5}} />
              
              <p><h5>No 36 Fountain Street Gonin-gora Federal Housing Estate, Kaduna, Kaduna State, Nigeria.</h5></p>
              <p><h5><a href="tel:+2348033449410">+234 803 344 9410</a>   |  <a href="tel:2348177887777">+234 817 788 7777</a></h5></p>
              <p><h5><a href="mailto:awa.agro@gmail.com">awa.agro@gmail.com</a>   |  <a href="mailto:info@awaagroallied.com.ng">info@awaagroallied.com.ng</a></h5></p>
                  
              </Col>

              <Col xs='12' md='6' className="text-center">
                <h3>Contact Us</h3>
                    <FormGroup>
                        <p>
                        <Input  defaultValue="" placeholder="Name" type="text" ></Input>
                        </p>
                        <p>
                        <Input  defaultValue="" placeholder="Email" type="text" ></Input>
                        </p>
                        <p>
                        <Input  defaultValue="" placeholder="Message" type="textarea" ></Input>
                        </p>
                        <p>
                        <Button color="primary" className="btn-round btn-block" size="md">
                            <i className="now-ui-icons ui-2_favourite-28"></i>{' ' }Send message
                        </Button> 
                        </p>
                    </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contacts;
