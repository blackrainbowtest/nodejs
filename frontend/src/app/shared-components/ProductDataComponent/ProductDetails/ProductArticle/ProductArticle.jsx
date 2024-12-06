import { memo } from "react";
import TextInputComponent from "app/shared-components/TextInputComponent/TextInputComponent";
import { useFormContext } from "react-hook-form";

function ProductArticle() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInputComponent
      label='Article'
      {...register("article", {
        required: "Article is required",
        minLength: {
          value: 4,
          message: "Article must be at least 4 characters long",
        },
      })}
      error={!!errors.article}
      helperText={errors.article?.message || ""}
    />
  );
}

export default memo(ProductArticle);
