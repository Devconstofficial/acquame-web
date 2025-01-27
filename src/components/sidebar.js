import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../colors";
import homeIcon from "../asset/icons/home_icon_inactive.png";
import financialIcon from "../asset/icons/financial_icon_inactive.png";
import mentalIcon from "../asset/icons/mental_icon_inactive.png";
import physicalIcon from "../asset/icons/physical_icon_inactive.png";
import profileIcon from "../asset/icons/profile_icon_inactive.png";
import logoutIcon from "../asset/icons/logout_icon.png";
import logoImage from "../asset/images/splash_logo.png";
import hamMenuImage from "../asset/icons/ham_menu.png";
import "@fontsource/poppins";
import "@fontsource/lato";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isCollapsed ? "72px" : "17vw")};
  height: 100vh;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  font-family: "Lato", sans-serif;
  position: sticky;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  border-radius: 5px;

  &:hover {
    background-color: ${colors.kSecondaryColor};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${colors.kPrimaryColor};
`;

const Logo = styled.img`
  width: ${(props) => (props.isCollapsed ? "40px" : "11vw")};
  height: auto;
  transition: width 0.3s ease;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;
const ResponsiveSpan  = styled.div`
  @media (max-width: 450px) {
  display:none;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0 0rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${(props) =>
    props.isSelected ? `${colors.kBlackColor}50` : "transparent"};
  font-family: "Lato", sans-serif;
  border-radius: ${(props) => (props.isSelected ? "10px" : "0")};
  transition: background-color 0.3s, transform 0.2s;

  img {
    width: 1.5rem;
    margin-right: ${(props) => (props.isCollapsed ? "0" : "1rem")};
    filter: brightness(0) invert(1);
  }

  span {
    display: ${(props) => (props.isCollapsed ? "none" : "inline")};
    transition: display 0.3s ease;
  }
`;

const LogoutWrapper = styled.div`
  margin-top: auto;
`;

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showToggleButton, setShowToggleButton] = useState(false);

  const menuItems = [
    { name: "Home", icon: homeIcon, route: "/home" },
    { name: "Financial", icon: financialIcon, route: "/financial" },
    { name: "Physical", icon: physicalIcon, route: "/physical" },
    { name: "Mental", icon: mentalIcon, route: "/mental" },
    { name: "Profile", icon: profileIcon, route: "/profile" },
  ];

  const activeMenu = menuItems.find((item) => item.route === location.pathname)
    ?.name;

  const handleResize = () => {
    const isSmallScreen = window.innerWidth < 500;
    setShowToggleButton(isSmallScreen);
    if (!isSmallScreen) setIsCollapsed(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* <ToggleButton
        show={showToggleButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Expand" : "Collapse"}
      </ToggleButton> */}

      <SideBarContainer isCollapsed={isCollapsed}>
        <LogoContainer>
          <Logo src={logoImage} alt="Logo" isCollapsed={isCollapsed} />
        </LogoContainer>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              onClick={() => handleNavigation(item.route)}
              isSelected={activeMenu === item.name}
              isCollapsed={isCollapsed}
              
            >
              <img src={item.icon} alt={item.name} />
              <ResponsiveSpan >{item.name}</ResponsiveSpan >
            </MenuItem>
          ))}
        </MenuList>
        <LogoutWrapper>
          <MenuItem className="logout" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" />
            <ResponsiveSpan>Logout</ResponsiveSpan>
          </MenuItem>
        </LogoutWrapper>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
