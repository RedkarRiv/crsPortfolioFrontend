import React, { useEffect } from "react";
import "./ProfilePanel.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { useNav } from "../../services/NavContext";
import { NavbarProfile } from "../../common/ProfileNavbar/ProfileNavbar";
import { MyProfile } from "../../common/MyProfile/MyProfile";
import { SideBar } from "../../common/ProfileSideBar/ProfileSideBar";

export const ProfilePanel = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userDataCheck);

  //PROFILE NAVBAR SELECTION
  const { selectedNavItem } = useNav();

  //NO CREDENTIALS BLOCK
  const credentialsActive = () => {
    if (!credentialsRdx) {
      scrollToTop();
      navigate("/");
    }
  };

  useEffect(() => {
    credentialsActive();
  }, []);

  return (
    <>
      <Container
        fluid
        className="profilePanelBG m-0 pb-4 d-flex justify-content-start align-items-center flex-column"
      >
        <Row className="d-flex w-100 p-0 m-0 text-center">
          <Col className="profilePanelTitle col-12 p-5">
            Bienvenido a tu perfil
          </Col>
        </Row>
        <Row className="w-100 h-auto d-flex px-3 m-0 justify-content-center">
          <Col className="slideProfile p-3 col-8">
            <NavbarProfile />
            <Row className="myProfileBG w-100 d-flex justify-content-center align-items-center p-1 m-0">
              {selectedNavItem === "Mi perfil" ? <MyProfile /> : null}
              {selectedNavItem === "Mis pedidos" ?  <>
                  <Col className="col-3 col-md-2 mt-2 BGcheck2">
                    <SideBar />
                  </Col>
                  <Col className="col-9 col-md-10 mt-2 BGcheck">Pedidos</Col>
                </> : null}
              {selectedNavItem === "Panel Admin" ? (
                <>
                  <Col className="col-3 col-md-2 mt-2 BGcheck2">
                    <SideBar />
                  </Col>
                  <Col className="col-9 col-md-10 mt-2 BGcheck">Admin panel</Col>
                </>
              ) : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
