import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import weightIcon from "../asset/icons/weight_icon.png";
import heightIcon from "../asset/icons/bmi_icon.png";
import { FaChevronDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "@fontsource/roboto";
import "@fontsource/work-sans";
import { defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const WeightContainer = styled.div`
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

const WeightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  ${media.extraSmall`
    gap: 1rem;
  `}
`;

const MetricContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 450px) {
  flex-direction:column;
  }
`;

const MetricBox = styled.div`
  flex: 1;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  @media (max-width: 450px) {
  width:55vw;
  }
  
`;

const MetricTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
  color: ${colors.kWhiteColor};
  margin: 0 0 0.5rem;
`;

const MetricSubText = styled.p`
  font-size: 1rem;
  color: ${colors.kWhiteColor};
  font-weight: bold;
  font-family: "Work Sans", sans-serif;
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

const DropdownContainer = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  border: 1px solid ${colors.kStrokeColor}60;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  color: ${colors.kDropdownItemColor};
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background-color: ${colors.kWhiteColor};
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: ${colors.kPrimaryColor}20;
  }
`;

const ProgressTrackingHeader = styled.h3`
  font-family: "Roboto", sans-serif;
  color: ${colors.kBlackColor};
  margin: 1rem 0;
`;

const ProgressContainer = styled.div`
  width: 95%;
  border-radius: 2rem;
  border: 1px solid ${colors.kStrokeColor}80;
  padding: 1rem;
`;

const ProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableContainer = styled.div`
  margin-top: 2rem;
`;

const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  text-align: left;
  border-radius: ${({ first, last }) =>
    first ? "10px 0 0 0" : last ? "0 10px 0 0" : "0"};
`;

const TableRow = styled.tr`
  background-color: ${({ isOdd }) =>
    !isOdd ? `${colors.kTableFilledColor}60` : colors.kWhiteColor};
  &:nth-child(even) {
    background-color: ${colors.kTableFilledColor}60;
  }
`;
const TableCell = styled.td`
  padding: 0.7rem;
  font-family: "Roboto", sans-serif;
  color: ${colors.kTableTextColor};
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ color }) => color};
  background-color: ${({ color2 }) => color2};
  border-radius: 0.4rem;
  width: 2rem;
  height: 2rem;
  margin: 0rem 5rem;
`;

const PaginationButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ color }) => color};
`;

const ProgressTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin: 0;
`;

const LargeText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.kBlackColor};
  margin: 1rem 0 0;
`;

const SubText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${colors.kPrimaryColor};
  margin: 0;
`;

const ChartWrapper = styled.div`
  width: 100%;
  max-height: 100px;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
