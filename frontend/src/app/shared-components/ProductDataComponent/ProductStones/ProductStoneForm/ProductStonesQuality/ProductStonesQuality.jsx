import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from 'react-hook-form';

function ProductStonesQuality({ stone, index }) {
  const { control } = useFormContext();
  
  return (
    <Controller
      name={`stones.${index}.quality`}
      control={control}
      defaultValue={stone?.quality ?? ""}
      rules={{
        required: "Stone quality is required",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Quality'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default memo(ProductStonesQuality);
