import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import ArrowRise from "../asset/icons/ArrowRise.png";
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
import ModalComponent from "../components/physical_modal";
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


const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${colors.kWhiteColor};
`;

const PhysicalWrapper = styled.div`
  display: flex;
  flex: 1;
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
  margin-right:1rem;
  @media (max-width: 768px) {
  margin-right:0.2rem;
  margin-left:0.4rem;
  
  }
`;

const BannerText = styled.div`
  flex: 1;
  padding: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const BannerImage = styled.img`
  width: 10.5rem;
  height: auto;
  margin-top: 1rem;
  @media (max-width: 450px) {
  width:20vw;
  margin-top:12rem;
  }
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.kWhiteColor};
  border-left: 1px solid ${colors.kStrokeColor1};
  padding:20px;
   @media (max-width: 768px) {
  display:none;
  
  }
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
  font-size: 1.2rem;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: ${colors.kBlackColor};
`;

const UserHandle = styled.p`
  font-size: 0.8rem;
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
  font-size: 1rem;
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
  font-size: 1rem;
  color: ${colors.kBlackColor};
  &:hover {
    color: ${colors.kPrimaryColor};
  }
`;

const MonthTitle = styled.div`
  font-size: 1rem;
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
  font-size: 0.8rem;
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
  width: 2rem;
  height: 2rem;
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

const BoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 450px) {
  flex-direction:column;
  margin-top: 1rem;
  }
`;
const SummaryContainer = styled.div`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  padding: 1rem;
  margin:0.5rem;
  color: ${colors.kWhiteColor};
  @media (max-width: 300px) {
    width:60vw;
  }
`;

const SummaryValue = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
   @media (max-width: 450px) {
    font-size:1rem;
  }
`;

const SummaryLabel = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
`;


const GrowthContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
const Button = styled.div`
  background-color: ${colors.kWhiteColor};
  border-radius: 100px;
  border: 2px solid ${colors.kWhiteColor}; /* Fixed incorrect 'borderColor' */
  color: black;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem; /* Adjusted for better fit */
  font-weight: bold;
  padding: 0;
  
  @media (max-width: 450px) {
    width: 2rem;
    height: 2rem;
  }
`;
const GrowthIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const GrowthText = styled.span`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
`;
const HorizontalLine = styled.hr`
  width: 100%;  /* Full width */
  height: 2px;  /* Thickness */
  background-color: white;  /* White color */
  border: none;  /* Remove default border */
  margin: 10px 0; /* Add spacing above and below */
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
    <>
    <head>
    <title>Physical | acquame-web</title>
  </head>
  
    <PhysicalContainer>
      <MainContent>
        <ContentWrapper>
          <PhysicalWrapper>
            <LeftColumn>
            <Banner>
                <BannerText>
                  <BannerTitle>
                  Your physical health is the cornerstone of a vibrant life. Track and manage key aspects to stay active, energized, and in control of your well-being.                  </BannerTitle>
                </BannerText>
                <BannerImage src={PhysicalBannerImage} alt="financial Banner" />
              </Banner>
              <BoxRow>
              <SummaryContainer bgColor={colors.kPrimaryColor}>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <SummaryValue>Know My Body</SummaryValue>
              <Button >+</Button>
              </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Weight: </SummaryLabel>
                <SummaryLabel>50 kg</SummaryLabel>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Height: </SummaryLabel>
                <SummaryLabel>170cm</SummaryLabel>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>BMI: </SummaryLabel>
                <SummaryLabel>18.4</SummaryLabel>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Body Fat Percentage: </SummaryLabel>
                <SummaryLabel>20%</SummaryLabel>
                </div>
              </SummaryContainer>
              <SummaryContainer bgColor={colors.kDarkPinkColor}>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <SummaryValue>Medication</SummaryValue>
              <Button >+</Button>
              </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Aspirin: </SummaryLabel>
                <SummaryLabel>50 mg, twice a day</SummaryLabel>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Next Dose: </SummaryLabel>
                <SummaryLabel>10 am</SummaryLabel>
                </div>
                <HorizontalLine></HorizontalLine>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <SummaryValue>Allergy</SummaryValue>
              <Button >+</Button>
              </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Dust Mites: </SummaryLabel>
                <SummaryLabel>Mild</SummaryLabel>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyItems:'center'}}>

                <SummaryLabel>Causing sneazing and itch</SummaryLabel>
                </div>
              </SummaryContainer>
              </BoxRow>
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

              <CalendarWrapper onClick={handleOpenModal}>
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
    </>
  );
}

export default PhysicalPage;
