import { useCallback, useState } from "react";

export type IDrawer = {
  onClose?: () => void;
  onOpen?: () => void;
};

export const useDrawer = ({ onClose, onOpen }: IDrawer) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const openDrawer = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  return {isOpen, openDrawer, closeDrawer};
};
