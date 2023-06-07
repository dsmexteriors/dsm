import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./Navigation.module.scss";

const navItems = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Our Process",
    link: "/process",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <>
                {navItems.map((i) => (
                  <Nav.Link href={i.link}>{i.name}</Nav.Link>
                ))}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
