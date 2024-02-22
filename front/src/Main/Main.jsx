import React from "react";
import FundingProgress from "../Components/Funding/FundingProgress";
import { Progress } from "flowbite-react";
const Main = () => {
  return (
    <div className="h-[100vh]">
      Main
      <h1 className="text-[20px] mt-2">Funding Progress bar 예시</h1>
      <FundingProgress
        targetFundingAmount={2000}
        currentFundingAmount={1500}
        remainDays={3}
        customWidth="w-[300px]"
        customHeight="h-[100px]"
        customProgressBarWidth="w-[280px]"
      />
      <FundingProgress
        targetFundingAmount={21234}
        currentFundingAmount={15003}
        remainDays={1}
        customWidth="w-[300px]"
        customHeight="h-[100px]"
        customProgressBarWidth="w-[280px]"
      />
    </div>
  );
};

export default Main;
