import { IContextType } from "core";

export type TrackListActions =
  | "SET_TRACK_LIST_DRAWER"

export type IAction<T> = {
  type: TrackListActions;
  payload?: T;
};

export function trackListReducer (state: IContextType, action: IAction<boolean>) {
  switch (action?.type) {
    case "SET_TRACK_LIST_DRAWER":
      return ({
        ...state,
        isDrawerOpen: action.payload ?? false
      });

    default:
      return ({ ...state });
  }
};