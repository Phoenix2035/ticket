import { useState, useCallback, useMemo } from "react";

export default function useOpenModal() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return useMemo(
    () => ({ open, openModal, closeModal }),
    [closeModal, open, openModal]
  );
}
