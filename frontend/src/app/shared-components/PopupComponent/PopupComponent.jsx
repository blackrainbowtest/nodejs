import { memo, useEffect, useRef } from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";

function PopupComponent({
  children,
  id,
  open,
  anchor,
  placement = "bottom-end",
  close,
}) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      event.stopPropagation()
      event.preventDefault()
      close();
    }
  };

  return (
    <BasePopup
      ref={popupRef}
      id={id}
      open={open}
      anchor={anchor}
      placement={placement}
    >
      {children}
    </BasePopup>
  );
}

export default memo(PopupComponent);
