import React from "react";
import { Header } from "../_molecules";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div style={{
      backgroundColor: '#1c1e21'
    }}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
