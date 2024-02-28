/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Card } from "react-bootstrap";
export default function User({ friend, setPhoneNumber }) {
  const month = friend.birthDay.slice(5, 7); // 생년월일에서 월 추출
  const day = friend.birthDay.slice(8, 10); // 생년월일에서 일 추출

  return (
    <Card
      onClick={() => {
        setPhoneNumber(friend.phoneNumber);
      }}
      className="md:gap-8 border border-gray-300 hover:bg-gray-100 hover:cursor-pointer md:flex-row flex-col items-center py-2"
    >
      <img
        className="w-0 h-0 md:w-12 md:h-12 object-cover rounded-full md:ms-8"
        src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
        alt="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
      />
      <span className="me-8">
        <Card.Text className="text-xl">{friend.nickName}</Card.Text>
        <Card.Text className="text-lg text-slate-500">
          {month}월 {day}일
        </Card.Text>
      </span>
    </Card>
  );
}
