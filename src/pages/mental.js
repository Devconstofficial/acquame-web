import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import userImage from "../asset/images/user_profile.png";
import "@fontsource/roboto";
import "@fontsource/lato";
import "@fontsource/inter";
import "@fontsource/poppins";
import Calendar from "../asset/icons/calendar.png";
import Smiley from "../asset/icons/smiley_emoji.png";
import Clock from "../asset/icons/clock.png";
import Heart from "../asset/icons/heart.png";
import Rested from "../asset/icons/rested.png";
import MentalBanner from "../asset/images/mental_banner.png";
import AnxietyCheck from "../asset/icons/anxiety_check.png";
import Relaxation from "../asset/icons/relaxation.png";
import Journal from "../asset/icons/journal.png";
import Therapy from "../asset/icons/therapy_note.png";
import Challenge from "../asset/icons/challenge.png";
import Plan from "../asset/icons/plan_week.png";
import Other from "../asset/icons/resources.png";
import InsightBanner from "../asset/images/reduce_stress_banner.png";
import ModalComponent from "../components/view_details_modal";
import GenerateInsightsModal from "../components/generate_insight_modal";
import MoodHistoryModal from "../components/mood_history_modal";
import TherapyModal from "../components/therapy_note_modal";
import JournalModal from "../components/journal_modal";
import AnxietyCheckMod from "../components/anxiety_check_modal";
import ChallengeModal from "../components/challenge_unhelpful_through_modal";
import RelaxationExerciseModal from "../components/relaxation_exercise_modal";

const MentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.kWhiteColor};
  overflow-x:hidden;
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

const MentalWrapper = styled.div`
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

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem 1rem 1rem;
  max-width:17vw;
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

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  color: white;
  max-height: 26vh;
`;

const BannerText = styled.div`
  flex: 1;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const BannerImage = styled.img`
  width: 30rem;
  height: auto;
  margin-top: 1.5rem;
`;

const ViewGoalsButton = styled.button`
  background-color: ${colors.kWhiteColor}60;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.3rem 1.7rem;
  font-size: 1rem;
  font-weight: normal;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconImage = styled.img`
  width: 2rem;
  height: auto;
`;

const IconTitlecontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.kWhiteColor}50;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 0rem 0.9rem;
  max-height: 3vh;
`;

const IconTitle = styled.p`
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  color: ${colors.kWhiteColor};
`;

const BoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const Box = styled.div`
  flex: 1;
  margin: 0 0.5rem;
  padding: 1rem;
  height: 20vh;
  background-color: ${(props) =>
    props.bgColor || colors.kPinkColor || "#f0f0f0"};
  border-radius: 0.8rem;
  text-align: center;
  cursor: pointer;
  align-content: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.extraSmall`
    margin: 0 0.5rem;
  `}
  ${media.mobile`
  margin: 0 0.5rem;
  `}
`;

const BoxImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const BoxText = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: ${colors.kWhiteColor};
  font-family: "Roboto", sans-serif;
`;
const InsightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InsightsTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.kBlackColor};
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
`;

const InsightsImage = styled.img`
  width: 50%;
  margin-bottom: 1.5rem;
  align-self:center;
`;

const InsightsCard = styled.div`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  width: 80%;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  text-align: left;
  align-items:center;
  justify-content:center;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

const InsightsDescription = styled.p`
  font-size: 0.9rem;
  font-family: "Lato", sans-serif;
  color: ${colors.kWhiteColor};
  
`;

const ViewDetailsButton = styled.button`
  background-color: ${colors.kWhiteColor};
  color: ${colors.kPrimaryColor};
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self:center;
  margin: 0rem 3.5rem;
   align-items:center;
  justify-content:center;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ToggleButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  width: 70%;
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;

`;


