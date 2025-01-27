import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import Property from "../asset/icons/property_asset_icon.png";
import Stock from "../asset/icons/stock_account_asset_icon.png";
import Cash from "../asset/icons/cash_debt_icon.png";
import Vehicle from "../asset/icons/vehicle_debt_icon.png";
import Mortgage from "../asset/icons/mortgage_debt_icon.png";
import CreditCard from "../asset/icons/credit_card_debt_icon.png";
import CreditLine from "../asset/icons/credit_line_debit_icon.png";
import StudentLoan from "../asset/icons/student_loan_asset_icon.png";
import EditIcon from "../asset/icons/edit_icon.png";
import DeleteIcon from "../asset/icons/delete_icon.png";
import ArrowFall from "../asset/icons/ArrowFall.png";
import ArrowRise from "../asset/icons/ArrowRise.png";
import "@fontsource/roboto";
import "@fontsource/lato";
import "@fontsource/work-sans";
import "@fontsource/poppins";
import ModalComponent from "../components/delete_modal";
import ModalComponent1 from "../components/add_asset_modal";
import ModalComponent2 from "../components/add_debt_modal";
const AssetDebtContainer = styled.div`
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

const AssetDebtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;

  ${media.extraSmall`
    flex-direction: column;
    gap: 1rem;
  `}
`;

const SectionWrapper = styled.div`
  margin-bottom: 0rem;
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
`;

const ListContainer = styled.div`
  height: 50vh;
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
  width: 3rem;
  height: 3rem;
  @media (max-width: 300px) {
    width:2rem;
    height:2rem;
  }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
  word-wrap: break-word;
  font-family: "Roboto", sans-serif;
  white-space: normal;
  font-size: 0.6rem;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
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
  font-size: 10px;
  cursor: pointer;
  @media (max-width: 300px) {
    width:1.8rem;
  }
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.kPrimaryColor};
  gap: 0.5rem;
  align-items: center;
  margin-right: 0.4rem;
  font-family: "Roboto", sans-serif;
  @media (max-width: 300px) {
    font-size:0.8rem;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;
  gap: 1rem;
  max-width: 40%;
@media (max-width: 300px) {
    flex-direction:column;
  }
`;

const SummaryContainer = styled.div`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  padding: 1rem;
  color: ${colors.kWhiteColor};
  @media (max-width: 300px) {
    width:60vw;
  }
`;

const SummaryValue = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
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

const GrowthIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const GrowthText = styled.span`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
`;

