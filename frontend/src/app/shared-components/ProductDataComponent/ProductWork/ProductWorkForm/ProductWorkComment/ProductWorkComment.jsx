import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from 'react-hook-form';

function ProductWorkComment({ work, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`works.${index}.comment`}
      control={control}
      defaultValue={work?.comment ?? ""}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Comment'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default memo(ProductWorkComment);
