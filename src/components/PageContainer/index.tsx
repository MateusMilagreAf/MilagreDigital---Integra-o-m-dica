import { theme } from "@inteligenciaMedica/assets";
import React, { ReactNode } from "react";

// import { Container } from './styles';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: theme.token.colorPrimary,
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
