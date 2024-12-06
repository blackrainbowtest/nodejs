import { IconButton, Input, InputAdornment } from "@mui/material";
import {
  changeFilter,
  resetFilter,
  setArticle,
  setFiltredData,
} from "features/Filter/FilterSlice";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const InputComponent = styled(Input)`
  height: 40px;
  width: 380px;
  padding-left: 10px;
  background: ${(props) => props.theme.palette.background.input}!important;
  border-radius: 25px;
  border-bottom: none !important;

  &.MuiInputBase-root:before {
    content: none;
  }
  &.MuiInputBase-root:after {
    content: none;
  }
`;

const InputIconButton = styled(IconButton)`
  height: 32px;
  width: 32px;
  background: ${(props) => props.theme.palette.background.button}!important;
  color: ${(props) => props.theme.palette.common.white}!important;
  & svg {
    width: 50px;
    height: 27px;
  }
`;

function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product);
  const { value, weight, carat, price, prodPrice, article } = useSelector(
    (state) => state?.filter
  );

  const handleChange = (event) => {
    setSearchText(event.target.value);
    dispatch(setArticle(event.target.value));
    if (event.target.value === "") {
      dispatch(changeFilter(false));
      dispatch(resetFilter());
    }
  };

  const handleMouseDownSearching = (event) => {
    event.preventDefault();
  };

  const handleClickSearching = (event) => {
    dispatch(setArticle(searchText));
    dispatch(changeFilter(true));

    const tempData = productData.data.filter((elm) => {
      const currentArticle = elm.article;
      const currentTime = elm.currentTime * 1000;
      const currentWeight = elm.golds.reduce(
        (sum, stone) => sum + stone.weight,
        0
      );
      const currentCarat = elm.stones.reduce(
        (sum, stone) => sum + stone.weight,
        0
      );
      const currentPrice = elm.price.price;
      const currentProdPrice = elm.price.productionPrice;

      const isAfterValue = value[0] ? currentTime >= value[0].valueOf() : true;
      const isBeforeValue = value[1] ? currentTime <= value[1].valueOf() : true;

      const isArticle =
        article !== ""
          ? currentArticle.toLowerCase().includes(article.toLowerCase())
          : true;

      const isAfterWeight = weight[0] ? currentWeight >= weight[0] : true;
      const isBeforeWeight = weight[1] ? currentWeight <= weight[1] : true;

      const isAfterCarat = carat[0] ? currentCarat >= carat[0] : true;
      const isBeforeCarat = carat[1] ? currentCarat <= carat[1] : true;

      const isAfterPrice = price[0] ? currentPrice >= price[0] : true;
      const isBeforePrice = price[1] ? currentPrice <= price[1] : true;

      const isAfterProdPrice = prodPrice[0]
        ? currentProdPrice >= prodPrice[0]
        : true;

      const isBeforeProdPrice = prodPrice[1]
        ? currentProdPrice <= prodPrice[1]
        : true;

      return (
        isArticle &&
        isAfterValue &&
        isBeforeValue &&
        isAfterWeight &&
        isBeforeWeight &&
        isAfterCarat &&
        isBeforeCarat &&
        isAfterPrice &&
        isBeforePrice &&
        isAfterProdPrice &&
        isBeforeProdPrice
      );
    });

    dispatch(setFiltredData(tempData));
  };

  return (
    <InputComponent
      value={searchText}
      onChange={handleChange}
      endAdornment={
        <InputAdornment position='end'>
          <InputIconButton
            size='small'
            aria-label='toggle password visibility'
            onClick={handleClickSearching}
            onMouseDown={handleMouseDownSearching}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'
              />
            </svg>
          </InputIconButton>
        </InputAdornment>
      }
    />
  );
}

export default memo(Search);
