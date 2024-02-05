import React from "react";
import { AppLayoutProps } from "./AppLayout.types";

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
