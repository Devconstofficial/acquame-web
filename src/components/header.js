import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import notificationIcon from "../asset/icons/notification_icon.png";
import settingsIcon from "../asset/icons/settings_icon.png";
import colors from "../colors";
import { media } from "../responsive";
import NotificationModal from "../components/notification_modal";
import SettingsModal from "../components/settings_modal";
import { useNavigate } from "react-router-dom"; 


const HeaderContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.showChevronLeft ? "space-between" : "flex-end")}; // Adjusting alignment based on chevron presence
  align-items: center;
  padding: 0.6rem 2rem 0.6rem 1rem;
  background-color: ${colors.kHeaderColor}50;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${colors.kWhiteColor};

  img {
    width: 1.5rem;
    height: auto;
    cursor: pointer;
    filter: invert(1);
  }

  ${media.extraSmall`
    img {
      width: 2rem;
    }
  `}
`;

const ChevronIcon = styled(FaChevronLeft)`
  color: ${colors.kWhiteColor};
  font-size: 1.5rem;
  cursor: pointer;
`;

function Header({ showChevronLeft }) {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);

  const handleNotificationClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNotificationClick1 = () => {
    setModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setModalOpen1(false);
  };

  const handleChevronClick = () => {
    navigate(-1); 
  };

  return (
    <>
      <HeaderContainer showChevronLeft={showChevronLeft}>
        {showChevronLeft && <ChevronIcon onClick={handleChevronClick}/>} 
        <IconContainer>
          <img src={notificationIcon} alt="Notifications" onClick={handleNotificationClick} />
          <img src={settingsIcon} alt="Settings" onClick={handleNotificationClick1} />
        </IconContainer>
      </HeaderContainer>
      <NotificationModal isVisible={isModalOpen} onClose={handleCloseModal} />
      <SettingsModal isVisible={isModalOpen1} onClose={handleCloseModal1} />
    </>
  );
}

export default Header;
