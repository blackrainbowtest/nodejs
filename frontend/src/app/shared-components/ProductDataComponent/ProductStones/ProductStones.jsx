import { memo } from "react";
import AccordionComponent from "app/shared-components/AccordionComponent";
import { Box } from "@mui/material";
import styled from "styled-components";
import ProductStoneForm from "./ProductStoneForm";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

function ProductStones() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "stones",
  });

  const addNewStone = () => {
    append({
      type: "",
      count: 0,
      diametr: 0,
      weight: 0,
      quality: "",
      price: 0,
      number: "",
      gia: false,
    });
  };

  const removeStone = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  const hasAnyStoneError = fields.some((_, index) => {
    return errors.stones?.[index] !== undefined && 
      Object.values(errors.stones[index]).some(e => e !== undefined);
  });

  const header = (
    <HeaderContainer haserror={hasAnyStoneError.toString()}>
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g opacity='0.55'>
          <path
            d='M17.9424 7.57859L15.06 3.18271C14.9949 3.08363 14.8845 3.02393 14.766 3.02393H3.24766C3.12943 3.02393 3.01914 3.08335 2.95411 3.18211L0.0670029 7.56488C0.0532568 7.58383 0.0413389 7.60429 0.0313897 7.62616C-0.0255986 7.75183 -0.00380176 7.89918 0.0871123 8.00297L1.55049 9.67402C1.67843 9.82011 1.90047 9.83481 2.04651 9.7069C2.19255 9.57895 2.20725 9.35685 2.07935 9.21083L1.12672 8.12294H5.85527L8.23138 16.236L5.54632 13.1699C5.41842 13.0238 5.1963 13.0091 5.0503 13.137C4.90426 13.265 4.88956 13.4871 5.01746 13.6331L8.73664 17.8801C8.80337 17.9563 8.8998 18.0001 9.00109 18.0001C9.10241 18.0001 9.19877 17.9563 9.2655 17.8801L13.2251 13.3574C13.3531 13.2113 13.3384 12.9892 13.1922 12.8613C13.0461 12.7333 12.824 12.7481 12.6962 12.8942L9.77087 16.2356L12.1469 8.1229H16.8735L14.6873 10.62C14.5594 10.7661 14.5741 10.9882 14.7202 11.116C14.7869 11.1745 14.8695 11.2031 14.9517 11.2031C15.0495 11.2031 15.1468 11.1625 15.2163 11.0831L17.913 8.00294C18.0169 7.88417 18.029 7.71062 17.9424 7.57859ZM1.00451 7.41981L3.24696 4.01558L5.4792 7.41981H1.00451ZM3.89854 3.72709H8.35013L6.12436 7.12148L3.89854 3.72709ZM9.00105 4.0166L11.2326 7.41981H6.76951L9.00105 4.0166ZM9.00105 16.3627L6.58786 8.12294H11.4142L9.00105 16.3627ZM11.8835 7.1303L9.65197 3.72709H14.1151L11.8835 7.1303ZM12.5344 7.41981L14.766 4.0166L16.9975 7.41981H12.5344Z'
            fill='black'
          />
          <path
            d='M5.52628 11.4968C4.61949 11.4968 3.88174 10.7589 3.88174 9.85205C3.88174 9.6579 3.72434 9.50049 3.53021 9.50049C3.33608 9.50049 3.17868 9.6579 3.17868 9.85205C3.17868 10.7589 2.44093 11.4968 1.53414 11.4968C1.34005 11.4968 1.18262 11.6542 1.18262 11.8483C1.18262 12.0425 1.34005 12.1999 1.53414 12.1999C2.44093 12.1999 3.17868 12.9377 3.17868 13.8446C3.17868 14.0388 3.33611 14.1962 3.53021 14.1962C3.72431 14.1962 3.88174 14.0388 3.88174 13.8446C3.88174 12.9377 4.61949 12.1999 5.52628 12.1999C5.72041 12.1999 5.87781 12.0425 5.87781 11.8483C5.87781 11.6542 5.72041 11.4968 5.52628 11.4968ZM3.53021 12.6099C3.33858 12.3012 3.07743 12.04 2.76873 11.8483C3.07743 11.6567 3.33854 11.3955 3.53021 11.0867C3.72185 11.3955 3.98299 11.6566 4.2917 11.8483C3.98299 12.04 3.72188 12.3011 3.53021 12.6099Z'
            fill='black'
          />
          <path
            d='M17.6486 1.40626C17.0671 1.40626 16.594 0.933112 16.594 0.351565C16.594 0.157411 16.4366 0 16.2425 0C16.0484 0 15.891 0.157411 15.891 0.351565C15.891 0.933112 15.4179 1.40626 14.8364 1.40626C14.6423 1.40626 14.4849 1.56367 14.4849 1.75783C14.4849 1.95198 14.6423 2.10939 14.8364 2.10939C15.4179 2.10939 15.891 2.58254 15.891 3.16409C15.891 3.35824 16.0484 3.51565 16.2425 3.51565C16.4366 3.51565 16.594 3.35824 16.594 3.16409C16.594 2.58254 17.0671 2.10939 17.6486 2.10939C17.8427 2.10939 18.0001 1.95198 18.0001 1.75783C18.0001 1.56367 17.8427 1.40626 17.6486 1.40626ZM16.2425 2.11048C16.1422 1.97694 16.0234 1.85814 15.8899 1.75783C16.0234 1.65751 16.1422 1.53871 16.2425 1.40517C16.3428 1.53871 16.4616 1.65751 16.5951 1.75783C16.4616 1.8581 16.3428 1.97694 16.2425 2.11048Z'
            fill='black'
          />
          <path
            d='M14.1606 11.7905C14.0952 11.7248 14.0045 11.6875 13.9121 11.6875C13.8196 11.6875 13.7293 11.7248 13.6636 11.7905C13.5982 11.8559 13.5605 11.9466 13.5605 12.0391C13.5605 12.1315 13.5981 12.2222 13.6636 12.2876C13.7289 12.353 13.8196 12.3906 13.9121 12.3906C14.0045 12.3906 14.0952 12.353 14.1606 12.2876C14.2259 12.2222 14.2636 12.1315 14.2636 12.0391C14.2636 11.9466 14.226 11.8559 14.1606 11.7905Z'
            fill='black'
          />
        </g>
      </svg>
      Stones
    </HeaderContainer>
  );

  const content = (
    <ContentContainer>
      <Controller
        name='stones'
        control={control}
        render={({ field }) =>
          field.value.map((stone, index) => {
            return (
              <ProductStoneForm
                key={index}
                stone={stone}
                index={index}
                canDelete={fields.length === 1}
                addNew={fields.length === index + 1}
                onAdd={addNewStone}
                onRemove={() => removeStone(index)}
              />
            );
          })
        }
      />
    </ContentContainer>
  );

  return <AccordionComponent header={header} content={content} />;
}

export default memo(ProductStones);

const HeaderContainer = styled(Box)(({ theme, haserror }) => ({
  width: "100%",
  display: "flex",
  gap: "10px",
  color: haserror === "true" ? theme.palette.error.main : theme.palette.text.primary,
}));

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
}));
