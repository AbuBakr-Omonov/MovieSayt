import React from "react";
import MainRouter from "./pages";
import { Suspense } from "./utils";

const App = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <Suspense>
          <MainRouter />
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(App);
