import { theme } from "@inteligenciaMedica/assets";
import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        background: theme.token.colorPrimary,
        height: 40,
        margin: 0,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <div style={{ color: "#fff" }}>logo</div>
    </div>
  );
};

export default Header;
