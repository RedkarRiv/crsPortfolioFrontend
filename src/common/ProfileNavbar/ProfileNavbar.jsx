import React from "react";
import "./ProfileNavbar.css";
import Nav from "react-bootstrap/Nav";
import { useNav } from '../../services/NavContext'; 
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";

export const NavbarProfile = () => {
    const credentialsRdx = useSelector(userDataCheck);
    const roleCheck = credentialsRdx?.credentials?.user?.roleId;

      //PROFILE NAVBAR SELECTION
      const { selectedNavItem, setSelectedNavItem } = useNav(); 

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <div
          className={`navLabel p-2 mx-2 ${
            selectedNavItem === "Mi perfil" ? "navItemActive" : ""
          }`}
          onClick={() => handleNavItemClick("Mi perfil")}
        >
          Perfil
        </div>{" "}
      </Nav.Item>
      <Nav.Item>
        <div
          className={`navLabel p-2 mx-2 ${
            selectedNavItem === "Mis pedidos" ? "navItemActive" : ""
          }`}
          onClick={() => handleNavItemClick("Mis pedidos")}
        >
          Pedidos
        </div>{" "}
      </Nav.Item>
      {roleCheck == 2 ? (
        <Nav.Item>
          <div
            className={`navLabel p-2 mx-2 ${
              selectedNavItem === "Panel Admin" ? "navItemActive" : ""
            }`}
            onClick={() => handleNavItemClick("Panel Admin")}
          >
            Admin
          </div>{" "}
        </Nav.Item>
      ) : null}
    </Nav>
  );
};
