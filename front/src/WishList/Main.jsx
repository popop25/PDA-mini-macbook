import React, { useState, useEffect } from "react";
import WishList from "../Components/WishList";
import { Row, Col } from "react-bootstrap";
import { fetchWishes } from "../Api/WishApi";
import { fetchFundingDetail } from "../Api/Funding";

const userInfo = sessionStorage.getItem("AUTH_USER");
// console.log("유저정보", userInfo);
// console.log(typeof(userInfo))

export default function WishListPage() {
  const [myWishList, setMyWishList] = useState([]);
  const [fundingData, setFundingData] = useState([]);

  const customWidth = "w-[300px]";
  const customHeight = "h-[80px]";
  const customProgressBarWidth = "w-[280px]";
  const birthDayDate = new Date(JSON.parse(userInfo).birthDay);
  // console.log("생일", birthDayDate)

  // 오늘 날짜
  const today = new Date();
  // 생일이 이미 지났다면 내년 생일로 설정
  if (
    birthDayDate.getMonth() < today.getMonth() ||
    (birthDayDate.getMonth() === today.getMonth() &&
      birthDayDate.getDate() < today.getDate())
  ) {
    birthDayDate.setFullYear(today.getFullYear() + 1);
  } else {
    birthDayDate.setFullYear(today.getFullYear());
  }

  // 오늘로부터의 차이 계산
  let remainingDays = Math.floor(
    (birthDayDate - today) / (1000 * 60 * 60 * 24)
  );

  // 생일이 지났다면 내년 생일로 설정
  if (remainingDays < 0) {
    birthDayDate.setFullYear(today.getFullYear() + 1);
    remainingDays = Math.floor((birthDayDate - today) / (1000 * 60 * 60 * 24));
  }

  useEffect(() => {
    async function fetchData() {
      const data1 = await fetchWishes(
        JSON.parse(sessionStorage.getItem("AUTH_USER")).phoneNumber
      ); // user phoneNumber 전달
      console.log("2222222", data1);
      setMyWishList(data1.isWishList);
      setFundingData(data1.fundings);
      // console.log("위시리스트", data1.isWishList)
    }
    fetchData();
  }, []);

  console.log(myWishList);

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-green-100">
      <h2 className="px-5 pt-5 pb-2 text-[20px] text">나의 위시리스트</h2>

      <div className="p-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myWishList.map((myWish, index) => (
            <WishList
              key={index}
              _id={myWish._id}
              imageUrl={myWish.imageUrl}
              brandImageUrl={myWish.brandImageUrl}
              brandName={myWish.brandName}
              title={myWish.title}
              price={myWish.price}
              useFundingProgress="true"
              remainDays={remainingDays}
              customWidth={customWidth}
              customHeight={customHeight}
              customProgressBarWidth={customProgressBarWidth}
              fundingId={fundingData[index]?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
