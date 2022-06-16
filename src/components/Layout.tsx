import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-radial row-span-1 grid h-screen w-screen grid-cols-3 gap-x-10">
      {children}
    </div>
  );
};

export default Layout;
