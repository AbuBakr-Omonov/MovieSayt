import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
    const  navigate = useNavigate()
  return (
    <>
      <div className=" container flex justify-end">
        <button
          onClick={() => navigate("/movies")}
          className="flex gap-2 items-center justify-end cursor-pointer"
        >
          View more
          <RightOutlined />
        </button>
      </div>
    </>
  );
};

export default React.memo(View);
