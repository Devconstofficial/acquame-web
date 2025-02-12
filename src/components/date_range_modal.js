import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/roboto";
import colors from "../colors";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


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
  font-family: "Roboto", sans-serif;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 40vw;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 450px) {
    width:70vw;
  }
`;

const ScrollableContent = styled.div`
  max-height: 60vh; /* Restrict the height of the scrollable area */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 1rem; /* Optional padding for better scrolling experience */
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  color: ${colors.kDarkGrayColor};
  margin-bottom: 1rem;
`;

const TableContainer = styled.div`
  overflow-x: hidden;
  margin-bottom: 1rem;
  text-align:left;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: ${colors.kPrimaryColor};
    color: ${colors.kWhiteColor};
    padding: 0.8rem;
    text-align: left;
    border-radius: ${(props) =>
      props.hasBorderRadius ? "0.5rem 0.5rem 0 0" : "0"};
  }

  td {
    padding: 0.5rem;
    text-align: left;
  }

  tr:nth-child(odd) {
    background-color: white;
  }

  tr:nth-child(even) {
    background-color: ${colors.kPrimaryColor}20;
  }
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  background: none;
  @media (max-width: 450px) {
    font-size:0.6rem;
  }
`;

const TotalScoreRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 450px) {
    font-size:0.6rem;
  }
`;

const TotalScoreInput = styled.input`
  width: 5rem;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
  @media (max-width: 450px) {
    font-size:0.6rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.button`
  background: none;
  border: 0.15rem solid ${colors.kLoginLabelColor};
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 450px) {
    font-size:0.6rem;
  }
`;

const AddGoalButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 450px) {
    font-size:0.6rem;
  }
`;

const questions = [
  "Feeling Nervous, anxious, or on edge",
  "Not being able to stop or control different things",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it’s hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen",
];

const CalendarWrapper = styled.div`
  border: 1px solid ${colors.kStrokeColor}67;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0rem 2rem 0rem 1rem;
  width: 80%;
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
function DateRangeModal({ isOpen, onClose }) {
    
    const highlightedDates = [7, 8, 10];
    const [currentDate, setCurrentDate] = useState(new Date());
    // Initialize `scores` as an array of independent sub-arrays
    const [scores, setScores] = useState(
      Array(questions.length).fill(null).map(() => [0, 0, 0, 0])
    );
    const [totalScore, setTotalScore] = useState(0);
  
    const handleInputChange = (questionIndex, columnIndex, value) => {
      // Create a copy of the `scores` array
      const newScores = scores.map((row, i) => (i === questionIndex ? [...row] : row));
      const numericValue = Number(value) || 0;
  
      // Update the specific value in the copied array
      newScores[questionIndex][columnIndex] = numericValue;
  
      // Update the state with the new scores
      setScores(newScores);
  
      // Recalculate total score
      const newTotalScore = newScores.flat().reduce((acc, current) => acc + current, 0);
      setTotalScore(newTotalScore);
    };
  
    if (!isOpen) return null;

  
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
  
    // const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    // const handleOpenModal = () => setIsModalOpen(true);
    // const handleCloseModal = () => setIsModalOpen(false);
    return (
      <ModalOverlay>
        <ModalContainer>
          <ScrollableContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
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
          </ScrollableContent>
        </ModalContainer>
      </ModalOverlay>
    );
  }
  
  export default DateRangeModal;
  
