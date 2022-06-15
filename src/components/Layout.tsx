import React from "react";

const Layout: React.FC = ({ children }) => {
  return <div className="bg-main-img h-screen w-screen p-8">{children}</div>;
};

export default Layout;
