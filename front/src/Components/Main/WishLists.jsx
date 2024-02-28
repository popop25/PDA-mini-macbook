/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import WishList from "../WishList";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { calculateDDay } from "../../Funding/Main";
export default function WishLists({ wishList, fundings, birthDay }) {
  const navigate = useNavigate();

  // 각 wishList 항목과 연결된 funding 객체의 id를 찾아주는 함수
  function findFunding(wishId) {
    const funding = fundings.find((f) => f.product === wishId);
    return funding;
  }

  // wishList의 각 항목에 대해 renderButton 함수 호출
  return (
    <div className="p-4 overflow-y-auto ml-0 h-94vh max-w-66vw scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="pb-8 text-2xl font-bold ps-8">
        친구 위시리스트
        <span className="text-lg font-medium">
          {" "}
          {`(${wishList?.length || 0})`}
        </span>
      </div>
      <div className="md:px-8">
        {wishList?.length > 0 &&
          wishList.map((item, index) => (
            <div key={index} className="mb-3 ">
              <WishList
                key={index}
                {...item}
                customHeight={"h-[180px]"}
                customWidth={"w-[100%]"}
                customProgressBarWidth={"w-[90%]"}
                remainDays={calculateDDay(birthDay)}
                renderButton={() => (
                  <Button
                    className="w-full py-2 my-3 font-bold text-white transition-colors duration-200 ease-in-out transform bg-green-400 border-none rounded sm:w-32 lg:w-40 hover:bg-green-300"
                    onClick={() => {
                      const fundingId = findFunding(item._id)._id;
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
                funding={findFunding(item._id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
