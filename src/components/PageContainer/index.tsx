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
        minHeight: "100vh - 2000px",
        background: theme.token.colorPrimary,
        contain: "content",
        paddingBottom: 100,
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
