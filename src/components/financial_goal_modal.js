import React from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import colors from "../colors";
import financialBanner from "../asset/images/financial_banner.png";
import {media} from "../responsive";
import "@fontsource/roboto";
import ModalComponent from "../components/add_financial_goal_modal";
import ModalComponent1 from "../components/update_financial_goal_modal";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
`;
const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 30vw;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Work Sans", sans-serif;
  @media (max-width: 450px) {
    width:60vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${colors.kDarkGrayColor}85;
`;
const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  color: white;
  margin: 2rem 0rem;
  max-height: 25vh;
`;
const StyledSliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.4rem;
`;

const StyledSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.8rem;
  background: ${({ value, max }) =>
    `linear-gradient(to right, ${
      colors.kPrimaryColor
    } ${(value / max) * 100}%, ${
      colors.kDarkPinkColor
    } ${(value / max) * 100}%)`};
  border-radius: 1rem;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: ${colors.kPrimaryColor};
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: ${colors.kPrimaryColor};
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
`;

const SliderValue = styled.div`
  position: absolute;
  top: 1.5rem;
  left: ${({ value, max }) => `calc(${(value / max) * 100}% - 1rem)`};
  color: ${colors.kPrimaryColor};
  font-size: 1rem;
  font-weight: bold;
`;
const BannerText = styled.div`
  flex: 1;
  padding: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.p`
  font-size: 1.4rem;
  margin: 0rem 0rem 0.5rem 0rem;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size:0.8rem;
  }
`;

const BannerImage = styled.img`
  width: 7.9rem;
  height: auto;
  margin-top: 1rem;
  @media (max-width: 450px) {
    width:3rem;
    margin-top:6.2rem;
  }
`;

const ViewGoalsButton = styled.button`
  background-color: ${colors.kWhiteColor}55;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.7rem;
  font-size: 1rem;
  font-weight: normal;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
    @media (max-width: 450px) {
    width:35vw;
    font-size:0.6rem;
    height:8vw;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1rem;
  color: ${colors.kWhiteColor};
  margin:0rem;

  @media (max-width: 450px) {
    font-size:0.8rem;
  }
`;

const Heading = styled.p`
  font-size: 1rem;
  margin: 0rem 0rem 0.6rem 0rem;
  font-weight: 700;
  color: ${colors.kBlackColor},
`;

export const GoalContainer = styled.div`
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export const GoalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const GoalTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.kBlackColor};
  margin: 0;
`;

export const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  color: ${colors.kPrimaryColor};
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Deadline = styled.p`
  color: ${colors.kDarkPinkColor};
  font-weight: 600;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const CancelButton = styled.button`
  background: none;
  border: 0.15rem solid ${colors.kLoginLabelColor};
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`;

function FinancialGoalModal({ isOpen, onClose }) {
   const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const [isModalOpen1, setIsModalOpen1] = React.useState(false);
  
    const handleOpenModal1 = () => setIsModalOpen1(true);
    const handleCloseModal1 = () => setIsModalOpen1(false);
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Banner>
          <BannerText>
            <BannerTitle>Achieve Financial Freedom</BannerTitle>
<BannerSubtitle>Set clear financial goals, track your progress, and take steps toward a secure and stress-free future.</BannerSubtitle>
            <ViewGoalsButton onClick={handleOpenModal}>Add Financial Goal</ViewGoalsButton>
          </BannerText>
          <BannerImage src={financialBanner} alt="financial Banner" />
        </Banner>
        <Heading>Active Goals</Heading>
        <GoalContainer onClick={handleOpenModal1}>
          <GoalHeader>
            <GoalTitle>Save $500 for Emergency Fund</GoalTitle>
            <Checkbox type="checkbox" />
          </GoalHeader>
          <SliderContainer>
                    <StyledSliderContainer>
                      <StyledSlider value={415} max={500} />
                      <SliderValue value={415} max={500}>
                        415
                      </SliderValue>
                    </StyledSliderContainer>
                  </SliderContainer>
          <Deadline>Deadline: 10 days left</Deadline>
        </GoalContainer>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
        </ButtonContainer>
      </ModalContainer>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      <ModalComponent1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
    </ModalOverlay>
  );
}

export default FinancialGoalModal;
