"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

type Props = {
  children: React.ReactNode;
};

const ReduxWrapper = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxWrapper;
