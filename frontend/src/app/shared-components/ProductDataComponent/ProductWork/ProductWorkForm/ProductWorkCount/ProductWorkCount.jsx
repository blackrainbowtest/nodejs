import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from 'react-hook-form';

function ProductWorkCount({ work, index }) {
  const { control } = useFormContext();


  return (
    <Controller
      name={`works.${index}.count`}
      control={control}
      defaultValue={work?.count ?? ""}
      rules={{
        required: "Work count is required",
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

export default memo(ProductWorkCount);
