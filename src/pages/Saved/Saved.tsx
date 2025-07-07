import React, { useEffect } from "react";

const Saved = () => {
  useEffect(() => window.scrollTo(0, 0));
  return <div className="min-h-[300px]">Saved</div>;
};

export default React.memo(Saved);
