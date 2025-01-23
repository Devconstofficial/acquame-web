import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import logoImage from "../../asset/images/splash_logo.png";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Label = styled.label`
  font-size: 1rem;
  color: ${colors.kLoginLabelColor};
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  display: block;
`;


const EyeIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 3.4rem;
  cursor: pointer;
  color: ${colors.kLoginLabelColor};
  @media (max-width: 1024px) {
    right: 2.5rem;
  top: 3.4rem; /* Adjust for tablet */
  }

  @media (max-width: 768px) {
    right: 3rem;
    top: 3.4rem; /* Adjust for mobile */
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
  font-family: "Poppins", sans-serif;
  min-height: 1rem;
  margin: 0; 
`;


const ForgotPasswordLink = styled.span`
  font-size: 1rem;
  color: ${colors.kLoginBgColor};
  margin-bottom: 2rem;
  margin-top: 0rem;
  margin-right: 2.7rem;
  text-align: right;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
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

  @media (max-width: 1200px) {
    width: 10vw; /* Adjust for tablet */
  }

  @media (max-width: 768px) {
    width: 18vw; /* Adjust for mobile */
  }
`;

const WhiteContainer = styled.div`
  background-color: ${colors.kWhiteColor};
  width: 35vw;
  height: 75vh;
  margin: 0px;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1224px) {
    width: 50vw; /* Adjust for tablet */
  }

  @media (max-width: 768px) {
    width: 80vw; /* Adjust for mobile */
    height: auto; /* Adjust height for smaller screens */
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.kTitleColor};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 0vh;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust for mobile */
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.kSubTitleColor};
  margin-bottom: 6vh;
  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust for mobile */
  }
`;

const InputGroup = styled.div`
  width: 30vw;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative; /* For visibility icon positioning */

  @media (max-width: 1024px) {
    width: 45vw; /* Adjust for tablet */
  }

  @media (max-width: 768px) {
    width: 80%; /* Adjust for mobile */
  }
`;

const InputField = styled.input`
  width: 85%;
  padding: 1rem;
  padding-right: 3rem;
  border: 0.15rem solid ${colors.kLoginTextFieldBorderColor};
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0rem;

  @media (max-width: 1024px) {
    width: 80%; /* Adjust for tablet */
  }

  @media (max-width: 768px) {
    padding: 0.8rem; /* Adjust for mobile */
    font-size: 1rem;
  }
`;

const LoginButton = styled.button`
  width: 90%;
  padding: 1rem;
  background-color: ${colors.kLoginBgColor};
  color: ${colors.kWhiteColor};
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.kPrimaryColor};
  }

  @media (max-width: 768px) {
    padding: 0.8rem; /* Adjust for mobile */
    font-size: 1rem;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    const validationErrors = {};
    if (!email || !validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!password || password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Logged in successfully!!");
      navigate("/home");
    }
  };

  return (
    <MainContainer>
      <Logo src={logoImage} alt="Banner Logo Image" />
      <WhiteContainer>
        <Title>Welcome back!</Title>
        <Subtitle>Login to access all your data</Subtitle>
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
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <InputField
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </EyeIcon>
          <ErrorMessage>{errors.password || ""}</ErrorMessage>
        </InputGroup>
        <ForgotPasswordLink onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </ForgotPasswordLink>

        <LoginButton onClick={handleLogin}>Log In</LoginButton>
      </WhiteContainer>
      <ToastContainer />
    </MainContainer>
  );
}

export default Login;
