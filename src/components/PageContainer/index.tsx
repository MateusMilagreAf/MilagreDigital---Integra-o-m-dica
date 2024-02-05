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
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100%",
        paddingBottom: 100,
        background: theme.token.colorPrimary,
        contain: "content",
        marginLeft: 5,
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
