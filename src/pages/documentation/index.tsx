import MainLayout from "../../components/layouts/MainLayout";
import LeftContainer from "../../components/_organismes/LeftContainer";

const Documentation = () => {
  return (
    <MainLayout>
      <div style={{ display: "flex" }}>
        <LeftContainer />
        <div style={{ padding: 20 }}>
          <h1>Documentation</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default Documentation;
