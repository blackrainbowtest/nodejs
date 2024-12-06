import TextInputComponent from "app/shared-components/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

function ProductWorkName({ work, index }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={`works.${index}.name`}
      control={control}
      defaultValue={work?.name ?? ""}
      rules={{
        required: "Work name is required",
      }}
      render={({ field, fieldState }) => (
        <TextInputComponent
          label='Name'
          value={field.value}
          onChange={field.onChange}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
export default memo(ProductWorkName);
