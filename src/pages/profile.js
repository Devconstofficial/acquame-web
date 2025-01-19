import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import colors from "../colors";
import referBanner from "../asset/images/referal_banner.png";
import EmailIcon from "../asset/icons/email_icon.png";
import PhoneIcon from "../asset/icons/phone_icon.png";
import NameIcon from "../asset/icons/profile_icon_inactive.png";
import GenderIcon from "../asset/icons/gender_icon.png";
import CalendarIcon from "../asset/icons/calendar.png";
import AllergyIcon from "../asset/icons/allergy.png";
import HealthCondition from "../asset/icons/health_condition.png";
import CameraIcon from "../asset/icons/camera_icon.png";
import ProfileImage from "../asset/images/user_image.png";
import EditIcon from "../asset/icons/edit_icon.png";
import PillsImage from "../asset/icons/pills.png";
import "@fontsource/roboto";
import UpdateUserInfo from "../components/update_user_info_modal";

const MentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Roboto", sans-serif;
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

const MentalWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 2rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const LeftColumn = styled.div`
  flex: 3;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin: 1rem 0rem;
`;

const ToggleButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  width: 50%;
  background-color: ${colors.kDarkPinkColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
`;

const SecondaryButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  width: 50%;
  background-color: ${colors.kPrimaryColor}80;
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${colors.kPrimaryColor};
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.kPrimaryColor};
  border-radius: 1rem;
  padding: 0rem 1.5rem;
  height: 20vh;
  color: white;
  margin-top: 2rem;

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
  width: 13rem;
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
  margin-bottom: 2rem;
  font-family: "Roboto", sans-serif;
`;

const BannerTitle = styled.h2`
  font-size: 2rem;
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
  font-size: 1rem;
  color: ${colors.kWhiteColor}80;

  ${media.extraSmall`
    font-size: 0.7rem;
  `}
  ${media.mobile`
    font-size: 0.7rem;
  `}

  ${media.tablet`
    font-size: 0.8rem;
  `}
`;
const ViewDetailsButton = styled.button`
  background-color: ${colors.kWhiteColor};
  color: ${colors.kPrimaryColor};
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;

  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const UserImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
`;

const ProfileImageStyled = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CameraIconStyled = styled.img`
  width: 1rem;
  height: 1rem;
`;

const CameraIconContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  background-color: ${colors.kPrimaryColor};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.p`
  margin-top: 0.2rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: ${colors.kBlackColor};
`;

const UserJoined = styled.p`
  font-size: 1rem;
  color: ${colors.kLightGreyColor}80;
  margin-top: 0rem;
  padding: 0rem;
  margin-bottom: 1rem;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid ${colors.kStrokeColor};
  padding: 1rem;
  border-radius: 0.5rem;
`;

const DetailLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const DetailIcon = styled.img`
  width: 2rem;
  height: auto;
`;

const DetailText = styled.p`
  font-size: 1.4rem;
  padding: 0rem;
  margin: 0rem 0rem 0.3rem 0rem;
  color: ${colors.kBlackColor};
`;
const DetailText1 = styled.p`
  font-size: 0.9rem;
  margin: 0rem;
  padding: 0rem;
  color: ${colors.kLightGreyColor};
`;

const EditIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.kPrimaryColor};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const EditIconStyled = styled.img`
  width: 1rem;
  height: 1rem;
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

function ProfilePage() {
  const navigate = useNavigate();
  const [isEmergencyDetails, setIsEmergencyDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleDetails = () => {
    setIsEmergencyDetails((prev) => !prev);
  };

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
              <UserImageContainer>
                <ProfileImageWrapper>
                  <ProfileImageStyled src={ProfileImage} alt="User" />
                  <CameraIconContainer>
                    <CameraIconStyled src={CameraIcon} alt="Camera" />
                  </CameraIconContainer>
                </ProfileImageWrapper>
                <UserName>Henry Arthur</UserName>
                <UserJoined>Joined in 2021</UserJoined>
              </UserImageContainer>
              <DetailsList>
                {!isEmergencyDetails ? (
                  <>
                    <DetailItem>
                      <DetailLeft>
                        <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon
                            src={NameIcon}
                            alt="Name"
                            style={{
                              color: colors.kWhiteColor,
                              filter: "invert(1)",
                              width: "2rem",
                            }}
                          />
                        </IconContainer>
                        <ItemText>
                          <DetailText>Henry Arthur</DetailText>
                          <DetailText1>Username</DetailText1>
                        </ItemText>
                      </DetailLeft>
                      <EditIconContainer onClick={handleOpenModal}>
                        <EditIconStyled src={EditIcon} alt="Edit" />
                      </EditIconContainer>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                        <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={EmailIcon} alt="Email" />
                        </IconContainer>
                        <ItemText>
                          <DetailText>henryarthur@gmail.com</DetailText>
                          <DetailText1>Email</DetailText1>
                        </ItemText>
                      </DetailLeft>
                      <EditIconContainer>
                        <EditIconStyled src={EditIcon} alt="Edit" />
                      </EditIconContainer>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                        <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={PhoneIcon} alt="Phone" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>(223) 555-0100</DetailText>
                          <DetailText1>Phone Number</DetailText1>
                        </ItemText>
                        
                      </DetailLeft>
                      <EditIconContainer>
                        <EditIconStyled src={EditIcon} alt="Edit" />
                      </EditIconContainer>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                        <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={GenderIcon} alt="Gender" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>Female</DetailText>
                          <DetailText1>Gender</DetailText1>
                        </ItemText>
                        
                      </DetailLeft>
                      <EditIconContainer>
                        <EditIconStyled src={EditIcon} alt="Edit" />
                      </EditIconContainer>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                        <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={CalendarIcon} alt="DOB" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>12 May 2011</DetailText>
                          <DetailText1>Date of Birth</DetailText1>
                        </ItemText>
                      </DetailLeft>
                      <EditIconContainer>
                        <EditIconStyled src={EditIcon} alt="Edit" />
                      </EditIconContainer>
                    </DetailItem>
                  </>
                ) : (
                  <>
                    <DetailItem>
                      <DetailLeft>
                      <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={PillsImage} alt="Medication" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>Insulin (20 units daily)</DetailText>
                          <DetailText1>Medications</DetailText1>
                        </ItemText>
                        
                       
                      </DetailLeft>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                      <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={HealthCondition} alt="Condition" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>Asthma</DetailText>
                          <DetailText1>Health Condition</DetailText1>
                        </ItemText>
                        
                        
                      </DetailLeft>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                      <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                           <DetailIcon src={AllergyIcon} alt="Allergy" />
                        </IconContainer>
                        <ItemText>
                          <DetailText>Penicillin, Shellfish</DetailText>
                          <DetailText1>Allergies</DetailText1>
                        </ItemText>
                       
                        
                      </DetailLeft>
                    </DetailItem>
                    <DetailItem>
                      <DetailLeft>
                      <IconContainer
                          bgColor={
                            !isEmergencyDetails
                              ? colors.kPrimaryColor
                              : colors.kDarkPinkColor
                          }
                        >
                          <DetailIcon src={PhoneIcon} alt="Emergency Contact" />
                        </IconContainer>
                        <ItemText>
                        <DetailText>
                          (223) 555-0100 Sarah Doe (Parent)
                        </DetailText>
                          <DetailText1>Emergency Contacts</DetailText1>
                        </ItemText>
                        
                        
                      </DetailLeft>
                    </DetailItem>
                  </>
                )}
              </DetailsList>
              <Banner>
                <BannerImage src={referBanner} alt="Health Banner" />
                <BannerText>
                  <BannerTitle>Refer & earn rewards</BannerTitle>
                  <BannerSubtitle>
                    Refer your friend and get more
                  </BannerSubtitle>
                  <ViewDetailsButton>Refer a friend</ViewDetailsButton>
                </BannerText>
              </Banner>
              <ButtonContainer>
                <ToggleButton onClick={toggleDetails}>
                  {isEmergencyDetails
                    ? "View Personal Details"
                    : "View Emergency Details"}
                </ToggleButton>
                <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
              </ButtonContainer>
            </LeftColumn>
          </MentalWrapper>
        </ContentWrapper>
      </MainContent>
      <UpdateUserInfo isOpen={isModalOpen} onClose={handleCloseModal} />
    </MentalContainer>
  );
}

export default ProfilePage;
