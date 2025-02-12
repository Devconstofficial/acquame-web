import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DateRangeModal from "./date_range_modal";
import TimeRangeModal from "./time_range_modal";
import WeeklyRangeModal from "./weekly_range_modal";
import Smile from "../asset/icons/smile.png"
import { AreaChart, ResponsiveContainer} from "recharts";
import { XAxis, YAxis, Area, Tooltip , CartesianGrid } from "recharts";

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
  @media (max-width: 450px) {
    top:5rem;
  }
`;
const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: auto;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Work Sans", sans-serif;
  @media (max-width: 450px) {
    width:70vw;
  }
    @media (max-width: 850px) {
    width:80vw;
  }
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
const AddButton = styled.div`
  top: 4rem;
  right: 1rem;
  background-color: ${colors.kPrimaryColor};
  border: 0.2rem solid ${colors.kPrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 1.8rem;
  padding-inline:0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top:0.3rem;
  color: white;
`;

const UpdateButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${colors.kBlackColor};
  margin: 1.5rem 0rem 0.3rem 0rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  display: block;

  span {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${colors.kDarkGrayColor};
  }
`;

const InputField = styled.input`
  width: 90%;
  padding: 1rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  margin-bottom: 0rem;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
`;

const RowContainer = styled.div`
  display: flex;
  padding: 0rem;
  margin: 3rem 0rem 0rem 0rem;

  & > div {
    flex: 1;
  }
    @media (max-width: 450px) {
    flex-direction:column;
  }
`;

const TableContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const ScrollableContent = styled.div`
  max-height: 80vh; /* Restrict the height of the scrollable area */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 1rem; /* Optional padding for better scrolling experience */
`;

const ScrollableContentTable = styled.div`
  max-height: 60vh; /* Restrict the height of the scrollable area */
  overflow-x: auto; /* Enable vertical scrolling */
  padding-right: 1rem; /* Optional padding for better scrolling experience */
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

const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.kBlackColor};
`;

function MoodCheckModal({ isOpen, onClose }) {
  const anxietyCheck = [
    { date: "January 20, 2025", score: 18 },
    { date: "February 20, 2024", score: 13 },
    { date: "March 03, 2024", score: 20 },
    { date: "March 20, 2024", score: 7 },
    { date: "October 23, 2024", score: 11 },
    { date: "November 20, 2024", score: 19 },
    { date: "November 07, 2024", score: 21 },
    { date: "July 07, 2024", score: 17 },
    { date: "November 20, 2024", score: 9 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(anxietyCheck.length / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedRows = anxietyCheck.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [isModalOpen2, setIsModalOpen2] = React.useState(false);
  const handleOpenModal2 = () => setIsModalOpen2(true);
  const handleCloseModal2 = () => setIsModalOpen2(false);  
  const [isModalOpen3, setIsModalOpen3] = React.useState(false);
  const handleOpenModal3 = () => setIsModalOpen3(true);
  const handleCloseModal3 = () => setIsModalOpen3(false);
  if (!isOpen) return null;
  const data = [
    {
      "name": "Janurary",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Febuarary",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "March",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
   ]
  return (
    <ModalOverlay>
      <ScrollableContent>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <p>Mood Trend Graph</p>
        <p>Most Frequent Mood</p>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
            <img src={Smile} width={30} height={30}></img>
        <p style={{color:colors.kPrimaryColor, fontWeight:900}}>Joyful</p>
        </div>
        <div>
        <AddButton onClick={handleOpenModal}>Select Date Range</AddButton>
        <AddButton onClick={handleOpenModal2}>Select Time Range</AddButton>
        <AddButton onClick={handleOpenModal3}>Daily/Weekly/Monthly</AddButton>
        </div>
        </div>
        <ResponsiveContainer width="90%" height={250}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
</ResponsiveContainer>
            <ScrollableContentTable>
            <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader first>Date</TableHeader>
                <TableHeader last>Time Range</TableHeader>
                <TableHeader last>Mood</TableHeader>
                <TableHeader last>Physical Comfort</TableHeader>
                <TableHeader last>Energy Level</TableHeader>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((notes, index) => (
                <TableRow key={index} isOdd={index % 2 === 0}>
                  <TableCell>{notes.date}</TableCell>
                  <TableCell>{notes.score.toLocaleString()}</TableCell>
                  <TableCell>{notes.date}</TableCell>
                  <TableCell>{notes.score.toLocaleString()}</TableCell>
                  <TableCell>{notes.score.toLocaleString()}</TableCell>
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
            </ScrollableContentTable>
       
      </ModalContainer>
      </ScrollableContent>
      <DateRangeModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <TimeRangeModal isOpen={isModalOpen2} onClose={handleCloseModal2} />
      <WeeklyRangeModal isOpen={isModalOpen3} onClose={handleCloseModal3} />
    </ModalOverlay>
  );
}

export default MoodCheckModal;
