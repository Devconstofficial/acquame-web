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
import { media } from "../responsive";

let height = window.innerHeight
console.log(height)
const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 17vw;
  height: ${height}px;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  font-family: "Lato", sans-serif;
  position: sticky;

  ${media.extraSmall`display: none;`}
  ${media.mobile`display: none;`}
  ${media.tablet`display: none;`}
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;
  background-color: ${colors.kPrimaryColor};
`;

const Logo = styled.img`
  width: 11vw;
  height: auto;
  ${media.extraSmall`width:6vw`}
  ${media.mobile`width:6vw`}
  ${media.tablet`width:6vw`}
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const HamburgerMenu = styled.div`
  display: none;

  ${media.extraSmall`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 1.5rem; 
    background-color: ${colors.kPrimaryColor}; 
    color: ${colors.kWhiteColor};
  `}

  ${media.mobile`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 1.5rem; 
    background-color: ${colors.kPrimaryColor};  
    color: ${colors.kWhiteColor};
  `}

  ${media.tablet`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 1.5rem; 
    background-color: ${colors.kPrimaryColor}; 
    color: ${colors.kWhiteColor};
  `}
`;

const HamburgerIcon = styled.img`
  width: 2.2rem;
  height: auto;
  cursor: pointer;
`;

const MenuItem = styled.li`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${(props) =>
    props.isSelected ? `${colors.kBlackColor}50` : "transparent"};
  font-family: "Lato", sans-serif;
  border-radius: ${(props) => (props.isSelected ? "10px" : "0")};
  transition: background-color 0.3s, transform 0.2s;

  img {
    width: 1.5rem;
    margin-right: 1rem;
    filter: brightness(0) invert(1);
  }

  &.logout {
    font-family: "Poppins", sans-serif;
  }
`;

const OverlayMenu = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  background-color: ${colors.kPrimaryColor};
  z-index: 100;
  padding: 1rem 0;
`;

const LogoutWrapper = styled.div`
  margin-top: auto;
`;

function SideBar({ isCollapsed, toggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const [isMenuOpen, setIsMenuOpen] = useState(isCollapsed);

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
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);  // Auto-close the menu when screen size increases
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <HamburgerMenu>
        {
          isCollapsed ? 
        <Logo src={logoImage} alt="Logo" /> : null
        }
        <HamburgerIcon
          src={hamMenuImage}
          alt="Menu"
          style={{width:20,height:20}}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </HamburgerMenu>

      <OverlayMenu open={isMenuOpen}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => handleNavigation(item.route)}
            isSelected={activeMenu === item.name}
          >
            <img src={item.icon} alt={item.name} />
            {item.name}
          </MenuItem>
        ))}

        <MenuItem className="logout" onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" />
          Logout
        </MenuItem>
      </OverlayMenu>

      <SideBarContainer>
        <LogoContainer>
          <Logo src={logoImage} alt="Logo" />
        </LogoContainer>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              onClick={() => handleNavigation(item.route)}
              isSelected={activeMenu === item.name}
            >
              <img src={item.icon} alt={item.name} />
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
        <LogoutWrapper>
          <MenuItem className="logout" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" />
            Logout
          </MenuItem>
        </LogoutWrapper>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
