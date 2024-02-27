/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import WishList from "../WishList";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { calculateDDay } from "../../Funding/Main";
export default function WishLists({ wishList, fundings, birthDay }) {
  const navigate = useNavigate();

  // 각 wishList 항목과 연결된 funding 객체의 id를 찾아주는 함수
  function findFundingId(wishId) {
    const funding = fundings.find((f) => f.product === wishId);
    return funding ? funding._id : null;
  }

  // wishList의 각 항목에 대해 renderButton 함수 호출
  return (
    <div className="p-4 overflow-y-auto h-94vh max-w-66vw scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="pb-8 text-2xl font-bold ps-8">
        친구 위시리스트
        <span className="text-lg font-medium">
          {" "}
          {`(${wishList?.length || 0})`}
        </span>
      </div>
      <div className="px-8 min-w-96">
        {wishList?.length > 0 &&
          wishList.map((item, index) => (
            <WishList
              key={index}
              {...item}
              customHeight={"h-[180px]"}
              remainDays={calculateDDay(birthDay)}
              renderButton={() => (
                <Button
                  className="w-full py-2 mt-3 font-bold text-white transition-colors duration-200 ease-in-out transform bg-green-400 border-none rounded shadow-lg sm:w-32 lg:w-40 hover:bg-green-300 hover:shadow-xl"
                  onClick={() => {
                    const fundingId = findFundingId(item._id);
                    if (fundingId) {
                      navigate(`/funding/${fundingId}`);
                    } else {
                      alert("해당 펀딩이 없습니다.");
                    }
                  }}
                >
                  펀딩하기
                </Button>
              )}
              useFundingProgress={true}
              useButton={true}
              imgWidth={"600px"}
              totalFunded={1}
            />
          ))}
      </div>
    </div>
  );
}
