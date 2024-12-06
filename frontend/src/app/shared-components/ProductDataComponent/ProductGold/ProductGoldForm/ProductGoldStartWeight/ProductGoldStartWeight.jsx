import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from 'react-hook-form';

function ProductGoldStartWeight({ gold, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`golds.${index}.startWeight`}
      control={control}
      defaultValue={gold?.startWeight ?? ""}
      rules={{
        required: "Gold startWeight is required",
        validate: (value) =>
          /^\d+(\.\d{1,2})?$/.test(value) || "St. weight must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='St. weight'
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

export default memo(ProductGoldStartWeight);
