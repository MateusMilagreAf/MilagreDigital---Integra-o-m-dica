import { theme } from "@inteligenciaMedica/assets";
import React from "react";

const Header = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          color: "#fff",
        }}
      >
        <div>Logo</div>
        {/* <div>Conheça</div> */}
      </div>
      {/*   <div style={{ color: "#fff" }}>Conheçã quem já faz parte</div> */}
    </div>
  );
};

export default Header;
