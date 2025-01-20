import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/roboto";
import colors from "../colors";

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
`;

const TotalScoreRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

const TotalScoreInput = styled.input`
  width: 5rem;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid ${colors.kStrokeColor};
  border-radius: 0.5rem;
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

function AssessmentModal({ isOpen, onClose }) {
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
  
    return (
      <ModalOverlay>
        <ModalContainer>
          <Title>Anxiety Assessment GAD-7 Screening Tool</Title>
          <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  <th hasBorderRadius={true}>
                    Over the last 2 weeks, how often have you been bothered by the following problems?
                  </th>
                  <th>Not at all</th>
                  <th>Several days</th>
                  <th>More than half the days</th>
                  <th hasBorderRadius={true}>Nearly every day</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question, questionIndex) => (
                  <tr key={questionIndex}>
                    <td>{question}</td>
                    {scores[questionIndex].map((value, columnIndex) => (
                      <td key={columnIndex}>
                        <TextInput
                          type="number"
                          value={value}
                          onChange={(e) =>
                            handleInputChange(questionIndex, columnIndex, e.target.value)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableContainer>
          <TotalScoreRow>
            <span><strong>Total Score:</strong></span>
            <TotalScoreInput type="number" value={totalScore} readOnly />
          </TotalScoreRow>
          <ButtonContainer>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
            <AddGoalButton onClick={onClose}>Save</AddGoalButton>
          </ButtonContainer>
        </ModalContainer>
      </ModalOverlay>
    );
  }
  
  export default AssessmentModal;
  
