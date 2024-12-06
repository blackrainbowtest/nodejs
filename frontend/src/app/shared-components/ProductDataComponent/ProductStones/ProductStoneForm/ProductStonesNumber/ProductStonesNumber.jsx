import { Controller, useFormContext } from "react-hook-form";
import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";

function ProductStonesNumber({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.number`}
      control={control}
      defaultValue={stone?.number ?? ''}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Number'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default memo(ProductStonesNumber);