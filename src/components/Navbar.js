import { ScrollSpy } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  const [isReduced, setIsReduced] = useState(false);
  const navRef = useRef(null);

  const handleScroll = (e) => {
    const position = window.pageYOffset;
    if (position > 50) {
      setIsReduced(true);
    } else {
      setIsReduced(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!navRef.current) {
      return;
    }
    const scrollSpy = new ScrollSpy(document.body, {
      target: "#mainNav",
      // offset: navRef.current.clientHeight,
      rootMargin: `-${navRef.current.clientHeight}px 0px -${
        window.innerHeight - navRef.current.clientHeight
      }px`,
      threshold: [0],
    });

    return () => {
      delete scrollSpy.name;
    };
  }, [navRef, isReduced]);

  return (
    <Navbar
      className={`navbar navbar-b navbar-${
        isReduced ? "reduce" : "trans"
      } navbar-expand-md fixed-top`}
      collapseOnSelect
      expand="lg"
      variant="dark"
      ref={navRef}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="avatar" src="/logo.png" alt="翔" />
          <span style={{ lineHeight: 2 }}> Po-Hsiang Hsu </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          as="span"
          style={{ borderWidth: 0 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ display: "none" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
