import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalComponent from "../components/add_journal_modal";

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

const RichTextArea = styled.textarea`
  width: 90%;
  padding: 1rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  min-height: 8rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
`;

function JournalModal({ isOpen, onClose }) {
    const journals = [
      { date: "January 20, 2025", journal: "This is my meditation journal" },
      { date: "February 20, 2024", journal: "This is my yoga journal" },
      { date: "March 03, 2024", journal: "My new cardio journal" },
      { date: "March 20, 2024", journal: "How to boost your self confidence?" },
      { date: "October 23, 2024", journal: "Self Love is very important!" },
      { date: "November 20, 2024", journal: "Mind peace is very important for happy life." },
      { date: "November 07, 2024", journal: "This is a test note for being kind to others." },
      { date: "July 07, 2024", journal: "Being Just is important for a balanced life." },
      { date: "November 20, 2024", journal: "These are journals for workout" },
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;
    const totalPages = Math.ceil(journals.length / rowsPerPage);
  
    const handlePageChange = (direction) => {
      if (direction === "next" && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev" && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const displayedRows = journals.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  
    const [selectedNote, setSelectedNote] = useState({
      date: "",
      journal: "",
    });
  
    const handleRowClick = (note) => {
      setSelectedNote(note);
    };
  
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
          <RowContainer style={{ marginTop: "1rem" }}>
            <p style={{ fontWeight: "600", marginRight: "0.3rem" }}>Search</p>
  
            <div>
              <InputField
                type="text"
                placeholder="keyword"
                style={{ width: "30%" }}
              />
            </div>
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
                  <TableRow
                    key={index}
                    isOdd={index % 2 === 0}
                    onClick={() => handleRowClick(notes)}
                  >
                    <TableCell>{notes.date}</TableCell>
                    <TableCell>{notes.journal}</TableCell>
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

          <RowContainer style={{ marginTop: "1rem", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "600", marginRight: "0.3rem" }}>Date</p>
  
            <div>
              <InputField
                type="text"
                value={selectedNote.date}
                readOnly
                style={{ width: "30%" , marginLeft: "18rem"}}
              />
            </div>
          </RowContainer>
  
          
  
          <Label>Journal</Label>
          <RichTextArea
            placeholder=""
            value={selectedNote.journal}
            readOnly
          />
        </ModalContainer>
        <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      </ModalOverlay>
    );
  }
  
  export default JournalModal;
  