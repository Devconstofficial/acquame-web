import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import LiquidMedice from "../asset/icons/liquid.png";
import PillsMedicine from "../asset/icons/pills.png";
import Environmentalallergy from "../asset/icons/environment_allergy.png";
import RespiratoryAllergy from "../asset/icons/respiratory_allergy.png";
import SkinAllergy from "../asset/icons/skin_allergy.png";
import OtherAllergy from "../asset/icons/other_allergy.png";
import OccupationalAllergy from "../asset/icons/occupational_allergy.png";
import InsectAllergy from "../asset/icons/insect_allergy.png";
import FoodAllergy from "../asset/icons/food_allergy.png";
import DrugsAllergy from "../asset/icons/drugs_allergy.png";
import DeleteIcon from "../asset/icons/delete_icon.png";
import { FaCalendarAlt } from "react-icons/fa";
import ModalComponent from "../components/delete_modal";

const MedicalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.kWhiteColor};
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  background-color: ${colors.kWhiteColor};
`;

const SidebarWrapper = styled.div`
  flex: 0 0 15vw;
  background-color: ${colors.kPrimaryColor};
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${colors.kWhiteColor};
`;

const MedicalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  padding: 1rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const SectionWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h4`
  margin: 0;
  color: ${colors.kBlackColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`;

const AddButton = styled.button`
  border: 1px solid ${colors.kPrimaryColor};
  background-color: ${colors.kPrimaryColor}30;
  color: ${colors.kPrimaryColor};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
   font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

const ListContainer = styled.div`
  height: 30vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  border: 1px solid ${colors.kStrokeColor};
  padding: 1rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  width: 4rem;
  height: 4rem;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
  word-wrap: break-word;
  font-family: "Roboto", sans-serif;
  white-space: normal;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const HistoryActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
`;

const DateRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;

const DateContainer = styled.div`
  text-align: center;
  background-color: ${({ bgColor }) => bgColor}20;
  color: ${({ color }) => color};
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem 0rem;
  font-family: "Roboto", sans-serif;
`;

const ActionCircle = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  font-size: 12px;
  cursor: pointer;
`;

const SeverityLabel = styled.div`
  display: inline-block;
  border: 1px solid
    ${({ severity }) =>
      severity === "High"
        ? colors.kRedColor
        : severity === "Moderate"
        ? colors.kYellowColor
        : colors.kGreenColor};
  background-color: ${({ severity }) =>
    severity === "High"
      ? `${colors.kRedColor}20`
      : severity === "Moderate"
      ? `${colors.kOrangeColor}20`
      : `${colors.kGreenColor}20`};
  color: ${({ severity }) =>
    severity === "High"
      ? colors.kRedColor
      : severity === "Moderate"
      ? colors.kOrangeColor
      : colors.kGreenColor};
  border-radius: 1rem;
  font-family: "Roboto", sans-serif;
  padding: 0.25rem 0.5rem;
  margin-top: 0.5rem;
  max-width:5rem;
  justify-content:center;
`;

function MedicalInfo() {
  const medications = [
    {
      name: "Aspirin",
      description: "500Mg - Take twice a day after meals",
      type: "Pills",
    },
    {
      name: "Lisinopril",
      description: "10Mg - Take once a day in the morning",
      type: "Liquid",
    },
    {
      name: "Aspirin",
      description: "500Mg - Take twice a day after meals",
      type: "Pills",
    },
    {
      name: "Lisinopril",
      description: "10Mg - Take once a day in the morning",
      type: "Liquid",
    },
  ];

  const medicationHistory = [
    {
      name: "Ibuprofen",
      description: "200Mg - Take once a day for pain relief",
      startDate: "01/01/2024",
      endDate: "01/31/2024",
      type: "Pills",
    },
    {
      name: "Amoxicillin",
      description: "250Mg - Take thrice a day for infection",
      startDate: "02/01/2024",
      endDate: "02/15/2024",
      type: "Liquid",
    },
  ];

  const allergies = [
    {
      name: "Dust Mites",
      description: "Causes sneezing and itchy eyes.",
      type: "Environmental",
      severity: "Mild",
    },
    {
      name: "Dairy",
      description: "Can cause hives and stomach issues.",
      type: "Food",
      severity: "High",
    },
    {
      name: "Dust Mites",
      description: "Causes sneezing and itchy eyes.",
      type: "Occupational",
      severity: "Mild",
    },
    {
      name: "Dairy",
      description: "Can cause hives and stomach issues.",
      type: "Drug",
      severity: "Moderate",
    },
    {
      name: "Dust Mites",
      description: "Causes sneezing and itchy eyes.",
      type: "Respiratory",
      severity: "High",
    },
    {
      name: "Dairy",
      description: "Can cause hives and stomach issues.",
      type: "Skin",
      severity: "Moderate",
    },
    {
      name: "Dust Mites",
      description: "Causes sneezing and itchy eyes.",
      type: "Others",
      severity: "Mild",
    },
    {
      name: "Dairy",
      description: "Can cause hives and stomach issues.",
      type: "Insect",
      severity: "Moderate",
    },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
    
      const handleOpenModal = () => setIsModalOpen(true);
      const handleCloseModal = () => setIsModalOpen(false);

  return (
    <MedicalContainer>
      <MainContent>
        <SidebarWrapper>
          <SideBar />
        </SidebarWrapper>
        <ContentWrapper>
          <Header showChevronLeft={true} />
          <MedicalWrapper>
            <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Medication Taking</SectionTitle>
                <AddButton>+ Add</AddButton>
              </SectionHeader>
              <ListContainer>
                {medications.map((med, index) => (
                  <ListItem key={index}>
                    <IconContainer
                      bgColor={
                        med.type === "Pills"
                          ? colors.kPurpleColor
                          : colors.kBluePillsColor
                      }
                    >
                      <img
                        src={
                          med.type === "Pills" ? PillsMedicine : LiquidMedice
                        }
                        style={{ width: "2rem", height: "auto" }}
                        alt="icon"
                      />
                    </IconContainer>
                    <ItemText>
                      <strong>{med.name}</strong>
                      <span style={{fontFamily: "Roboto", color: colors.kGrayColor, marginTop: "0.3rem"}}>{med.description}</span>
                    </ItemText>
                    <column>
                      <DateContainer
                        bgColor={
                          med.type === "Pills"
                            ? colors.kPurpleColor
                            : colors.kBluePillsColor
                        }
                        color={
                          med.type === "Pills"
                            ? colors.kPurpleColor
                            : colors.kBluePillsColor
                        }
                      >
                        <FaCalendarAlt/>
                        12/30
                      </DateContainer>
                      <ActionContainer>
                        <ActionCircle
                          bgColor={colors.kPrimaryColor}
                          textColor={colors.kWhiteColor}
                        >
                          END
                        </ActionCircle>
                        <ActionCircle
                          bgColor={`${colors.kDarkPinkColor}30`}
                          textColor={colors.kDarkPinkColor}
                          onClick={handleOpenModal}
                        >
                          <img
                            src={DeleteIcon}
                            alt="delete"
                            style={{
                              width: "1rem",
                              height: "auto",
                              filter: "invert(1)",
                            }}
                          />
                        </ActionCircle>
                      </ActionContainer>
                    </column>
                  </ListItem>
                ))}
              </ListContainer>
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Medication History</SectionTitle>
              </SectionHeader>
              <ListContainer>
                {medicationHistory.map((history, index) => (
                  <ListItem key={index}>
                    <IconContainer
                      bgColor={
                        history.type === "Pills"
                          ? colors.kPurpleColor
                          : colors.kBluePillsColor
                      }
                    >
                      <img
                        src={
                          history.type === "Pills"
                            ? PillsMedicine
                            : LiquidMedice
                        }
                        style={{ width: "2rem", height: "auto" }}
                        alt="icon"
                      />
                    </IconContainer>
                    <ItemText>
                      <strong>{history.name}</strong>
                      <span style={{fontFamily: "Roboto", color: colors.kGrayColor, marginTop: "0.3rem"}}>{history.description}</span>
                    </ItemText>
                    <column>
                      <DateRow style={{ justifyContent: "space-around" }}>
                        <strong>Start</strong>
                        <strong>End</strong>
                      </DateRow>

                      <DateRow>
                        <DateContainer
                          bgColor={colors.kPrimaryColor}
                          color={colors.kPrimaryColor}
                        ><FaCalendarAlt/>
                          {history.startDate}
                        </DateContainer>

                        <DateContainer
                          bgColor={colors.kPurpleColor}
                          color={colors.kPurpleColor}
                        ><FaCalendarAlt/>
                          {history.endDate}
                        </DateContainer>
                      </DateRow>
                      <HistoryActionContainer>
                        <ActionCircle
                          bgColor={`${colors.kDarkPinkColor}30`}
                          textColor={colors.kDarkPinkColor}
                          onClick={handleOpenModal}
                        >
                          <img
                            src={DeleteIcon}
                            alt="delete"
                            style={{
                              width: "1rem",
                              height: "auto",
                              filter: "invert(1)",
                            }}
                          />
                        </ActionCircle>
                      </HistoryActionContainer>
                    </column>
                  </ListItem>
                ))}
              </ListContainer>
            </SectionWrapper>

            <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Allergy Information</SectionTitle>
                <AddButton>+ Add</AddButton>
              </SectionHeader>
              <ListContainer>
                {allergies.map((allergy, index) => (
                  <ListItem key={index}>
                    <IconContainer
                     bgColor={
                      allergy.type === "Food"
                        ? colors.kFoodColor
                        : allergy.type === "Environmental"
                        ? colors.kEnviromentalColor
                        : allergy.type === "Drug"
                        ? colors.kDrugColor
                        : allergy.type === "Skin"
                        ? colors.kGreenColor2
                        : allergy.type === "Respiratory"
                        ? colors.kRespiratoryColor
                        : allergy.type === "Insect"
                        ? colors.kInsectColor
                        : allergy.type === "Occupational"
                        ? colors.kPurpleShade2
                        : colors.kPurpleShade2
                    }
                    >
                      <img
                        src={
                          allergy.type === "Food"
                            ? FoodAllergy
                            : allergy.type === "Environmental"
                            ? Environmentalallergy
                            : allergy.type === "Insect"
                            ? InsectAllergy
                            : allergy.type === "Skin"
                            ? SkinAllergy
                            : allergy.type === "Respiratory"
                            ? RespiratoryAllergy
                            : allergy.type === "Drug"
                            ? DrugsAllergy
                            : allergy.type === "Occupational"
                            ? OccupationalAllergy
                            : OtherAllergy
                        }
                        style={{ width: "2rem", height: "auto" }}
                        alt="icon"
                      />
                    </IconContainer>
                    <ItemText>
                      <strong>{allergy.name}</strong>
                      <span style={{fontFamily: "Roboto", color: colors.kGrayColor, marginTop: "0.3rem"}}>{allergy.description}</span>
                      <SeverityLabel style={{textAlign:'center'}} severity={allergy.severity}>
                        {allergy.severity}
                      </SeverityLabel>
                    </ItemText>
                    <ActionCircle
                      bgColor={`${colors.kDarkPinkColor}30`}
                      textColor={colors.kDarkPinkColor}
                      onClick={handleOpenModal}
                    >
                      <img
                        src={DeleteIcon}
                        alt="delete"
                        style={{
                          width: "1rem",
                          height: "auto",
                          filter: "invert(1)",
                        }}
                      />
                    </ActionCircle>
                  </ListItem>
                ))}
              </ListContainer>
            </SectionWrapper>
          </MedicalWrapper>
        </ContentWrapper>
      </MainContent>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </MedicalContainer>
  );
}

export default MedicalInfo;
