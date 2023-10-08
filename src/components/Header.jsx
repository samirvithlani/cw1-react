//function based and class based components --> 16.
//function , arrow functio

import React from "react";

export const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
    position: "relative",
    height: "100px",
    width: "100%",
    background: "#9ACBF3",
  };
  return (
    <div>
      <div style={headerStyle}>
        <h1>HEADER COMPONENT</h1>
      </div>
    </div>
  );
};
