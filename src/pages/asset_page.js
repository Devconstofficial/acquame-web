import React from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import colors from "../colors";

import ModalComponent from "../components/delete_modal";
import ModalComponent1 from "../components/add_debt_modal";
import ModalComponent2 from "../components/add_debt_modal";
import financialBanner from "../asset/images/financial_banner.png";
import userImage from "../asset/images/user_profile.png";
import emojiSmile from "../asset/icons/smiley_emoji.png";
import Vehicle from "../asset/icons/vehicle_debt_icon.png";
import BillImage from "../asset/icons/electric_bill.png";
import SubscriptionImage from "../asset/icons/subscription.png";
import Mortgage from "../asset/icons/mortgage_debt_icon.png";
import CreditCard from "../asset/icons/credit_card_debt_icon.png";
import CreditLine from "../asset/icons/credit_line_debit_icon.png";
import StudentLoan from "../asset/icons/student_loan_asset_icon.png";
import EditIcon from "../asset/icons/edit_icon.png";
import DeleteIcon from "../asset/icons/delete_icon.png";
import ArrowRise from "../asset/icons/ArrowRise.png";
import "@fontsource/roboto";
import "@fontsource/lato";
import "@fontsource/inter";
import "@fontsource/poppins";
import FinancialGoalModal from "../components/financial_goal_modal";
import TransactionModal from "../components/transaction_modal";
import IncomeImage from "../asset/icons/income.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width:100%;
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

const FinancialWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;

  @media (max-width: 768px) {
  flex-direction: column;
  flex:1;
  }
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

const LeftColumn = styled.div`
  flex: 3;
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
  font-size: 1rem;
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
  font-size: 1rem;
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
  margin-left: 0.3rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin-bottom: 1rem;

 @media (max-width: 300px) {
  width:600vw;
  padding:0.4rem
  margin-left:0.1rem;
  }
`;

const ActivityIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 20%;
  background-color: ${(props) => props.bgColor || "#ccc"};
  @media (max-width: 300px) {
  width:2rem;
  height:2rem;
  }
`;

const ActivityIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 300px) {
  width:1rem;
  height:1rem;
  }
`;

const ActivityText = styled.div`
  flex: 1;
  font-size: 0.8rem;
  color: #333;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.1rem;
  margin-left:0.6rem;
@media (max-width: 300px) {
  font-size:0.8rem;
  margin-left:1rem;
  }
  p {
    margin: 0;
    font-weight: ${(props) => (props.isTitle ? "bold" : "normal")};
  }
`;


