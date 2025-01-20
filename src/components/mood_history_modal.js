import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import "@fontsource/roboto";
import "@fontsource/work-sans";
import { defaults } from "chart.js/auto";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AddMood from "../components/add_mood_modal";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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

const TableContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
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

const MoodTrendContainer = styled.div`
  margin: 0rem 0rem 1rem 0rem;
  padding: 1rem;
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TrendHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MostFrequentMood = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EmojiText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OptionButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-family: "Work Sans", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
 
  box-sizing: border-box;
`;
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function MoodHistoryMOdal({ isOpen, onClose }) {
  const moods = [
    {
      date: "2025-01-01",
      timeRange: "6 AM ~ 9 AM",
      mood: "Joyful",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-02",
      timeRange: "6 AM ~ 9 AM",
      mood: "Peaceful",
      physicalComfort: "Exhausted",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-03",
      timeRange: "12 PM ~ 3 PM",
      mood: "Tired",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-04",
      timeRange: "9 PM ~ 12 AM",
      mood: "Excited",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-05",
      timeRange: "3 AM ~ 6 PM",
      mood: "Content",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-06",
      timeRange: "3 AM ~ 6 PM",
      mood: "Grateful",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
    {
      date: "2025-01-07",
      timeRange: "3 AM ~ 6 AM",
      mood: "Lonely",
      physicalComfort: "Comfortable",
      energyLevel: "Rested",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(moods.length / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedRows = moods.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const AnnuallyData = [
    { label: "Jan", weight: 48 },
    { label: "Apr", weight: 55 },
    { label: "Aug", weight: 52 },
    { label: "Dec", weight: 48 },
  ];

  const data = {
    labels: AnnuallyData.map((data) => data.label),
    datasets: [
      {
        label: "",
        data: AnnuallyData.map((data) => data.weight),
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
        pointBorderWidth: 0,
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
   const [isModalOpen, setIsModalOpen] = React.useState(false);
        
          const handleOpenModal = () => setIsModalOpen(true);
          const handleCloseModal = () => setIsModalOpen(false);
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p style={{fontSize:'1.2rem', fontWeight:"600", marginTop:"2rem"}}>
        Mood Trend Graph
        </p>
        <MoodTrendContainer>
          <TrendHeader>
            <MostFrequentMood>
                <column>
                <h3>Most Frequent Mood</h3>
              <EmojiText>
                <span>😊</span>
                <span style={{ color: colors.kPrimaryColor, fontSize: "1.2rem" }}>Joyful</span>
              </EmojiText>
                </column>
                
            </MostFrequentMood>
            <OptionsContainer>
              <OptionButton>Select Date Range</OptionButton>
              <OptionButton>Select Time Range</OptionButton>
              <OptionButton>Daily/Weekly/Monthly</OptionButton>
            </OptionsContainer>
          </TrendHeader>
          <ChartWrapper>
            <Line data={data} options={options} />
          </ChartWrapper>
        </MoodTrendContainer>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader first>Date</TableHeader>
                <TableHeader>Time Range</TableHeader>
                <TableHeader>Mood</TableHeader>
                <TableHeader>Physical Comfort</TableHeader>
                <TableHeader last>Energy Level</TableHeader>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((mood, index) => (
                <TableRow key={index} isOdd={index % 2 === 0}>
                  <TableCell>{mood.date}</TableCell>
                  <TableCell>{mood.timeRange}</TableCell>
                  <TableCell>{mood.mood}</TableCell>
                  <TableCell>{mood.physicalComfort}</TableCell>
                  <TableCell>{mood.energyLevel}</TableCell>
                </TableRow>
              ))}
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

            <p style={{ color: colors.kDarkGrayColor, fontFamily: "Roboto" }}>
              Page <span style={{ fontWeight: "bold" }}>{currentPage}</span> of{" "}
              <span style={{ fontWeight: "bold" }}>{totalPages}</span>
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
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <AddGoalButton onClick={handleOpenModal}>Add Mood</AddGoalButton>
        </ButtonContainer>
      </ModalContainer>
      <AddMood isOpen={isModalOpen} onClose={handleCloseModal} />
    </ModalOverlay>
  );
}

export default MoodHistoryMOdal;