function MentalPage() {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isModalOpen1, setIsModalOpen1] = React.useState(false);

  const handleOpenModal1 = () => setIsModalOpen1(true);
  const handleCloseModal1 = () => setIsModalOpen1(false);

  const [isModalOpen2, setIsModalOpen2] = React.useState(false);

  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);

  const [isModalOpen3, setIsModalOpen3] = React.useState(false);

  const handleOpenModal3 = () => setIsModalOpen3(true);
  const handleCloseModal3 = () => setIsModalOpen3(false);

  const [isModalOpen4, setIsModalOpen4] = React.useState(false);

  const handleOpenModal4 = () => setIsModalOpen4(true);
  const handleCloseModal4 = () => setIsModalOpen4(false);

  const [isModalOpen5, setIsModalOpen5] = React.useState(false);

  const handleOpenModal5 = () => setIsModalOpen5(true);
  const handleCloseModal5 = () => setIsModalOpen5(false);

  const [isModalOpen6, setIsModalOpen6] = React.useState(false);

  const handleOpenModal6 = () => setIsModalOpen6(true);
  const handleCloseModal6 = () => setIsModalOpen6(false);

  const [isModalOpen7, setIsModalOpen7] = React.useState(false);

  const handleOpenModal7 = () => setIsModalOpen7(true);
  const handleCloseModal7 = () => setIsModalOpen7(false);
  return (
    <MentalContainer>
      <MainContent>
        <SidebarWrapper>
          <SideBar />
        </SidebarWrapper>
        <ContentWrapper>
          <Header />
          <MentalWrapper>
            <LeftColumn>
              <Banner>
                <BannerText>
                  <BannerTitle>How are you feeling Today?</BannerTitle>
                  <IconRow>
                    <IconItem>
                      <IconImage
                        src={Calendar}
                        alt="Calendar Icon"
                        style={{ width: "1.5rem", marginTop: "0.5rem" }}
                      />
                      <IconTitlecontainer>
                        <IconTitle>Dec 01, 24</IconTitle>
                      </IconTitlecontainer>
                    </IconItem>
                    <IconItem>
                      <IconImage src={Clock} alt="Clock Icon" />
                      <IconTitlecontainer>
                        <IconTitle>6 AM - 9 AM</IconTitle>
                      </IconTitlecontainer>
                    </IconItem>
                    <IconItem>
                      <IconImage src={Smiley} alt="Smiley Icon" />
                      <IconTitlecontainer>
                        <IconTitle>Joyful</IconTitle>
                      </IconTitlecontainer>
                    </IconItem>
                    <IconItem>
                      <IconImage src={Heart} alt="Heart Icon" />
                      <IconTitlecontainer>
                        <IconTitle>Comfortable</IconTitle>
                      </IconTitlecontainer>
                    </IconItem>
                    <IconItem>
                      <IconImage src={Rested} alt="Rested Icon" />
                      <IconTitlecontainer>
                        <IconTitle>Rested</IconTitle>
                      </IconTitlecontainer>
                    </IconItem>
                  </IconRow>
                  <ViewGoalsButton onClick={handleOpenModal2}>View History</ViewGoalsButton>
                </BannerText>
                <BannerImage src={MentalBanner} alt="financial Banner" />
              </Banner>
              <BoxRow>
                <Box bgColor={colors.kPurpleShade2} onClick={handleOpenModal5}>
                  <BoxImage src={AnxietyCheck} alt="Anxiety" />
                  <BoxText>Anxiety Check</BoxText>
                </Box>
                <Box bgColor={colors.kDarkPinkColor} onClick={handleOpenModal7}>
                  <BoxImage src={Relaxation} alt="Relaxation" />
                  <BoxText>Relaxation Exercise</BoxText>
                </Box>
                <Box bgColor={colors.kPurpleColor} onClick={handleOpenModal4}>
                  <BoxImage src={Journal} alt="Journal" />
                  <BoxText>Journal</BoxText>
                </Box>
              </BoxRow>
              <BoxRow>
                <Box bgColor={colors.kGreenColor} onClick={handleOpenModal3}>
                  <BoxImage src={Therapy} alt="Therapy" />
                  <BoxText>Therapy Notes</BoxText>
                </Box>
                <Box bgColor={colors.kChallengeColor} onClick={handleOpenModal6}>
                  <BoxImage src={Challenge} alt="Challenge" />
                  <BoxText>Challenge unhelpful thoughts </BoxText>
                </Box>
                <Box bgColor={colors.kPlanWeekColor}>
                  <BoxImage src={Plan} alt="Plan" />
                  <BoxText>Plan Your Week</BoxText>
                </Box>
              </BoxRow>
              <BoxRow
                style={{
                  display: "flex",
                  maxWidth: "20vw",
                  marginLeft: "21vw",
                }}
              >
                <Box bgColor={colors.kPrimaryColor}>
                  <BoxImage src={Other} alt="Therapy" />
                  <BoxText>Other Resources</BoxText>
                </Box>
              </BoxRow>
            </LeftColumn>
            <RightColumn>
              <UserInfo>
                <UserImage src={userImage} alt="User Profile" />
                <UserName>Sophie Fortune</UserName>
                <UserHandle>@sophiefortune</UserHandle>
              </UserInfo>
              <InsightsWrapper>
                <InsightsTitle>AI Insights & Suggestion</InsightsTitle>
                <InsightsImage src={InsightBanner} alt="Insight Banner" />
                <InsightsCard>
                  <h4>Reduce Stress with Simple Breathing Techniques</h4>
                  <InsightsDescription>
                    AI suggests easy, effective breathing exercises to calm
                    your mind in stressful moments.
                  </InsightsDescription>
                  <ViewDetailsButton onClick={handleOpenModal}>
                    View Details
                  </ViewDetailsButton>
                </InsightsCard>
              </InsightsWrapper>
              <ToggleButton onClick={handleOpenModal1}>
                  Generate Insights
                </ToggleButton>
            </RightColumn>
          </MentalWrapper>
        </ContentWrapper>
      </MainContent>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      <GenerateInsightsModal isOpen={isModalOpen1} onClose={handleCloseModal1}/>
      <MoodHistoryModal isOpen={isModalOpen2} onClose={handleCloseModal2}/>
      <TherapyModal isOpen={isModalOpen3} onClose={handleCloseModal3}/>
      <JournalModal isOpen={isModalOpen4} onClose={handleCloseModal4}/>
      <AnxietyCheckMod isOpen={isModalOpen5} onClose={handleCloseModal5}/>
      <ChallengeModal isOpen={isModalOpen6} onClose={handleCloseModal6}/>
      <RelaxationExerciseModal isOpen={isModalOpen7} onClose={handleCloseModal7}/>
    </MentalContainer>
  );
}

export default MentalPage;