const ResponsiveSpan = styled.span`
  @media (max-width: 300px) {
    font-size:0.8rem;
  }
`;
const ResponsiveSpan2 = styled.span`
  @media (max-width: 300px) {
    font-size:1.4rem;
  }
`;
function AssetPage() {
  const assetList = [
    {
      category: "Property",
      label: "123 Kinst",
      amount: 120000,
      growRate: 250,
      date: "23-01-2025",
      notes: "This is my property",
    },
    {
      category: "Investment",
      label: "Weacth Simple",
      amount: 853000,
      growRate: 150,
      date: "12-01-2025",
      notes: "",
    },
    {
      category: "Cash",
      label: "Rbc Bank",
      amount: 230000,
      growRate: 50,
      date: "01-12-2024",
      notes: "",
    },
    {
      category: "Vehicle",
      label: "Honda",
      amount: 230000,
      growRate: 50,
      date: "26-12-2024",
      notes: "",
    },
  ];

  const debtList = [
    {
      category: "Mortgage",
      label: "Property 1",
      amount: 681000,
      growRate: 250,
      date: "23-01-2025",
      notes: "This is my property",
    },
    {
      category: "Credit Card",
      label: "Visa",
      amount: 853000,
      growRate: 150,
      date: "12-01-2025",
      notes: "",
    },
    {
      category: "Student Loan",
      label: "Graduation",
      amount: 105000,
      growRate: 20,
      date: "01-11-2024",
      notes: "",
    },
    {
      category: "Credit Line",
      label: "Td Bank",
      amount: 230000,
      growRate: 50,
      date: "20-12-2024",
      notes: "",
    },
    {
      category: "Vehicle Loan",
      label: "Honda",
      amount: 130000,
      growRate: 50,
      date: "20-10-2024",
      notes: "",
    },
  ];
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isModalOpen1, setIsModalOpen1] = React.useState(false);

  const handleOpenModal1 = () => setIsModalOpen1(true);
  const handleCloseModal1 = () => setIsModalOpen1(false);

  const [isModalOpen2, setIsModalOpen2] = React.useState(false);

  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);

  return (
    <AssetDebtContainer>
      <MainContent>
        {/* <SidebarWrapper>
          <SideBar />
        </SidebarWrapper> */}
        <ContentWrapper>
          {/* <Header showChevronLeft={true} /> */}
          <AssetDebtWrapper>
            <SummaryRow>
              <SummaryContainer bgColor={colors.kPrimaryColor}>
                <SummaryLabel>Total Asset</SummaryLabel>
                <SummaryValue>$1000000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>+11.01%</GrowthText>
                  <GrowthIcon src={ArrowRise} alt="Upward trend" />
                </GrowthContainer>
              </SummaryContainer>
              <SummaryContainer bgColor={colors.kDarkPinkColor}>
                <SummaryLabel>Total Debt</SummaryLabel>
                <SummaryValue>$800000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>-0.03%</GrowthText>
                  <GrowthIcon src={ArrowFall} alt="Downward trend" />
                </GrowthContainer>
              </SummaryContainer>
            </SummaryRow>
            <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Assets</SectionTitle>
                <AddButton onClick={handleOpenModal1}>+ Add</AddButton>
              </SectionHeader>
              <ListContainer>
                {assetList.map((asset, index) => (
                  <ListItem key={index}>
                    <IconContainer
                      bgColor={
                        asset.category === "Property"
                          ? colors.kPinkColor
                          : asset.category === "Investment"
                          ? colors.kDarkPinkColor
                          : asset.category === "Cash"
                          ? colors.kPurpleColor
                          : colors.kBlueColor
                      }
                    >
                      <img
                        src={
                          asset.category === "Property"
                            ? Property
                            : asset.category === "Investment"
                            ? Stock
                            : asset.category === "Cash"
                            ? Cash
                            : Vehicle
                        }
                        style={{ width: "1rem", height: "auto" }}
                        alt="icon"
                      />
                    </IconContainer>
                    <ItemText>
                      <ResponsiveSpan2>{asset.category}</ResponsiveSpan2>
                      <ResponsiveSpan
                        style={{
                          fontFamily: "Roboto",
                          color: colors.kGrayColor,
                          marginTop: "0.3rem",
                        }}
                      >
                        {asset.label}
                      </ResponsiveSpan>
                    </ItemText>
                    <ActionContainer>
                      <Price>${asset.amount}</Price>
                      <ActionCircle
                        bgColor={`${colors.kPrimaryColor}70`}
                        textColor={colors.kWhiteColor}
                      >
                        <img
                          src={EditIcon}
                          alt="edit"
                          style={{
                            width: "0.8rem",
                            height: "auto",
                          }}
                        />
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
                            width: "0.8rem",
                            height: "auto",
                            filter: "invert(1)",
                          }}
                        />
                      </ActionCircle>
                    </ActionContainer>
                  </ListItem>
                ))}
              </ListContainer>
            </SectionWrapper>
            <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Debt</SectionTitle>
                <AddButton onClick={handleOpenModal2}>+ Add</AddButton>
              </SectionHeader>
              <ListContainer>
                {debtList.map((asset, index) => (
                  <ListItem key={index}>
                    <IconContainer
                      bgColor={
                        asset.category === "Mortgage"
                          ? colors.kPrimaryColor
                          : asset.category === "Credit Card"
                          ? colors.kDarkPinkColor
                          : asset.category === "Credit Line"
                          ? colors.kPurpleColor
                          : asset.category === "Student Loan"
                          ? colors.kPeachColor
                          : colors.kGreenColor
                      }
                    >
                      <img
                        src={
                          asset.category === "Mortgage"
                            ? Mortgage
                            : asset.category === "Credit Card"
                            ? CreditCard
                            : asset.category === "Credit Line"
                            ? CreditLine
                            : asset.category === "Student Loan"
                            ? StudentLoan
                            : Vehicle
                        }
                        style={{ width: "1.5rem", height: "auto" }}
                        alt="icon"
                      />
                    </IconContainer>
                    <ItemText>
                      <strong>{asset.category}</strong>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          color: colors.kGrayColor,
                          marginTop: "0.3rem",
                        }}
                      >
                        {asset.label}
                      </span>
                    </ItemText>
                    <column>
                      <ActionContainer>
                        <Price>${asset.amount}</Price>
                        <ActionCircle
                          bgColor={`${colors.kPrimaryColor}70`}
                          textColor={colors.kWhiteColor}
                        >
                          <img
                            src={EditIcon}
                            alt="edit"
                            style={{
                              width: "1rem",
                              height: "auto",
                            }}
                          />
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
          </AssetDebtWrapper>
        </ContentWrapper>
      </MainContent>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      <ModalComponent1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
      <ModalComponent2 isOpen={isModalOpen2} onClose={handleCloseModal2} />
    </AssetDebtContainer>
  );
}

export default AssetPage;
