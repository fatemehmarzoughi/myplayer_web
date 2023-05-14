import { Context, DispatchContext } from "core";
import { useCallback, useContext } from "react";

export type IDrawer = {
  onClose?: () => void;
  onOpen?: () => void;
};

export const useDrawer = ({ onClose, onOpen }: IDrawer) => {
  const { isDrawerOpen } = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const closeDrawer = useCallback(() => {
    dispatch?.({
      type: 'SET_TRACK_LIST_DRAWER',
      payload: false
    })
    console.log('close ... ');
    console.log(isDrawerOpen);
    
    onClose?.();
  }, [dispatch, isDrawerOpen, onClose]);

  const openDrawer = useCallback(() => {
    dispatch?.({
      type: 'SET_TRACK_LIST_DRAWER',
      payload: true
    })
    onOpen?.();
  }, [dispatch, onOpen]);

  const toggleDrawer = useCallback(() => {
    dispatch?.({
      type: 'SET_TRACK_LIST_DRAWER',
      payload: !isDrawerOpen
    })
    if(isDrawerOpen) onOpen?.();
    else onClose?.();
  }, [dispatch, isDrawerOpen, onClose, onOpen])

  return {isOpen: isDrawerOpen, toggleDrawer, closeDrawer, openDrawer};
};
