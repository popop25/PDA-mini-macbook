/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import WishList from "../WishList";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function WishLists() {
  const navigate = useNavigate();
  useEffect(() => {
    // wishList를 api요청으로 받아온다. 받아온 후 각 wishlist에 현재 받은 금액을 저장한다.
  }, []);
  const remainDays = 3;

  // funding ID 추가..?
  const [wishLists, setwishLists] = useState([
    {
      title: "고디바 다크 초콜릿 케이크",
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240102083150_cea5f5c4354544818ae6ef6f05577aa4.jpeg",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName: "고디바 다크 초콜릿 케이크",
      price: 39000,
      totalFunded: 36000,
      brandName: "고디바",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331040410_e43597dd90ac4aeaa58cd5d311eef6b5",
    },
    {
      title:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240208175222_56f84a3432394905b35fbf329fa68bf1.png",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      price: 38000,
      totalFunded: 28000,
      brandName: "동아제약",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331041048_83560a46d2024106a394f0b64cea64eb",
    },
    {
      title: "고디바 다크 초콜릿 케이크",
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240102083150_cea5f5c4354544818ae6ef6f05577aa4.jpeg",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName: "고디바 다크 초콜릿 케이크",
      price: 39000,
      totalFunded: 12000,
      brandName: "고디바",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331040410_e43597dd90ac4aeaa58cd5d311eef6b5",
    },
    {
      title:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240208175222_56f84a3432394905b35fbf329fa68bf1.png",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      price: 38000,
      totalFunded: 38000,
      brandName: "동아제약",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331041048_83560a46d2024106a394f0b64cea64eb",
    },
    {
      title: "고디바 다크 초콜릿 케이크",
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240102083150_cea5f5c4354544818ae6ef6f05577aa4.jpeg",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName: "고디바 다크 초콜릿 케이크",
      price: 39000,
      totalFunded: 2000,
      brandName: "고디바",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331040410_e43597dd90ac4aeaa58cd5d311eef6b5",
    },
    {
      title:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      imageUrl:
        "https://st.kakaocdn.net/product/gift/product/20240208175222_56f84a3432394905b35fbf329fa68bf1.png",
      productId: "65dabcd77ab394f8f65c348b",
      fundingId: "65db4696ba0cabd8c9cee03b",
      detailName:
        '"독일 명품 비타민" 오쏘몰 이뮨 멀티비타민&미네랄 7입 - Gift Box 증정 (공식수입)',
      price: 38000,
      totalFunded: 12000,
      brandName: "동아제약",
      brandImageUrl:
        "https://st.kakaocdn.net/product/gift/gift_brand/20200331041048_83560a46d2024106a394f0b64cea64eb",
    },
  ]);
  function renderButton(fundingId) {
    return (
      <Button
        className="mt-2 text-myColor-green3 border-myColor-green3 hover:border-myColor-green2 hover:bg-white hover:text-myColor-green2 ms-auto"
        onClick={() => {
          navigate(`/funding/${fundingId}`);
        }}
      >
        펀딩하기
      </Button>
    );
  }
  return (
    <div className="p-4 overflow-y-auto border border-gray-300 h-94vh max-w-66vw scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <div className="pb-8 text-2xl font-bold ps-8">친구 위시리스트</div>
      <div className="px-8 min-w-96">
        {wishLists.map((wishList, index) => (
          <WishList
            key={index}
            {...wishList}
            renderButton={() => renderButton(wishList.fundingId)}
            useFundingProgress={true}
            useButton={true}
            imgWidth={"600px"}
          />
        ))}
      </div>
    </div>
  );
}
