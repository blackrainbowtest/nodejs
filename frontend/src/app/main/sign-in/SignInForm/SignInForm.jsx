import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import TextInputComponent from "app/shared-components/TextInputComponent";
import { loginUser } from "features/auth/user_login/LoginAPI";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserLoginData, validateField } from "utils/registration";
import { validateEmail, validatePassword } from "utils/validation";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmitLogin = useCallback(() => {
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

    if (
      !emailErrorText &&
      isEmailValid &&
      !passwordErrorText &&
      isPasswordValid
    ) {
      const userData = createUserLoginData(email, password, rememberMe);
      dispatch(loginUser(userData)).then((result) => {
        if (loginUser.fulfilled.match(result)) {
          navigate("/");
          if (rememberMe) {
            localStorage.setItem("authToken", result.payload?.user?.token);
          } else {
            sessionStorage.setItem("authToken", result.payload?.user?.token);
          }
        }
      });
    }
  }, [dispatch, email, navigate, password, rememberMe]);

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSubmitLogin();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.state, handleSubmitLogin]);

  return (
    <MainContainer>
      <TitleContainer>Login</TitleContainer>
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
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
            color='primary'
          />
        }
        label='Remember me'
      />
      <ActionButtonComponent label='Login' callback={handleSubmitLogin} />
      <SignUpLinkContainer>
        <Typography variant='body2'>
          Forgot your password?
          <br />
          <Link to='/restore'>Restore</Link>
        </Typography>
      </SignUpLinkContainer>
    </MainContainer>
  );
}

export default memo(SignInForm);

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

const SignUpLinkContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& a": {
    color: theme.palette.secondary.text,
    textDecoration: "none",
    fontWeight: "bold",
  },
  "& a:hover": {
    textDecoration: "underline",
  },
}));
