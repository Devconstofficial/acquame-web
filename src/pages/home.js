import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import homeBannerImage from "../asset/images/home_banner.png";
import financialImage from "../asset/icons/financial_logo.png";
import physicalImage from "../asset/icons/physical_logo.png";
import mentalImage from "../asset/icons/mental.png";
import userImage from "../asset/images/user_profile.png";
import "@fontsource/roboto";
import "@fontsource/lato";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.kWhiteColor};
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  background-color: ${colors.kWhiteColor};

  ${media.extraSmall`
    flex-direction: column;
  `}

  ${media.mobile`
    flex-direction: column;
  `}

  ${media.tablet`
    flex-direction: column;
  `}
`;

const SidebarWrapper = styled.div`
  flex: 0 0 15vw;
  background-color: ${colors.kPrimaryColor};

  ${media.extraSmall`
    flex: 0 0 auto;
  `}

  ${media.mobile`
    flex: 0 0 auto;
  `}
  ${media.tablet`
    flex: 0 0 auto;
  `}
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${colors.kWhiteColor};
`;

const DashboardWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 1rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}

  ${media.mobile`
    flex-direction: column;
    gap: 1rem;
  `}

   ${media.tablet`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const LeftColumn = styled.div`
  flex: 3;

  ${media.extraSmall`
    flex: 1;
  `}

  ${media.mobile`
    flex: 1;
  `}
  ${media.tablet`
    flex: 1;
  `}
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 20vh;
  color: white;

  ${media.extraSmall`
    flex-direction: column;
    height: auto;
    text-align: start;
  `}

  ${media.mobile`
    height: auto;
    text-align: start;
  `}

  ${media.tablet`
    height: auto;
    text-align: start;
  `}
`;

const BannerImage = styled.img`
  width: 10rem;
  height: auto;
  margin-right: 2rem;

  ${media.extraSmall`
    width: 6rem;
    margin: 0 0 1rem 0;
  `}

  ${media.mobile`
    width: 6rem;
    margin: 0 0 1rem 0;
  `}

  ${media.tablet`
    width: 8rem;
    margin: 0 0 1.2rem 0;
  `}
`;

const BannerText = styled.div`
  flex: 1;
  text-align: left;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;

  ${media.extraSmall`
    font-size: 1.2rem;
  `}

  ${media.mobile`
    font-size: 1.3rem;
  `}

   ${media.tablet`
    font-size: 1.6rem;
  `}
`;

const BannerSubtitle = styled.p`
  font-size: 1.3rem;

  ${media.extraSmall`
    font-size: 0.9rem;
  `}
  ${media.mobile`
    font-size: 0.9rem;
  `}

  ${media.tablet`
    font-size: 1rem;
  `}
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

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.kWhiteColor};
  border-left: 1px solid ${colors.kStrokeColor1};

  ${media.extraSmall`
    display: none;
  `}
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

const SectionTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${colors.kBlackColor};
  font-family: "Lato", sans-serif;
  align-self: flex-start;
`;

const ActivityBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 1rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  ${media.mobile`
    flex-direction: row;
  `}
`;

const ActivityIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 20%;
  margin-right: 1rem;
  background-color: ${(props) => props.bgColor || "#ccc"};
`;

const ActivityIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ActivityText = styled.div`
  flex: 1;
  font-size: 1rem;
  color: #333;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.1rem;

  p {
    margin: 0;
    font-weight: ${(props) => (props.isTitle ? "bold" : "normal")};
  }
`;
function Dashboard() {
  return (
    <DashboardContainer>
      <MainContent>
        <SidebarWrapper>
          <SideBar />
        </SidebarWrapper>
        <ContentWrapper>
          <Header />
          <DashboardWrapper>
            <LeftColumn>
              <Banner>
                <BannerImage src={homeBannerImage} alt="Health Banner" />
                <BannerText>
                  <BannerTitle>Health is improving!</BannerTitle>
                  <BannerSubtitle>
                    Your Financial Health is improving! Keep up the great work
                    with expense tracking.
                  </BannerSubtitle>
                </BannerText>
              </Banner>

              <BoxRow>
                <Box bgColor={colors.kPinkColor}>
                  <BoxImage src={financialImage} alt="Financial" />
                  <BoxText>Financial</BoxText>
                </Box>
                <Box bgColor={colors.kOrangeColor}>
                  <BoxImage src={physicalImage} alt="Physical" />
                  <BoxText>Physical</BoxText>
                </Box>
                <Box bgColor={colors.kPrimaryColor}>
                  <BoxImage src={mentalImage} alt="Mental" />
                  <BoxText>Mental</BoxText>
                </Box>
              </BoxRow>
            </LeftColumn>
            <RightColumn>
              <UserInfo>
                <UserImage src={userImage} alt="User Profile" />
                <UserName>Sophie Fortune</UserName>
                <UserHandle>@sophiefortune</UserHandle>
              </UserInfo>

              <SectionTitle>Recent Activities</SectionTitle>

              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kPinkColor}>
                  <ActivityIcon src={financialImage} alt="Financial Icon" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{fontWeight: "bold"}}>Financial Health</p>
                  <p style={{color: colors.kLightGreyColor1, fontWeight: "300"}}>improved by 5% this month.</p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kPrimaryColor}>
                  <ActivityIcon src={mentalImage} alt="Mental Icon" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{fontWeight: "bold"}}>Mental Health</p>
                  <p style={{color: colors.kLightGreyColor1, fontWeight: "300"}}>improved by 7% this month.</p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kOrangeColor}>
                  <ActivityIcon src={physicalImage} alt="Physical Icon" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{fontWeight: "bold"}}>Physical Health</p>
                  <p style={{color: colors.kLightGreyColor1, fontWeight: "300"}}>improved by 5% this month.</p>
                </ActivityText>
              </ActivityBox>
            </RightColumn>
          </DashboardWrapper>
        </ContentWrapper>
      </MainContent>
    </DashboardContainer>
  );
}

export default Dashboard;
