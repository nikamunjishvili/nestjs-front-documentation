interface ButtonProps {
  width: number;
  height: number;
  value: string;
  backgroundColor: string;
  rounded: number;
  border: string;
  color: string;
}

const Button = ({
  value,
  width,
  height,
  backgroundColor,
  rounded,
  border,
  color,
}: ButtonProps) => {
  return (
    <button
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: rounded,
        color: color,
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Button;
