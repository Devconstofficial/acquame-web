import React from "react";
import styled from "styled-components";
import colors from "../colors";
import { media } from "../responsive";
import "@fontsource/roboto";
import "@fontsource/work-sans";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.kWhiteColor};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 40vw;
  z-index: 1001;

 @media (max-width: 450px) {
    width:60vw;
  }
`;

const ModalTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${colors.kBlackColor};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
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

const NotificationCard = styled.div`
  background-color: ${colors.kPrimaryColor};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-weight:400;
  color: ${colors.kWhiteColor};

  & h5 {
    font-size: 1rem;
    margin: 0;
    color: ${colors.kWhiteColor};
    font-family: "Work Sans", sans-serif;
  }

  & p {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }

  & span {
    font-size: 0.6rem;
    color: ${colors.kWhiteColor}80;
  }
`;

const NotificationItem = styled.div`
  margin-bottom: 1rem;
  padding: 0rem 1.5rem;

  & h5 {
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
    color: ${colors.kBlackColor};
  }

  & p {
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: ${colors.kTextColor};
  }

  & span {
    font-size: 0.6rem;
    color: ${colors.kTextColor}80;
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

const NotificationModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Today</ModalTitle>

        <NotificationCard>
          <h5>Daily Check-In Reminder</h5>
          <p>
            Have you tracked your progress today? Stay consistent and keep
            moving toward your goals!
          </p>
          <span>15 min ago</span>
        </NotificationCard>

        <NotificationItem>
          <h5>Financial Goal Update</h5>
          <p>
            Great job! You've saved $150 so far. Only $350 left to reach your
            $500 goal!
          </p>
          <span>25 min ago</span>
        </NotificationItem>
      </ModalContainer>
    </>
  );
};

export default NotificationModal;
