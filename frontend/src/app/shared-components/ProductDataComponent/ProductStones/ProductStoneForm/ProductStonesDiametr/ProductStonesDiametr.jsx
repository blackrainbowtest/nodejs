import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductStonesDiametr({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.diametr`}
      control={control}
      defaultValue={stone?.diametr ?? ""}
      rules={{
        required: "Stone diametr is required",
        validate: (value) =>
          /^\d+(\.\d{1,2})?$/.test(value) || "Diametr must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Diametr'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          adornment='Mm'
        />
      )}
    />
  );
}

export default memo(ProductStonesDiametr);
