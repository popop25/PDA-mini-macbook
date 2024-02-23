import { Card } from "flowbite-react";

import FundingProgress from "./Funding/FundingProgress";

export default function WishList({
  imageUrl,
  brandImageUrl,
  brandName,
  title,
  price,
  totalFunded,
  remainDays,
  renderButton,
  useFundingProgress,
  useButton,
}) {
  return (
    <Card className="max-w-lg">
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "280px" }}>
          {imageUrl && (
            <img src={imageUrl} className="w-full h-auto mb-3" alt="product" />
          )}
          <div
            className={`flex ${useButton ? "flex-col items-center" : ""} mb-3`}
          >
            {brandImageUrl && (
              <img src={brandImageUrl} alt="Brand Logo" className="h-8 w-8" />
            )}
            <h6 className="text-sm text-center font-medium text-gray-700 dark:text-gray-400">
              {brandName}
            </h6>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h5
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            style={{ marginBottom: "5px" }}
          >
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {price} 원
          </p>
          {useFundingProgress && (
            <FundingProgress
              targetFundingAmount={price}
              currentFundingAmount={totalFunded}
              remainDays={remainDays}
            ></FundingProgress>
          )}
          {useButton && (
            <div className=" flex justify-end"> {renderButton()}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
