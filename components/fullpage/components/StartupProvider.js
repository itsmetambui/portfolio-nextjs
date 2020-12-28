import React, { createContext, useReducer, useContext } from "react";

const StartupContext = createContext();

function startupReducer(state, action) {
  switch (action.type) {
    case "finishLoadHome": {
      return {
        ...state,
        homeLoaded: true,
      };
    }
    case "finishStartup": {
      return {
        ...state,
        startupLoaded: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const StartupProvider = ({ children }) => {
  const [value, dispatch] = useReducer(startupReducer, {
    startupLoaded: false,
    homeLoaded: false,
  });

  return (
    <StartupContext.Provider value={[value, dispatch]}>
      {children}
    </StartupContext.Provider>
  );
};

export const useStartup = () => {
  const context = useContext(StartupContext);
  if (!context) {
    throw new Error(`useStartup must be used within a StartupProvider`);
  }
  return context;
};

export const finishLoadHome = (dispatch) =>
  dispatch({ type: "finishLoadHome" });
export const finishStartup = (dispatch) => dispatch({ type: "finishStartup" });

export default StartupProvider;
