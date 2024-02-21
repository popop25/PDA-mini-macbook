import React from "react";
import { Progress } from "flowbite-react";

const FundingProgress = ({
  targetFundingAmount = 10000,
  currentFundingAmount = 5000,
  remainDays = 1,
  customWidth = 400,
  customHeight = 300,
  customColor = "#F5E8DD",
}) => {
  const test = "#F5E8DD";
  return (
    <div
      className={`w-[400px] h-[100px] bg-[${customColor}] flex flex-col justify-center items-center`}
    >
      <div className="flex flex-row items-stretch justify-between w-[380px] mb-2">
        <div>
          현재 {currentFundingAmount}원 / 총 {targetFundingAmount}원
        </div>
        <div>🗓️{remainDays}일 남음</div>
      </div>
      <Progress
        progress={(currentFundingAmount / targetFundingAmount) * 100}
        progressLabelPosition="inside"
        size="lg"
        color="dark"
        labelProgress
        className="text-white w-[380px]"
      />
    </div>
  );
};

export default FundingProgress;
