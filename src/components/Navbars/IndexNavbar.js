import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/img/logo.png";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-success");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top text-success" + navbarColor} expand="lg" color="success">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              <div class='col-xs-12'>
                  <img class='col-xs-4' src={Logo} height='50px' width='50px'  />
                  <span class='col-xs-7' style={{margin:2, paddingBlock:5, fontSize:20, color:'text-success' }}> Awa Agro-Allied Nigeria Limited</span>
              </div>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
            Awa Agro-Allied Nigeria Limited
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
                <NavLink href="/">
                  <i className="now-ui-icons location_world"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/AboutUs">
                  <i className="now-ui-icons location_compass-05"></i>
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Service">
                  <i className="now-ui-icons business_globe"></i>
                  <p>Our Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactUs">
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <i className="now-ui-icons tech_mobile"></i>
                  <p >0803 435 6789</p>
                </NavLink>
              </NavItem>
            
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
