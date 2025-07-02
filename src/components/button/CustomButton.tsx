import { Button } from "antd";

const CustomButton = () => {
  return (
    <Button
      type="primary"
      style={{
        backgroundColor: "#C61F1F",
        borderColor: "#C61F1F",
        padding: "18px 66px",
        borderRadius: "8px",
        fontSize: "16px",
      }}
    >
      Sign in
    </Button>
  );
};

export default CustomButton;
