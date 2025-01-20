import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import colors from "../colors";
import Image from "../asset/images/insight_suggestion.png";

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
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 20vw;
  height: 80vh; 
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
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

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top:2rem;
  border-radius: 0.5rem;
`;



const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;


const TitleContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  width: 15rem;
  transform: translateX(-50%);
  background-color: ${colors.kPrimaryColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.kWhiteColor};
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
`;


const PricingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;
`;

const PlanContainer = styled.div`
  flex: 1;
  margin: 0 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid
    ${(props) =>
      props.isSelected ? colors.kPrimaryColor : colors.kGrayBorderColor};
  display: flex;
  flex-direction: column;
  align-items: left;
  cursor: pointer;
  position: relative;
  background-color: white;
`;

const DiscountBadge = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  border-top-left-radius: 0.3rem;
  border-bottom-right-radius:0.3rem;
`;

const PlanTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0rem;
`;

const PlanPrice = styled.div`
  font-size: 0.875rem;
  color: ${colors.kDarkGrayColor};
`;

const SubscribeButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

function GenerateInsightsModal({ isOpen, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState("Yearly");

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageContainer>
          <StyledImage src={Image} alt="AI Insights & Suggestions" />
          <TitleContainer>AI INSIGHTS & SUGGESTIONS</TitleContainer>
        </ImageContainer>
        <PricingContainer>
          <PlanContainer
            isSelected={selectedPlan === "Monthly"}
            onClick={() => setSelectedPlan("Monthly")}
          >
            <PlanTitle>MONTHLY</PlanTitle>
            <PlanPrice><strong>$x.xx</strong> / month</PlanPrice>
            <PlanPrice style={{fontSize:"0.6rem"}}>No Free Trial</PlanPrice>
          </PlanContainer>
          <PlanContainer
            isSelected={selectedPlan === "Yearly"}
            onClick={() => setSelectedPlan("Yearly")}
          >
            <PlanTitle>YEARLY</PlanTitle>
            <PlanPrice><strong>$x.xx</strong>  / year</PlanPrice>
            <PlanPrice style={{fontSize:"0.6rem"}}>($x.xx / month)</PlanPrice>
            {selectedPlan === "Yearly" && <DiscountBadge>-xx%</DiscountBadge>}
          </PlanContainer>
        </PricingContainer>
        <SubscribeButton onClick={onClose}>TRY 7 DAYS AND SUBSCRIBE</SubscribeButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default GenerateInsightsModal;
