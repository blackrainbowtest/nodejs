import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { logoutUser } from "features/auth/user_logout/LogoutAPI";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Action() {
  const location = useLocation();
  const isSignIn = location.pathname === "/sign-in";
  const isSignUp = location.pathname === "/sign-up";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleClose();
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/sign-in");
  };

  return (
    <div>
      {isSignIn && (
        <div>
          Don't have an account? <Link to='/sign-up'>Register</Link>
        </div>
      )}
      {isSignUp && (
        <div>
          Already have an account? <Link to='/sign-in'>Login</Link>
        </div>
      )}
      {!isSignIn && !isSignUp && (
        <>
          <MainContainer>
            <Tooltip title='Account settings'>
              <ButtonContainer
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                {user?.name}
              </ButtonContainer>
            </Tooltip>
          </MainContainer>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            
          >
            <MenuItem onClick={handleLogout} sx={{minWidth: "200px!important"}}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}

export default memo(Action);

const MainContainer = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
}));

const ButtonContainer = styled(IconButton)(() => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
}));
