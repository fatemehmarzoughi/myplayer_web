import React from "react";
import { Provider } from "react-redux";

import { Home } from "./modules/Home";
import store from "./redux/store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
