import React, { useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import logoImage from "../../asset/images/splash_logo.png";
import "@fontsource/poppins";
import "@fontsource/urbanist";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  background-color: ${colors.kLoginBgColor};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 6rem;
  height: auto;
  margin: 4vh 0 2vh 0;
`;

const WhiteContainer = styled.div`
  background-color: ${colors.kWhiteColor};
  width: 28rem;
  padding: 2rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.kTitleColor};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.kSubTitleColor};
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const OtpInput = styled.input`
  width: 4rem;
  height: 4rem;
  font-size: 1.8rem;
  text-align: center;
  border: none;
  border-bottom: 3px solid ${colors.kLoginBgColor};
  background-color: transparent;
  color: ${colors.kBlackColor};
  font-family: "Urbanist", sans-serif;
  font-weight: bold;

  &:focus {
    outline: none;
    border-bottom: 3px solid ${colors.kLoginBgColor}; 
    color: ${colors.kLoginBgColor}; 
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: ${colors.kLoginBgColor};
  color: ${colors.kWhiteColor};
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.kPrimaryColor};
  }
`;

function OTPVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const allInputsFilled = otp.every((value) => value.trim() !== "");

    if (allInputsFilled) {
      toast.success("Verified Successfully!", {
        icon: "✅",
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#28a745",
        },
      });
      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    } else {
      toast.error("Invalid input, please try again!", {
        icon: "❌",
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#dc3545",
        },
      });
    }
  };

  return (
    <MainContainer>
      <ToastContainer />
      <Logo src={logoImage} alt="Banner Logo Image" />
      <WhiteContainer>
        <Title>Confirm OTP</Title>
        <Subtitle>Please enter your 5 digit code to reset your password.</Subtitle>
        <OtpContainer>
          {otp.map((digit, index) => (
            <OtpInput
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1" 
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </OtpContainer>
        <LoginButton onClick={handleSubmit}>Verify</LoginButton>
      </WhiteContainer>
    </MainContainer>
  );
}

export default OTPVerificationPage;
