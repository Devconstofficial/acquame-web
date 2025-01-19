import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import logoImage from "../../asset/images/splash_logo.png";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  background-color: ${colors.kLoginBgColor};
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 7vw;
  height: auto;
  margin: 4vh 0vh 2vh 0vh;
`;

const WhiteContainer = styled.div`
  background-color: ${colors.kWhiteColor};
  width: 35vw;
  height: 50vh;
  margin: 0px;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.kTitleColor};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 0vh;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.kSubTitleColor};
  margin-bottom: 6vh;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const InputGroup = styled.div`
  width: 30vw;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${colors.kLoginLabelColor};
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  display: block;
`;

const InputField = styled.input`
  width: 26vw;
  padding: 1rem;
  padding-right: 3rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0rem;
`;

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
  font-family: "Poppins", sans-serif;
  min-height: 1rem;
  margin: 0.1rem 0 0 0;
`;

const LoginButton = styled.button`
  width: 85%;
  padding: 1rem;
  background-color: ${colors.kLoginBgColor};
  color: ${colors.kWhiteColor};
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 0.9rem;
  &:hover {
    background-color: ${colors.kPrimaryColor};
  }
`;

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = () => {
    const validationErrors = {};
    if (!email || !validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/otp-verification");
    }
  };

  return (
    <MainContainer>
      <Logo src={logoImage} alt="Banner Logo Image" />
      <WhiteContainer>
        <Title>Forgot Password?</Title>
        <Subtitle>
          Please enter your email address to reset your password.
        </Subtitle>
        <InputGroup>
          <Label htmlFor="email">Email Address</Label>
          <InputField
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ErrorMessage>{errors.email || ""}</ErrorMessage>
        </InputGroup>

        <LoginButton onClick={handleForgotPassword}>Submit</LoginButton>
      </WhiteContainer>
    </MainContainer>
  );
}

export default ForgotPasswordPage;
