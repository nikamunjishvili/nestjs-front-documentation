import React from "react";
import { Header } from "../_molecules";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
