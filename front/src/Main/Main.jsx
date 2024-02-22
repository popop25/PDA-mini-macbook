import React from "react";
import FundingProgress from "../Components/Funding/FundingProgress";
import { Progress } from "flowbite-react";
const Main = () => {
  return (
    <div className="h-[100vh]">
      Main
      <FundingProgress
        customColor="#F5E8DD"
        customWidth="w-[300px]"
        customHeight="h-[200px]"
        customProgressBarWidth="w-[280px]"
      />
    </div>
  );
};

export default Main;
