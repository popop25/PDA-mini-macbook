import React from "react";
import { useParams } from "react-router-dom";
import FundingProgress from "../Components/Funding/FundingProgress";
import FundingProfile from "../Components/Funding/FundingProfile";

const Funding = () => {
  const { fundingId } = useParams();
  const nickName = "정정정";
  const title = "교촌치킨 허니콤보";
  const imageUrl =
    "https://i.namu.wiki/i/UIwyVNxsFF7wq_RQTHPswOnGWMiAecEQn7-UWUFQZT3DDjJ_nKWgESBmH2qD5kT1wus_DsTRlSzS_LIqhMW97-cf7jZUdGUsvI2BjrRNyxpFrKUEqNh5mqAmR0ygZ2HtEkOvy3KmvOfKXLMyQyocxQ.webp";
  return (
    <div className="flex flex-col items-center">
      <div className="w-[90vw] max-w-[700px] flex flex-col items-center">
        <div className="text-[40px] mt-2 font-semibold text-center">
          <div>
            <a className="font-extrabold ">{nickName}</a>님의
          </div>
          생일을 축하해주세요!
        </div>
        <img src={imageUrl} width={500} />
        <div className="w-[80%] text-[20px] font-bold">{title}</div>
        <div className="bg-[#f5f7fb] w-[80%] flex justify-center rounded-lg">
          <FundingProgress customHeight="h-[84px]" />
        </div>
        <button className="w-[80%] bg-myColor-green3 text-white mt-4 h-[50px] rounded-lg">
          펀딩하기
        </button>
        <div className="flex flex-row w-[100%] mt-4 ">
          {[1, 2, 3].map((value) => {
            return (
              <div className="w-[100%]" key={value}>
                <FundingProfile />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Funding;
