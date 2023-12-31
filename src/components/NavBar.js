import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/pirate.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Offcanvas
            id="basic-navbar-nav"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
           <Nav className="ms-auto">
              <Nav.Link 
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Compétences
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projets
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Contactez-moi</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Offcanvas>
          {/* <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Compétences
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projets
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/adrien-schmidt-2747871a2/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Contactez-moi</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </Router>
  );
};
