import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductStoneType({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.type`}
      control={control}
      defaultValue={stone?.type ?? ""}
      rules={{
        required: "Stone type is required",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Type'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default memo(ProductStoneType);