`;

const ViewGoalsButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.7rem;
  width: 40%;
  font-size: 1.5rem;
  font-weight: normal;
  align-self: center;
  margin: 0;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
    @media (max-width: 450px) {
    width:40vw;
    font-size:1rem;
  }
`;
function WeightPage() {
  const [unit, setUnit] = useState("Kg");
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);
  const [timeframe, setTimeframe] = useState("Monthly");
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const totalRows = 10;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const WeeklyData = [
    {
      label: "Sun",
      weight: 48,
    },
    {
      label: "Mon",
      weight: 49,
    },
    {
      label: "Tue",
      weight: 49.4,
    },
    {
      label: "Wed",
      weight: 48.5,
    },
    {
      label: "Thu",
      weight: 48,
    },
    {
      label: "Fri",
      weight: 50,
    },
    {
      label: "Sat",
      weight: 48.5,
    },
  ];

  const AnnuallyData = [
    {
      label: "Jan",
      weight: 48,
    },
    {
      label: "Feb",
      weight: 49,
    },
    {
      label: "Mar",
      weight: 49.4,
    },
    {
      label: "Apr",
      weight: 55,
    },
    {
      label: "May",
      weight: 52,
    },
    {
      label: "Jun",
      weight: 50,
    },
    {
      label: "Jul",
      weight: 52,
    },
    {
      label: "Aug",
      weight: 55,
    },
    {
      label: "Sep",
      weight: 49,
    },
    {
      label: "Oct",
      weight: 48,
    },
    {
      label: "Nov",
      weight: 50,
    },
    {
      label: "Dec",
      weight: 48,
    },
  ];

  const monthlyData = [
    {
      label: "Week1",
      weight: 48,
    },
    {
      label: "Week2",
      weight: 60,
    },
    {
      label: "Week3",
      weight: 170,
    },
    {
      label: "Week4",
      weight: 46,
    },
  ];
  const data = {
    labels:
      timeframe === "Monthly"
        ? monthlyData.map((data) => data.label)
        : timeframe === "Weekly"
        ? WeeklyData.map((data) => data.label)
        : AnnuallyData.map((data) => data.label),
    datasets: [
      {
        label: "",
        data:
          timeframe === "Monthly"
            ? monthlyData.map((data) => data.weight)
            : timeframe === "Weekly"
            ? WeeklyData.map((data) => data.weight)
            : AnnuallyData.map((data) => data.weight),
        borderColor: colors.kPrimaryColor,
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, `${colors.kPrimaryAccentColor}50`);
          gradient.addColorStop(1, "rgba(6, 79, 240, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: colors.kPrimaryColor,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <WeightContainer>
      <MainContent>
        {/* <SidebarWrapper>
          <SideBar />
        </SidebarWrapper> */}
        <ContentWrapper>
        {/* <Header showChevronLeft={true} /> */}
          <WeightWrapper>
            <MetricContainer>
              <MetricBox color={colors.kPurpleShade2}>
                <MetricSubText>Weight</MetricSubText>
                <MetricTitle>150 Lbs</MetricTitle>
                <MetricIconWrapper>
                  <MetricIcon src={weightIcon} alt="Weight" />
                </MetricIconWrapper>
              </MetricBox>
              <MetricBox color={colors.kDarkPinkColor}>
                <MetricSubText>BMI</MetricSubText>
                <MetricTitle>24</MetricTitle>
                <MetricIconWrapper>
                  <MetricIcon src={heightIcon} alt="Height" />
                </MetricIconWrapper>
              </MetricBox>

              <DropdownContainer>
                <Dropdown
                  onClick={() => setShowUnitDropdown(!showUnitDropdown)}
                >
                  {unit} <FaChevronDown style={{ marginLeft: "0.5rem" }} />
                </Dropdown>
                {showUnitDropdown && (
                  <DropdownMenu>
                    {["Kg", "Lbs"].map((u) => (
                      <DropdownItem
                        key={u}
                        onClick={() => {
                          setUnit(u);
                          setShowUnitDropdown(false);
                        }}
                      >
                        {u}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </DropdownContainer>
            </MetricContainer>

            <ProgressTrackingHeader>Progress Tracking</ProgressTrackingHeader>
            <ProgressContainer>
              <ProgressRow>
                <ProgressTitle>Weight Trend</ProgressTitle>
                <DropdownContainer>
                  <Dropdown
                    onClick={() =>
                      setShowTimeframeDropdown(!showTimeframeDropdown)
                    }
                  >
                    {timeframe}{" "}
                    <FaChevronDown style={{ marginLeft: "0.5rem" }} />
                  </Dropdown>
                  {showTimeframeDropdown && (
                    <DropdownMenu>
                      {["Weekly", "Monthly", "Annually"].map((frame) => (
                        <DropdownItem
                          key={frame}
                          onClick={() => {
                            setTimeframe(frame);
                            setShowTimeframeDropdown(false);
                          }}
                        >
                          {frame}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </DropdownContainer>
              </ProgressRow>
              <LargeText>
                {timeframe === "Monthly"
                  ? "Last 30 Days"
                  : timeframe === "Annually"
                  ? "Last 12 Months"
                  : "Last 7 Days"}
              </LargeText>
              <SubText>
                {timeframe === "Monthly"
                  ? "1 Month"
                  : timeframe === "Annually"
                  ? "1 Year"
                  : "1 Week"}
              </SubText>

              <ChartWrapper>
                <Line data={data} options={options} />
              </ChartWrapper>
            </ProgressContainer>

            <TableContainer>
            <Table>
  <thead>
    <tr>
      <TableHeader first>Date</TableHeader>
      <TableHeader>Time</TableHeader>
      <TableHeader last>Weight</TableHeader>
    </tr>
  </thead>
  <tbody>
    {Array.from(
      { length: rowsPerPage },
      (_, index) =>
        index + 1 + (currentPage - 1) * rowsPerPage
    ).map((row, index) => {
      const isOdd = index% 2 === 0;
      return (
        <TableRow isOdd={isOdd} key={row}>
          <TableCell>Nov 23, 2024</TableCell>
          <TableCell>8 AM</TableCell>
          <TableCell>{75 + row / 10} Kg</TableCell>
        </TableRow>
      );
    })}
  </tbody>
</Table>

              <Pagination>
                <PaginationBox
                  onClick={() => handlePageChange("prev")}
                  color={colors.kStrokeColor}
                  color2={colors.kWhiteColor}
                >
                  <PaginationButton color={colors.kGreyShade2Color}>
                    <FaArrowLeft />
                  </PaginationButton>
                </PaginationBox>

                <p
                  style={{ color: colors.kDarkGrayColor, fontFamily: "Roboto" }}
                >
                  Page <span style={{ fontWeight: "bold" }}>{currentPage}</span>{" "}
                  of <span style={{ fontWeight: "bold" }}>{totalPages}</span>
                </p>
                <PaginationBox
                  onClick={() => handlePageChange("next")}
                  color={colors.kPrimaryColor}
                  color2={colors.kPrimaryColor}
                >
                  <PaginationButton color={colors.kWhiteColor}>
                    <FaArrowRight />
                  </PaginationButton>
                </PaginationBox>
              </Pagination>
            </TableContainer>
            <ViewGoalsButton>+ Weight</ViewGoalsButton>
          </WeightWrapper>
        </ContentWrapper>
      </MainContent>
    </WeightContainer>
  );
}

export default WeightPage;
