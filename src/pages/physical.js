import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import emojiSmile from "../asset/icons/smiley_emoji.png";
import PhysicalBannerImage from "../asset/images/physical_banner.png";
import userImage from "../asset/images/user_profile.png";
import weightIcon from "../asset/icons/weight_icon.png";
import heightIcon from "../asset/icons/bmi_icon.png";
import medicalIcon from "../asset/icons/medical_info_icon.png";
import stepIcon from "../asset/icons/steps_icon.png";
import hydrationIcon from "../asset/icons/hydration_icon.png";
import stableWeightIcon from "../asset/icons/weight_icon.png";
import "@fontsource/roboto";
import "@fontsource/lato";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../components/physical_goal_modal";
import ModalComponent1 from "../components/add_activity_modal";

const PhysicalContainer = styled.div`
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

const PhysicalWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 1rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const LeftColumn = styled.div`
  flex: 3;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  color: white;
`;

const BannerText = styled.div`
  flex: 1;
  padding: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const BannerImage = styled.img`
  width: 10.5rem;
  height: auto;
  margin-top: 1rem;
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
    `linear-gradient(to right, white ${(value / max) * 100}%, ${
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
    background: white;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
`;

const SliderValue = styled.div`
  position: absolute;
  top: 1.5rem;
  left: ${({ value, max }) => `calc(${(value / max) * 100}% - 1rem)`};
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const ViewGoalsButton = styled.button`
  background-color: ${colors.kWhiteColor}35;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.7rem;
  font-size: 1rem;
  font-weight: normal;
  margin-top: 2rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subheadings = styled.h4`
  font-size: 1.3rem;
  margin: 2.5rem 0rem 0rem 0rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

const MetricContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const MetricTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: ${colors.kWhiteColor};
  margin: 0 0 0.5rem;
`;

const MetricBox = styled.div`
  flex: 1;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  margin-right: 1rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const MetricSubText = styled.p`
  font-size: 1rem;
  color: ${colors.kWhiteColor}70;
`;

const MetricIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${colors.kWhiteColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const MetricIcon = styled.img`
  width: 1.5rem;
  height: auto;
`;

const TipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;

const TipBox = styled.div`
  flex: 1;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const TipRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TipIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${colors.kWhiteColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const TipText = styled.p`
  color: ${colors.kWhiteColor};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
`;

const TipDetails = styled.p`
  color: white;
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
`;

const TipIcon = styled.img`
  width: 1.5rem;
  height: auto;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.kWhiteColor};
  border-left: 1px solid ${colors.kStrokeColor1};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const UserImage = styled.img`
  width: 15rem;
  height: 15rem;
`;

const UserName = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: ${colors.kBlackColor};
`;

const UserHandle = styled.p`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  color: ${colors.kHandleColor};
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
  margin-left: 12rem;
`;

const CalendarWrapper = styled.div`
  border: 1px solid ${colors.kStrokeColor}67;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0rem 2rem 0rem 1rem;
  width: 90%;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${colors.kBlackColor};
  &:hover {
    color: ${colors.kPrimaryColor};
  }
`;

const MonthTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.kBlackColor};
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Day = styled.div`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
  color: ${colors.kBlackColor};
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

const DateCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ isToday }) =>
    isToday ? `${colors.kPrimaryColor}` : "transparent"};
  border: ${({ highlighted }) =>
    highlighted ? `2px solid ${colors.kPrimaryColor}` : "none"};
  color: ${({ isToday }) =>
    isToday ? `${colors.kWhiteColor}` : `${colors.kBlackColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
`;

function PhysicalPage() {
  const highlightedDates = [7, 8, 10];
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };
  const generateCalendarDays = (date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(i);
    }

    return days;
  };

  const navigate = useNavigate();
  const handleWeightHistoryClick = () => {
    navigate("/weight-screen");
  };

  const handleHeightHistoryClick = () => {
    navigate("/height-screen");
  };

  const handleMedicalHistoryClick = () => {
    navigate("/medical-screen");
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isModalOpen1, setIsModalOpen1] = React.useState(false);

  const handleOpenModal1 = () => setIsModalOpen1(true);
  const handleCloseModal1 = () => setIsModalOpen1(false);

  return (
    <PhysicalContainer>
      <MainContent>
        <SidebarWrapper>
          <SideBar />
        </SidebarWrapper>
        <ContentWrapper>
          <Header />
          <PhysicalWrapper>
            <LeftColumn>
              <Banner>
                <BannerText>
                  <BannerTitle>
                    Physical Health Goals
                    <img
                      src={emojiSmile}
                      style={{ width: "1.4rem", marginLeft: "1rem" }}
                      alt="emoji"
                    />
                  </BannerTitle>

                  <SliderContainer>
                    <StyledSliderContainer>
                      <StyledSlider value={80} max={100} />
                      <SliderValue value={80} max={100}>
                        4/5
                      </SliderValue>
                    </StyledSliderContainer>
                  </SliderContainer>
                  <ViewGoalsButton onClick={handleOpenModal}>
                    View Goals
                  </ViewGoalsButton>
                </BannerText>
                <BannerImage src={PhysicalBannerImage} alt="Health Banner" />
              </Banner>

              <Subheadings>Basic Health Metrics</Subheadings>
              <MetricContainer>
                <MetricBox
                  color={colors.kDarkPinkColor}
                  onClick={handleWeightHistoryClick}
                >
                  <MetricTitle>150 Lbs</MetricTitle>
                  <MetricSubText>Weight</MetricSubText>
                  <MetricSubText>BMI</MetricSubText>
                  <MetricIconWrapper>
                    <MetricIcon src={weightIcon} alt="Weight" />
                  </MetricIconWrapper>
                </MetricBox>
                <MetricBox
                  color={colors.kPurpleShade2}
                  onClick={handleHeightHistoryClick}
                >
                  <MetricTitle>180 CM</MetricTitle>
                  <MetricSubText>Height</MetricSubText>
                  <MetricSubText>Waist</MetricSubText>
                  <MetricIconWrapper>
                    <MetricIcon src={heightIcon} alt="Height" />
                  </MetricIconWrapper>
                </MetricBox>
                <MetricBox
                  color={colors.kPurpleColor}
                  onClick={handleMedicalHistoryClick}
                >
                  <MetricTitle>Medical Info</MetricTitle>
                  <MetricSubText>Height</MetricSubText>
                  <MetricSubText>Waist</MetricSubText>
                  <MetricIconWrapper>
                    <MetricIcon src={medicalIcon} alt="Medical Info" />
                  </MetricIconWrapper>
                </MetricBox>
              </MetricContainer>

              <Subheadings>Health Tips and Goals</Subheadings>
              <TipsContainer>
                <TipBox color={colors.kPurpleShade3}>
                  <TipRow>
                    <TipIconWrapper>
                      <TipIcon src={stepIcon} alt="Steps" />
                    </TipIconWrapper>
                    <TipText>Walk 10,000 steps daily</TipText>
                  </TipRow>
                  <TipDetails>
                    Carry a water bottle and set reminders. Add lemon or
                    cucumber for extra flavor.
                  </TipDetails>
                </TipBox>
                <TipBox color={colors.kBlueShade1}>
                  <TipRow>
                    <TipIconWrapper>
                      <TipIcon src={stableWeightIcon} alt="Weight Range" />
                    </TipIconWrapper>
                    <TipText>Maintain a stable weight range</TipText>
                  </TipRow>
                  <TipDetails>
                    Carry a water bottle and set reminders. Add lemon or
                    cucumber for extra flavor.
                  </TipDetails>
                </TipBox>
                <TipBox color={colors.kBlueShade2}>
                  <TipRow>
                    <TipIconWrapper>
                      <TipIcon src={hydrationIcon} alt="Hydration" />
                    </TipIconWrapper>
                    <TipText>Enhance Hydration</TipText>
                  </TipRow>
                  <TipDetails>
                    Carry a water bottle and set reminders. Add lemon or
                    cucumber for extra flavor.
                  </TipDetails>
                </TipBox>
              </TipsContainer>
            </LeftColumn>
            <RightColumn>
              <UserInfo>
                <UserImage src={userImage} alt="User Profile" />
                <UserName>Sophie Fortune</UserName>
                <UserHandle>@sophiefortune</UserHandle>
              </UserInfo>
              <SectionHeader>
                <SectionTitle>Medication Taking</SectionTitle>
                <AddButton onClick={handleOpenModal1}>+ Add</AddButton>
              </SectionHeader>

              <CalendarWrapper>
                <CalendarHeader>
                  <ArrowButton onClick={goToPreviousMonth}>
                    <FaChevronLeft />
                  </ArrowButton>
                  <MonthTitle>
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                  </MonthTitle>
                  <ArrowButton onClick={goToNextMonth}>
                    <FaChevronRight />
                  </ArrowButton>
                </CalendarHeader>
                <DaysRow>
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <Day key={index}>{day}</Day>
                  ))}
                </DaysRow>
                <Calendar>
                  {generateCalendarDays(currentDate).map((day, index) => (
                    <DateCircle
                      key={index}
                      isToday={
                        day === new Date().getDate() &&
                        currentDate.getMonth() === new Date().getMonth() &&
                        currentDate.getFullYear() === new Date().getFullYear()
                      }
                      highlighted={highlightedDates.includes(day)}
                    >
                      {day || ""}
                    </DateCircle>
                  ))}
                </Calendar>
              </CalendarWrapper>
            </RightColumn>
          </PhysicalWrapper>
        </ContentWrapper>
      </MainContent>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      <ModalComponent1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
    </PhysicalContainer>
  );
}

export default PhysicalPage;
