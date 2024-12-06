import TagInputComponent from "app/shared-components/TagInputComponent";
import { memo } from "react";

function WatchTagComponent({ tags }) {
  return (
    <TagInputComponent field={{ value: tags }} label='Tags' canEdit={false} />
  );
}

export default memo(WatchTagComponent);
