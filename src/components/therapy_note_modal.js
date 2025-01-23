import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import ModalComponent from "../components/add_therapy_note";

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

const SelectWrapper = styled.div`
  position: relative;
  width: 97%;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 1rem;
  padding-right: 2rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  background: white;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.kPrimaryColor};
  }
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

const ArrowIcon = styled(FaChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.kDarkGrayColor}70;
  pointer-events: none;
`;

function TherapyNotesModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const therapyNotes = [
    {
      summary: "Meditation",
      date: "January 20, 2025",
      notes: "This is my meditation notes",
    },
    {
      summary: "Yoga",
      date: "February 20, 2024",
      notes: "This is my yoga notes",
    },
    {
      summary: "Exercise",
      date: "March 03, 2024",
      notes: "My new cardio notes",
    },
    {
      summary: "Confidence",
      date: "March 20, 2024",
      notes: "How to boost your self confidence?",
    },
    {
      summary: "Self Love",
      date: "October 23, 2024",
      notes: "Self Love is very important!",
    },
    {
      summary: "Mind Peace",
      date: "November 20, 2024",
      notes: "Mind peace is very important for happy life.",
    },
    {
      summary: "Be Kind",
      date: "November 07, 2024",
      notes: "This is a test note for being kind to others.",
    },
    {
      summary: "Justice",
      date: "July 07, 2024",
      notes: "Being Just is important for a balanced life.",
    },
    {
      summary: "Workout",
      date: "November 20, 2024",
      notes: "These are notes for workout",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(therapyNotes.length / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedRows = therapyNotes.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [selectedNote, setSelectedNote] = useState({
    summary: "",
    notes: "",
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
        </RowContainer>
        <UpdateButton
            style={{
              maxHeight: "3rem",
              marginTop: "0.3rem",
              marginLeft: "0rem",
            }}
          >
            Search
          </UpdateButton>
        <RowContainer style={{ marginTop: "1rem" }}>
          <p style={{ fontWeight: "600", marginRight: "0.3rem" }}>Search</p>

          <div>
            <InputField
              type="text"
              placeholder="keyword"
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <SelectWrapper>
              <SelectField
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Summary">Summary</option>
                <option value="Notes">Notes</option>
              </SelectField>
              <ArrowIcon />
            </SelectWrapper>
          </div>
        </RowContainer>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader first>Date</TableHeader>
                <TableHeader>Summary</TableHeader>
                <TableHeader last>Notes</TableHeader>
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
                  <TableCell>{notes.summary}</TableCell>
                  <TableCell>{notes.notes}</TableCell>
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
        <Label>Summary</Label>
        <InputField type="text" placeholder="" value={selectedNote.summary} />
        <Label>Notes</Label>
        <RichTextArea placeholder="" value={selectedNote.notes} />
      </ModalContainer>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </ModalOverlay>
  );
}

export default TherapyNotesModal;
