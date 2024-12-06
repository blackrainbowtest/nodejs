import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from 'react-hook-form';

function ProductStonesPrice({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.price`}
      control={control}
      defaultValue={stone?.price ?? ""}
      rules={{
        required: "Stone price is required",
        validate: (value) =>
          /^\d+(\.\d{1,2})?$/.test(value) ||
          "Price must be a number",
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
  );
}

export default memo(ProductStonesPrice);
