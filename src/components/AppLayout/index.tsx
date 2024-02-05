import React from "react";
import { AppLayoutProps } from "./AppLayout.types";
import Header from "../Header";

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div style={{ margin: -12 }}>
      <Header />
      {children}
    </div>
  );
};
