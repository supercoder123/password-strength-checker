import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import { reducer } from "../../reducer";
import { InitialState } from "../../reducer/types";

const initialState: InitialState = {
  value: "",
  passwordStrength: "Weak",
  percent: 0,
  touched: false,
  criteria: {
    sixChars: false,
    specialChar: false,
    uppercaseChar: false,
    greaterThan20Chars: false,
  },
};

const PasswordContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
}>({ state: initialState, dispatch: () => {} });

export function PasswordContextProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PasswordContext.Provider value={{ state, dispatch }}>
      {children}
    </PasswordContext.Provider>
  );
}

export const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
};
