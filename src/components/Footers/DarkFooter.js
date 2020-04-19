/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col,Button, UncontrolledTooltip, } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
      <Row className="justify-content-md-center sharing-area text-center" style={{margin:5, padding: 10}}>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href={process.env.TWITTER_LINK}
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href={process.env.FACE_BOOK_LINK}
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="google"
                href={process.env.GOOGLE_LINK}
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-google"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
             
            </Col>
          </Row>
        <nav>
          <ul>
            <li>
              <a
                href="#"
              >
                Awa Agro-Allied Nigeria Limited
              </a>
            </li>
            <li>
              <a
                href="/AboutUs"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Service"
                target="_blank"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/ContactUs"
                target="_blank"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#"
            target="_blank"
          >
            GIANT IO
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
