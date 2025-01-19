import React from "react";
import styled from "styled-components";
import colors from "../colors";
import InsightBanner from "../asset/images/reduce_stress_banner.png";
import "@fontsource/roboto";

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
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 800px;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 150px;
    border-radius: 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  }
`;

const LowerDetailsButton = styled.button`
  background-color: ${colors.kWhiteColor};
  color: ${colors.kPrimaryColor};
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function ViewDetails({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ContentRow>
          <ImageContainer>
            <img src={InsightBanner} alt="Insight Banner" />
          </ImageContainer>
          <TextContainer>
            <h3>Reduce Stress with Simple Breathing Techniques</h3>
            <p>
              <strong>Steps:</strong>
            </p>
            <ol>
              <li>Inhale slowly through your nose for 4 seconds.</li>
              <li>Hold the breath for 7 seconds.</li>
              <li>Exhale slowly through your mouth for 8 seconds.</li>
            </ol>
          </TextContainer>
        </ContentRow>
        <TextContainer>
        <p>
          <strong>Benefits:</strong>
        </p>
        <ul>
          <li>Helps to reduce anxiety and stress.</li>
          <li>Brings focus and clarity.</li>
          <li>Promotes relaxation and helps lower heart rate.</li>
        </ul>
        <p>
          <strong>When to Use:</strong>
        </p>
        <ul>
          <li>During moments of anxiety, stress, or overwhelming thoughts.</li>
          <li>
            Before or during a high-pressure situation (e.g., presentations,
            meetings).
          </li>
        </ul>
        <p>
          <strong>Additional Tips:</strong>
        </p>
        <ul>
          <li>
            Try doing this technique in a quiet space for maximum effectiveness.
          </li>
          <li>Repeat the cycle 4–5 times for a calming effect.</li>
        </ul>
        </TextContainer>
        
        <LowerDetailsButton onClick={onClose}>Lower Details</LowerDetailsButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ViewDetails;
