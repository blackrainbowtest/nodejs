import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductStonesWeight({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.weight`}
      control={control}
      defaultValue={stone?.weight ?? ""}
      rules={{
        required: "Stone weight is required",
        validate: (value) =>
          /^\d+(\.\d{1,2})?$/.test(value) || "Weight must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Weight'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          adornment="Ct"
        />
      )}
    />
  );
}

export default memo(ProductStonesWeight);
