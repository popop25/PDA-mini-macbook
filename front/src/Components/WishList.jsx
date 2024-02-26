import { Card } from "flowbite-react";

import FundingProgress from "./Funding/FundingProgress";
import { useNavigate } from "react-router";

export default function WishList({
  _id,
  productId,
  imageUrl,
  brandImageUrl,
  brandName,
  title,
  price,
  totalFunded, // api로 펀딩정보 받아와 직접 계산해야한다
  remainDays,
  customWidth,
  customHeight,
  customProgressBarWidth,
  renderButton, // 후원하기 버튼 생성함수
  useFundingProgress, // 펀딩 프로세스를 쓸것인가 - 메인화면용
  useButton, // 버튼을 사용할 것인가 - 메인화면용
  imgWidth, // 이미지 크기
}) {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`/product/${_id}`);
  }

  function handleButtonClick(e) {
    // Handle button click here
    // Stop the event propagation to prevent triggering the card click
    e.stopPropagation();
  }
  return (
    <Card
      className={
        imgWidth
          ? "hover:shadow-lg hover:transform hover:scale-[1.01] duration-300 hover:cursor-pointer"
          : "max-w-lg"
      }
      onClick={handleCardClick}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "280px",
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              className="w-full h-auto mb-3"
              style={{ width: imgWidth ? imgWidth : "" }}
              alt="product"
            />
          )}
          <div className="flex items-center mb-3 hover:bg-gray-200">
            {brandImageUrl && (
              <img
                src={brandImageUrl}
                alt="Brand Logo"
                className="w-8 h-8 mr-2"
              />
            )}
            <h6 className="text-sm font-medium text-center text-gray-700 dark:text-gray-400">
              {brandName}
            </h6>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h5
            className={`${
              useButton ? "w-[400px]" : "w-[300px]"
            } text-xl font-bold tracking-tight text-gray-900 dark:text-white`}
            style={{ marginBottom: "5px", fontSize: "1rem" }}
          >
            {title}
          </h5>
          <p className="px-1 py-2 font-bold text-gray-700 dark:text-gray-400" style={{ fontSize: "0.875rem" }}>
            {parseInt(price).toLocaleString()} 원
          </p>
          {useFundingProgress && (
            <FundingProgress
              targetFundingAmount={price}
              currentFundingAmount={totalFunded}
              remainDays={remainDays}
              customWidth={customWidth}
              customHeight={customHeight}
              customProgressBarWidth={customProgressBarWidth}
            ></FundingProgress>
          )}
          {useButton && (
            <div className="flex justify-end " onClick={handleButtonClick}>
              {renderButton()}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
