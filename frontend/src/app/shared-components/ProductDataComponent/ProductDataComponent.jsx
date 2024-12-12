import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import TitleActionComponent from "app/shared-components/TitleActionComponent/TitleActionComponent";
import ProductClassification from "./ProductClassification";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductGold from "./ProductGold";
import ProductWork from "./ProductWork";
import ProductStones from "./ProductStones";
import ProductPrice from "./ProductPrice";
import ProductActions from './ProductActions';
import { FormProvider, useForm } from "react-hook-form";
import { addProduct, patchProduct } from "features/Product/ProductAPI";
import { getCurrentUnixTime } from "utils/validation";

function ProductDataComponent({ handleClose }) {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state?.category?.data);
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const currentUser = useSelector((state) => state?.user?.user);
  const currentData = useSelector((state) => state?.product?.currentData);
  const [gender, setGender] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const methods = useForm({
    defaultValues: currentData.id
      ? currentData
      : {
          article: "A544",
          tags: ["ts"],
          images: [],
          golds: [
            {
              id: "defGold_001",
              startWeight: 54.05,
              weight: 50.05,
              price: 1700,
              color: 1,
              prob: 585,
            },
          ],
          price: { productionPrice: 174000.0, price: 200000.0 },
          stones: [
            {
              id: "defStone_001",
              type: "Briliant",
              count: 1,
              diametr: 1.25,
              weight: 2.15,
              quality: "Normal",
              price: 14780.0,
              GIA: false,
              number: "ASR877-544",
            },
          ],
          works: [
            {
              id: "defWork_001",
              name: "Connect",
              count: "2",
              price: "1400",
              amount: "1500",
              comment: "Test comment",
            },
          ],
        },
    mode: "onChange", // or 'onBlur' ll update on submit click
  });

  const onSubmit = (data) => {
    if (!currentData.id) {
      dispatch(
        addProduct({
          ...data,
          userId: currentUser.id,
          currentTime: getCurrentUnixTime(),
          gender: gender,
          category: selectedCategory,
          subcategory: selectedSubCategory,
        })
      );
    } else {
      dispatch(
        patchProduct({
          ...data,
          userId: currentUser.id,
          currentTime: getCurrentUnixTime(),
          gender: gender,
          category: selectedCategory,
          subcategory: selectedSubCategory,
        })
      );
    }
    
    handleClose();
  };

  // gender set hook
  useEffect(() => {
    if (currentData.id) {
      setGender(currentData.gender);
    }
  }, [currentData]);

  // Category set hook
  useEffect(() => {
    const activeCategorys = categorys.filter((c) => c.gender === gender);
    const newCategory = activeCategorys.length ? activeCategorys[0].id : -1;
    if (currentData.id) {
      setSelectedCategory(currentData.category);
    } else {
      setSelectedCategory(newCategory);
    }
  }, [categorys, gender, currentData]);

  // subCategory set hook
  useEffect(() => {
    const activeSubCategorys = subCategory.filter(
      (sb) => sb.parent === selectedCategory
    );
    console.log(activeSubCategorys);
    
    const newSubCategory = activeSubCategorys.length
      ? activeSubCategorys[0].id
      : -1;
    if (currentData.category === selectedCategory && currentData.id) {
      setSelectedSubCategory(currentData.subcategory);
    } else {
      setSelectedSubCategory(newSubCategory);
    }
  }, [currentData, selectedCategory, subCategory]);

  return (
    <FormProvider {...methods}>
      <MainContainer>
        <TitleActionComponent close={handleClose} title={currentData.id ? "Edit product" : "Add product"} />
        <ProductClassification
          props={{
            gender,
            setGender,
            selectedCategory,
            setSelectedCategory,
            selectedSubCategory,
            setSelectedSubCategory,
          }}
        />
        <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductDetails />
          <ProductGold />
          <ProductWork />
          <ProductStones />
          <ProductPrice />
          <ProductActions props={{gender, selectedCategory, selectedSubCategory}}/>
        </ContentContainer>
      </MainContainer>
    </FormProvider>
  );
}

export default memo(ProductDataComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "860px",
  maxHeight: "800px",
  overflow: "auto",
  background: `${theme.palette.background.main}!important`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "30px",
  borderRadius: "5px",
}));

const ContentContainer = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));
