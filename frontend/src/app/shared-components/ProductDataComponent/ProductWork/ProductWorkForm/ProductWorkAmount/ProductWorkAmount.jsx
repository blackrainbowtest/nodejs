import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductWorkAmount({ work, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`works.${index}.amount`}
      control={control}
      defaultValue={work?.amount ?? ""}
      rules={{
        required: "Work amount is required",
        validate: (value) =>
          /^\d+(\.\d{1,2})?$/.test(value) || "Amount must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Amount'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          adornment='$'
        />
      )}
    />
  );
}

export default memo(ProductWorkAmount);
