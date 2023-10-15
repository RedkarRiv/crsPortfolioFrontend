import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import AccountAvatar from "../../img/avatarAccount.png";
import { useNavigate } from "react-router-dom";

export const NavbarTop = () => {
  const navigate = useNavigate();

  return (
    <div className="m-0 p-0">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbarDesign text-white navbar-dark p-3
        "
      >
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="ps-2 logoDesign"
          >
            Carlos Redondo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-center align-items-center">
              <Nav className="w-75 d-flex justify-content-around align-items-center">
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  BlogSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  ShopSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  GamesSIM
                </div>
                <div
                  className="navbarOptionDesign"
                  onClick={() => navigate("/")}
                >
                  BOTSIM
                </div>
              </Nav>
            </Nav>

            <Nav className="text-light card-subtitle">
              <div className="p-1 me-3 loginButton">Login</div>
              <div
                className="p-1 registerButton"
                onClick={() => navigate("/register")}
              >
                Registro
              </div>
            </Nav>
            {/* <Nav className="profileButtons w-auto text-light d-flex justify-content-center align-items-center text-center">
              <div className="p-1">
                {" "}
                <img
                  src={AccountAvatar}
                  alt="Mi cuenta"
                  className="avatarAccoutDesign"
                />
              </div>
              <div className="p-1">Perfil</div>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
