import React from "react";
import { Sidebar } from "modules";

import "./styles/home.scss";

export const Home: React.FC = React.memo(() => {
  return (
    <>
      <Sidebar />
    </>
  );
});
