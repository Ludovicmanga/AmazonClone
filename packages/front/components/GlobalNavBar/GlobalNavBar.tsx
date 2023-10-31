import React from "react";
import NavBelt from "../NavBelt/NavBelt";
import MainNavBar from "../MainNavBar/MainNavBar";

type Props = {};

const GlobalNavBar = (props: Props) => {
  return (
    <div>
      <NavBelt />
      <MainNavBar />
    </div>
  );
};

export default GlobalNavBar;
