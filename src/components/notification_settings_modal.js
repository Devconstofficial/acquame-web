import React from "react";
import styled from "styled-components";
import colors from "../colors";
import { media } from "../responsive";
import "@fontsource/work-sans";

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

  ${media.extraSmall`
    width: 80vw;
  `}

  ${media.mobile`
    width: 70vw;
  `}

  ${media.tablet`
    width: 50vw;
  `}
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

const NotificationOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  & span {
    font-size: 1.2rem;
    color: ${colors.kLightGreyColor};
    font-family: "Work Sans", sans-serif;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.kSwitchInactiveColor};
    border-radius: 1.5rem;
    transition: 0.4s;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 1.2rem;
    width: 1.2rem;
    left: 0.2rem;
    bottom: 0.15rem;
    background-color: ${colors.kWhiteColor};
    border-radius: 50%;
    transition: 0.4s;
  }

  & input:checked + span {
    background-color: ${colors.kPrimaryColor};
  }

  & input:checked + span:before {
    transform: translateX(1.5rem);
  }
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

const NotificationSettingsModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer style={{width:'45%'}}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <NotificationOption>
          <span>Financial Health Notifications</span>
          <Switch>
            <input type="checkbox" />
            <span></span>
          </Switch>
        </NotificationOption>
        <NotificationOption>
          <span>General Health Reminders</span>
          <Switch>
            <input type="checkbox" />
            <span></span>
          </Switch>
        </NotificationOption>
        <NotificationOption>
          <span>Goal Milestone Achievements</span>
          <Switch>
            <input type="checkbox" />
            <span></span>
          </Switch>
        </NotificationOption>
        <NotificationOption>
          <span>Physical Health Notifications</span>
          <Switch>
            <input type="checkbox" />
            <span></span>
          </Switch>
        </NotificationOption>
        <NotificationOption>
          <span>Mental Health Notifications</span>
          <Switch>
            <input type="checkbox" />
            <span></span>
          </Switch>
        </NotificationOption>
      </ModalContainer>
    </>
  );
};

export default NotificationSettingsModal;