const ChartContainer = styled.div`
  flex: 1;
  background-color: ${colors.kWhiteColor};
  border: 1px solid ${colors.kStrokeColor1};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  align-items: center;

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: "Lato", sans-serif;
    color: ${colors.kBlackColor};
  }
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
  font-size: 1rem;
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

function AssetPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  const [isModalOpen2, setIsModalOpen2] = React.useState(false);

    const [isModalOpen1, setIsModalOpen1] = React.useState(false);
    const handleOpenModal2 = () => setIsModalOpen2(true);
    const handleOpenModal1 = () => setIsModalOpen1(true);
    const handleCloseModal1 = () => setIsModalOpen1(false);
    
  const handleCloseModal2 = () => setIsModalOpen2(false);

  const handleAssetClick = () => {
    navigate("/asset-screen");
  };
  const debtList = [
    {
      category: "Debt",
      label: "Property",
      amount: 6810,
      growRate: 20,
      date: "23-01-2025",
      notes: "This is my property",
    },
    {
      category: "Credit",
      label: "Visa",
      amount: 853,
      growRate: 15,
      date: "12-01-2025",
      notes: "",
    },
    {
      category: "Loan",
      label: "Grad",
      amount: 1040,
      growRate: 20,
      date: "01-11-2024",
      notes: "",
    },
    {
      category: "Credit Line",
      label: "Td Bank",
      amount: 2300,
      growRate: 50,
      date: "20-12-2024",
      notes: "",
    },
    {
      category: "Vehicle Loan",
      label: "Honda",
      amount: 1300,
      growRate: 50,
      date: "20-10-2024",
      notes: "",
    },
  ];
  const assetDebtData = [
    { name: "JAN", Assets: 3000, Debt: 1200 },
    { name: "FEB", Assets: 2800, Debt: 1500 },
    { name: "MAR", Assets: 3200, Debt: 1300 },
    { name: "APR", Assets: 3500, Debt: 1700 },
    { name: "MAY", Assets: 3300, Debt: 1800 },
    { name: "JUN", Assets: 3100, Debt: 1600 },
  ];

  const incomeExpenseData = [
    { name: "JAN", Income: 3200, Expenses: 1800 },
    { name: "FEB", Income: 3000, Expenses: 1700 },
    { name: "MAR", Income: 3300, Expenses: 1900 },
    { name: "APR", Income: 3600, Expenses: 2000 },
    { name: "MAY", Income: 3500, Expenses: 2100 },
    { name: "JUN", Income: 3300, Expenses: 1900 },
  ];

  return (
    <FinancialContainer>
      <MainContent>
        {/* <SidebarWrapper>
          <SideBar />
        </SidebarWrapper> */}
        <ContentWrapper>
          {/* <Header /> */}
          <FinancialWrapper>
            <LeftColumn>
            <SummaryContainer bgColor={colors.kPrimaryColor}>
                <SummaryLabel>Total Asset</SummaryLabel>
                <SummaryValue>$1000000</SummaryValue>
                <GrowthContainer>
                  <GrowthText>+11.01%</GrowthText>
                  <GrowthIcon src={ArrowRise} alt="Upward trend" />
                </GrowthContainer>
              </SummaryContainer>
                <h3 style={{ alignSelf: "flex-start",fontSize:16 }}>Expenses</h3>
                

                <ChartContainer onClick={handleAssetClick}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={assetDebtData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Legend
                        iconType="circle"
                        formatter={(value, entry) => (
                          <span style={{ color: colors.kChartTextColor }}>
                            {value}
                          </span>
                        )}
                      />
                      <Bar
                        dataKey="Total Asset"
                        stackId="a"
                        fill={colors.kPinkColor}
                        radius={[10, 10, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <SectionWrapper>
              <SectionHeader>
                <SectionTitle>Expense</SectionTitle>
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
                  <ActivityIcon src={BillImage} alt="electricity bill" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    Highest Electric Bill
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    Your highest electric bill was $X this month.
                  </p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kPrimaryColor}>
                  <ActivityIcon
                    src={SubscriptionImage}
                    alt="subscription icon"
                  />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    High Number of Subscriptions
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    6 active subscriptions are impacting your budget.
                  </p>
                </ActivityText>
              </ActivityBox>
              <ActivityBox>
                <ActivityIconWrapper bgColor={colors.kBlueColor}>
                  <ActivityIcon src={IncomeImage} alt="income icon" />
                </ActivityIconWrapper>
                <ActivityText>
                  <p isTitle={true} style={{ fontWeight: "bold" }}>
                    Higher Than Usual Income
                  </p>
                  <p
                    style={{
                      color: colors.kLightGreyColor1,
                      fontWeight: "300",
                    }}
                  >
                    Your income was higher than usual this month.
                  </p>
                </ActivityText>
              </ActivityBox>
            </RightColumn>
          </FinancialWrapper>
        </ContentWrapper>
      </MainContent>
      <FinancialGoalModal isOpen={isModalOpen} onClose={handleCloseModal}/>
      <TransactionModal isOpen={isModalOpen1} onClose={handleCloseModal1}/>
      <ModalComponent1 isOpen={isModalOpen2} onClose={handleCloseModal2} />
    </FinancialContainer>
  );
}

export default AssetPage;
