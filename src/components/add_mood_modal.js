import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import colors from "../colors";
import { FaChevronDown } from "react-icons/fa";

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
  width: 30vw;
  min-width: 400px;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Work Sans", sans-serif;
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

const Label = styled.label`
  font-size: 1rem;
  color: ${colors.kBlackColor};
  margin: 1.5rem 0rem 0.3rem 0rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  display: block;

  span {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${colors.kDarkGrayColor};
  }
`;

const InputField = styled.input`
  width: 90%;
  padding: 1rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  margin-bottom: 0rem;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
`;

const RichTextArea = styled.textarea`
  width: 90%;
  padding: 1rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  min-height: 8rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 97%;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 1rem;
  padding-right: 2rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  background: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
`;

const ArrowIcon = styled(FaChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.kDarkGrayColor}70;
  pointer-events: none;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0rem;

  & > div {
    flex: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background: none;
  border: 0.15rem solid ${colors.kLoginLabelColor};
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

const AddGoalButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: 0.15rem solid ${colors.kPrimaryColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

function AddMoodModal({ isOpen, onClose }) {
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const [selectedPhysicalComfort, setSelectedPhysicalComfort] = useState("");
  const [selectedEnergyLevel, setSelectedEnergyLevel] = useState("");

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Label>Date</Label>
        <InputField type="date" placeholder="Enter date" />

        <RowContainer>
          <div>
            <Label>Mood</Label>
            <SelectWrapper style={{ width: "100%" }}>
              <SelectField
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
              >
                <option value="" disabled>
                  Select your mood
                </option>
                <option value="Joyful">Joyful</option>
                <option value="Excited">Excited</option>
                <option value="Peaceful">Peaceful</option>
                <option value="Grateful">Grateful</option>
                <option value="Confident">Confident</option>
                <option value="Content">Content</option>
                <option value="Bored">Bored</option>
                <option value="Tired">Tired</option>
                <option value="Indifferent">Indifferent</option>
                <option value="Sad">Sad</option>
                <option value="Stressed">Stressed</option>
                <option value="Angry">Angry</option>
                <option value="Anxious">Anxious</option>
                <option value="Lonely">Lonely</option>
              </SelectField>
              <ArrowIcon />
            </SelectWrapper>
          </div>
          <div>
          <Label>Physical Comfort</Label>
            <SelectWrapper style={{ width: "100%" }}>
              <SelectField
                value={selectedPhysicalComfort}
                onChange={(e) => setSelectedPhysicalComfort(e.target.value)}
              >
                <option value="" disabled>
                  Select your physical comfort
                </option>
                <option value="Comfortable">Comfortable</option>
                <option value="Discomfort">Discomfort</option>
                <option value="Severe Pain">Severe Pain</option>
                <option value="Sick">Sick</option>
              </SelectField>
              <ArrowIcon />
            </SelectWrapper>
          </div>
        </RowContainer>
        <RowContainer>
          <div>
            <Label>Energy Level</Label>
            <SelectWrapper style={{ width: "100%" }}>
              <SelectField
                value={selectedEnergyLevel}
                onChange={(e) => setSelectedEnergyLevel(e.target.value)}
              >
                <option value="" disabled>
                  Select your energy level
                </option>
                <option value="Rested">Rested</option>
                <option value="Exausted">Exausted</option>
                <option value="Hyperactive">Hyperactive</option>
                <option value="Sluggish">Sluggish</option>
                
              </SelectField>
              <ArrowIcon />
            </SelectWrapper>
          </div>
          <div>
          <Label>Time Range</Label>
            <SelectWrapper style={{ width: "100%" }}>
              <SelectField
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
              >
                <option value="" disabled>
                  Select your time range
                </option>
                <option value="6 AM ~ 9 AM">6 AM ~ 9 AM</option>
                <option value="9 AM ~ 12 PM">9 AM ~ 12 PM</option>
                <option value="12 PM ~ 3 PM">12 PM ~ 3 PM</option>
                <option value="3 PM ~ 6 PM">3 PM ~ 6 PM</option>
                <option value="6 PM ~ 9 PM">6 PM ~ 9 PM</option>
                <option value="9 PM ~ 12 AM">9 PM ~ 12 AM</option>
                <option value="12 AM ~ 3 AM">12 AM ~ 3 AM</option>
                <option value="3 AM ~ 6 AM">3 AM ~ 6 AM</option>
                
              </SelectField>
              <ArrowIcon />
            </SelectWrapper>
          </div>
        </RowContainer>

        <Label>
          Notes <span>(Optional)</span>
        </Label>
        <RichTextArea placeholder="Write here..." />
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <AddGoalButton onClick={onClose}>Add Mood</AddGoalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default AddMoodModal;
