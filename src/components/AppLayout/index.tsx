import React from "react";
import { AppLayoutProps } from "./AppLayout.types";

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div>{children}</div>
    </div>
  );
};
