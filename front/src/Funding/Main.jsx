import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FundingProgress from "../Components/Funding/FundingProgress";
import FundingProfile from "../Components/Funding/FundingProfile";
import ModalComp from "../Components/Common/Modal";
import axios from "axios";
import { fetchFundingDetail, fetchFundingPost } from "../Api/Funding";
import { userInfoState } from "../stores/auth";
import { useRecoilState } from "recoil";

const Funding = () => {
  const { fundingId } = useParams();
  const [fundingDetail, setFundingDetail] = useState([]);
  const [productDetail, setProductDetail] = useState();
  const [userDetail, setUserDetail] = useState();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFundingDetail(fundingId);
      console.log(response[0]);
      setFundingDetail(response[0].transaction);
      setProductDetail(response[0].product);
      setUserDetail(response[0].user);
    };
    fetchData();
  }, []);
  // const currentFundingAmount = fundingDetail.length === 0 ? 0 : 3;
  const currentFundingAmount = fundingDetail.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  return (
    <div className="flex flex-col items-center">
      <div className="w-[90vw] max-w-[700px] flex flex-col items-center">
        <div className="text-[40px] mt-2 font-semibold text-center">
          <div>
            <a className="font-extrabold ">{userDetail?.nickName}</a>님의
          </div>
          생일을 축하해주세요!
        </div>
        {productDetail?.title}
        <img src={productDetail?.detailImageUrl} width={500} />
        <div className="w-[80%] text-[20px] font-bold">
          {productDetail?.title}
        </div>
        <div className="bg-[#f5f7fb] w-[80%] flex justify-center rounded-lg">
          <FundingProgress
            customHeight="h-[84px]"
            targetFundingAmount={productDetail?.price}
            currentFundingAmount={currentFundingAmount}
          />
        </div>
        {/* <button className="w-[80%] bg-myColor-green3 text-white mt-4 h-[50px] rounded-lg">
          펀딩하기
        </button> */}
        <div className="w-[90%] max-w-[700px] mt-3">
          <ModalComp
            fundingId={fundingId}
            productDetail={productDetail}
            userDetail={userDetail}
          />
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
