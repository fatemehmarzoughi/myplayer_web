import { Provider } from "react-redux";
import React, { useReducer } from "react";
import { Home, TrackList, trackListReducer } from "modules";
import { Context, DispatchContext, initialContext, store } from "core";

import "./utils/variables.scss";

export const App: React.FC = () => {
  const [contexts, dispatch] = useReducer(trackListReducer, initialContext);

  return (
    <Provider store={store}>
      <Context.Provider value={contexts}>
        <DispatchContext.Provider value={dispatch}>
          {/* <Home /> */}
          <TrackList />
        </DispatchContext.Provider>
      </Context.Provider>
    </Provider>
  );
};
