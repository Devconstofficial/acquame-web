import styled from "styled-components";
import "@fontsource/work-sans";
import colors from "../colors";
import DeleteIcon from "../asset/icons/delete_icon.png";

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
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center; 
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

const DeleteIconImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
`;

export const DeleteTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.kBlackColor};
  margin: 1rem 0 0.5rem;
`;

export const DeleteText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${colors.kSubTitleGreyColor};
  margin: 0.5rem 0 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:14rem;
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

function DeleteConfirmationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <DeleteIconImage src={DeleteIcon} alt="Delete Icon" />
        <DeleteTitle>Confirm Delete?</DeleteTitle>
        <DeleteText>
          Are you sure you want to delete this item? This action is irreversible
          and will permanently remove the selected record from the system.
        </DeleteText>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <AddGoalButton onClick={onClose}>Confirm Delete</AddGoalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default DeleteConfirmationModal;
