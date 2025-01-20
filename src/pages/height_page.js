import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { media } from "../responsive";
import colors from "../colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "@fontsource/roboto";
import "@fontsource/work-sans";
import ModalComponent from "../components/add_height_modal";
import ModalComponent1 from "../components/add_footSize_modal";
import ModalComponent2 from "../components/add_waist_modal";

const HeightContainer = styled.div`
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

const HeightWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  padding: 1rem;
  flex-direction: column;

  ${media.extraSmall`
    
    gap: 1rem;
  `}
`;
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MetricBox = styled.div`
  flex: 1;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  padding: 0rem 0.6rem;
  margin: 0;
  position: relative;
  max-width: 8%;
  max-height: 10vh;
`;

const MetricTitle = styled.p`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  color: ${colors.kWhiteColor};
`;

const MetricSubText = styled.p`
  font-size: 0.8rem;
  color: ${colors.kWhiteColor}90;
  font-family: "Work Sans", sans-serif;
`;

const AddButton = styled.button`
  background-color: ${colors.kPrimaryColor};
  border: 1px solid ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

const TableContainer = styled.div`
  margin-top: 0.2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: ${colors.kPrimaryColor};
  color: ${colors.kWhiteColor};
  font-family: "Roboto", sans-serif;
  padding: 0.5rem 0rem 0.5rem 4rem;
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
  padding: 0.5rem 0rem 0.5rem 4rem;
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
  margin: 0rem 7rem;
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

function HeightPage() {
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

  const [currentPage1, setCurrentPage1] = useState(1);
  const rowsPerPage1 = 3;
  const totalRows1 = 10;
  const totalPages1 = Math.ceil(totalRows1 / rowsPerPage1);

  const handlePageChange1 = (direction) => {
    if (direction === "next" && currentPage1 < totalPages1) {
      setCurrentPage1(currentPage1 + 1);
    } else if (direction === "prev" && currentPage1 > 1) {
      setCurrentPage1(currentPage1 - 1);
    }
  };

  const [currentPage2, setCurrentPage2] = useState(1);
  const rowsPerPage2 = 3;
  const totalRows2 = 10;
  const totalPages2 = Math.ceil(totalRows2 / rowsPerPage2);

  const handlePageChange2 = (direction) => {
    if (direction === "next" && currentPage2 < totalPages2) {
      setCurrentPage2(currentPage2 + 1);
    } else if (direction === "prev" && currentPage2 > 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  };

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
    <HeightContainer>
      <MainContent>
        <SidebarWrapper>
          <SideBar />
        </SidebarWrapper>
        <ContentWrapper>
          <Header showChevronLeft={true} />
          <HeightWrapper>
            <SectionHeader>
              <MetricBox color={colors.kPurpleShade2}>
                <MetricTitle>180 CM</MetricTitle>
                <MetricSubText>Height</MetricSubText>
              </MetricBox>
              <AddButton onClick={handleOpenModal}>Add</AddButton>
            </SectionHeader>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeader first>Date</TableHeader>
                    <TableHeader last>Height</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: rowsPerPage },
                    (_, index) => index + 1 + (currentPage - 1) * rowsPerPage
                  ).map((row, index) => {
                    const isOdd = index % 2 === 0;
                    return (
                      <TableRow isOdd={isOdd} key={row}>
                        <TableCell>Nov 23, 2024</TableCell>
                        <TableCell>{150 + row / 10} CM</TableCell>
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

            <SectionHeader>
              <MetricBox color={colors.kPurpleShade2}>
                <MetricTitle>32 CM</MetricTitle>
                <MetricSubText>Waist</MetricSubText>
              </MetricBox>
              <AddButton onClick={handleOpenModal2}>Add</AddButton>
            </SectionHeader>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeader first>Date</TableHeader>
                    <TableHeader last>Waist</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: rowsPerPage1 },
                    (_, index) => index + 1 + (currentPage1 - 1) * rowsPerPage1
                  ).map((row, index) => {
                    const isOdd = index % 2 === 0;
                    return (
                      <TableRow isOdd={isOdd} key={row}>
                        <TableCell>Nov 23, 2024</TableCell>
                        <TableCell>{50 + row / 10} CM</TableCell>
                      </TableRow>
                    );
                  })}
                </tbody>
              </Table>

              <Pagination>
                <PaginationBox
                  onClick={() => handlePageChange1("prev")}
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
                  Page{" "}
                  <span style={{ fontWeight: "bold" }}>{currentPage1}</span> of{" "}
                  <span style={{ fontWeight: "bold" }}>{totalPages1}</span>
                </p>
                <PaginationBox
                  onClick={() => handlePageChange1("next")}
                  color={colors.kPrimaryColor}
                  color2={colors.kPrimaryColor}
                >
                  <PaginationButton color={colors.kWhiteColor}>
                    <FaArrowRight />
                  </PaginationButton>
                </PaginationBox>
              </Pagination>
            </TableContainer>

            <SectionHeader>
              <MetricBox color={colors.kPurpleShade2}>
                <MetricTitle>30 CM</MetricTitle>
                <MetricSubText>Foot Size</MetricSubText>
              </MetricBox>
              <AddButton onClick={handleOpenModal1}>Add</AddButton>
            </SectionHeader>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeader first>Date</TableHeader>
                    <TableHeader last>Foot Size</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: rowsPerPage2 },
                    (_, index) => index + 1 + (currentPage2 - 1) * rowsPerPage2
                  ).map((row, index) => {
                    const isOdd = index % 2 === 0;
                    return (
                      <TableRow isOdd={isOdd} key={row}>
                        <TableCell>Nov 23, 2024</TableCell>
                        <TableCell>{30 + row / 10} CM</TableCell>
                      </TableRow>
                    );
                  })}
                </tbody>
              </Table>

              <Pagination>
                <PaginationBox
                  onClick={() => handlePageChange2("prev")}
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
                  Page{" "}
                  <span style={{ fontWeight: "bold" }}>{currentPage2}</span> of{" "}
                  <span style={{ fontWeight: "bold" }}>{totalPages2}</span>
                </p>
                <PaginationBox
                  onClick={() => handlePageChange2("next")}
                  color={colors.kPrimaryColor}
                  color2={colors.kPrimaryColor}
                >
                  <PaginationButton color={colors.kWhiteColor}>
                    <FaArrowRight />
                  </PaginationButton>
                </PaginationBox>
              </Pagination>
            </TableContainer>
          </HeightWrapper>
        </ContentWrapper>
      </MainContent>
      <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      <ModalComponent1 isOpen={isModalOpen1} onClose={handleCloseModal1} />
      <ModalComponent2 isOpen={isModalOpen2} onClose={handleCloseModal2} />
    </HeightContainer>
  );
}

export default HeightPage;
