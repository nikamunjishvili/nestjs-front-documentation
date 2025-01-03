import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import LeftContainer from "../../components/_organismes/LeftContainer";
import MainContent from "../../components/containers/MainContent";

const Documentation: React.FC = () => {
  return (
    <MainLayout>
      <div style={{ display: "flex", height: "100vh", marginTop: "10vh" }}>
        <div
          style={{
            position: "fixed",
            maxWidth: 250,
            width: "100%",
          }}
        >
          <LeftContainer />
        </div>
        <MainContent />
      </div>
    </MainLayout>
  );
};

export default Documentation;
