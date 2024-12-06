import { memo } from "react";
import AccordionComponent from "app/shared-components/AccordionComponent";
import { Box } from "@mui/material";
import styled from "styled-components";
import TextInputComponent from "app/shared-components/TextInputComponent";
import { useFormContext, Controller } from "react-hook-form";

function ProductPrice() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasPriceError = errors.price?.price;
  const hasProductionPriceError = errors.price?.productPrice;

  const header = (
    <HeaderContainer haserror={hasPriceError || hasProductionPriceError}>
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.7108 0.28921C17.3514 -0.0703172 16.7396 -0.0954484 15.9879 0.218349C15.4206 0.455241 14.8066 0.868053 14.2325 1.39526C14.2016 1.36436 14.1713 1.33305 14.14 1.3027C14.0707 1.23527 13.979 1.19751 13.8821 1.1986L8.65366 1.30888C8.56275 1.3108 8.47595 1.34788 8.41155 1.41215L6.60265 3.22105C6.46491 3.35893 6.46491 3.5825 6.60265 3.72024C6.74053 3.85812 6.96396 3.85812 7.10184 3.72024L8.81049 2.01173L13.7211 1.90805C13.2907 2.37881 12.9379 2.87567 12.6955 3.35151C12.1926 3.35041 11.6893 3.54116 11.3064 3.92404C10.9366 4.29387 10.7328 4.78578 10.7328 5.30886C10.7328 5.83195 10.9365 6.32373 11.3064 6.69355C11.6763 7.06352 12.1682 7.26718 12.6913 7.26718C13.2144 7.26718 13.7061 7.06352 14.0761 6.69355C14.4459 6.32373 14.6496 5.83195 14.6496 5.30886C14.6496 5.22166 14.6434 5.13542 14.6323 5.05055C14.6321 5.04931 14.632 5.04808 14.6319 5.04684C14.5756 4.62304 14.3834 4.23138 14.0761 3.92404C13.883 3.73109 13.6594 3.58703 13.4209 3.49159C13.6263 3.13 13.9035 2.7555 14.2331 2.39419L16.0925 4.25363L15.9884 9.18965L8.03005 17.1479L0.852127 9.96995L5.09271 5.72937C5.23059 5.59149 5.23059 5.36805 5.09271 5.23018C4.95483 5.0923 4.73154 5.0923 4.59352 5.23018L0.103409 9.72043C0.0372162 9.78662 0 9.8763 0 9.96995C0 10.0636 0.0372162 10.1533 0.103409 10.2195L7.78052 17.8966C7.84946 17.9655 7.93968 18 8.03005 18C8.12041 18 8.21077 17.9655 8.27971 17.8966L16.5878 9.58845C16.6521 9.52405 16.6892 9.43725 16.6911 9.3462L16.8015 4.11781C16.8035 4.02168 16.7661 3.92884 16.6981 3.86087L16.6047 3.76748C17.1319 3.19345 17.5448 2.57945 17.7817 2.01214C18.0954 1.26054 18.0703 0.648601 17.7108 0.28921ZM12.6911 6.56131C12.3566 6.56131 12.0421 6.43098 11.8055 6.19436C11.569 5.95788 11.4387 5.64326 11.4387 5.30873C11.4387 4.97419 11.5689 4.65971 11.8055 4.42309C11.9773 4.25129 12.187 4.14033 12.4078 4.08938C12.2673 4.63925 12.3408 5.08625 12.6273 5.37272C12.8202 5.56567 13.0846 5.66235 13.4041 5.66235C13.5606 5.66235 13.7304 5.63845 13.9113 5.59217C13.8593 5.81836 13.745 6.02613 13.5769 6.19436C13.3403 6.43098 13.0258 6.56131 12.6911 6.56131ZM13.8653 4.87133C13.4589 5.00372 13.2163 4.96348 13.1265 4.87353C13.0136 4.76065 13.0174 4.48187 13.1288 4.13566C13.2924 4.19636 13.4456 4.29194 13.5769 4.42309C13.7061 4.55232 13.8034 4.70503 13.8653 4.87133ZM17.1302 1.74023C16.9269 2.22692 16.5677 2.76045 16.105 3.26774L14.7323 1.89486C15.2396 1.4322 15.7729 1.07295 16.2598 0.869701C16.7027 0.684856 17.0763 0.652858 17.2116 0.788265C17.3471 0.923671 17.3151 1.29734 17.1302 1.74023Z'
          fill='black'
        />
      </svg>
      Price
    </HeaderContainer>
  );

  const content = (
    <ContentContainer>
      <Controller
        name='price.productionPrice'
        control={control}
        defaultValue=''
        rules={{
          required: "Production price is required",
          validate: (value) =>
            /^\d+(\.\d{1,2})?$/.test(value) ||
            "The production price must be a number",
        }}
        render={({ field, fieldState }) => (
          <TextInputComponent
            label='Production price'
            value={field.value}
            onChange={field.onChange}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='price.price'
        control={control}
        defaultValue=''
        rules={{
          required: "Price is required",
          validate: (value) =>
            /^\d+(\.\d{1,2})?$/.test(value) || "The price must be a number",
        }}
        render={({ field, fieldState }) => (
          <TextInputComponent
            label='Price'
            value={field.value}
            onChange={field.onChange}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
    </ContentContainer>
  );

  return <AccordionComponent header={header} content={content} />;
}

export default memo(ProductPrice);

const HeaderContainer = styled(Box)(({ theme, haserror }) => ({
  width: "100%",
  display: "flex",
  gap: "10px",
  color: haserror ? theme.palette.error.main : theme.palette.text.primary,
}));

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
}));
