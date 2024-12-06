import React, { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import TagInputComponent from "app/shared-components/TagInputComponent";

function ProductTags() {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name="tags"
      control={control}
      defaultValue={[]}
      rules={{
        validate: value => value.length > 0 || "At least one tag is required"
      }}
      render={({ field, fieldState }) => (
        <TagInputComponent
          field={field}
          fieldState={fieldState}
          label="Enter tags"
        />
      )}
    />
  );
}

export default memo(ProductTags);
