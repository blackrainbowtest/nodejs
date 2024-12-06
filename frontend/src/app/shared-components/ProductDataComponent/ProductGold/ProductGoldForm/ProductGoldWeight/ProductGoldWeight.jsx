import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductGoldWeight({ gold, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`golds.${index}.weight`}
      control={control}
      defaultValue={gold?.weight ?? ""}
      rules={{
        required: "Gold weight is required",
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
          adornment='Gr'
        />
      )}
    />
  );
}

export default memo(ProductGoldWeight);
