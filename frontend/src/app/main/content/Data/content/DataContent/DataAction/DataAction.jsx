import { Box, IconButton } from "@mui/material";
import { memo, useState } from "react";
import styled, { css } from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import ModalComponent from "app/shared-components/ModalComponent";
import TitleActionComponent from "app/shared-components/TitleActionComponent";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { useDispatch } from "react-redux";
import { deleteProduct } from "features/Product/ProductAPI";
import { resetCurrentData, setCurrentData } from 'features/Product/ProductSlice';
import ProductDataComponent from 'app/shared-components/ProductDataComponent';

function DataAction({ elm }) {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(resetCurrentData());
  };

  const handleClickButton = (event) => {
    setIsActive((prev) => !prev);
  };
  const handleDeleteButton = (event) => {
    setIsModal((prev) => !prev);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleEditButton = async (event) => {
    await dispatch(setCurrentData(elm));
    handleOpen();
  };
  
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(elm));
    setIsModal(false);
  };
  return (
    <MainContainer>
      <ArticleContainer>
        {elm.article.length ? elm.article : "A555"}
      </ArticleContainer>
      <InfoContainer>
        {isActive ? (
          <InfoContainer>
            <IconButtonContainer onClick={handleDeleteButton}>
              <DeleteIconContainer />
            </IconButtonContainer>
            <IconButtonContainer onClick={handleEditButton}>
              <EditIcon />
            </IconButtonContainer>
          </InfoContainer>
        ) : (
          <ArticleContainer>
            {elm.price.price.length ? elm.price.price : "2000"}$
          </ArticleContainer>
        )}
        <IconButtonContainer onClick={handleClickButton}>
          {isActive ? <ClearIcon /> : <MoreVertIcon />}
        </IconButtonContainer>
      </InfoContainer>
      {isModal ? (
        <ModalComponent open={isModal} handleClose={handleCloseModal}>
          <ActionContentContainer>
            <TitleActionComponent
              close={handleCloseModal}
              title={`Delete ${elm.article.length ? elm.article : "A555"}`}
              customStyles={TitleStyle}
            ></TitleActionComponent>
            <ModalContentContainer sx={{ flexGrow: 1 }}>
              <h2>Delete {elm.article.length ? elm.article : "A555"}</h2>
            </ModalContentContainer>
            <ModalContentContainer>
              <ActionButtonComponent
                label='No'
                customStyles={WatchButtonStyle}
                callback={handleCloseModal}
              />
              <ActionButtonComponent
                label='Yes'
                customStyles={ActionButtonStyle}
                callback={handleDeleteProduct}
              />
            </ModalContentContainer>
          </ActionContentContainer>
        </ModalComponent>
      ) : null}
      <ModalComponent open={open} handleClose={handleClose}>
        <ProductDataComponent handleClose={handleClose} />
      </ModalComponent>
    </MainContainer>
  );
}

export default memo(DataAction);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const InfoContainer = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const ArticleContainer = styled("span")(({ theme }) => ({
  height: "100%",
  color: theme.palette.text.grey,
}));

const IconButtonContainer = styled(IconButton)(({ theme }) => ({
  minWidth: "16px!important",
  padding: "0px!important",
}));

const DeleteIconContainer = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ActionContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "400px",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "10px",
}));

const TitleStyle = ({ theme }) => css`
  padding: 5px 15px 0px 15px;
  background-color: ${theme.palette.background.dark}!important;
`;

const ModalContentContainer = styled(Box)(({ theme }) => ({
  minWidth: "400px",
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px 15px 5px 15px",
  gap: "20px",
}));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
  border-radius: 5px !important;
`;

const WatchButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
  background-color: ${theme.palette.text.grey}!important;
  color: ${theme.palette.text.white}!important;
  border: 1px solid ${theme.palette.text.grey}!important;
  border-radius: 5px !important;
`;
