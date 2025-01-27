import styled from "styled-components";
import "@fontsource/roboto";
import colors from "../colors";
import React, { useState } from "react";
import BreathingImage from "../asset/images/breathing.png";
import MuscularImage from "../asset/images/muscularT.png";
import { media } from "../responsive";

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
  width: 40vw;
  max-height: 70vh;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
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

const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.div`
  background-color: ${(props) =>
    props.active ? colors.kPrimaryColor : colors.kLightGrayColor};
  color: ${(props) => (props.active ? colors.kWhiteColor : colors.kDarkGrayColor)};
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  flex: 1;
  margin: 0 0.5rem;
@media (max-width: 450px) {
  width: 10%;
  font-size: 0.6rem;
  }
  &:hover {
    background-color: ${(props) =>
      props.active ? colors.kPrimaryColor : colors.kStrokeColor};
  }
`;
const BannerImage = styled.img`
  width: 10rem;
  height: auto;
  margin-right: 2rem;

  @media (max-width: 450px) {
  width: 8rem;
  }
`;
const ContentContainer = styled.div`
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${colors.kDarkGrayColor};
`;

function RelaxationModal({ isOpen, onClose }) {
  const [activeSection, setActiveSection] = useState("controlled"); // State for toggling content

  if (!isOpen) return null; // Ensure hooks are not conditionally called

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        {/* Section Titles */}
        <SectionTitleContainer>
          <SectionTitle
            active={activeSection === "controlled"}
            onClick={() => setActiveSection("controlled")}
          >
            Controlled Breathing
          </SectionTitle>
          <SectionTitle
            active={activeSection === "muscular"}
            onClick={() => setActiveSection("muscular")}
          >
            Muscular Relaxation
          </SectionTitle>
        </SectionTitleContainer>

        {/* Conditional Content */}
        <ContentContainer>
          {activeSection === "controlled" ? (
            <>
            <BannerImage src={BreathingImage} alt="Health Banner" />
              <p><b>Beginning:</b> Get into a comfortable position.</p>
              <p><b>Middle:</b> Work out a stable breathing rhythm. Perhaps try to breathe in for three seconds, hold this breath for two seconds, and then breathe out for three seconds. It can be helpful to count as you do this:</p>
              <p>e.g. IN: 1 - 2 - 3, HOLD: 1 - 2, OUT: 1 - 2 - 3, HOLD: 1 - 2.</p>
              <p><b>Ending:</b> Repeat this action for a few minutes. You should soon begin to feel more relaxed. If you were feeling dizzy, this should also get better after a few minutes.</p>
            </>
          ) : (
            <>
            <BannerImage src={MuscularImage} alt="Health Banner" />
              <p><b>Beginning:</b> Find somewhere comfortable and quiet where you won't be interrupted. You can either sit or lie down to practice this exercise. Begin by focusing on your breathing. Try to have a slow and comfortable pace. You could use the controlled breathing technique described earlier. Do this for a few minutes to prepare for the muscular relaxation exercise.</p>
              <p><b>Middle:</b> Try to tense each muscle group for around five seconds. Don't tense the muscle too tight. Focus on the sensations that this brings. Then relax your muscles for a similar length of time, and again, focus on how this feels. Then move onto the next muscle group. Try to remember to keep your breathing at a comfortable pace throughout.</p>
              <p>Below are some suggestions of muscle groups that you may wish to work through:</p>
              <ul>
                <li><b>Legs:</b> Point your toes and tense your muscles as if you were trying to stand up.</li>
                <li><b>Stomach:</b> Tense your stomach muscles.</li>
                <li><b>Arms:</b> Make fists and tense your muscles as if you were trying to lift something.</li>
                <li><b>Shoulders:</b> Shrug your shoulders. Lift them up towards your ears.</li>
                <li><b>Face:</b> Make a frowning expression. Squeeze your eyes shut and screw up your nose. Clench your teeth.</li>
              </ul>
              <p><b>Ending:</b> It can be helpful to spend a few minutes just lying quietly in a relaxed state. See if you can notice any tension in your body and try to relax it. Otherwise, just let the tension be. If your mind wanders, try to bring your concentration back to your breathing. Finally, count down silently and slowly: 5 - 4 - 3 - 2 - 1 - 0 and come out of the relaxation in your own time. See if it's possible to carry that relaxed feeling into whatever you do next.</p>
            </>
          )}
        </ContentContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default RelaxationModal;
