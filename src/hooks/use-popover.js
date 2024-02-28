
// import relevant hooks, components and css styles
import { useCallback, useRef, useState } from 'react';

// create functions to handle open, close and toggle of the popover
export function usePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return {
    anchorRef,
    handleClose,
    handleOpen,
    handleToggle,
    open
  };
}
