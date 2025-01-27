import React, { useState } from "react";
import styled from "styled-components";
import colors from "../colors";
import { media } from "../responsive";
import userIcon from "../asset/icons/profile_icon_inactive.png";
import faq from "../asset/icons/faq_icon.png";
import changePassword from "../asset/icons/change_password_icon.png";
import supportIcon from "../asset/icons/support_icon.png";
import termsIcon from "../asset/icons/terms_icon.png";
import arrowIcon from "../asset/icons/arrow_icon.png";
import "@fontsource/roboto";
import NotificationSettings from "./notification_settings_modal";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.kWhiteColor};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 40vw;
  z-index: 1001;

  @media (max-width: 450px) {
    width:60vw;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const SettingsOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0rem;
  padding: 1rem;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.kSecondaryColor}10;
  }
`;

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.kPrimaryColor};
  border-radius: 20%;
  color: ${colors.kWhiteColor};
`;

const OptionText = styled.span`
  flex: 1;
  margin-left: 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: ${colors.kBlackColor};
`;

const ArrowIcon = styled.img`
  width: 0.3rem;
  height: auto;
`;

const ItemIcon = styled.img`
  width: 1.3rem;
  height: auto;
  color: ${colors.kWhiteColor};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${colors.kPrimaryColor};

  &:hover {
    color: ${colors.kPrimaryColor}80;
  }
`;

function SettingsModal({ isVisible, onClose }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNotificationClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SettingsOption onClick={handleNotificationClick}>
          <IconContainer>
            <ItemIcon
              src={userIcon}
              alt="Notifications"
              style={{ filter: "invert(1)" }}
            />
          </IconContainer>
          <OptionText>Notifications</OptionText>
          <ArrowIcon src={arrowIcon} alt="Arrow" />
        </SettingsOption>
        <SettingsOption>
          <IconContainer>
            <ItemIcon src={changePassword} alt="Change Password" />
          </IconContainer>
          <OptionText>Change Password</OptionText>
          <ArrowIcon src={arrowIcon} alt="Arrow" />
        </SettingsOption>
        <SettingsOption>
          <IconContainer>
            <ItemIcon src={supportIcon} alt="Support" />
          </IconContainer>
          <OptionText>Support</OptionText>
          <ArrowIcon src={arrowIcon} alt="Arrow" />
        </SettingsOption>
        <SettingsOption>
          <IconContainer>
            <ItemIcon src={termsIcon} alt="Terms of Service" />
          </IconContainer>
          <OptionText>Terms of Service</OptionText>
          <ArrowIcon src={arrowIcon} alt="Arrow" />
        </SettingsOption>
        <SettingsOption>
          <IconContainer>
            <ItemIcon src={faq} alt="FAQ" />
          </IconContainer>
          <OptionText>FAQ</OptionText>
          <ArrowIcon src={arrowIcon} alt="Arrow" />
        </SettingsOption>
      </ModalContainer>
      <NotificationSettings isVisible={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default SettingsModal;
