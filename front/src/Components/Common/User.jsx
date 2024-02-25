import React from "react";
import { Card } from "react-bootstrap";
export default function User({ friend }) {
  const month = friend.birthDay.slice(3, 4); // 생년월일에서 월 추출
  const day = friend.birthDay.slice(4); // 생년월일에서 일 추출

  return (
    <Card className="flex-row items-center gap-4 py-2 border-none hover:bg-gray-100 hover:cursor-pointer">
      {/* <img
        className="object-cover w-12 h-12 rounded-full ms-8"
        src={friend.profileImg}
        alt=""
      /> */}
      <span className="me-8">
        <Card.Text className="text-xl">{friend.nickName}</Card.Text>
        <Card.Text className="text-lg text-slate-500">
          {month}월 {day}일
        </Card.Text>
      </span>
    </Card>
  );
}
