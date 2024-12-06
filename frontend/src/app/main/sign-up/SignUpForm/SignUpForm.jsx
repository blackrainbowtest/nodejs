import { Box } from "@mui/material";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import TextInputComponent from "app/shared-components/TextInputComponent";
import { registerUser } from "features/auth/user_register/RegisterAPI";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserData, validateField } from "utils/registration";
import { validateEmail, validatePassword } from "utils/validation";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] =
    useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmChange = useCallback(
    (data) => {
      setConfirmPassword(data);
      if (password !== data) {
        setConfirmPasswordError(true);
        setConfirmPasswordHelperText("Passwords do not match.");
      } else {
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText("");
      }
    },
    [password]
  );

  const handleSubmitRegistration = useCallback(() => {
    const isNameValid = validateField(
      "Name",
      name,
      setNameError,
      setNameHelperText
    );
    const emailErrorText = validateEmail(email);
    const isEmailValid = validateField(
      "Email",
      email,
      setEmailError,
      setEmailHelperText
    );
    const passwordErrorText = validatePassword(password);
    const isPasswordValid = validateField(
      "Password",
      password,
      setPasswordError,
      setPasswordHelperText
    );

    handleConfirmChange(confirmPassword);

    if (
      isNameValid &&
      !emailErrorText &&
      isEmailValid &&
      !passwordErrorText &&
      isPasswordValid &&
      password === confirmPassword
    ) {
      const userData = createUserData(name, email, password);
      dispatch(registerUser(userData)).then((result) => {
        if (registerUser.fulfilled.match(result)) {
          navigate("/sign-in", { state: { email } });
        }
      });
    }
  }, [
    confirmPassword,
    dispatch,
    email,
    handleConfirmChange,
    name,
    navigate,
    password,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSubmitRegistration();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmitRegistration]);

  return (
    <MainContainer>
      <TitleContainer>Registration</TitleContainer>
      <TextInputComponent
        value={name}
        callback={setName}
        label='Name'
        type='text'
        error={nameError}
        helperText={nameHelperText}
      />
      <TextInputComponent
        value={email}
        callback={setEmail}
        label='Email'
        type='email'
        error={emailError}
        helperText={emailHelperText}
      />
      <TextInputComponent
        value={password}
        callback={setPassword}
        label='Password'
        type='password'
        error={passwordError}
        helperText={passwordHelperText}
      />
      <TextInputComponent
        value={confirmPassword}
        callback={handleConfirmChange}
        label='Confirm Password'
        type='password'
        error={confirmPasswordError}
        helperText={confirmPasswordHelperText}
      />
      <ActionButtonComponent
        label='Registration'
        callback={handleSubmitRegistration}
      />
    </MainContainer>
  );
}

export default memo(SignUpForm);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "inherit",
  minHeight: "inherit",
  backgroundColor: `${theme.palette.background.main}!important`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  gap: "10px",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  fontSize: "22px",
  color: theme.palette.primary.text,
  fontWeight: "500",
}));
