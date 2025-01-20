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

function AddMedicineModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Label>Medicine Category</Label>
        <SelectWrapper>
          <SelectField
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              Select medicine category
            </option>
            <option value="Liquid">Liquid</option>
            <option value="Pills">Pills</option>
          </SelectField>
          <ArrowIcon />
        </SelectWrapper>

        <Label>Medication Name</Label>
        <InputField type="text" placeholder="Enter medicine name" />

        <Label>Starting Date</Label>
        <InputField type="date" placeholder="Enter start date" />
        <Label>
          Notes <span>(Optional)</span>
        </Label>
        <RichTextArea placeholder="What does this medication do. Do you react well with this medication? " />
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <AddGoalButton onClick={onClose}>Add Medication</AddGoalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default AddMedicineModal;
