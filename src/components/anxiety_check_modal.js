import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalComponent from "../components/assessment_modal";

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
const AddButton = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  background: none;
  border: 0.2rem solid ${colors.kPrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  color: ${colors.kPrimaryColor};
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

const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.kBlackColor};
`;

function AnxietyCheckModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <AddButton onClick={handleOpenModal}>+</AddButton>
        <RowContainer>
          <div>
            <Label>From</Label>
            <InputField type="date" style={{ width: "70%" }} />
          </div>
          <div>
            <Label>To</Label>
            <InputField
              type="date"
              style={{ width: "70%", marginRight: "0rem" }}
            />
          </div>

          <UpdateButton
            style={{
              maxHeight: "3rem",
              marginTop: "3.3rem",
              marginLeft: "0rem",
            }}
          >
            Search
          </UpdateButton>
        </RowContainer>

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader first>Date</TableHeader>
                <TableHeader last>Journal</TableHeader>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((notes, index) => (
                <TableRow key={index} isOdd={index % 2 === 0}>
                  <TableCell>{notes.date}</TableCell>
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
        <DescriptionText>
          What your total score means
          <br />
          Your total score is a guide to how severe your anxiety disorder may
          be:
          <br />
          0 to 4 = mild anxiety
          <br />
          5 to 9 = moderate anxiety
          <br />
          10 to 14 = moderately severe anxiety
          <br />
          15 to 21 = severe anxiety
          <br />
          If your score is 10 or higher, or if you feel that anxiety is
          affecting your daily life, call your doctor.
          <br />
        </DescriptionText>
      </ModalContainer>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </ModalOverlay>
  );
}

export default AnxietyCheckModal;
