import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="46"
        visible={true}
      />
    </div>
  );
};

export default Loader;
