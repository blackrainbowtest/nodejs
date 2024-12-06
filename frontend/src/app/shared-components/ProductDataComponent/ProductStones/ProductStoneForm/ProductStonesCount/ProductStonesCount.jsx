import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductStonesCount({ stone, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`stones.${index}.count`}
      control={control}
      defaultValue={stone?.count ?? ""}
      rules={{
        required: "Stone count is required",
        validate: (value) => /^\d*$/.test(value) || "Count must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Count'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
export default memo(ProductStonesCount);
