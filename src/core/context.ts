import { IAction } from "modules";
import { createContext } from "react";

export type IContextType = {
    isDrawerOpen: boolean;
}

export const initialContext = {
    isDrawerOpen: true,
}

export const Context = createContext<IContextType>(initialContext);
export const DispatchContext = createContext<React.Dispatch<IAction<any>> | null>(null);