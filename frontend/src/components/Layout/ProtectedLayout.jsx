import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
const ProtectedLayout = async ({ children }) => {
  return (
    <>
      <aside className="">
        <Sidebar />
      </aside>
      <div className="flex-1 overflow-auto">{children}</div>
    </>
  );
};

export default ProtectedLayout;