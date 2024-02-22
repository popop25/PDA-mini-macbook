import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const FundingProgress = ({
  targetFundingAmount = 10000,
  currentFundingAmount = 5000,
  remainDays = 1,
  customWidth = "w-[400px]",
  customHeight = "h-[200px]",
  customProgressBarWidth = "w-[380px]",
}) => {
  const now = (currentFundingAmount / targetFundingAmount) * 100;
  return (
    <div
      className={`${customWidth} ${customHeight} border-2 rounded-md border-r-gray-300 flex flex-col justify-center items-center`}
    >
      <div
        className={`flex flex-row items-stretch justify-between ${customProgressBarWidth} mb-2`}
      >
        <div>
          현재 {currentFundingAmount}원 / 총 {targetFundingAmount}원
        </div>
        <div>🗓️{remainDays}일 남음</div>
      </div>
      <div className={`${customProgressBarWidth}`}>
        <ProgressBar now={now} label={`${now.toFixed(2)}%`} />
      </div>
    </div>
  );
};

export default FundingProgress;
