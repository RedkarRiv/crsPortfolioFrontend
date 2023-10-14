import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

export const NavbarTop = () => {
  return (
    <div className="m-0 p-0">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-primary text-white
        "
      >
        <Container className="">
          <Navbar.Brand href="#home">CREDON</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-center align-items-center">
              <Nav className="w-75 d-flex justify-content-around align-items-center">
                <div href="#features">Home</div>
                <div href="#pricing">BlogSIM</div>
                <div href="#pricing">ShopSIM</div>
                <div href="#pricing">GamesSIM</div>
                <div href="#pricing">BOTSIM</div>
              </Nav>
            </Nav>
            <Nav className="loginRegisterButtons text-light">
              <div className="p-1">Login</div>
              <div className="p-1">Registro</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
