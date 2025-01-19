import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/work-sans";
import "@fontsource/roboto";
import colors from "../colors";
import FilterIcon from "../asset/icons/filter_icon.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const CancelButton = styled.button`
  background: none;
  border: 0.15rem solid ${colors.kPrimaryColor};
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  color: ${colors.kPrimaryColor};
  font-size: 1rem;
  cursor: pointer;
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
  padding:0rem;
  margin: 3rem 0rem 0rem 0rem;

  & > div {
    flex: 1;
  }
`;

const IconContainer = styled.div`
  background-color: ${colors.kPrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.2rem 1rem 0rem 0rem;
  border-radius: 0.7rem;
  max-width: 4rem;
  max-height:3rem;
  width:3rem;
  height: 3rem;
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

function TransactionModal({ isOpen, onClose }) {
  const transactions = [
    { date: "2025-01-01", type: "Income", category: "Salary", amount: 4000 },
    { date: "2025-01-02", type: "Expense", category: "Rent Payment", amount: 1200 },
    { date: "2025-01-03", type: "Expense", category: "Utilities", amount: 150 },
    { date: "2025-01-04", type: "Income", category: "Freelance", amount: 500 },
    { date: "2025-01-05", type: "Expense", category: "Transportation", amount: 80 },
    { date: "2025-01-06", type: "Expense", category: "Food", amount: 250 },
    { date: "2025-01-07", type: "Income", category: "Rent Income", amount: 1000 },
    { date: "2025-01-08", type: "Expense", category: "Entertainment", amount: 50 },
    { date: "2025-01-09", type: "Expense", category: "Insurance", amount: 300 },
    { date: "2025-01-10", type: "Expense", category: "Health", amount: 200 },
    { date: "2025-01-11", type: "Income", category: "Investments", amount: 700 },
    { date: "2025-01-12", type: "Expense", category: "Restaurants", amount: 120 },
    { date: "2025-01-13", type: "Income", category: "Side Hustle", amount: 400 },
    { date: "2025-01-14", type: "Expense", category: "Childcare", amount: 300 },
    { date: "2025-01-15", type: "Expense", category: "Maintenance", amount: 100 },
    { date: "2025-01-16", type: "Expense", category: "Medical", amount: 250 },
    { date: "2025-01-17", type: "Income", category: "Gifts", amount: 200 },
    { date: "2025-01-18", type: "Expense", category: "Personal Care", amount: 75 },
    { date: "2025-01-19", type: "Expense", category: "Miscellaneous", amount: 50 },
    { date: "2025-01-20", type: "Income", category: "Refunds", amount: 150 },
    { date: "2025-01-21", type: "Expense", category: "Taxes", amount: 500 },
    { date: "2025-01-22", type: "Expense", category: "Mortgage Payment", amount: 1500 },
    { date: "2025-01-23", type: "Income", category: "Salary", amount: 4000 },
    { date: "2025-01-24", type: "Expense", category: "Condo Fee", amount: 100 },
    { date: "2025-01-25", type: "Expense", category: "Gas", amount: 60 },
    { date: "2025-01-26", type: "Income", category: "Investments", amount: 800 },
    { date: "2025-01-27", type: "Expense", category: "Travel Expenses", amount: 350 },
    { date: "2025-01-28", type: "Expense", category: "Utilities", amount: 150 },
    { date: "2025-01-29", type: "Expense", category: "Health", amount: 100 },
    { date: "2025-01-30", type: "Income", category: "Freelance", amount: 600 },
    { date: "2025-01-31", type: "Expense", category: "Restaurants", amount: 80 },
    { date: "2025-02-01", type: "Expense", category: "Transportation", amount: 60 },
    { date: "2025-02-02", type: "Income", category: "Rent Income", amount: 1000 },
    { date: "2025-02-03", type: "Expense", category: "Entertainment", amount: 40 },
    { date: "2025-02-04", type: "Expense", category: "Housing", amount: 1100 },
  ];
  const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;
    const totalPages = Math.ceil(transactions.length / rowsPerPage);
  
    const handlePageChange = (direction) => {
      if (direction === "next" && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev" && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
  const displayedRows = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <AddButton>+</AddButton>
        <RowContainer>
          <div>
            <Label>From</Label>
            <InputField type="date" style={{ width: "70%" }} />
          </div>
          <div>
            <Label>To</Label>
            <InputField type="date" style={{ width: "70%", marginRight:"0rem"}} />
          </div>
          <IconContainer>
            <img
              src={FilterIcon}
              style={{ width: "1rem", height: "auto" }}
              alt="icon"
            />
          </IconContainer>
          <UpdateButton style={{ maxHeight:"3rem", marginTop:"3.3rem", marginLeft:"0rem"}}>Search</UpdateButton>
        </RowContainer>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader first>Date</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader last>Amount</TableHeader>
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((transaction, index) => (
                <TableRow key={index} isOdd={index % 2 === 0}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString()}</TableCell>
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

            <p
              style={{ color: colors.kDarkGrayColor, fontFamily: "Roboto" }}
            >
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
          <CancelButton onClick={onClose}>Sync With Bank</CancelButton>
          <UpdateButton onClick={onClose}>Add Bank Account</UpdateButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default TransactionModal;
