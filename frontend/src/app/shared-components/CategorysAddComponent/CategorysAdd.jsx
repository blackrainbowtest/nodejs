import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import TitleComponent from "./content/TitleComponent/TitleComponent";
import ContentComponent from "./content/ContentComponent/ContentComponent";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "features/Category/CategoryAPI";
import ActionButtonComponent from 'app/shared-components/ActionButtonComponent';

const PopupBody = styled("div")(
  ({ theme }) => `
      width: 300px;
      min-height: 360px;
      padding: 12px 20px;
      margin-top: 8px;
      border-radius: 5px;
      background: ${theme.palette.background.default};
      box-shadow: ${theme.palette.shadow.default};
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 1;
    `
);

function CategorysAdd({ close }) {
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const [gender, setGender] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chooesedGender !== undefined) {
      setGender(chooesedGender);
    }
  }, [chooesedGender]);

  const handleActionPopup = () => {
    if (categoryName.trim() && categoryImage) {
      dispatch(
        addCategory({
          name: categoryName,
          image: categoryImage,
          gender: gender,
        })
      );
      close();
    }
  };
  return (
    <PopupBody>
      <TitleComponent close={close} />
      <ContentComponent
        props={{
          gender,
          setGender,
          categoryName,
          setCategoryName,
          categoryImage,
          setCategoryImage,
        }}
      />
      <ActionButtonComponent callback={handleActionPopup} />
    </PopupBody>
  );
}

export default memo(CategorysAdd);
