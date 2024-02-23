import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FundingProgress from "../Components/Funding/FundingProgress";
import FundingProfile from "../Components/Funding/FundingProfile";
import ModalComp from "../Components/Common/Modal";
import axios from "axios";

const Funding = () => {
  const { fundingId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3001/api/funding";
      const response = await axios.post(url);
      console.log(response);
    };
    fetchData();
  }, []);
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
        {/* <button className="w-[80%] bg-myColor-green3 text-white mt-4 h-[50px] rounded-lg">
          펀딩하기
        </button> */}
        <div className="w-[90%] max-w-[700px] mt-3">
          <ModalComp />
        </div>
        <div className="flex flex-row flex-wrap w-[100%] justify-center mt-4">
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <div key={value} className="w-[30%] h-[200px] m-1 ">
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
