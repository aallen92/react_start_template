import React from "react";

function Layout({ children }) {
  return (
    <div>
      <p>I am layout</p>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
