import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import colors from "../colors";
import { FaChevronDown, FaTimes } from "react-icons/fa";

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

const SelectedCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const CategoryTag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
`;

const RemoveIcon = styled(FaTimes)`
  margin-left: 0.5rem;
  background-color: ${colors.kWhiteColor};
  border-radius: 50%;
  color: ${colors.kPrimaryColor};
  padding: 0.2rem;
  cursor: pointer;
`;

function FilterByModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const categories = [
    "Utilities",
    "Transportation",
    "Debt Payments",
    "Insurance",
    "Health",
    "Entertainment",
    "Housing",
    "Personal Care",
    "Childcare",
    "Maintenance",
    "Membership",
    "Medical",
    "Miscellaneous",
    "Taxes",
    "Restaurants",
    "Food",
    "Gas",
    "Travel Expenses",
    "Mortgage Payment",
    "Rent Payment",
    "Rent Income",
    "Condo Fee",
    "Others",
  ];

  const handleCategorySelect = (e) => {
    const category = e.target.value;
    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
    setSelectedCategory("");
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== categoryToRemove)
    );
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Label>Type</Label>
        <SelectWrapper>
          <SelectField
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </SelectField>
          <ArrowIcon />
        </SelectWrapper>
        <Label>Category</Label>
        <SelectWrapper>
          <SelectField
            value={selectedCategory}
            onChange={handleCategorySelect}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </SelectField>
          <ArrowIcon />
        </SelectWrapper>
        <SelectedCategoriesContainer>
          {selectedCategories.map((category, index) => (
            <CategoryTag key={index}>
              {category}
              <RemoveIcon onClick={() => handleRemoveCategory(category)} />
            </CategoryTag>
          ))}
        </SelectedCategoriesContainer>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <AddGoalButton onClick={onClose}>Apply Filter</AddGoalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default FilterByModal;
